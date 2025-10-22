"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import cars from "@/lib/data/vehicles/cars";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Cars() {
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

            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cars.map((car) => (
                    <Card
                        key={car.id}
                        className="bg-card border-border overflow-hidden pt-0 transition-shadow hover:shadow-lg"
                    >
                        <div className="relative aspect-video">
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: true,
                                }}
                                className="w-full"
                            >
                                <CarouselContent>
                                    {car.images.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative aspect-video">
                                                <Image
                                                    src={image}
                                                    alt={`${car.title} - Immagine ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="left-2" />
                                <CarouselNext className="right-2" />
                            </Carousel>
                            <Badge className="bg-primary text-primary-foreground absolute top-2 right-2 z-10 font-bold">
                                {car.year}
                            </Badge>
                        </div>

                        <CardHeader className="px-3 py-3 sm:px-6 sm:py-4">
                            <CardTitle className="text-card-foreground text-lg sm:text-xl">
                                {car.title}
                            </CardTitle>
                            <CardDescription className="text-muted-foreground text-sm sm:text-base">
                                {car.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-3 px-3 pb-3 sm:space-y-4 sm:px-6 sm:pb-4">
                            <div className="grid grid-cols-2 gap-2 text-xs sm:gap-4 sm:text-sm">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Icon
                                        icon="material-symbols:speed"
                                        className="text-muted-foreground text-sm sm:text-base"
                                    />
                                    <span className="text-foreground truncate">
                                        {car.mileage.toLocaleString()} km
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Icon
                                        icon="material-symbols:local-gas-station"
                                        className="text-muted-foreground text-sm sm:text-base"
                                    />
                                    <span className="text-foreground truncate">
                                        {car.fuel}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Icon
                                        icon="material-symbols:settings"
                                        className="text-muted-foreground text-sm sm:text-base"
                                    />
                                    <span className="text-foreground truncate">
                                        {car.transmission}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <Icon
                                        icon="material-symbols:calendar-today"
                                        className="text-muted-foreground text-sm sm:text-base"
                                    />
                                    <span className="text-foreground truncate">
                                        {car.year}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-foreground text-xs font-semibold sm:text-sm">
                                    Caratteristiche:
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                    {car.features.map((feature, index) => (
                                        <Badge
                                            key={index}
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            {feature}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="border-border flex flex-col gap-3 border-t pt-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:pt-4">
                                <div>
                                    <span className="text-primary text-xl font-bold sm:text-2xl">
                                        € {car.price.toLocaleString()}
                                    </span>
                                </div>
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-bold uppercase sm:w-auto"
                                >
                                    <Link
                                        href="tel:3923391613"
                                        className="flex items-center justify-center gap-1"
                                    >
                                        <Icon
                                            icon="material-symbols:phone"
                                            className="text-sm"
                                        />
                                        Contattaci
                                    </Link>
                                </Button>
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
                                icon="material-symbols:info"
                                className="text-primary text-3xl sm:text-4xl"
                            />
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
                                <Icon icon="material-symbols:phone" />
                                Chiamaci ora
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
