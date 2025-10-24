"use client";

import { useEffect, useRef, useState } from "react";

interface ImageDimensions {
    width: number;
    height: number;
    aspectRatio: number;
}

export const useImageDimensions = (src: string) => {
    const [dimensions, setDimensions] = useState<ImageDimensions | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!src) return;

        const img = new Image();

        img.onload = () => {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            setDimensions({
                width: img.naturalWidth,
                height: img.naturalHeight,
                aspectRatio,
            });
            setIsLoading(false);
        };

        img.onerror = () => {
            setIsLoading(false);
        };

        img.src = src;
    }, [src]);

    return { dimensions, isLoading, imgRef };
};
