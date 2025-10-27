"use client";

import Image from "next/image";

export default function SimpleModal({ isOpen, onClose, image, title }) {
    if (!isOpen) return null;

    return (
        <div
            style={{ zIndex: 9999 }}
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-h-[90vh] max-w-6xl overflow-auto rounded-lg bg-white p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 rounded-full bg-gray-200 p-2 text-gray-700 transition-colors hover:bg-gray-300"
                    aria-label="Chiudi"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Title */}
                <h2 className="mb-4 text-xl font-bold">{title}</h2>

                {/* Image */}
                <div className="flex items-center justify-center">
                    <Image
                        src={image}
                        alt={title}
                        width={1024}
                        height={1536}
                        className="max-h-[70vh] w-auto rounded-lg object-contain"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
