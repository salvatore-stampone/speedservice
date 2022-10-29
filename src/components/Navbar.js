import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
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
                    <a href="#gallery" className='navbar__nav-link'>Gallery</a>
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
    )
}
