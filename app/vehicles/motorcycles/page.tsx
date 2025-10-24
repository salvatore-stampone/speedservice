"use client";

import { DynamicImage } from "@/components/DynamicImage";
import { ImageModal } from "@/components/ImageModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import motorcycles from "@/lib/data/vehicles/motorcycles";
import { Icon } from "@iconify/react";
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
                    <Card
                        key={motorcycle.id}
                        className="bg-card border-border mx-auto w-full max-w-4xl"
                    >
                        <CardHeader className="px-3 py-4 sm:px-6 sm:py-6">
                            <CardTitle className="text-card-foreground text-center text-lg font-bold sm:text-xl lg:text-2xl">
                                {motorcycle.title} ({motorcycle.year})
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 px-3 pb-4 sm:space-y-6 sm:px-6 sm:pb-6">
                            <div className="relative">
                                <Carousel
                                    className="mx-auto w-full max-w-2xl overflow-hidden"
                                    opts={{ align: "start", loop: true }}
                                >
                                    <CarouselContent>
                                        {motorcycle.images.map(
                                            (image, index) => (
                                                <CarouselItem
                                                    key={`${motorcycle.id}-${index}`}
                                                >
                                                    <div className="flex w-full justify-center overflow-hidden">
                                                        <DynamicImage
                                                            src={image.src}
                                                            alt={`${motorcycle.title} ${index + 1}`}
                                                            className="rounded-lg"
                                                            maxWidth={800}
                                                            maxHeight={500}
                                                            onClick={() =>
                                                                handleImageClick(
                                                                    motorcycle.images.map(
                                                                        (img) =>
                                                                            img.src
                                                                    ),
                                                                    motorcycle.title,
                                                                    index
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                </CarouselItem>
                                            )
                                        )}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-1 sm:left-2" />
                                    <CarouselNext className="right-1 sm:right-2" />
                                </Carousel>
                            </div>

                            <div className="space-y-3 sm:space-y-4">
                                <div className="bg-muted rounded-lg p-3 sm:p-4">
                                    <h3 className="text-foreground mb-2 text-base font-semibold sm:text-lg">
                                        Descrizione
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                                        {motorcycle.description}
                                    </p>
                                </div>

                                <div className="border-primary bg-primary/10 flex items-center justify-between rounded-lg border p-3 sm:p-4">
                                    <div>
                                        <span className="text-primary text-sm font-bold sm:text-base lg:text-lg">
                                            COSTO:{" "}
                                        </span>
                                        <span className="text-primary text-xl font-bold sm:text-2xl">
                                            €{" "}
                                            {motorcycle.price.toLocaleString()}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-bold tracking-wide uppercase sm:w-auto"
                                    >
                                        <Link
                                            href="tel:3923391613"
                                            className="flex items-center justify-center gap-2"
                                        >
                                            <Icon
                                                icon="material-symbols:info-outline-rounded"
                                                className="text-lg sm:text-xl"
                                            />
                                            Più informazioni
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="text-center">
                <Card className="border-border bg-muted mx-auto max-w-md">
                    <CardContent className="p-4 sm:p-6">
                        <div className="mb-3 flex items-center justify-center sm:mb-4">
                            <Icon
                                icon="material-symbols:two-wheeler"
                                className="text-primary text-3xl sm:text-4xl"
                            />
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
                                <Icon icon="material-symbols:phone" />
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
