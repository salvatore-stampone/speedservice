import './MainPage.css'
import LogoSection from '../components/sections/LogoSection'
import MottoSection from '../components/sections/MottoSection'
import ServicesSection from '../components/sections/ServicesSection'
import AdditionalSection from '../components/sections/AdditionalSection'
import MapSection from '../components/sections/MapSection'
import ContactsSection from '../components/sections/ContactsSection'
import AboutSection from '../components/sections/AboutSection'

export default function MainPage() {
    return (
        <div className='main-page'>
            <LogoSection />
            <MottoSection />
            <ServicesSection />
            <AdditionalSection />
            <MapSection />
            <AboutSection />
            <ContactsSection />
        </div>
    )
}