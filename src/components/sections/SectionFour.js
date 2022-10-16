import React from 'react'
import './SectionFour.css'

export const SectionFour = () => {
    return (
        <div id='additional-services' className='section section-four'>
            <div class="section-four__wrapper">
                <span className='section__title section__title--black'>Servizi Aggiuntivi</span>
                <div className='section-four__cards'>
                    <div className='section-four__card'>
                        <h2 className='section-four__card-title'>T-10</h2>
                    </div>
                    <div className='section-four__card'>
                        <h2 className='section-four__card-title'>T-12</h2>
                    </div>
                    <div className='section-four__card'>
                        <h2 className='section-four__card-title'>Triangolazione</h2>
                    </div>
                    <div className='section-four__card'>
                        <h2 className='section-four__card-title'>Document Return</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
