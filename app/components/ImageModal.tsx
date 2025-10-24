"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    title: string;
    currentIndex: number;
}

export const ImageModal = ({
    isOpen,
    onClose,
    images,
    title,
    currentIndex,
}: ImageModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-background/95 h-[90vh] w-full max-w-6xl border-0 p-0 backdrop-blur-md">
                <DialogHeader className="p-6 pb-4">
                    <div className="flex items-center justify-between">
                        <DialogTitle className="text-xl font-bold">
                            {title}
                        </DialogTitle>
                    </div>
                </DialogHeader>

                <div className="flex-1 px-6 pb-6">
                    <Carousel
                        className="h-full w-full"
                        opts={{
                            align: "start",
                            loop: true,
                            startIndex: currentIndex,
                        }}
                    >
                        <CarouselContent className="h-full">
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="h-full">
                                    <div className="flex h-full items-center justify-center">
                                        <ModalImage
                                            src={image}
                                            alt={`${title} - Immagine ${index + 1}`}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                    </Carousel>
                </div>
            </DialogContent>
        </Dialog>
    );
};

const ModalImage = ({ src, alt }: { src: string; alt: string }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="flex h-[70vh] w-full items-center justify-center">
            <Image
                src={src}
                alt={alt}
                width={1000}
                height={700}
                className="max-h-full max-w-full rounded-lg object-contain transition-all duration-500 ease-in-out"
                onLoad={() => setImageLoaded(true)}
                style={{
                    opacity: imageLoaded ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                }}
            />
        </div>
    );
};
