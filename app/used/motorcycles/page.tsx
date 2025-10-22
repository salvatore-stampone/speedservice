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
import car1 from "public/images/cars/1/1.jpeg";
import car2 from "public/images/cars/1/2.jpeg";
import car3 from "public/images/cars/1/3.jpeg";

type Props = {};

const motorcycles = [
    {
        id: 1,
        title: "Ducati Monster S2R 1000",
        year: 2007,
        price: 3600,
        mileage: 50000,
        engine: "1000cc",
        transmission: "Manuale",
        image: car1,
        description:
            "Splendida Ducati Monster S2R 1000, ben tenuta con scarichi in carbonio.",
        features: [
            "Scarichi Carbonio",
            "Frizione Nuova",
            "Tagliandata",
            "Gommata 60%",
        ],
    },
    {
        id: 2,
        title: "Yamaha R1",
        year: 2015,
        price: 8500,
        mileage: 25000,
        engine: "1000cc",
        transmission: "Manuale",
        image: car2,
        description:
            "Yamaha R1 in perfette condizioni, sempre assistita in officina autorizzata.",
        features: ["ABS", "Traction Control", "Quick Shifter", "LED"],
    },
    {
        id: 3,
        title: "Honda CBR 600RR",
        year: 2018,
        price: 7200,
        mileage: 18000,
        engine: "600cc",
        transmission: "Manuale",
        image: car3,
        description:
            "Honda CBR 600RR sportiva e affidabile, perfetta per pista e strada.",
        features: ["ABS", "Slipper Clutch", "Digital Display", "LED"],
    },
];

export default function Motorcycles({}: Props) {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="mb-2 text-4xl font-bold text-gray-900">
                    Moto Usate
                </h1>
                <p className="text-gray-600">
                    Scopri la nostra selezione di moto usate di qualità
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {motorcycles.map((motorcycle) => (
                    <Card
                        key={motorcycle.id}
                        className="overflow-hidden transition-shadow hover:shadow-lg"
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={motorcycle.image}
                                alt={motorcycle.title}
                                fill
                                className="object-cover"
                            />
                            <Badge className="racing-red absolute top-2 right-2 font-bold text-white">
                                {motorcycle.year}
                            </Badge>
                        </div>

                        <CardHeader>
                            <CardTitle className="text-xl">
                                {motorcycle.title}
                            </CardTitle>
                            <CardDescription>
                                {motorcycle.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:speed"
                                        className="text-gray-500"
                                    />
                                    <span>
                                        {motorcycle.mileage.toLocaleString()} km
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:settings"
                                        className="text-gray-500"
                                    />
                                    <span>{motorcycle.engine}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:engineering"
                                        className="text-gray-500"
                                    />
                                    <span>{motorcycle.transmission}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:calendar-today"
                                        className="text-gray-500"
                                    />
                                    <span>{motorcycle.year}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold">
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

                            <div className="flex items-center justify-between border-t pt-4">
                                <div>
                                    <span className="text-2xl font-bold text-green-600">
                                        € {motorcycle.price.toLocaleString()}
                                    </span>
                                </div>
                                <Button
                                    asChild
                                    size="sm"
                                    className="racing-accent font-bold text-white uppercase"
                                >
                                    <Link
                                        href="tel:3923391613"
                                        className="flex items-center gap-1"
                                    >
                                        <Icon
                                            icon="material-symbols:phone"
                                            className="text-sm"
                                        />
                                        Contatta
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="text-center">
                <Card className="mx-auto max-w-md border-orange-200 bg-orange-50">
                    <CardContent className="pt-6">
                        <div className="mb-4 flex items-center justify-center">
                            <Icon
                                icon="material-symbols:two-wheeler"
                                className="text-4xl text-orange-600"
                            />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">
                            Passione per le due ruote?
                        </h3>
                        <p className="mb-4 text-gray-600">
                            Contattaci per trovare la moto dei tuoi sogni
                        </p>
                        <Button
                            asChild
                            className="racing-accent font-bold text-white uppercase"
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
