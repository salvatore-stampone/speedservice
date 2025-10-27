import Image from "next/image";
import "./LogoSection.css";

export default function LogoSection() {
    return (
        <section id="home" className="section section-one">
            <Image
                src="/images/logo-wordmark.png"
                width={1600}
                height={1600}
                alt="Speedservice logo"
                className="z-2 mx-auto aspect-square w-[300px] sm:w-[450px] md:w-[550px] lg:w-[700px]"
                priority
            />
        </section>
    );
}
