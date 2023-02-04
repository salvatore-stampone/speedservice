import React, { useEffect } from 'react'
import { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import Dropdown from '../Dropdown';
import brt from '../../assets/images/logo-squares/brt-square.jpg'
import dhl from '../../assets/images/logo-squares/dhl-square.png'
import gls from '../../assets/images/logo-squares/gls-square.jpg'
import sda from '../../assets/images/logo-squares/sda-square.png'
import tnt from '../../assets/images/logo-squares/tnt-square.png'
import ups from '../../assets/images/logo-squares/ups-square.png'
import { IoCloseCircle, IoCloseSharp } from 'react-icons/io5';

export default function Float() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setFade(isModalOpen)
        }, 0)
    }, [isModalOpen])

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
            {isModalOpen &&
                <div className={`${isModalOpen ? 'flex' : 'hidden'} ${fade ? 'opacity-100' : 'opacity-0'} fixed top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 bg-light w-80 h-40 items-center justify-center rounded-2xl shadow-2xl lg:w-96 transition-opacity duration-500`}>
                    <IoCloseSharp
                        className='absolute top-4 right-5 text-xl cursor-pointer hover:text-primary'
                        onClick={() => {
                            setIsModalOpen(false)
                            setIsDropdownOpen(false)
                        }
                        } />
                    <Dropdown
                        trigger={
                            <button className={`text-lg hover:text-primary transition-colors lg:text-xl ${isDropdownOpen ? 'text-primary' : 'text-black'}`}>
                                Seleziona il tuo corriere
                                <RiArrowDropDownLine className={`inline text-2xl ${isDropdownOpen && 'rotate-180'} transition-all duration-300`} />
                            </button>}
                        menu={
                            couriers.map((courier) => {
                                return (
                                    <a
                                        className='w-full h-full text-left border-none p-1.5 cursor-pointer block'
                                        href={courier.url}
                                        target='_blank'
                                        rel='noreferrer'
                                        onClick={() => setIsModalOpen(false)}>
                                        <img
                                            src={courier.image}
                                            alt={courier.name}
                                            className='rounded-full aspect-square w-8 inline-block mr-2' />
                                        {courier.name}
                                    </a>
                                )
                            })
                        }
                        isDropdownOpen={isDropdownOpen}
                        setIsDropdownOpen={setIsDropdownOpen}
                    />
                </div>}
            <button
                onClick={() => { setIsModalOpen(!isModalOpen) }}
                className="float left-4 bg-primary-dark text-light py-4 px-4 rounded-full z-[2] cursor-pointer"
            >
                TRACKING
            </button>
        </>
    )
}
