import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { BiMenuAltRight } from 'react-icons/bi';
import './Navbar.css'

export default function Navbar() {

    const [isSmallScreen, setIsSmallScreen] = useState(
        window.matchMedia('(max-width: 900px)').matches //Desktop: false; smartphone: true
    )
    const [isNavbarActive, setIsNavbarActive] = useState(false)

    useEffect(() => {
        window
            .matchMedia('(max-width: 900px)')
            .addEventListener('change', e => setIsSmallScreen(e.matches));
    }, []);

    const compactNavbar = <>
        <button onClick={() => setIsNavbarActive(!isNavbarActive)
        } className="sidebar__menu-icon" style={{ backgroundColor: isNavbarActive ? 'var(--light-clr)' : 'var(--primary-clr)', color: isNavbarActive ? 'var(--primary-clr)' : 'var(--light-clr)' }}>
            {isNavbarActive ? <IoClose /> : <BiMenuAltRight />}
        </button >
        <div className={`sidebar ${isNavbarActive ? 'active' : ''}`}>
            <ul className='navbar__nav-list'>
                <li className='navbar__nav-item'>
                    <a href="#home" className='navbar__nav-link' onClick={() => setIsNavbarActive(false)}>Home</a>
                </li>
                <li className='navbar__nav-item'>
                    <a href="#services" className='navbar__nav-link' onClick={() => setIsNavbarActive(false)}>Servizi</a>
                </li>
                <li className='navbar__nav-item'>
                    <a href="#additional-services" className='navbar__nav-link' onClick={() => setIsNavbarActive(false)}>Servizi Aggiuntivi</a>
                </li>
                <li className='navbar__nav-item'>
                    <a href="#where" className='navbar__nav-link' onClick={() => setIsNavbarActive(false)}>Vieni a Trovarci</a>
                </li>
                {/* <li className='navbar__nav-item'>
                    <a href="#gallery" className='navbar__nav-link' onClick={() => setIsNavbarActive(false)}>Gallery</a>
                </li> */}
                <li className='navbar__nav-item'>
                    <a href="#about" className='navbar__nav-link' onClick={() => setIsNavbarActive(false)}>Chi Siamo</a>
                </li>
                <li className='navbar__nav-item'>
                    <a href="#contacts" className='navbar__nav-link' onClick={() => setIsNavbarActive(false)}>Contattaci</a>
                </li>
                {/* <li className='navbar__nav-item'>
                    <a href="#section-one" className='navbar__nav-link' onClick={() => setIsNavbarActive(false)}>Monitora Spedizione</a>
                </li> */}
                {/* <li className='navbar__nav-item'>
                    <a href="#section-one" className='navbar__nav-link' onClick={() => setIsNavbarActive(false)}>Dicono di Noi</a>
                </li> */}
            </ul>
        </div>
        <div className='sidebar__backdrop'></div>
    </>

    const largeNavbar = <nav className='navbar'>
        <ul className='navbar__nav-list'>
            <li className='navbar__nav-item'>
                <a href="#home" className='navbar__nav-link'>Home</a>
            </li>
            <li className='navbar__nav-item'>
                <a href="#services" className='navbar__nav-link'>Servizi</a>
            </li>
            <li className='navbar__nav-item'>
                <a href="#additional-services" className='navbar__nav-link'>Servizi Aggiuntivi</a>
            </li>
            <li className='navbar__nav-item'>
                <a href="#where" className='navbar__nav-link'>Vieni a Trovarci</a>
            </li>
            <li className='navbar__nav-item'>
                <a href="#about" className='navbar__nav-link'>Chi Siamo</a>
            </li>
            <li className='navbar__nav-item'>
                <a href="#contacts" className='navbar__nav-link'>Contattaci</a>
            </li>
            {/* <li className='navbar__nav-item'>
                    <a href="#section-one" className='navbar__nav-link'>Monitora Spedizione</a>
                </li> */}
            {/* <li className='navbar__nav-item'>
                    <a href="#section-one" className='navbar__nav-link'>Dicono di Noi</a>
                </li> */}
        </ul>
    </nav>

    if (isSmallScreen) {
        return compactNavbar
    } else {
        return largeNavbar
    }

}
