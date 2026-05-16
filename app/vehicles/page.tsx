"use client";

import { ImageModal } from "@/components/ImageModal";
import VehiclesLogoSection from "@/components/vehicles/sections/VehiclesLogoSection";
import { VehicleCard } from "@/components/VehicleCard";
import cars from "@/lib/data/vehicles/cars";
import motorcycles from "@/lib/data/vehicles/motorcycles";
import vans from "@/lib/data/vehicles/vans";
import { useState } from "react";

const Page = () => {
    const featuredVehicles = [cars[0], motorcycles[0], vans[0]];
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

            <div className="grid gap-6">
                {featuredVehicles.map((vehicle, idx) => (
                    <VehicleCard
                        key={`featured-${vehicle.id}-${vehicle.title}-${idx}`}
                        vehicle={vehicle}
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>

            <ImageModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                images={modalImages}
                title={modalTitle}
                currentIndex={modalCurrentIndex}
            />
        </div>
    );
};

export default Page;
