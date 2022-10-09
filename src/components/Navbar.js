import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar__nav-list'>
                <li className='navbar__nav-item'>
                    <a href="#section-one" className='navbar__nav-link'>Home</a>
                </li>
                {/* <li className='navbar__nav-item'>
                    <a href="#section-two" className='navbar__nav-link'>Two</a>
                </li> */}
                <li className='navbar__nav-item'>
                    <a href="#section-three" className='navbar__nav-link'>Servizi</a>
                </li>
                <li className='navbar__nav-item'>
                    <a href="#section-four" className='navbar__nav-link'>Servizi Aggiuntivi</a>
                </li>
                <li className='navbar__nav-item'>
                    <a href="#section-five" className='navbar__nav-link'>Come Raggiungerci</a>
                </li>
                <li className='navbar__nav-item'>
                    <a href="#section-six" className='navbar__nav-link'>Chi Siamo</a>
                </li>
                <li className='navbar__nav-item'>
                    <a href="#section-one" className='navbar__nav-link'>Contatti</a>
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
