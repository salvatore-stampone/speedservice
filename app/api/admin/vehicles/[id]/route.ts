import { isAdminAuthenticated } from "@/lib/auth/admin";
import { deleteCloudinaryImages } from "@/lib/cloudinary";
import type { VehicleUpdate } from "@/lib/supabase/database.types";
import { createSupabaseAdminClient } from "@/lib/supabase/client";
import { rowToVehicle } from "@/lib/vehicles/mappers";
import type { VehicleFormData } from "@/lib/vehicles/types";
import { NextResponse } from "next/server";

type RouteContext = {
    params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
    }

    const { id } = await context.params;
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
        .from("vehicles")
        .select("*")
        .eq("id", id)
        .maybeSingle();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
        return NextResponse.json({ error: "Veicolo non trovato" }, { status: 404 });
    }

    return NextResponse.json({ vehicle: rowToVehicle(data) });
}

export async function PUT(request: Request, context: RouteContext) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
    }

    const { id } = await context.params;
    const body = (await request.json()) as VehicleFormData;
    const supabase = createSupabaseAdminClient();

    const { data: existing, error: existingError } = await supabase
        .from("vehicles")
        .select("cloudinary_public_ids")
        .eq("id", id)
        .maybeSingle();

    if (existingError) {
        return NextResponse.json({ error: existingError.message }, { status: 500 });
    }

    if (!existing) {
        return NextResponse.json({ error: "Veicolo non trovato" }, { status: 404 });
    }

    const removedIds = (existing.cloudinary_public_ids ?? []).filter(
        (publicId) => !body.cloudinary_public_ids.includes(publicId)
    );

    if (removedIds.length) {
        await deleteCloudinaryImages(removedIds);
    }

    const { data, error } = await supabase
        .from("vehicles")
        .update({
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
        .eq("id", id)
        .select("*")
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ vehicle: rowToVehicle(data) });
}

export async function DELETE(_request: Request, context: RouteContext) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
    }

    const { id } = await context.params;
    const supabase = createSupabaseAdminClient();

    const { data: existing, error: existingError } = await supabase
        .from("vehicles")
        .select("cloudinary_public_ids")
        .eq("id", id)
        .maybeSingle();

    if (existingError) {
        return NextResponse.json({ error: existingError.message }, { status: 500 });
    }

    if (!existing) {
        return NextResponse.json({ error: "Veicolo non trovato" }, { status: 404 });
    }

    if (existing.cloudinary_public_ids?.length) {
        await deleteCloudinaryImages(existing.cloudinary_public_ids);
    }

    const { error } = await supabase.from("vehicles").delete().eq("id", id);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
}

export async function PATCH(request: Request, context: RouteContext) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
    }

    const { id } = await context.params;
    const body = await request.json();
    const supabase = createSupabaseAdminClient();

    const updates: VehicleUpdate = {};
    if (typeof body.sold === "boolean") updates.sold = body.sold;
    if (typeof body.featured === "boolean") updates.featured = body.featured;

    const { data, error } = await supabase
        .from("vehicles")
        .update(updates)
        .eq("id", id)
        .select("*")
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ vehicle: rowToVehicle(data) });
}
