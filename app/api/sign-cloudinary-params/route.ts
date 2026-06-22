import { isAdminAuthenticated } from "@/lib/auth/admin";
import { getCloudinary } from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
    }

    const body = await request.json();
    const paramsToSign = body.paramsToSign;

    if (!paramsToSign || typeof paramsToSign !== "object") {
        return NextResponse.json({ error: "Parametri non validi" }, { status: 400 });
    }

    const cloudinary = getCloudinary();
    const signature = cloudinary.utils.api_sign_request(
        paramsToSign,
        process.env.CLOUDINARY_API_SECRET!
    );

    return NextResponse.json({ signature });
}
