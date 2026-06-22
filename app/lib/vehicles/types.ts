export type VehicleCategory = "cars" | "motorcycles" | "vans";

export type Vehicle = {
    id: string;
    category: VehicleCategory;
    title: string;
    year: number;
    price: number;
    mileage: number;
    engine?: string | null;
    fuel: string;
    transmission: string;
    description: string;
    sold: boolean;
    featured: boolean;
    sort_order: number;
    image_urls: string[];
    cloudinary_public_ids: string[];
};

export type VehicleFormData = {
    category: VehicleCategory;
    title: string;
    year: number;
    price: number;
    mileage: number;
    engine?: string;
    fuel: string;
    transmission: string;
    description: string;
    sold: boolean;
    featured: boolean;
    sort_order: number;
    image_urls: string[];
    cloudinary_public_ids: string[];
};

export const VEHICLE_CATEGORIES: {
    value: VehicleCategory;
    label: string;
}[] = [
    { value: "cars", label: "Auto" },
    { value: "motorcycles", label: "Moto" },
    { value: "vans", label: "Furgoni" },
];
