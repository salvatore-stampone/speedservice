import { VehicleForm } from "@/components/admin/VehicleForm";
import { getVehicleById } from "@/lib/vehicles/queries";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type EditVehiclePageProps = {
    params: Promise<{ id: string }>;
};

export default async function EditVehiclePage({ params }: EditVehiclePageProps) {
    const { id } = await params;
    const vehicle = await getVehicleById(id);

    if (!vehicle) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-4xl px-4 py-8">
            <div className="mb-6">
                <Link
                    href="/admin/vehicles"
                    className="text-primary text-sm hover:underline"
                >
                    ← Torna alla lista
                </Link>
                <h1 className="mt-2 text-3xl font-bold">Modifica veicolo</h1>
            </div>
            <VehicleForm
                mode="edit"
                vehicleId={vehicle.id}
                initialData={{
                    category: vehicle.category,
                    title: vehicle.title,
                    year: vehicle.year,
                    price: vehicle.price,
                    mileage: vehicle.mileage,
                    engine: vehicle.engine ?? "",
                    fuel: vehicle.fuel,
                    transmission: vehicle.transmission,
                    description: vehicle.description,
                    sold: vehicle.sold,
                    featured: vehicle.featured,
                    sort_order: vehicle.sort_order,
                    image_urls: vehicle.image_urls,
                    cloudinary_public_ids: vehicle.cloudinary_public_ids,
                }}
            />
        </div>
    );
}
