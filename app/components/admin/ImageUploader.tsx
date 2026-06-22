"use client";

import { Button } from "@/components/ui/button";
import { compressImageFiles } from "@/lib/images/compress";
import { Loader2, Trash2, Upload } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

type UploadedImage = {
    url: string;
    publicId: string;
};

type ImageUploaderProps = {
    images: UploadedImage[];
    onChange: (images: UploadedImage[]) => void;
    folder?: string;
};

export function ImageUploader({
    images,
    onChange,
    folder = "speedservice/vehicles",
}: ImageUploaderProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFiles = async (fileList: FileList | null) => {
        if (!fileList?.length) return;

        setUploading(true);
        setError(null);

        try {
            const compressed = await compressImageFiles(Array.from(fileList));
            const uploaded: UploadedImage[] = [];

            for (const file of compressed) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("folder", folder);

                const response = await fetch("/api/admin/upload", {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) {
                    const payload = await response.json().catch(() => ({}));
                    throw new Error(payload.error ?? "Upload fallito");
                }

                const payload = await response.json();
                uploaded.push({
                    url: payload.url,
                    publicId: payload.publicId,
                });
            }

            onChange([...images, ...uploaded]);
        } catch (uploadError) {
            setError(
                uploadError instanceof Error
                    ? uploadError.message
                    : "Errore durante l'upload"
            );
        } finally {
            setUploading(false);
            if (inputRef.current) {
                inputRef.current.value = "";
            }
        }
    };

    const removeImage = (index: number) => {
        onChange(images.filter((_, currentIndex) => currentIndex !== index));
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
                {images.map((image, index) => (
                    <div
                        key={`${image.publicId}-${index}`}
                        className="border-border relative h-28 w-28 overflow-hidden rounded-lg border"
                    >
                        <Image
                            src={image.url}
                            alt={`Immagine ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="112px"
                        />
                        <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="bg-destructive text-destructive-foreground absolute top-1 right-1 rounded-full p-1"
                            aria-label="Rimuovi immagine"
                        >
                            <Trash2 className="size-3.5" />
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(event) => handleFiles(event.target.files)}
                />
                <Button
                    type="button"
                    variant="outline"
                    disabled={uploading}
                    onClick={() => inputRef.current?.click()}
                >
                    {uploading ? (
                        <Loader2 className="animate-spin" />
                    ) : (
                        <Upload />
                    )}
                    {uploading ? "Caricamento..." : "Carica immagini"}
                </Button>
                <p className="text-muted-foreground text-sm">
                    Le immagini vengono compresse automaticamente prima
                    dell&apos;upload.
                </p>
            </div>

            {error && <p className="text-destructive text-sm">{error}</p>}
        </div>
    );
}
