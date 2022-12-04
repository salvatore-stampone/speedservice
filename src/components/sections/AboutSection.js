import React from 'react'
import './AboutSection.css'

export default function AboutSection() {
    return (
        <section id='about' className='section about-section'>
            <div className='about-section__wrapper'>
                <span className='section__title section__title--black' style={{ margin: '0px' }}>Chi siamo</span>
                <div className='about-section__text-wrapper'>
                    <p className='about-section__text'>Siamo una piccola ma dinamica realtà nata a Lucera nel 2016: siamo <span className='about-section__highlight'>Speedservice</span>.</p>
                    <p className='about-section__text'>
                        <span className='about-section__highlight'>Matteo</span>, founder dell’azienda, aveva grandi <span className='about-section__highlight'>obiettivi</span>: corriere in prima istanza, ha autodeterminato alcuni di essi già raggiunti, altri in fase di raggiungimento, ma tutti certamente <span className='about-section__highlight'>possibili</span> grazie alla risolutezza e alla <span className='about-section__highlight'>professionalità</span> che ci contraddistinguono, nonché grazie alla <span className='about-section__highlight'>fiducia</span> che, giornalmente, i clienti ripongono in noi.
                    </p>
                    <p className='about-section__text'>
                        Attivi nell’ambito della <span className='about-section__highlight'>logistica</span>, fisicamente impegnati sul suolo della Capitanata, questo non ha mai rappresentato un limite: lavoriamo costantemente affinché qualsiasi spostamento merce risulti <span className='about-section__highlight'>fattibile</span>, e nel minor tempo possibile, azzerando le distanze più ostinate!
                    </p>
                    <p className='about-section__text'>
                        <span className='about-section__highlight'>Velocità</span>, <span className='about-section__highlight'>avanguardia</span>, <span className='about-section__highlight'>esperienza</span> ed <span className='about-section__highlight'>abilità</span>: questo è quanto potersi aspettare da noi e dal nostro lavoro.
                    </p>
                </div>
            </div>
        </section >
    )
}
