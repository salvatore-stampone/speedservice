"use client";

import Image from "next/image";
import Link from "next/link";
import flippedVehiclesLogo from "public/images/flipped-vehicles-logo.png";
import vehiclesLogo from "public/images/vehicles-logo.png";
import flyerImage from "public/images/vehicles/flyer.jpeg";
import { useState } from "react";

export default function Formula1Banner({ setShowModal }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showPreview, setShowPreview] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleMouseMove = (e) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const handleMouseEnter = () => {
        setShowPreview(true);
    };

    const handleMouseLeave = () => {
        setShowPreview(false);
    };

    return (
        <div className="absolute top-32 right-0 left-0 z-1 h-[30px] w-full overflow-visible">
            {/* Parent div for positioning */}
            <div className="absolute -top-4 right-0 left-0 bg-red-500">
                {/* Text and logo container (LEFT) */}
                <div
                    className="group absolute top-1/2 left-0 -translate-y-1/2 cursor-pointer px-4 text-lg font-bold whitespace-nowrap text-black transition-all duration-1000 ease-in-out"
                    onClick={handleClick}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
                        Trasporto veicoli a domicilio
                    </span>
                    {/* 🚗 */}
                    <Image
                        src={vehiclesLogo}
                        alt="Vehicles Logo"
                        width={1080}
                        height={1080}
                        className="navbar-logo absolute top-1/2 left-0 h-10 w-auto -translate-y-1/2 transition-all duration-1000 ease-in-out group-hover:translate-x-[calc(100%*3)] sm:h-12"
                    />
                    {/* NEW Badge */}
                    <span className="absolute -top-8 left-2 z-10 inline-block rotate-[-10deg] animate-pulse rounded-full bg-linear-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text px-2 py-0.5 text-[20px] font-bold text-transparent">
                        NEW
                    </span>
                </div>
                {/* Text and logo container (RIGHT) */}
                <Link
                    href="/vehicles"
                    className="group absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer px-4 text-lg font-bold whitespace-nowrap text-black transition-all duration-1000 ease-in-out"
                >
                    <span className="opacity-0 transition-opacity duration-1000 ease-in-out group-hover:opacity-100">
                        Veicoli usati
                    </span>
                    {/* 🚗 */}
                    <Image
                        src={flippedVehiclesLogo}
                        alt="Vehicles Logo"
                        width={1080}
                        height={1080}
                        className="navbar-logo absolute top-1/2 right-0 h-10 w-auto -translate-y-1/2 transition-all duration-1000 ease-in-out group-hover:translate-x-[calc(100%*-1.5)] sm:h-12"
                    />
                </Link>
            </div>

            {/* Bandiera a scacchiera divisa in due trapezi */}
            <div className="checkered-pattern relative">
                <div className="trapezoid-left"></div>
                <div className="trapezoid-right"></div>
            </div>

            {/* Preview del flyer che segue il mouse */}
            {showPreview && (
                <div
                    className="pointer-events-none fixed z-50 w-[400px]"
                    style={{
                        left: `${mousePosition.x + 20}px`,
                        top: `${mousePosition.y}px`,
                    }}
                >
                    <Image
                        src={flyerImage}
                        alt="Volantino - Trasporto veicoli a domicilio"
                        width={1024}
                        height={1536}
                        className="w-full rounded-lg border-2 border-black/20"
                        priority
                    />
                </div>
            )}
        </div>
    );
}
