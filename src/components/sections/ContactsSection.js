import React from "react";
import GridCards from "../GridCards";

export default function ContactsSection() {
  return (
    <section id="contacts" className="section bg-[var(--light-clr)]">
      <div className="max-w-[850px]">
        <span className="section__title section__title--black">Contattaci</span>
        <span className="section__subtitle section__subtitle--black">
          Per un preventivo gratuito e per qualsiasi dubbio, puoi trovarci ai
          seguenti recapiti:
        </span>
        <GridCards />
      </div>
    </section>
  );
}
