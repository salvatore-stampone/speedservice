"use client";

import { ImageModal } from "@/components/ImageModal";
import { VehicleCard } from "@/components/VehicleCard";
import type { Vehicle } from "@/lib/vehicles/types";
import type { ReactNode } from "react";
import { useState } from "react";

type VehicleListingClientProps = {
    vehicles: Vehicle[];
    footer?: ReactNode;
};

export function VehicleListingClient({
    vehicles,
    footer,
}: VehicleListingClientProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState<string[]>([]);
    const [modalTitle, setModalTitle] = useState("");
    const [modalCurrentIndex, setModalCurrentIndex] = useState(0);

    const handleImageClick = (
        images: string[],
        title: string,
        currentIndex: number
    ) => {
        setModalImages(images);
        setModalTitle(title);
        setModalCurrentIndex(currentIndex);
        setModalOpen(true);
    };

    return (
        <>
            <div className="grid gap-6">
                {vehicles.map((vehicle) => (
                    <VehicleCard
                        key={vehicle.id}
                        vehicle={vehicle}
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>

            {footer}

            <ImageModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                images={modalImages}
                title={modalTitle}
                currentIndex={modalCurrentIndex}
            />
        </>
    );
}
