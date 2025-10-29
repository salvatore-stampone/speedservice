import Image from "next/image";
import mooneyLogo from "public/images/mooney.png";
import { FaCreditCard, FaLightbulb } from "react-icons/fa";
import FlippingCard from "../FlippingCard";
import "./AdditionalSection.css";

export default function AdditionalSection() {
    return (
        <section id="additional-services" className="section pt-10">
            <div className="section-four__wrapper">
                <span className="section__title section__title--black">
                    Servizi Aggiuntivi
                </span>
                <div className="section-four__cards">
                    <FlippingCard
                        title="T-10/T-12"
                        description="La tua spedizione arriverà entro le ore 10:00/12:00 del giorno successivo."
                    />
                    <FlippingCard
                        title="Preavviso Telefonico"
                        description="Il corriere preavviserà tassativamente prima della consegna."
                    />
                    <FlippingCard
                        title="Mezzo Idoneo"
                        description="Un mezzo a misura delle tue esigenze preleverà la tua merce."
                    />

                    <FlippingCard
                        title="Consegna al Piano"
                        description="Il corriere consegnerà la tua merce fino al pianerottolo della tua abitazione."
                    />
                    <FlippingCard
                        title="Document Return"
                        description="Riceverai una scansione del documento compilato e firmato dal destinatario."
                    />
                    <FlippingCard
                        title="Exchange"
                        description="La consegna al destinatario avverrà previo suo rilascio della merce da inoltrare al mittente."
                    />

                    <FlippingCard
                        title="Triangolazione"
                        description="Mittente ed indirizzo di ritiro possono non coincidere: decidi tu dove ritirare."
                    />
                    <FlippingCard
                        title="Attivazione Luce e Gas"
                        description="Attiviamo la luce e il gas per te in collaborazione con AGF Energy, previa consulenza gratuita!"
                        icon={<FaLightbulb />}
                    />
                    <FlippingCard
                        title={
                            <Image
                                src={mooneyLogo}
                                alt="Mooney Logo"
                                width={2560}
                                height={531}
                                className="h-full w-[160px] object-contain"
                            />
                        }
                        description="Siamo partner Mooney! Rivolgiti a noi per ricariche, pagamenti e molto altro ancora."
                        icon={<FaCreditCard />}
                    />
                </div>
            </div>
        </section>
    );
}
