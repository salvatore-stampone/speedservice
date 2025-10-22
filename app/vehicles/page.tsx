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
import "@/styles/tailwind.vehicles.css";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import motorcycle1 from "public/images/vehicles/motorcycles/ducati-monster/moto-1.jpeg";
import motorcycle2 from "public/images/vehicles/motorcycles/ducati-monster/moto-2.jpeg";
import motorcycle3 from "public/images/vehicles/motorcycles/ducati-monster/moto-3.jpeg";
import motorcycle4 from "public/images/vehicles/motorcycles/ducati-monster/moto-4.jpeg";

type Props = {};

const page = (props: Props) => {
    const images = [motorcycle1, motorcycle2, motorcycle3, motorcycle4];

    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-foreground mb-2 text-4xl font-bold">
                    IN PRIMO PIANO
                </h1>
                <p className="text-muted-foreground">
                    Scopri i nostri veicoli in evidenza
                </p>
            </div>

            <Card className="bg-card border-border mx-auto max-w-4xl">
                <CardHeader>
                    <CardTitle className="text-card-foreground text-center text-2xl font-bold">
                        Ducati Monster S2R 1000 (2007)
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-center">
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
                        <div className="bg-muted rounded-lg p-4">
                            <h3 className="text-foreground mb-2 text-lg font-semibold">
                                Descrizione
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
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

                        <div className="border-primary bg-primary/10 flex items-center justify-between rounded-lg border p-4">
                            <div>
                                <span className="text-primary text-lg font-bold">
                                    COSTO:{" "}
                                </span>
                                <span className="text-primary text-2xl font-bold">
                                    € 3.600,00
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide uppercase"
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
