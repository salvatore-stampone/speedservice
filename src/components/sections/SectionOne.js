import React from 'react'
import './SectionOne.css'

export const SectionOne = () => {
    return (
        <div id='section-one' className='section section-one'>
            <img src={require('../../assets/images/logo-no-text.png')} alt='Logo' className='logo' />
            <span className='section-one__name'>SPEEDSERVICE</span>
        </div>
    )
}
