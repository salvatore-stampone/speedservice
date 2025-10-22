"use client";

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
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import car1 from "public/images/cars/1/1.jpeg";
import car2 from "public/images/cars/1/2.jpeg";
import car3 from "public/images/cars/1/3.jpeg";
import car4 from "public/images/cars/1/4.jpeg";
import car5 from "public/images/cars/1/5.jpeg";
import car6 from "public/images/cars/1/6.jpeg";

type Props = {};

const page = (props: Props) => {
    const images = [car1, car2, car3, car4, car5, car6];

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="mb-2 text-4xl font-bold text-gray-900">
                    IN PRIMO PIANO
                </h1>
                <p className="text-gray-600">
                    Scopri i nostri veicoli in evidenza
                </p>
            </div>

            <Card className="mx-auto max-w-4xl">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">
                        Ducati Monster S2R 1000 (2007)
                    </CardTitle>
                    <CardDescription className="text-center">
                        Splendida Ducati Monster S2R 1000, anno 2007, con 50000
                        km
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="relative">
                        <Carousel className="mx-auto w-full max-w-2xl">
                            <CarouselContent>
                                {images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative aspect-video">
                                            <Image
                                                src={image}
                                                alt={`Ducati Monster ${index + 1}`}
                                                fill
                                                className="rounded-lg object-cover"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    <div className="space-y-4">
                        <div className="rounded-lg bg-gray-50 p-4">
                            <h3 className="mb-2 text-lg font-semibold">
                                Descrizione
                            </h3>
                            <p className="leading-relaxed text-gray-700">
                                Splendida Ducati Monster S2R 1000, anno 2007,
                                con 50000 km. Ben tenuta.
                                <br />
                                Scarichi in carbonio con omologazione, frizione
                                nuova, tagliandata e gommata al 60%.
                                <br />
                                Ottima per chi ha esperienza: bella, aggressiva
                                e divertente. Qualsiasi prova.
                            </p>
                        </div>

                        <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-4">
                            <div>
                                <span className="text-lg font-bold text-green-800">
                                    COSTO:{" "}
                                </span>
                                <span className="text-2xl font-bold text-green-900">
                                    € 3.600,00
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="racing-accent font-bold tracking-wide text-white uppercase"
                            >
                                <Link
                                    href="tel:3923391613"
                                    className="flex items-center gap-2"
                                >
                                    <Icon
                                        icon="material-symbols:info-outline-rounded"
                                        className="text-xl"
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
