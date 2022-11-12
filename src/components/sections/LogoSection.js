import React from 'react'
import './LogoSection.css'

export default function LogoSection() {
    return (
        <section id='home' className='section section-one'>
            <img src={require('../../assets/images/logo-no-text.png')} alt='Logo' className='logo' />
            <span className='section-one__name'>SPEEDSERVICE LUCERA</span>
        </section>
    )
}
