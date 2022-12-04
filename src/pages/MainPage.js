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
        window.matchMedia('(max-width: 900px)').matches //Desktop: false; smartphone: true
    )

    useEffect(() => {
        window
            .matchMedia('(max-width: 900px)')
            .addEventListener('change', e => setIsSmallScreen(e.matches));
    }, []);

    return (
        <div className='main-page'>
            <LogoSection />
            <MottoSection />
            <ServicesSection isSmallScreen={isSmallScreen} />
            <AdditionalSection />
            <MapSection isSmallScreen={isSmallScreen} />
            <AboutSection />
            <ContactsSection />
        </div>
    )
}