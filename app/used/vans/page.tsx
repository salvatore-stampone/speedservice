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

const vans = [
    {
        id: 1,
        title: "Ford Transit Custom",
        year: 2020,
        price: 18500,
        mileage: 45000,
        fuel: "Diesel",
        transmission: "Manuale",
        capacity: "3.5t",
        image: car1,
        description:
            "Ford Transit Custom in ottime condizioni, ideale per trasporti e lavoro.",
        features: ["ABS", "Clima", "Radio CD", "Sensori Parcheggio"],
    },
    {
        id: 2,
        title: "Mercedes Sprinter",
        year: 2019,
        price: 22000,
        mileage: 38000,
        fuel: "Diesel",
        transmission: "Automatico",
        capacity: "3.5t",
        image: car2,
        description:
            "Mercedes Sprinter sempre assistita, perfetta per trasporti professionali.",
        features: ["Cruise Control", "Bluetooth", "Navigatore", "Telecamera"],
    },
    {
        id: 3,
        title: "Iveco Daily",
        year: 2018,
        price: 16500,
        mileage: 75000,
        fuel: "Diesel",
        transmission: "Manuale",
        capacity: "3.5t",
        image: car3,
        description:
            "Iveco Daily robusta e affidabile, sempre in garage, tagliandata.",
        features: ["4WD", "Clima", "Radio", "Fari LED"],
    },
];

export default function Vans({}: Props) {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="mb-2 text-4xl font-bold text-gray-900">
                    Furgoni Usati
                </h1>
                <p className="text-gray-600">
                    Scopri la nostra selezione di furgoni usati per lavoro e
                    trasporti
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {vans.map((van) => (
                    <Card
                        key={van.id}
                        className="overflow-hidden transition-shadow hover:shadow-lg"
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={van.image}
                                alt={van.title}
                                fill
                                className="object-cover"
                            />
                            <Badge className="racing-red absolute top-2 right-2 font-bold text-white">
                                {van.year}
                            </Badge>
                        </div>

                        <CardHeader>
                            <CardTitle className="text-xl">
                                {van.title}
                            </CardTitle>
                            <CardDescription>{van.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:speed"
                                        className="text-gray-500"
                                    />
                                    <span>
                                        {van.mileage.toLocaleString()} km
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:local-gas-station"
                                        className="text-gray-500"
                                    />
                                    <span>{van.fuel}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:settings"
                                        className="text-gray-500"
                                    />
                                    <span>{van.transmission}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Icon
                                        icon="material-symbols:scale"
                                        className="text-gray-500"
                                    />
                                    <span>{van.capacity}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold">
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

                            <div className="flex items-center justify-between border-t pt-4">
                                <div>
                                    <span className="text-2xl font-bold text-green-600">
                                        € {van.price.toLocaleString()}
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
                <Card className="mx-auto max-w-md border-green-200 bg-green-50">
                    <CardContent className="pt-6">
                        <div className="mb-4 flex items-center justify-center">
                            <Icon
                                icon="material-symbols:local-shipping"
                                className="text-4xl text-green-600"
                            />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold">
                            Hai bisogno di un furgone?
                        </h3>
                        <p className="mb-4 text-gray-600">
                            Contattaci per trovare il furgone perfetto per le
                            tue esigenze lavorative
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
