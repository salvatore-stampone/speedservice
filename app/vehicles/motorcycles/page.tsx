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
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import motorcycle1 from "public/images/vehicles/motorcycles/ducati-monster/moto-1.jpeg";
import motorcycle2 from "public/images/vehicles/motorcycles/ducati-monster/moto-2.jpeg";
import motorcycle3 from "public/images/vehicles/motorcycles/ducati-monster/moto-3.jpeg";
import motorcycle4 from "public/images/vehicles/motorcycles/ducati-monster/moto-4.jpeg";

type Props = {};

const motorcycles = [
    {
        id: 1,
        title: "Ducati Monster S2R 1000",
        year: 2007,
        price: 3900,
        mileage: 70000,
        engine: "992cc",
        transmission: "Manuale",
        images: [motorcycle1, motorcycle2, motorcycle3, motorcycle4],
        description:
            "Splendida Ducati Monster S2R 1000, tenuta in ottime condizioni. Tagliando completo, olio freni e pastiglie nuove Brembo.",
        features: ["Tagliandata", "Olio freni e pastiglie nuove Brembo"],
    },
];

export default function Motorcycles({}: Props) {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-foreground mb-2 text-4xl font-bold">
                    Moto Usate
                </h1>
                <p className="text-muted-foreground">
                    Scopri la nostra selezione di moto usate di qualità
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {motorcycles.map((motorcycle) => (
                    <Card
                        key={motorcycle.id}
                        className="bg-card border-border overflow-hidden transition-shadow hover:shadow-lg"
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={motorcycle.images[0]}
                                alt={motorcycle.title}
                                fill
                                className="object-cover"
                            />
                            <Badge className="bg-primary text-primary-foreground absolute top-2 right-2 font-bold">
                                {motorcycle.year}
                            </Badge>
                        </div>

                        <CardHeader>
                            <CardTitle className="text-card-foreground text-xl">
                                {motorcycle.title}
                            </CardTitle>
                            <CardDescription className="text-muted-foreground">
                                {motorcycle.description}
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
                                        {motorcycle.mileage.toLocaleString()} km
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:settings"
                                        className="text-muted-foreground"
                                    />
                                    <span className="text-foreground">
                                        {motorcycle.engine}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:engineering"
                                        className="text-muted-foreground"
                                    />
                                    <span className="text-foreground">
                                        {motorcycle.transmission}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:calendar-today"
                                        className="text-muted-foreground"
                                    />
                                    <span className="text-foreground">
                                        {motorcycle.year}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-foreground text-sm font-semibold">
                                    Caratteristiche:
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                    {motorcycle.features.map(
                                        (feature, index) => (
                                            <Badge
                                                key={index}
                                                variant="secondary"
                                                className="text-xs"
                                            >
                                                {feature}
                                            </Badge>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="border-border flex items-center justify-between border-t pt-4">
                                <div>
                                    <span className="text-primary text-2xl font-bold">
                                        € {motorcycle.price.toLocaleString()}
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
                                icon="material-symbols:two-wheeler"
                                className="text-primary text-4xl"
                            />
                        </div>
                        <h3 className="text-foreground mb-2 text-lg font-semibold">
                            Passione per le due ruote?
                        </h3>
                        <p className="text-muted-foreground mb-4">
                            Contattaci per trovare la moto dei tuoi sogni
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
