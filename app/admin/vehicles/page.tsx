import { AdminVehiclesClient } from "@/components/admin/AdminVehiclesClient";
import { listAllVehiclesAdmin } from "@/lib/vehicles/queries";

export const dynamic = "force-dynamic";

export default async function AdminVehiclesPage() {
    const vehicles = await listAllVehiclesAdmin();

    return <AdminVehiclesClient vehicles={vehicles} />;
}
