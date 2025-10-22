"use client";

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
import "@/styles/tailwind.vehicles.css";
import { Icon } from "@iconify/react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    const featuredVehicle = motorcycles[0];

    return (
        <div className="space-y-6 sm:space-y-8">
            <div className="text-center">
                <h1 className="text-foreground mb-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
                    IN PRIMO PIANO
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base">
                    Scopri i nostri veicoli in evidenza
                </p>
            </div>

            <Card className="bg-card border-border mx-auto max-w-4xl">
                <CardHeader className="px-3 py-4 sm:px-6 sm:py-6">
                    <CardTitle className="text-card-foreground text-center text-lg font-bold sm:text-xl lg:text-2xl">
                        {featuredVehicle.title} ({featuredVehicle.year})
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 px-3 pb-4 sm:space-y-6 sm:px-6 sm:pb-6">
                    <div className="relative">
                        <Carousel
                            className="mx-auto w-full max-w-2xl"
                            opts={{ align: "start", loop: true }}
                            plugins={[
                                Autoplay({
                                    delay: 2000,
                                }),
                            ]}
                        >
                            <CarouselContent>
                                {featuredVehicle.images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative aspect-video">
                                            <Image
                                                src={image}
                                                alt={`${featuredVehicle.title} ${index + 1}`}
                                                fill
                                                className="rounded-lg object-cover"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
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
                                {featuredVehicle.description}
                            </p>
                        </div>

                        <div className="border-primary bg-primary/10 flex items-center justify-between rounded-lg border p-3 sm:p-4">
                            <div>
                                <span className="text-primary text-sm font-bold sm:text-base lg:text-lg">
                                    COSTO:{" "}
                                </span>
                                <span className="text-primary text-xl font-bold sm:text-2xl">
                                    € {featuredVehicle.price.toLocaleString()}
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
        </div>
    );
};

export default page;
