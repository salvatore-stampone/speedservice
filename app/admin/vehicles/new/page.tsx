import { VehicleForm } from "@/components/admin/VehicleForm";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NewVehiclePage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-8">
            <div className="mb-6">
                <Link
                    href="/admin/vehicles"
                    className="text-primary text-sm hover:underline"
                >
                    ← Torna alla lista
                </Link>
                <h1 className="mt-2 text-3xl font-bold">Nuovo veicolo</h1>
            </div>
            <VehicleForm mode="create" />
        </div>
    );
}
