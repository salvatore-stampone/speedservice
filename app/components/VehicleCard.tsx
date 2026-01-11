"use client";

import { DynamicImage } from "@/components/DynamicImage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Fuel, Gauge, Info, Joystick } from "lucide-react";
import Link from "next/link";

interface VehicleImage {
    src: string;
}

interface Vehicle {
    id: number | string;
    title: string;
    year: number;
    price: number;
    images: VehicleImage[];
    description: string;
    mileage?: number;
    fuel?: string;
    transmission?: string;
    sold?: boolean;
}

interface VehicleCardProps {
    vehicle: Vehicle;
    onImageClick: (
        images: string[],
        title: string,
        currentIndex: number
    ) => void;
}

export function VehicleCard({
    vehicle,
    onImageClick,
}: Readonly<VehicleCardProps>) {
    return (
        <Card className="bg-card border-border mx-auto w-full max-w-4xl">
            <CardHeader className="px-3 py-4 sm:px-6 sm:py-6">
                <CardTitle className="text-card-foreground text-center text-lg font-bold sm:text-xl lg:text-2xl">
                    {vehicle.title} ({vehicle.year})
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-3 pb-4 sm:space-y-6 sm:px-6 sm:pb-6">
                <div className="relative">
                    <Carousel
                        className="mx-auto w-full max-w-2xl overflow-hidden"
                        opts={{ align: "start", loop: true }}
                    >
                        <CarouselContent>
                            {vehicle.images.map((image, index) => (
                                <CarouselItem key={`${vehicle.id}-${index}`}>
                                    <div className="flex w-full justify-center overflow-hidden">
                                        <DynamicImage
                                            src={image.src}
                                            alt={`${vehicle.title} ${index + 1}`}
                                            className="rounded-lg"
                                            maxWidth={800}
                                            maxHeight={500}
                                            onClick={() =>
                                                onImageClick(
                                                    vehicle.images.map(
                                                        (img) => img.src
                                                    ),
                                                    vehicle.title,
                                                    index
                                                )
                                            }
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-1 sm:left-2" />
                        <CarouselNext className="right-1 sm:right-2" />
                    </Carousel>
                </div>

                {(!!vehicle.mileage ||
                    !!vehicle.fuel ||
                    !!vehicle.transmission) && (
                    <div className="bg-muted/50 grid grid-cols-1 gap-3 rounded-lg p-3 sm:grid-cols-3 sm:gap-4 sm:p-4">
                        {!!vehicle.mileage && (
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12">
                                    <Gauge
                                        className="text-primary text-xl sm:text-2xl"
                                        size={24}
                                        strokeWidth={1.5}
                                        color="currentColor"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-muted-foreground text-xs sm:text-sm">
                                        Chilometraggio
                                    </span>
                                    <span className="text-foreground text-sm font-semibold sm:text-base">
                                        {vehicle.mileage.toLocaleString()} km
                                    </span>
                                </div>
                            </div>
                        )}
                        {vehicle.fuel && (
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12">
                                    <Fuel
                                        className="text-primary text-xl sm:text-2xl"
                                        size={24}
                                        strokeWidth={1.5}
                                        color="currentColor"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-muted-foreground text-xs sm:text-sm">
                                        Alimentazione
                                    </span>
                                    <span className="text-foreground text-sm font-semibold sm:text-base">
                                        {vehicle.fuel}
                                    </span>
                                </div>
                            </div>
                        )}
                        {vehicle.transmission && (
                            <div className="flex items-center gap-3">
                                <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12">
                                    <Joystick
                                        className="text-primary text-xl sm:text-2xl"
                                        size={24}
                                        strokeWidth={1.5}
                                        color="currentColor"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-muted-foreground text-xs sm:text-sm">
                                        Trasmissione
                                    </span>
                                    <span className="text-foreground text-sm font-semibold sm:text-base">
                                        {vehicle.transmission}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className="space-y-3 sm:space-y-4">
                    <div className="bg-muted rounded-lg p-3 sm:p-4">
                        <h3 className="text-foreground mb-2 text-base font-semibold sm:text-lg">
                            Descrizione
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                            {vehicle.description}
                        </p>
                    </div>

                    <div className="border-primary bg-primary/10 flex items-center justify-between rounded-lg border p-3 sm:p-4">
                        <div
                            className={cn(
                                vehicle.sold && "line-through opacity-50"
                            )}
                        >
                            <span className="text-primary text-sm font-bold sm:text-base lg:text-lg">
                                COSTO:{" "}
                            </span>
                            <span className="text-primary text-xl font-bold sm:text-2xl">
                                € {vehicle.price.toLocaleString()}
                            </span>
                        </div>
                        {vehicle.sold && (
                            <span className="text-primary text-xl font-bold sm:text-2xl">
                                VENDUTO
                            </span>
                        )}
                    </div>

                    {!vehicle.sold && (
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
                                    <Info className="text-lg sm:text-xl" />
                                    Più informazioni
                                </Link>
                            </Button>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
