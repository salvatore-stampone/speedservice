import React from "react";
import GridCards from "../GridCards";

export default function ContactsSection() {
    return (
        <section id="contacts" className="section bg-[var(--primary-clr)]">
            <div className="max-w-[850px]">
                <span className="section__title text-[var(--light-clr)]">
                    Contattaci
                </span>
                <span className="section__subtitle text-[var(--light-clr)]">
                    Per un preventivo gratuito e per qualsiasi dubbio, puoi
                    trovarci ai seguenti recapiti:
                </span>
                <GridCards />
            </div>
        </section>
    );
}
