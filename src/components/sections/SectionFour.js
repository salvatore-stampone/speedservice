import React from 'react'
import FlippingCard from '../FlippingCard';
import './SectionFour.css'

export default function SectionFour() {
    return (
        <div id='additional-services' className='section section-four'>
            <div className='section-four__wrapper'>
                <span className='section__title section__title--black'>Servizi Aggiuntivi</span>
                <div className='section-four__cards'>
                    <FlippingCard title='T-10' description='Fai arrivare i tuoi pacchi entro le ore 10:00 del mattino seguente!' />
                    <FlippingCard title='T-12' description='Fai arrivare i tuoi pacchi entro le ore 12:00 del mattino seguente!' />
                    <FlippingCard title='Preavviso Telefonico' description='Back Preavviso Telefonico' />

                    <FlippingCard title='Mezzo Idoneo' description='Back Mezzo Idoneo' />
                    <FlippingCard title='Ora Fissa' description='Back Ora Fissa' />
                    <FlippingCard title='Consegna al Piano' description='Back Consegna al Piano' />

                    <FlippingCard title='Document Return' description='Back Document Return' />
                    <FlippingCard title='Exchange' description='Back Exchange' />
                    <FlippingCard title='Triangolazione' description='Back Triangolazione' />
                </div>
            </div>
        </div>
    )
}
