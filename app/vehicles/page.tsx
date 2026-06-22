import { ImageModal } from "@/components/ImageModal";
import VehiclesLogoSection from "@/components/vehicles/sections/VehiclesLogoSection";
import { VehicleListingClient } from "@/components/vehicles/VehicleListingClient";
import { getFeaturedVehicles } from "@/lib/vehicles/queries";

export default async function VehiclesPage() {
    const featuredVehicles = await getFeaturedVehicles();

    return (
        <div className="space-y-6 sm:space-y-8">
            <VehiclesLogoSection />

            <div className="text-center">
                <h2 className="text-foreground mb-2 text-xl font-bold sm:text-2xl lg:text-3xl">
                    In primo piano
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                    Scopri i nostri veicoli in evidenza
                </p>
            </div>

            <VehicleListingClient vehicles={featuredVehicles} />
        </div>
    );
}
