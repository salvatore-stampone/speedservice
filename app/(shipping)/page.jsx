"use client";

import { ImageModal } from "@/components/ImageModal";
import AboutSection from "@/components/shipping/sections/AboutSection";
import AdditionalSection from "@/components/shipping/sections/AdditionalSection";
import ContactsSection from "@/components/shipping/sections/ContactsSection";
import EstimateSection from "@/components/shipping/sections/EstimateSection";
import Formula1Banner from "@/components/shipping/sections/Formula1Banner";
import LogoSection from "@/components/shipping/sections/LogoSection";
import MapSection from "@/components/shipping/sections/MapSection";
import MottoSection from "@/components/shipping/sections/MottoSection";
import ParcelCollectionSection from "@/components/shipping/sections/ParcelCollectionSection";
import ServicesSection from "@/components/shipping/sections/ServicesSection";
import { useWindowSize } from "@/lib/hooks";
import "@/styles/tailwind.shipping.css";
import flyerImage from "public/images/vehicles/flyer.jpeg";
import { useState } from "react";

export default function MainPage() {
    const { width } = useWindowSize();
    const [showModal, setShowModal] = useState(false);

    const isSmallScreen = width <= 480;
    const isMediumScreen = width <= 768;
    const isLargeScreen = width > 768;

    return (
        <div className="main-page">
            <Formula1Banner setShowModal={setShowModal} />
            {/* Modal per mostrare il flyer a schermo intero */}
            {flyerImage && (
                <ImageModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    images={[flyerImage]}
                    title="Volantino - Trasporto veicoli a domicilio"
                    currentIndex={0}
                />
            )}
            <LogoSection />
            <MottoSection />
            <ServicesSection isSmallScreen={isSmallScreen} />
            <AdditionalSection />
            <EstimateSection />
            <ParcelCollectionSection />
            <MapSection
                isSmallScreen={isSmallScreen}
                isMediumScreen={isMediumScreen}
                isLargeScreen={isLargeScreen}
            />
            <AboutSection />
            <ContactsSection />
        </div>
    );
}
