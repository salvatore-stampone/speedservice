import React from "react";
import GridCards from "../GridCards";

export default function ContactsSection() {
    return (
        <section id="contacts" className="section">
            <div className="max-w-[850px]">
                <span className="section__title">Contattaci</span>
                <span className="section__subtitle">
                    Per un preventivo gratuito e per qualsiasi dubbio, puoi
                    trovarci ai seguenti recapiti:
                </span>
                <GridCards />
            </div>
        </section>
    );
}
