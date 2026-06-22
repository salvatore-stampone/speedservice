import { isAdminAuthenticated } from "@/lib/auth/admin";
import { getCloudinary } from "@/lib/cloudinary";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    if (!(await isAdminAuthenticated())) {
        return NextResponse.json({ error: "Non autorizzato" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file");
    const folder = String(formData.get("folder") ?? "speedservice/vehicles");

    if (!(file instanceof File)) {
        return NextResponse.json({ error: "File mancante" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const cloudinary = getCloudinary();

    const result = await new Promise<{
        secure_url: string;
        public_id: string;
    }>((resolve, reject) => {
        const upload = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "image",
            },
            (error, uploadResult) => {
                if (error || !uploadResult) {
                    reject(error ?? new Error("Upload fallito"));
                    return;
                }

                resolve({
                    secure_url: uploadResult.secure_url,
                    public_id: uploadResult.public_id,
                });
            }
        );

        upload.end(buffer);
    });

    return NextResponse.json({
        url: result.secure_url,
        publicId: result.public_id,
    });
}
