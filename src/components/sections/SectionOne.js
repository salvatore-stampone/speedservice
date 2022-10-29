import React from 'react'
import './SectionOne.css'

export default function SectionOne() {
    return (
        <section id='home' className='section section-one'>
            <img src={require('../../assets/images/logo-no-text.png')} alt='Logo' className='logo' />
            <span className='section-one__name'>NEW SPEEDSERVICE</span>
        </section>
    )
}
