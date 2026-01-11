"use client";

import { ImageModal } from "@/components/ImageModal";
import { VehicleCard } from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import cars from "@/lib/data/vehicles/cars";
import { Info, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Cars() {
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
            <div className="text-center">
                <h1 className="text-foreground mb-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
                    Auto Usate
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base">
                    Scopri la nostra selezione di auto usate di qualità
                </p>
            </div>

            <div className="grid gap-6">
                {cars.map((car) => (
                    <VehicleCard
                        key={car.id}
                        vehicle={car}
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>

            <div className="text-center">
                <Card className="border-border bg-muted mx-auto max-w-md">
                    <CardContent className="p-4 sm:p-6">
                        <div className="mb-3 flex items-center justify-center sm:mb-4">
                            <Info className="text-primary text-3xl sm:text-4xl" />
                        </div>
                        <h3 className="text-foreground mb-2 text-base font-semibold sm:text-lg">
                            Non trovi quello che cerchi?
                        </h3>
                        <p className="text-muted-foreground mb-3 text-sm sm:mb-4 sm:text-base">
                            Contattaci per maggiori informazioni sui veicoli
                            disponibili
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

            <ImageModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                images={modalImages}
                title={modalTitle}
                currentIndex={modalCurrentIndex}
            />
        </div>
    );
}
