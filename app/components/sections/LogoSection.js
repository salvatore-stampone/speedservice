import Image from "next/image";
import logo from "public/images/logo-rounded.png";
import "./LogoSection.css";

export default function LogoSection() {
    return (
        <section id="home" className="section section-one">
            <Image
                src={logo}
                alt="Logo"
                className="aspect-square w-[300px] mx-auto sm:w-[450px] md:w-[550px] lg:w-[700px]"
            />
        </section>
    );
}
