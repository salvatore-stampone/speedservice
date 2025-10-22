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
import vans from "@/lib/data/vehicles/vans";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Vans({}: Props) {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-foreground mb-2 text-4xl font-bold">
                    Furgoni Usati
                </h1>
                <p className="text-muted-foreground">
                    Scopri la nostra selezione di furgoni usati per lavoro e
                    trasporti
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {vans.map((van) => (
                    <Card
                        key={van.id}
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
                                    {van.images.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative aspect-video">
                                                <Image
                                                    src={image}
                                                    alt={`${van.title} - Immagine ${index + 1}`}
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
                                {van.year}
                            </Badge>
                        </div>

                        <CardHeader>
                            <CardTitle className="text-card-foreground text-xl">
                                {van.title}
                            </CardTitle>
                            <CardDescription className="text-muted-foreground">
                                {van.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:speed"
                                        className="text-muted-foreground"
                                    />
                                    <span className="text-foreground">
                                        {van.mileage.toLocaleString()} km
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:local-gas-station"
                                        className="text-muted-foreground"
                                    />
                                    <span className="text-foreground">
                                        {van.fuel}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:settings"
                                        className="text-muted-foreground"
                                    />
                                    <span className="text-foreground">
                                        {van.transmission}
                                    </span>
                                </div>
                                {/* <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:scale"
                                        className="text-muted-foreground"
                                    />
                                    <span className="text-foreground">
                                        {van.capacity}
                                    </span>
                                </div> */}
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-foreground text-sm font-semibold">
                                    Caratteristiche:
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                    {van.features.map((feature, index) => (
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

                            <div className="border-border flex items-center justify-between border-t pt-4">
                                <div>
                                    <span className="text-primary text-2xl font-bold">
                                        € {van.price.toLocaleString()}
                                    </span>
                                </div>
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase"
                                >
                                    <Link
                                        href="tel:3923391613"
                                        className="flex items-center gap-1"
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
                    <CardContent className="pt-6">
                        <div className="mb-4 flex items-center justify-center">
                            <Icon
                                icon="material-symbols:local-shipping"
                                className="text-primary text-4xl"
                            />
                        </div>
                        <h3 className="text-foreground mb-2 text-lg font-semibold">
                            Hai bisogno di un furgone?
                        </h3>
                        <p className="text-muted-foreground mb-4">
                            Contattaci per trovare il furgone perfetto per le
                            tue esigenze lavorative
                        </p>
                        <Button
                            asChild
                            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase"
                        >
                            <Link
                                href="tel:3923391613"
                                className="flex items-center gap-2"
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
