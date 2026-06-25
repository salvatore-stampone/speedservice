import { revalidatePath } from "next/cache";

const PUBLIC_VEHICLE_PATHS = [
    "/vehicles",
    "/vehicles/cars",
    "/vehicles/motorcycles",
    "/vehicles/vans",
] as const;

export function revalidateVehiclePages() {
    for (const path of PUBLIC_VEHICLE_PATHS) {
        revalidatePath(path);
    }
}
