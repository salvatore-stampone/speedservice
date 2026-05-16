import Image from "next/image";
import speedUsatoGarantito from "public/images/landing/speed-usato-garantito.png";

export default function VehiclesLogoSection() {
    return (
        <section
            id="home"
            className="bg-card -mx-3 px-3 py-8 sm:-mx-4 sm:px-4 sm:py-10 lg:-mx-8 lg:px-8"
        >
            <Image
                src={speedUsatoGarantito}
                alt="Speed Usato Garantito"
                className="mx-auto aspect-square w-[min(100%,400px)] object-contain sm:w-[450px] md:w-[550px] lg:w-[700px]"
                priority
            />
        </section>
    );
}
