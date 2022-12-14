import './MainPage.css'
import LogoSection from '../components/sections/LogoSection'
import MottoSection from '../components/sections/MottoSection'
import ServicesSection from '../components/sections/ServicesSection'
import AdditionalSection from '../components/sections/AdditionalSection'
import MapSection from '../components/sections/MapSection'
import ContactsSection from '../components/sections/ContactsSection'
import AboutSection from '../components/sections/AboutSection'
import { useEffect, useState } from 'react'

export default function MainPage() {

    const [isSmallScreen, setIsSmallScreen] = useState(
        window.matchMedia('(max-width: 480px)').matches
    )
    const [isMediumScreen, setIsMediumScreen] = useState(
        window.matchMedia('(max-width: 768px)').matches
    )
    const [isLargeScreen, setIsLargeScreen] = useState(
        window.matchMedia('(max-width: 768px)').matches
    )

    useEffect(() => {
        window
            .matchMedia('(max-width: 480px)')
            .addEventListener('change', e => setIsSmallScreen(e.matches));
        window
            .matchMedia('(min-width: 480px) and (max-width: 768px)')
            .addEventListener('change', e => setIsMediumScreen(e.matches));
        window
            .matchMedia('(min-width: 768px) and (max-width: 1028px)')
            .addEventListener('change', e => setIsLargeScreen(e.matches));
    }, []);

    return (
        <div className='main-page'>
            <LogoSection />
            <MottoSection />
            <ServicesSection isSmallScreen={isSmallScreen} />
            <AdditionalSection />
            <MapSection isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen} isLargeScreen={isLargeScreen} />
            <AboutSection />
            <ContactsSection />
        </div>
    )
}