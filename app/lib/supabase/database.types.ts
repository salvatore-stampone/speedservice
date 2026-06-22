export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export type Database = {
    __InternalSupabase: {
        PostgrestVersion: "14.5";
    };
    public: {
        Tables: {
            vehicles: {
                Row: {
                    category: string;
                    cloudinary_public_ids: string[];
                    created_at: string;
                    description: string;
                    engine: string | null;
                    featured: boolean;
                    fuel: string;
                    id: string;
                    image_urls: string[];
                    mileage: number;
                    price: number;
                    sold: boolean;
                    sort_order: number;
                    title: string;
                    transmission: string;
                    updated_at: string;
                    year: number;
                };
                Insert: {
                    category: string;
                    cloudinary_public_ids?: string[];
                    created_at?: string;
                    description?: string;
                    engine?: string | null;
                    featured?: boolean;
                    fuel?: string;
                    id?: string;
                    image_urls?: string[];
                    mileage?: number;
                    price: number;
                    sold?: boolean;
                    sort_order?: number;
                    title: string;
                    transmission?: string;
                    updated_at?: string;
                    year: number;
                };
                Update: {
                    category?: string;
                    cloudinary_public_ids?: string[];
                    created_at?: string;
                    description?: string;
                    engine?: string | null;
                    featured?: boolean;
                    fuel?: string;
                    id?: string;
                    image_urls?: string[];
                    mileage?: number;
                    price?: number;
                    sold?: boolean;
                    sort_order?: number;
                    title?: string;
                    transmission?: string;
                    updated_at?: string;
                    year?: number;
                };
                Relationships: [];
            };
        };
        Views: Record<string, never>;
        Functions: Record<string, never>;
        Enums: Record<string, never>;
        CompositeTypes: Record<string, never>;
    };
};

export type VehicleRow = Database["public"]["Tables"]["vehicles"]["Row"];
export type VehicleInsert = Database["public"]["Tables"]["vehicles"]["Insert"];
export type VehicleUpdate = Database["public"]["Tables"]["vehicles"]["Update"];
