import "./LogoSection.css";

export default function LogoSection() {
    return (
        <section id="home" className="section section-one">
            <img
                src="/images/logo-rounded.png"
                alt="Logo"
                className="mx-auto aspect-square w-[300px] sm:w-[450px] md:w-[550px] lg:w-[700px]"
            />
            {/* <Image
                src="/images/logo-rounded.png"
                width={1600}
                height={1600}
                alt="Logo"
                className="mx-auto aspect-square w-[300px] sm:w-[450px] md:w-[550px] lg:w-[700px]"
            /> */}
        </section>
    );
}
