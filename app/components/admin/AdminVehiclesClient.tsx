"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VEHICLE_CATEGORIES, type Vehicle } from "@/lib/vehicles/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

type AdminVehiclesPageProps = {
    vehicles: Vehicle[];
};

export function AdminVehiclesClient({ vehicles }: AdminVehiclesPageProps) {
    const router = useRouter();

    const logout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    };

    const categoryLabel = (category: Vehicle["category"]) =>
        VEHICLE_CATEGORIES.find((item) => item.value === category)?.label ??
        category;

    return (
        <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Gestione veicoli</h1>
                    <p className="text-muted-foreground">
                        Crea, modifica, segna venduto o elimina annunci.
                    </p>
                </div>
                <div className="flex flex-wrap gap-3">
                    <Button asChild>
                        <Link href="/admin/vehicles/new">Nuovo veicolo</Link>
                    </Button>
                    <Button variant="outline" onClick={logout}>
                        Esci
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                {vehicles.length === 0 && (
                    <div className="border-border rounded-xl border p-6 text-center">
                        <p className="text-muted-foreground">
                            Nessun veicolo presente. Crea il primo annuncio o
                            esegui la migrazione.
                        </p>
                    </div>
                )}

                {vehicles.map((vehicle) => (
                    <div
                        key={vehicle.id}
                        className="border-border flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                                <h2 className="text-lg font-semibold">
                                    {vehicle.title}
                                </h2>
                                <Badge variant="outline">
                                    {categoryLabel(vehicle.category)}
                                </Badge>
                                {vehicle.sold && (
                                    <Badge variant="secondary">Venduto</Badge>
                                )}
                                {vehicle.featured && (
                                    <Badge>In evidenza</Badge>
                                )}
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {vehicle.year} · €{" "}
                                {vehicle.price.toLocaleString("it-IT")} ·{" "}
                                {vehicle.image_urls.length} immagini
                            </p>
                        </div>

                        <Button asChild variant="outline">
                            <Link href={`/admin/vehicles/${vehicle.id}/edit`}>
                                Modifica
                            </Link>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
