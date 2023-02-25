import React from "react";
import "./LogoSection.css";

export default function LogoSection() {
  return (
    <section id="home" className="section section-one">
      <img
        src={require("../../assets/images/logo-rounded.png")}
        alt="Logo"
        className="aspect-square w-[300px] mx-auto sm:w-[450px] md:w-[550px] lg:w-[700px]"
      />
    </section>
  );
}
