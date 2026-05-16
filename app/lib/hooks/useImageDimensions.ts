"use client";

import { useEffect, useRef, useState } from "react";

interface ImageDimensions {
    width: number;
    height: number;
    aspectRatio: number;
}

export const useImageDimensions = (src: string, enabled = true) => {
    const [dimensions, setDimensions] = useState<ImageDimensions | null>(null);
    const [isLoading, setIsLoading] = useState(enabled);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (!enabled || !src) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        setHasError(false);
        setDimensions(null);

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
            setHasError(true);
            setIsLoading(false);
        };

        img.src = src;
    }, [src, enabled]);

    return { dimensions, isLoading, hasError, imgRef };
};
