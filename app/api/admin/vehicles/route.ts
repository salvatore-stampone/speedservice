import { isAdminAuthenticated } from "@/lib/auth/admin";
import { createSupabaseAdminClient } from "@/lib/supabase/client";
import { rowToVehicle } from "@/lib/vehicles/mappers";
import { revalidateVehiclePages } from "@/lib/vehicles/revalidate";
import type { VehicleFormData } from "@/lib/vehicles/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
    }

    const body = (await request.json()) as VehicleFormData;
    const supabase = createSupabaseAdminClient();

    const { data, error } = await supabase
        .from("vehicles")
        .insert({
            category: body.category,
            title: body.title,
            year: body.year,
            price: body.price,
            mileage: body.mileage,
            engine: body.engine || null,
            fuel: body.fuel,
            transmission: body.transmission,
            description: body.description,
            sold: body.sold,
            featured: body.featured,
            sort_order: body.sort_order,
            image_urls: body.image_urls,
            cloudinary_public_ids: body.cloudinary_public_ids,
        })
        .select("*")
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    revalidateVehiclePages();

    return NextResponse.json({ vehicle: rowToVehicle(data) }, { status: 201 });
}

export async function GET() {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
    }

    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
        .from("vehicles")
        .select("*")
        .order("category")
        .order("sort_order");

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
        vehicles: (data ?? []).map(rowToVehicle),
    });
}
