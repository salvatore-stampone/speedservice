import imageCompression from "browser-image-compression";

const DEFAULT_OPTIONS = {
    maxSizeMB: 1.5,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    initialQuality: 0.85,
};

export async function compressImageFile(file: File): Promise<File> {
    if (!file.type.startsWith("image/")) {
        throw new Error("Il file selezionato non è un'immagine");
    }

    return imageCompression(file, DEFAULT_OPTIONS);
}

export async function compressImageFiles(files: File[]): Promise<File[]> {
    return Promise.all(files.map((file) => compressImageFile(file)));
}
