import type { VehicleRow } from "@/lib/supabase/database.types";
import type { Vehicle, VehicleCategory } from "./types";

export function rowToVehicle(row: VehicleRow): Vehicle {
    return {
        id: row.id,
        category: row.category as VehicleCategory,
        title: row.title,
        year: row.year,
        price: row.price,
        mileage: row.mileage,
        engine: row.engine,
        fuel: row.fuel,
        transmission: row.transmission,
        description: row.description,
        sold: row.sold,
        featured: row.featured,
        sort_order: row.sort_order,
        image_urls: row.image_urls ?? [],
        cloudinary_public_ids: row.cloudinary_public_ids ?? [],
    };
}

export function sortVehicles(vehicles: Vehicle[]): Vehicle[] {
    return [...vehicles].sort((a, b) => {
        if (a.sold !== b.sold) return a.sold ? 1 : -1;
        if (a.sort_order !== b.sort_order) return a.sort_order - b.sort_order;
        return a.title.localeCompare(b.title, "it");
    });
}
