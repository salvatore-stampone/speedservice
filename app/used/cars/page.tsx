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

const cars = [
    {
        id: 1,
        title: "BMW X5 3.0d",
        year: 2019,
        price: 45000,
        mileage: 85000,
        fuel: "Diesel",
        transmission: "Automatico",
        image: car1,
        description: "BMW X5 in ottime condizioni, tagliandata, gommata nuova.",
        features: ["4WD", "Clima", "Navigatore", "Pelle"],
    },
    {
        id: 2,
        title: "Audi A4 2.0 TDI",
        year: 2020,
        price: 32000,
        mileage: 65000,
        fuel: "Diesel",
        transmission: "Manuale",
        image: car2,
        description: "Audi A4 con pochi km, sempre in garage, perfetta.",
        features: ["Cruise Control", "Bluetooth", "Sensori", "Cerchi Lega"],
    },
    {
        id: 3,
        title: "Mercedes C220",
        year: 2018,
        price: 28000,
        mileage: 95000,
        fuel: "Diesel",
        transmission: "Automatico",
        image: car3,
        description: "Mercedes C220 elegante e affidabile, sempre assistita.",
        features: ["Start&Stop", "Park Assist", "LED", "Interni Premium"],
    },
];

export default function Cars({}: Props) {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="mb-2 text-4xl font-bold text-gray-900">
                    Auto Usate
                </h1>
                <p className="text-gray-600">
                    Scopri la nostra selezione di auto usate di qualità
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {cars.map((car) => (
                    <Card
                        key={car.id}
                        className="overflow-hidden transition-shadow hover:shadow-lg"
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={car.image}
                                alt={car.title}
                                fill
                                className="object-cover"
                            />
                            <Badge className="racing-red absolute top-2 right-2 font-bold text-white">
                                {car.year}
                            </Badge>
                        </div>

                        <CardHeader>
                            <CardTitle className="text-xl">
                                {car.title}
                            </CardTitle>
                            <CardDescription>{car.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:speed"
                                        className="text-gray-500"
                                    />
                                    <span>
                                        {car.mileage.toLocaleString()} km
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:local-gas-station"
                                        className="text-gray-500"
                                    />
                                    <span>{car.fuel}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:settings"
                                        className="text-gray-500"
                                    />
                                    <span>{car.transmission}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:calendar-today"
                                        className="text-gray-500"
                                    />
                                    <span>{car.year}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold">
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

                            <div className="flex items-center justify-between border-t pt-4">
                                <div>
                                    <span className="text-2xl font-bold text-green-600">
                                        € {car.price.toLocaleString()}
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
                <Card className="mx-auto max-w-md border-blue-200 bg-blue-50">
                    <CardContent className="pt-6">
                        <div className="mb-4 flex items-center justify-center">
                            <Icon
                                icon="material-symbols:info"
                                className="text-4xl text-blue-600"
                            />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">
                            Non trovi quello che cerchi?
                        </h3>
                        <p className="mb-4 text-gray-600">
                            Contattaci per maggiori informazioni sui veicoli
                            disponibili
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
