"use client";

import { ImageUploader } from "@/components/admin/ImageUploader";
import { Button } from "@/components/ui/button";
import {
    VEHICLE_CATEGORIES,
    type VehicleCategory,
    type VehicleFormData,
} from "@/lib/vehicles/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

type VehicleFormProps = {
    initialData?: VehicleFormData;
    vehicleId?: string;
    mode: "create" | "edit";
};

const emptyForm: VehicleFormData = {
    category: "cars",
    title: "",
    year: new Date().getFullYear(),
    price: 0,
    mileage: 0,
    engine: "",
    fuel: "",
    transmission: "",
    description: "",
    sold: false,
    featured: false,
    sort_order: 0,
    image_urls: [],
    cloudinary_public_ids: [],
};

export function VehicleForm({ initialData, vehicleId, mode }: VehicleFormProps) {
    const router = useRouter();
    const [form, setForm] = useState<VehicleFormData>(initialData ?? emptyForm);
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const updateField = <K extends keyof VehicleFormData>(
        key: K,
        value: VehicleFormData[K]
    ) => {
        setForm((current) => ({ ...current, [key]: value }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setSaving(true);
        setError(null);

        try {
            const response = await fetch(
                mode === "create"
                    ? "/api/admin/vehicles"
                    : `/api/admin/vehicles/${vehicleId}`,
                {
                    method: mode === "create" ? "POST" : "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                }
            );

            if (!response.ok) {
                const payload = await response.json().catch(() => ({}));
                throw new Error(payload.error ?? "Salvataggio fallito");
            }

            router.push("/admin/vehicles");
            router.refresh();
        } catch (submitError) {
            setError(
                submitError instanceof Error
                    ? submitError.message
                    : "Errore durante il salvataggio"
            );
        } finally {
            setSaving(false);
        }
    };

    const toggleSold = async () => {
        if (!vehicleId) return;

        const response = await fetch(`/api/admin/vehicles/${vehicleId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sold: !form.sold }),
        });

        if (response.ok) {
            updateField("sold", !form.sold);
        }
    };

    const handleDelete = async () => {
        if (!vehicleId) return;
        if (
            !window.confirm(
                "Eliminare definitivamente questo annuncio e tutte le sue immagini?"
            )
        ) {
            return;
        }

        setDeleting(true);
        setError(null);

        try {
            const response = await fetch(`/api/admin/vehicles/${vehicleId}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                const payload = await response.json().catch(() => ({}));
                throw new Error(payload.error ?? "Eliminazione fallita");
            }

            router.push("/admin/vehicles");
            router.refresh();
        } catch (deleteError) {
            setError(
                deleteError instanceof Error
                    ? deleteError.message
                    : "Errore durante l'eliminazione"
            );
        } finally {
            setDeleting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2">
                    <span className="text-sm font-medium">Categoria</span>
                    <select
                        className="border-input bg-background w-full rounded-md border px-3 py-2"
                        value={form.category}
                        onChange={(event) =>
                            updateField(
                                "category",
                                event.target.value as VehicleCategory
                            )
                        }
                    >
                        {VEHICLE_CATEGORIES.map((category) => (
                            <option key={category.value} value={category.value}>
                                {category.label}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium">Titolo</span>
                    <input
                        required
                        className="border-input bg-background w-full rounded-md border px-3 py-2"
                        value={form.title}
                        onChange={(event) =>
                            updateField("title", event.target.value)
                        }
                    />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium">Anno</span>
                    <input
                        required
                        type="number"
                        className="border-input bg-background w-full rounded-md border px-3 py-2"
                        value={form.year}
                        onChange={(event) =>
                            updateField("year", Number(event.target.value))
                        }
                    />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium">Prezzo (€)</span>
                    <input
                        required
                        type="number"
                        className="border-input bg-background w-full rounded-md border px-3 py-2"
                        value={form.price}
                        onChange={(event) =>
                            updateField("price", Number(event.target.value))
                        }
                    />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium">Chilometraggio</span>
                    <input
                        required
                        type="number"
                        className="border-input bg-background w-full rounded-md border px-3 py-2"
                        value={form.mileage}
                        onChange={(event) =>
                            updateField("mileage", Number(event.target.value))
                        }
                    />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium">Motore</span>
                    <input
                        className="border-input bg-background w-full rounded-md border px-3 py-2"
                        value={form.engine ?? ""}
                        onChange={(event) =>
                            updateField("engine", event.target.value)
                        }
                    />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium">Alimentazione</span>
                    <input
                        required
                        className="border-input bg-background w-full rounded-md border px-3 py-2"
                        value={form.fuel}
                        onChange={(event) =>
                            updateField("fuel", event.target.value)
                        }
                    />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium">Trasmissione</span>
                    <input
                        required
                        className="border-input bg-background w-full rounded-md border px-3 py-2"
                        value={form.transmission}
                        onChange={(event) =>
                            updateField("transmission", event.target.value)
                        }
                    />
                </label>

                <label className="space-y-2">
                    <span className="text-sm font-medium">Ordine</span>
                    <input
                        type="number"
                        className="border-input bg-background w-full rounded-md border px-3 py-2"
                        value={form.sort_order}
                        onChange={(event) =>
                            updateField("sort_order", Number(event.target.value))
                        }
                    />
                </label>
            </div>

            <label className="block space-y-2">
                <span className="text-sm font-medium">Descrizione</span>
                <textarea
                    required
                    rows={6}
                    className="border-input bg-background w-full rounded-md border px-3 py-2"
                    value={form.description}
                    onChange={(event) =>
                        updateField("description", event.target.value)
                    }
                />
            </label>

            <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        checked={form.featured}
                        onChange={(event) =>
                            updateField("featured", event.target.checked)
                        }
                    />
                    In evidenza
                </label>
                <label className="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        checked={form.sold}
                        onChange={(event) =>
                            updateField("sold", event.target.checked)
                        }
                    />
                    Segna come venduto
                </label>
            </div>

            <div className="space-y-2">
                <span className="text-sm font-medium">Immagini</span>
                <ImageUploader
                    images={form.image_urls.map((url, index) => ({
                        url,
                        publicId: form.cloudinary_public_ids[index] ?? url,
                    }))}
                    onChange={(images) => {
                        updateField(
                            "image_urls",
                            images.map((image) => image.url)
                        );
                        updateField(
                            "cloudinary_public_ids",
                            images.map((image) => image.publicId)
                        );
                    }}
                />
            </div>

            {error && <p className="text-destructive text-sm">{error}</p>}

            <div className="flex flex-wrap gap-3">
                <Button type="submit" disabled={saving || deleting}>
                    {saving ? "Salvataggio..." : "Salva annuncio"}
                </Button>
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/admin/vehicles")}
                >
                    Annulla
                </Button>
                {mode === "edit" && vehicleId && (
                    <>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={toggleSold}
                        >
                            {form.sold ? "Segna disponibile" : "Segna venduto"}
                        </Button>
                        <Button
                            type="button"
                            variant="destructive"
                            disabled={deleting}
                            onClick={handleDelete}
                        >
                            {deleting ? "Eliminazione..." : "Elimina definitivamente"}
                        </Button>
                    </>
                )}
            </div>
        </form>
    );
}
