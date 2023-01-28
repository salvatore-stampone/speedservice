import React from 'react'
import { useState } from 'react'
import { BsBoxSeam } from "react-icons/bs"
import { RiArrowDropDownLine } from 'react-icons/ri';
import Dropdown from '../Dropdown';
import brt from '../../assets/images/logo-squares/brt-square.jpg'
import dhl from '../../assets/images/logo-squares/dhl-square.png'
import gls from '../../assets/images/logo-squares/gls-square.jpg'
import sda from '../../assets/images/logo-squares/sda-square.png'
import tnt from '../../assets/images/logo-squares/tnt-square.png'
import ups from '../../assets/images/logo-squares/ups-square.png'

export default function Float() {

    const [isOpen, setIsOpen] = useState(false)

    const couriers = [
        {
            name: 'BRT',
            image: brt,
            url: 'https://services.brt.it/it/tracking',
        },
        {
            name: 'DHL',
            image: dhl,
            url: 'https://www.dhl.com/it-it/home/tracciabilita.html',
        },
        {
            name: 'GLS',
            image: gls,
            url: 'https://www.gls-italy.com/it/servizi-per-destinatari/ricerca-spedizione/',
        },
        {
            name: 'SDA',
            image: sda,
            url: 'https://www.sda.it/wps/portal/Servizi_online/ricerca_spedizioni?locale=it',
        },
        {
            name: 'TNT',
            image: tnt,
            url: 'https://www.tnt.it/tracking/Tracking.do',
        },
        {
            name: 'UPS',
            image: ups,
            url: 'https://www.ups.com/track?loc=it_IT&requester=ST/',
        },
    ]

    return (
        <>
            {isOpen &&
                <div className='fixed top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 bg-light w-80 h-40 flex items-center justify-center rounded-2xl shadow-2xl lg:w-96'>
                    <Dropdown
                        trigger={
                            <button className='text-lg hover:text-primary transition-colors lg:text-xl'>
                                Seleziona il tuo corriere
                                <RiArrowDropDownLine className='inline text-2xl' />
                            </button>}
                        menu={
                            couriers.map((courier) => {
                                return (
                                    <a className='w-full h-full text-left border-none p-1.5 cursor-pointer block' href={courier.url} target='_blank' rel='noreferrer'>
                                        <img src={courier.image} alt={courier.name} className='rounded-full aspect-square w-8 inline-block mr-2' />
                                        {courier.name}
                                    </a>
                                )
                            })
                        }
                    />
                </div>}
            <button
                onClick={() => { setIsOpen(!isOpen) }}
                className="float left-4 bg-primary-dark text-light py-4 px-4 rounded-full z-[2] cursor-pointer"
            >
                TRACKING
            </button>
        </>
    )
}
