import { v2 as cloudinary } from "cloudinary";

let configured = false;

export function getCloudinary() {
    if (!configured) {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            secure: true,
        });
        configured = true;
    }

    return cloudinary;
}

export function buildCloudinaryUrl(
    publicId: string,
    options?: { width?: number; quality?: string }
) {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    if (!cloudName) return publicId;

    const transforms = [
        "f_auto",
        options?.quality ?? "q_auto:good",
        options?.width ? `w_${options.width}` : null,
    ]
        .filter(Boolean)
        .join(",");

    return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}/${publicId}`;
}

export async function deleteCloudinaryImages(publicIds: string[]) {
    if (!publicIds.length) return;

    const cloudinary = getCloudinary();
    await cloudinary.api.delete_resources(publicIds);
}
