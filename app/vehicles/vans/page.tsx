import { VehicleListingClient } from "@/components/vehicles/VehicleListingClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getVehiclesByCategory } from "@/lib/vehicles/queries";
import { Phone, Truck } from "lucide-react";
import Link from "next/link";

export default async function VansPage() {
    const vans = await getVehiclesByCategory("vans");

    return (
        <div className="space-y-6 sm:space-y-8">
            <div className="text-center">
                <h1 className="text-foreground mb-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
                    Furgoni Usati
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base">
                    Scopri la nostra selezione di furgoni usati per lavoro e
                    trasporti
                </p>
            </div>

            <VehicleListingClient
                vehicles={vans}
                footer={
                    <div className="text-center">
                        <Card className="border-border bg-muted mx-auto max-w-md">
                            <CardContent className="p-4 sm:p-6">
                                <div className="mb-3 flex items-center justify-center sm:mb-4">
                                    <Truck className="text-primary" size={32} />
                                </div>
                                <h3 className="text-foreground mb-2 text-base font-semibold sm:text-lg">
                                    Hai bisogno di un furgone?
                                </h3>
                                <p className="text-muted-foreground mb-3 text-sm sm:mb-4 sm:text-base">
                                    Contattaci per trovare il furgone perfetto
                                    per le tue esigenze lavorative.
                                </p>
                                <Button
                                    asChild
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-bold uppercase sm:w-auto"
                                >
                                    <Link
                                        href="tel:3923391613"
                                        className="flex items-center justify-center gap-2"
                                    >
                                        <Phone />
                                        Chiamaci ora
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                }
            />
        </div>
    );
}
