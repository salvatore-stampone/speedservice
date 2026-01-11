"use client";

import { ImageModal } from "@/components/ImageModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { VehicleCard } from "@/components/VehicleCard";
import motorcycles from "@/lib/data/vehicles/motorcycles";
import { Motorbike, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Motorcycles() {
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
                    Moto Usate
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base">
                    Scopri la nostra selezione di moto usate di qualità
                </p>
            </div>

            <div className="grid gap-6">
                {motorcycles.map((motorcycle) => (
                    <VehicleCard
                        key={motorcycle.id}
                        vehicle={motorcycle}
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>

            <div className="text-center">
                <Card className="border-border bg-muted mx-auto max-w-md">
                    <CardContent className="p-4 sm:p-6">
                        <div className="mb-3 flex items-center justify-center sm:mb-4">
                            <Motorbike className="text-primary" size={32} />
                        </div>
                        <h3 className="text-foreground mb-2 text-base font-semibold sm:text-lg">
                            Passione per le due ruote?
                        </h3>
                        <p className="text-muted-foreground mb-3 text-sm sm:mb-4 sm:text-base">
                            Contattaci per trovare la moto dei tuoi sogni
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
