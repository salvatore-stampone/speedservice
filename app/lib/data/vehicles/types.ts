import type { StaticImageData } from "next/image";

export type Vehicle = {
    id: number;
    title: string;
    year: number;
    price: number;
    mileage: number;
    engine?: string;
    fuel: string;
    transmission: string;
    images: StaticImageData[];
    description: string;
    sold?: boolean;
};
