import {
    createAdminSession,
    verifyAdminCredentials,
} from "@/lib/auth/admin";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const username = String(body.username ?? "");
    const password = String(body.password ?? "");

    if (!verifyAdminCredentials(username, password)) {
        return NextResponse.json(
            { error: "Credenziali non valide" },
            { status: 401 }
        );
    }

    await createAdminSession();
    return NextResponse.json({ ok: true });
}
