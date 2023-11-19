"use client";

import AboutSection from "@/components/sections/AboutSection";
import AdditionalSection from "@/components/sections/AdditionalSection";
import ContactsSection from "@/components/sections/ContactsSection";
import EstimateSection from "@/components/sections/EstimateSection";
import LogoSection from "@/components/sections/LogoSection";
import MottoSection from "@/components/sections/MottoSection";
import ParcelCollectionSection from "@/components/sections/ParcelCollectionSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { useWindowSize } from "@/lib/hooks";
import MapSection from "../components/sections/MapSection";

export default function MainPage() {
    const { width } = useWindowSize();
    const isSmallScreen = width <= 480;
    const isMediumScreen = width <= 768;
    const isLargeScreen = width > 768;

    return (
        <div className="main-page">
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
