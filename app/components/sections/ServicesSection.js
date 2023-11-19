import Image from "next/image";
import brtFermopoint from "public/images/brt-fermopoint.png";
import inPostPoint from "public/images/inPost-point.png";
import upsLogo from "public/images/ups-logo.png";
import wishLocal from "public/images/wish-local.png";
import { BsBoxSeam } from "react-icons/bs";
import { FaPeopleCarry, FaTruckLoading } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
import { RiHomeHeartLine, RiMotorbikeLine } from "react-icons/ri";
import "./ServicesSection.css";

export default function ServicesSection({ isSmallScreen }) {
    return (
        <section id="services" className="section bg-[var(--secondary-clr)]">
            <span className="section__title">I Nostri Servizi</span>
            <div
                className={
                    isSmallScreen
                        ? "section-three__cards small"
                        : "section-three__cards"
                }
            >
                <div className="section-three__card">
                    <h2 className="section-three__card-title">SPEDIZIONI</h2>
                    <h3 className="section-three__card-subtitle">
                        <RiHomeHeartLine className="section-three__icon" />
                        Nazionali
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <IoEarthOutline className="section-three__icon" />
                        Internazionali
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <FaPeopleCarry className="section-three__icon" />
                        Ritiro a Domicilio
                    </h3>

                    <hr className="horizontal-rule" />

                    <h2 className="section-three__card-title">
                        GRANDI TRASPORTI
                    </h2>
                    <h3 className="section-three__card-subtitle">
                        <FaTruckLoading className="section-three__icon" />
                        Traslochi
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <RiMotorbikeLine className="section-three__icon" />
                        Trasporto Mezzi
                    </h3>
                </div>
                <div className="section-three__card">
                    <h2 className="section-three__card-title">
                        PICK UP &amp; DROP OFF
                    </h2>
                    <h3 className="section-three__card-subtitle">
                        <Image
                            src={upsLogo}
                            alt="UPS Logo"
                            className="section-three__image"
                        />
                        UPS Access Point&trade;
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <Image
                            src={brtFermopoint}
                            alt="BRT Logo"
                            className="section-three__image"
                        />
                        BRT-fermopoint
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <Image
                            src={inPostPoint}
                            alt="inPost Logo"
                            className="section-three__image"
                        />
                        InPost Point
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <Image
                            src={wishLocal}
                            alt="Wish Logo"
                            className="section-three__image"
                        />
                        Wish Local
                    </h3>

                    <hr className="horizontal-rule" />

                    <h2 className="section-three__card-title">SICUREZZA</h2>
                    <h3 className="section-three__card-subtitle">
                        <BsBoxSeam className="section-three__icon" />
                        Pluriball Assortito
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <BsBoxSeam className="section-three__icon" />
                        Sacche Riempitive
                    </h3>
                </div>
                <div className="section-three__card">
                    <h2 className="section-three__card-title">IMBALLO</h2>
                    <h3 className="section-three__card-subtitle">
                        <BsBoxSeam className="section-three__icon" />
                        Angoliere
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <BsBoxSeam className="section-three__icon" />
                        Box in Polistirolo
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <BsBoxSeam className="section-three__icon" />
                        Box Omologati UPS
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <BsBoxSeam className="section-three__icon" />
                        Cartone al Metro
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <BsBoxSeam className="section-three__icon" />
                        Indicatori Fragilità
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <BsBoxSeam className="section-three__icon" />
                        Pallet
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <BsBoxSeam className="section-three__icon" />
                        Reggia
                    </h3>
                    <h3 className="section-three__card-subtitle">
                        <BsBoxSeam className="section-three__icon" />
                        Scatole a Doppia Onda
                    </h3>
                </div>
            </div>
        </section>
    );
}
