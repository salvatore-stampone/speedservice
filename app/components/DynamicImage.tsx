"use client";

import { useImageDimensions } from "@/lib/hooks";
import Image, { type StaticImageData } from "next/image";
import { useMemo, useState } from "react";

interface DynamicImageProps {
    src: string | StaticImageData;
    alt: string;
    className?: string;
    maxWidth?: number;
    maxHeight?: number;
    onClick?: () => void;
}

function fitDimensions(
    width: number,
    height: number,
    maxWidth: number,
    maxHeight: number
) {
    let displayWidth = width;
    let displayHeight = height;

    if (displayWidth > maxWidth) {
        displayHeight = (maxWidth * height) / width;
        displayWidth = maxWidth;
    }

    if (displayHeight > maxHeight) {
        displayWidth = (maxHeight * width) / height;
        displayHeight = maxHeight;
    }

    return { displayWidth, displayHeight };
}

export const DynamicImage = ({
    src,
    alt,
    className = "",
    maxWidth = 800,
    maxHeight = 600,
    onClick,
}: DynamicImageProps) => {
    const hasStaticDimensions = typeof src !== "string";
    const srcString = typeof src === "string" ? src : src.src;
    const { dimensions, isLoading, hasError } = useImageDimensions(
        srcString,
        !hasStaticDimensions
    );
    const [imageLoaded, setImageLoaded] = useState(false);

    const displayDimensions = useMemo(() => {
        if (hasStaticDimensions) {
            return fitDimensions(src.width, src.height, maxWidth, maxHeight);
        }

        if (!dimensions) {
            return null;
        }

        return fitDimensions(
            dimensions.width,
            dimensions.height,
            maxWidth,
            maxHeight
        );
    }, [src, hasStaticDimensions, dimensions, maxWidth, maxHeight]);

    if (hasError || (!displayDimensions && !isLoading)) {
        return (
            <Placeholder
                message="Immagine non disponibile"
                onClick={onClick}
            />
        );
    }

    if (isLoading || !displayDimensions) {
        return (
            <Placeholder message="Caricamento..." onClick={onClick} />
        );
    }

    const { displayWidth, displayHeight } = displayDimensions;

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
                    width: "auto",
                    height: "auto",
                }}
            />
        </div>
    );
};

function Placeholder({
    message,
    onClick,
}: {
    message: string;
    onClick?: () => void;
}) {
    return (
        <div
            className="bg-muted flex animate-pulse items-center justify-center rounded-lg"
            style={{ width: "100%", height: "300px" }}
            onClick={onClick}
        >
            <div className="text-muted-foreground">{message}</div>
        </div>
    );
}
