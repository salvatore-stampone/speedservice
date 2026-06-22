import "dotenv/config";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { v2 as cloudinary } from "cloudinary";
import { createClient } from "@supabase/supabase-js";
import sharp from "sharp";

type VehicleCategory = "cars" | "motorcycles" | "vans";

type ParsedVehicle = {
    legacyId: number;
    title: string;
    year: number;
    price: number;
    mileage: number;
    engine?: string;
    fuel: string;
    transmission: string;
    description: string;
    sold: boolean;
    imagePaths: string[];
};

const categories: VehicleCategory[] = ["cars", "motorcycles", "vans"];

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function parseImportMap(source: string) {
    const importMap = new Map<string, string>();
    const importRegex = /import\s+(\w+)\s+from\s+"public\/images\/([^"]+)"/g;

    for (const match of source.matchAll(importRegex)) {
        importMap.set(match[1], join(process.cwd(), "public/images", match[2]));
    }

    return importMap;
}

function parseVehicleBlock(block: string, importMap: Map<string, string>) {
    const legacyId = Number(block.match(/id:\s*(\d+)/)?.[1]);
    const title = block.match(/title:\s*"([^"]*)"/)?.[1];
    const year = Number(block.match(/year:\s*(\d+)/)?.[1]);
    const price = Number(block.match(/price:\s*(\d+)/)?.[1]);
    const mileage = Number(block.match(/mileage:\s*(\d+)/)?.[1]);
    const engine = block.match(/engine:\s*"([^"]*)"/)?.[1];
    const fuel = block.match(/fuel:\s*"([^"]*)"/)?.[1];
    const transmission = block.match(/transmission:\s*"([^"]*)"/)?.[1];
    const description = block.match(
        /description:\s*"((?:\\.|[^"\\])*)"/
    )?.[1];
    const imagesBlock = block.match(/images:\s*\[([\s\S]*?)\]/)?.[1];

    if (
        !legacyId ||
        !title ||
        !year ||
        !price ||
        !mileage ||
        !fuel ||
        !transmission ||
        !description ||
        !imagesBlock
    ) {
        return null;
    }

    const imagePaths = imagesBlock
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean)
        .map((varName) => importMap.get(varName))
        .filter((path): path is string => Boolean(path));

    return {
        legacyId,
        title,
        year,
        price,
        mileage,
        engine: engine || undefined,
        fuel,
        transmission,
        description,
        sold: /sold:\s*true/.test(block),
        imagePaths,
    } satisfies ParsedVehicle;
}

function parseVehicles(source: string, importMap: Map<string, string>) {
    const arrayMatch = source.match(
        /:\s*Vehicle\[\]\s*=\s*\[([\s\S]*)\];\s*\n\s*export/
    );

    if (!arrayMatch) return [];

    return arrayMatch[1]
        .split(/\n    \},?\n/)
        .map((block) => block.trim())
        .filter(Boolean)
        .map((block) => {
            const normalized = block.startsWith("{") ? block : `{${block}`;
            return parseVehicleBlock(
                normalized.endsWith("}") ? normalized : `${normalized}}`,
                importMap
            );
        })
        .filter((vehicle): vehicle is NonNullable<typeof vehicle> => Boolean(vehicle));
}

async function uploadImage(filePath: string, folder: string) {
    const compressed = await sharp(filePath)
        .rotate()
        .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
        .jpeg({ quality: 85, mozjpeg: true })
        .toBuffer();

    const result = await new Promise<{ secure_url: string; public_id: string }>(
        (resolve, reject) => {
            const upload = cloudinary.uploader.upload_stream(
                { folder, resource_type: "image" },
                (error, uploadResult) => {
                    if (error || !uploadResult) {
                        reject(error ?? new Error(`Upload fallito per ${filePath}`));
                        return;
                    }

                    resolve({
                        secure_url: uploadResult.secure_url,
                        public_id: uploadResult.public_id,
                    });
                }
            );

            upload.end(compressed);
        }
    );

    return result;
}

async function migrateCategory(category: VehicleCategory) {
    const filePath = join(
        process.cwd(),
        `app/lib/data/vehicles/${category}/index.ts`
    );
    const source = readFileSync(filePath, "utf8");
    const importMap = parseImportMap(source);
    const vehicles = parseVehicles(source, importMap);

    console.log(`\n${category}: ${vehicles.length} veicoli trovati`);

    for (const vehicle of vehicles) {
        const folder = `speedservice/vehicles/${category}/${vehicle.legacyId}`;
        const imageUrls: string[] = [];
        const publicIds: string[] = [];

        console.log(`→ ${vehicle.title}`);

        for (const imagePath of vehicle.imagePaths) {
            const uploaded = await uploadImage(imagePath, folder);
            imageUrls.push(uploaded.secure_url);
            publicIds.push(uploaded.public_id);
        }

        const { error } = await supabase.from("vehicles").insert({
            category,
            title: vehicle.title,
            year: vehicle.year,
            price: vehicle.price,
            mileage: vehicle.mileage,
            engine: vehicle.engine ?? null,
            fuel: vehicle.fuel,
            transmission: vehicle.transmission,
            description: vehicle.description,
            sold: vehicle.sold,
            featured: false,
            sort_order: vehicle.legacyId,
            image_urls: imageUrls,
            cloudinary_public_ids: publicIds,
        });

        if (error) {
            throw new Error(`${vehicle.title}: ${error.message}`);
        }
    }
}

async function main() {
    const required = [
        "NEXT_PUBLIC_SUPABASE_URL",
        "SUPABASE_SERVICE_ROLE_KEY",
        "CLOUDINARY_CLOUD_NAME",
        "CLOUDINARY_API_KEY",
        "CLOUDINARY_API_SECRET",
    ];

    for (const key of required) {
        if (!process.env[key]) {
            throw new Error(`Variabile mancante: ${key}`);
        }
    }

    const { count } = await supabase
        .from("vehicles")
        .select("*", { count: "exact", head: true });

    if (count && count > 0) {
        console.log(
            `La tabella contiene già ${count} veicoli. Migrazione annullata.`
        );
        return;
    }

    for (const category of categories) {
        await migrateCategory(category);
    }

    console.log("\nMigrazione completata.");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
