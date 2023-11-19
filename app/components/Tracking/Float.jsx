"use client";

import Image from "next/image";
import Link from "next/link";
import brt from "public/images/logo-squares/brt-square.jpg";
import dhl from "public/images/logo-squares/dhl-square.png";
import gls from "public/images/logo-squares/gls-square.jpg";
import sda from "public/images/logo-squares/sda-square.png";
import tnt from "public/images/logo-squares/tnt-square.png";
import ups from "public/images/logo-squares/ups-square.png";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Dropdown from "../Dropdown";

export default function Float() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFade(isModalOpen);
        }, 0);
    }, [isModalOpen]);

    const couriers = [
        {
            name: "BRT",
            image: brt,
            url: "https://services.brt.it/it/tracking",
        },
        {
            name: "DHL",
            image: dhl,
            url: "https://www.dhl.com/it-it/home/tracciabilita.html",
        },
        {
            name: "GLS",
            image: gls,
            url: "https://www.gls-italy.com/it/servizi-per-destinatari/ricerca-spedizione/",
        },
        {
            name: "SDA",
            image: sda,
            url: "https://www.sda.it/wps/portal/Servizi_online/ricerca_spedizioni?locale=it",
        },
        {
            name: "TNT",
            image: tnt,
            url: "https://www.tnt.it/tracking/Tracking.do",
        },
        {
            name: "UPS",
            image: ups,
            url: "https://www.ups.com/track?loc=it_IT&requester=ST/",
        },
    ];

    return (
        <>
            {isModalOpen && (
                <>
                    {/* BACKDROP */}
                    <div
                        class="absolute inset-0 z-20 backdrop-blur-md"
                        onClick={() => setIsModalOpen(false)}
                    ></div>
                    <div
                        className={`${isModalOpen ? "flex" : "hidden"} ${
                            fade ? "opacity-100" : "opacity-0"
                        } fixed left-[50%] top-[40%] z-20 h-40 w-80 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-light shadow-2xl transition-opacity duration-500 lg:w-96`}
                    >
                        <IoCloseSharp
                            className="absolute right-5 top-4 cursor-pointer text-xl hover:text-primary"
                            onClick={() => {
                                setIsModalOpen(false);
                                setIsDropdownOpen(false);
                            }}
                        />
                        <Dropdown
                            trigger={
                                <button
                                    className={`text-lg transition-colors hover:text-primary lg:text-xl ${
                                        isDropdownOpen
                                            ? "text-primary"
                                            : "text-black"
                                    }`}
                                >
                                    Seleziona il tuo corriere
                                    <RiArrowDropDownLine
                                        className={`inline text-2xl ${
                                            isDropdownOpen && "rotate-180"
                                        } transition-all duration-300`}
                                    />
                                </button>
                            }
                            menu={couriers.map((courier) => {
                                return (
                                    <Link
                                        className="block h-full w-full cursor-pointer border-none p-1.5 text-left"
                                        href={courier.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={() => setIsModalOpen(false)}
                                        key={courier.name}
                                    >
                                        <Image
                                            src={courier.image}
                                            alt={courier.name}
                                            className="mr-2 inline-block aspect-square w-8 rounded-full"
                                        />
                                        {courier.name}
                                    </Link>
                                );
                            })}
                            isDropdownOpen={isDropdownOpen}
                            setIsDropdownOpen={setIsDropdownOpen}
                        />
                    </div>
                </>
            )}
            <button
                onClick={() => {
                    setIsModalOpen(!isModalOpen);
                }}
                className="float left-4 z-[2] cursor-pointer rounded-full bg-primary-dark px-4 py-4 text-light"
            >
                TRACKING
            </button>
        </>
    );
}
