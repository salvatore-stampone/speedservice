import React from 'react'
import './SectionThree.css'
import upsLogo from '../../assets/images/ups-logo.png'
import brtFermopoint from '../../assets/images/brt-fermopoint.png'
import inPostPoint from '../../assets/images/inPost-point.png'
import wishLocal from '../../assets/images/wish-local.png'

export const SectionThree = () => {
    return (
        <div className='section section-three'>
            <span className='section__header'>I Nostri Servizi</span>

            <div className='section-three__cards'>
                <div className='section-three__card'>
                    <h2 className='section-three__card-title'>SPEDIZIONI</h2>
                    <h3 className='section-three__card-subtitle'>Nazionali</h3>
                    <h3 className='section-three__card-subtitle'>Internazionali</h3>
                    <h3 className='section-three__card-subtitle'>Ritiro a Domicilio</h3>

                    <h2 className='section-three__card-title'>GRANDI TRASPORTI</h2>
                    <h3 className='section-three__card-subtitle'>Traslochi</h3>
                    <h3 className='section-three__card-subtitle'>Trasporto Mezzi</h3>
                </div>
                <div className='section-three__card'>
                    <h2 className='section-three__card-title'>PICK UP &amp; DROP OFF</h2>
                    <h3 className='section-three__card-subtitle'>
                        <img src={upsLogo} className='section-three__image' />
                        UPS Access Point&trade;
                    </h3>
                    <h3 className='section-three__card-subtitle'>
                        <img src={brtFermopoint} className='section-three__image' />
                        BRT-fermopoint
                    </h3>
                    <h3 className='section-three__card-subtitle'>
                        <img src={inPostPoint} className='section-three__image' />
                        InPost Point
                    </h3>
                    <h3 className='section-three__card-subtitle'>
                        <img src={wishLocal} className='section-three__image' />
                        Wish Local
                    </h3>
                </div>
                <div className='section-three__card'>
                    <h2 className='section-three__card-title'>IMBALLAGGIO</h2>
                    <h3 className='section-three__card-subtitle'>Angoliere</h3>
                    <h3 className='section-three__card-subtitle'>Box in Polistirolo</h3>
                    <h3 className='section-three__card-subtitle'>Box Omologati UPS</h3>
                    <h3 className='section-three__card-subtitle'>Cartone al Metro</h3>
                    <h3 className='section-three__card-subtitle'>Indicatori Fragilità</h3>
                    <h3 className='section-three__card-subtitle'>Pallet</h3>
                    <h3 className='section-three__card-subtitle'>Pluriball Assortito</h3>
                    <h3 className='section-three__card-subtitle'>Reggia</h3>
                    <h3 className='section-three__card-subtitle'>Sacche Riempitive</h3>
                    <h3 className='section-three__card-subtitle'>Scatole Doppia Onda su Misura</h3>
                </div>
            </div>
        </div>
    )
}
