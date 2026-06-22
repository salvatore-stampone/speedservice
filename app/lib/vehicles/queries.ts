import { createSupabaseAdminClient, createSupabasePublicClient } from "@/lib/supabase/client";
import type { VehicleRow } from "@/lib/supabase/database.types";
import type { StaticImageData } from "next/image";
import cars from "@/lib/data/vehicles/cars";
import motorcycles from "@/lib/data/vehicles/motorcycles";
import vans from "@/lib/data/vehicles/vans";
import type { Vehicle as LegacyVehicle } from "@/lib/data/vehicles/types";
import { rowToVehicle, sortVehicles } from "./mappers";
import type { Vehicle, VehicleCategory } from "./types";

const staticByCategory: Record<VehicleCategory, LegacyVehicle[]> = {
    cars,
    motorcycles,
    vans,
};

function legacyImageSrc(image: StaticImageData | string): string {
    return typeof image === "string" ? image : image.src;
}

function legacyToVehicle(
    vehicle: LegacyVehicle,
    category: VehicleCategory
): Vehicle {
    return {
        id: `${category}-${vehicle.id}`,
        category,
        title: vehicle.title,
        year: vehicle.year,
        price: vehicle.price,
        mileage: vehicle.mileage,
        engine: vehicle.engine ?? null,
        fuel: vehicle.fuel,
        transmission: vehicle.transmission,
        description: vehicle.description,
        sold: vehicle.sold ?? false,
        featured: false,
        sort_order: vehicle.id,
        image_urls: vehicle.images.map(legacyImageSrc),
        cloudinary_public_ids: [],
    };
}

function getStaticFallback(category: VehicleCategory): Vehicle[] {
    return sortVehicles(
        staticByCategory[category].map((vehicle) =>
            legacyToVehicle(vehicle, category)
        )
    );
}

async function fetchRows(category?: VehicleCategory): Promise<VehicleRow[]> {
    const supabase = createSupabasePublicClient();
    let query = supabase.from("vehicles").select("*");

    if (category) {
        query = query.eq("category", category);
    }

    const { data, error } = await query.order("sort_order", {
        ascending: true,
    });

    if (error) {
        throw error;
    }

    return data ?? [];
}

export async function getVehiclesByCategory(
    category: VehicleCategory
): Promise<Vehicle[]> {
    try {
        const rows = await fetchRows(category);
        if (!rows.length) {
            return getStaticFallback(category);
        }
        return sortVehicles(rows.map(rowToVehicle));
    } catch {
        return getStaticFallback(category);
    }
}

export async function getFeaturedVehicles(): Promise<Vehicle[]> {
    try {
        const rows = await fetchRows();
        if (!rows.length) {
            return [
                getStaticFallback("cars")[0],
                getStaticFallback("motorcycles")[0],
                getStaticFallback("vans")[0],
            ].filter(Boolean);
        }

        const vehicles = sortVehicles(rows.map(rowToVehicle));
        const featured = vehicles.filter((vehicle) => vehicle.featured);

        if (featured.length >= 3) {
            return featured.slice(0, 3);
        }

        const picked: Vehicle[] = [...featured];
        for (const category of ["cars", "motorcycles", "vans"] as const) {
            if (picked.length >= 3) break;
            const candidate = vehicles.find(
                (vehicle) =>
                    vehicle.category === category &&
                    !picked.some((item) => item.id === vehicle.id)
            );
            if (candidate) picked.push(candidate);
        }

        return picked;
    } catch {
        return [
            getStaticFallback("cars")[0],
            getStaticFallback("motorcycles")[0],
            getStaticFallback("vans")[0],
        ].filter(Boolean);
    }
}

export async function getVehicleById(id: string): Promise<Vehicle | null> {
    try {
        const supabase = createSupabaseAdminClient();
        const { data, error } = await supabase
            .from("vehicles")
            .select("*")
            .eq("id", id)
            .maybeSingle();

        if (error) throw error;
        return data ? rowToVehicle(data) : null;
    } catch {
        return null;
    }
}

export async function listAllVehiclesAdmin(): Promise<Vehicle[]> {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
        .from("vehicles")
        .select("*")
        .order("category", { ascending: true })
        .order("sort_order", { ascending: true });

    if (error) throw error;
    return sortVehicles((data ?? []).map(rowToVehicle));
}
