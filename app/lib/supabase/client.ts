import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

function getSupabaseUrl() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!url) {
        throw new Error("NEXT_PUBLIC_SUPABASE_URL is not configured");
    }
    return url;
}

export function createSupabasePublicClient() {
    const key =
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

    if (!key) {
        throw new Error("Supabase publishable key is not configured");
    }

    return createClient<Database>(getSupabaseUrl(), key);
}

export function createSupabaseAdminClient() {
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!key) {
        throw new Error("SUPABASE_SERVICE_ROLE_KEY is not configured");
    }

    return createClient<Database>(getSupabaseUrl(), key, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });
}
