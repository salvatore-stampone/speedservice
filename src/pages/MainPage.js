import './MainPage.css'
import SectionOne from '../components/sections/SectionOne'
import SectionTwo from '../components/sections/SectionTwo'
import SectionThree from '../components/sections/SectionThree'
import SectionFour from '../components/sections/SectionFour'

export default function MainPage() {
    return (
        <div className='main-page'>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
    )
}