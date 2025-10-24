"use client";

import { useImageDimensions } from "@/lib/hooks";
import Image from "next/image";
import { useState } from "react";

interface DynamicImageProps {
    src: string;
    alt: string;
    className?: string;
    maxWidth?: number;
    maxHeight?: number;
    onClick?: () => void;
}

export const DynamicImage = ({
    src,
    alt,
    className = "",
    maxWidth = 800,
    maxHeight = 600,
    onClick,
}: DynamicImageProps) => {
    const { dimensions, isLoading } = useImageDimensions(src);
    const [imageLoaded, setImageLoaded] = useState(false);

    if (isLoading || !dimensions) {
        return (
            <div
                className="bg-muted flex animate-pulse items-center justify-center rounded-lg"
                style={{
                    width: "100%",
                    height: "300px",
                }}
            >
                <div className="text-muted-foreground">Caricamento...</div>
            </div>
        );
    }

    // Calcola le dimensioni mantenendo l'aspect ratio
    let displayWidth = dimensions.width;
    let displayHeight = dimensions.height;

    // Ridimensiona se supera i limiti massimi
    if (displayWidth > maxWidth) {
        displayHeight = (maxWidth * dimensions.height) / dimensions.width;
        displayWidth = maxWidth;
    }

    if (displayHeight > maxHeight) {
        displayWidth = (maxHeight * dimensions.width) / dimensions.height;
        displayHeight = maxHeight;
    }

    return (
        <div
            className="flex w-full items-center justify-center"
            style={{
                maxWidth: `${displayWidth}px`,
                maxHeight: `${displayHeight}px`,
                transition: "all 0.5s ease-in-out",
            }}
            onClick={onClick}
        >
            <Image
                src={src}
                alt={alt}
                width={displayWidth}
                height={displayHeight}
                className={`h-auto max-h-full w-full max-w-full cursor-pointer object-contain transition-all duration-500 ease-in-out ${className}`}
                onLoad={() => setImageLoaded(true)}
                style={{
                    opacity: imageLoaded ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                }}
            />
        </div>
    );
};
