"use client";

import { Icon } from "@iconify/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";
import car1 from "public/images/cars/1/1.jpeg";
import car2 from "public/images/cars/1/2.jpeg";
import car3 from "public/images/cars/1/3.jpeg";
import car4 from "public/images/cars/1/4.jpeg";
import car5 from "public/images/cars/1/5.jpeg";
import car6 from "public/images/cars/1/6.jpeg";
type Props = {};

const page = (props: Props) => {
    return (
        <div className="mx-auto flex max-w-[1024px] flex-col items-center justify-center gap-y-8 px-[22px] py-10">
            <h1 className="text-[30px] font-bold">IN VENDITA</h1>
            <Splide
                options={{
                    rewind: true,
                    gap: "1rem",
                    focus: "center",
                    autoWidth: true,
                }}
                aria-label="Images"
            >
                <SplideSlide>
                    <Image src={car1} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <Image src={car2} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                    <Image src={car3} alt="Image 3" />
                </SplideSlide>
                <SplideSlide>
                    <Image src={car4} alt="Image 3" />
                </SplideSlide>
                <SplideSlide>
                    <Image src={car5} alt="Image 3" />
                </SplideSlide>
                <SplideSlide>
                    <Image src={car6} alt="Image 3" />
                </SplideSlide>
            </Splide>
            <h2 className="pt-5 text-[18px] font-bold uppercase">
                Ducati Monster S2R 1000 (2007)
            </h2>
            <p className="pb-4 text-[14px]">
                Splendida Ducati Monster S2R 1000, anno 2007, con 50000 km. Ben
                tenuta.
                <br />
                Scarichi in carbonio con omologazione, frizione nuova,
                tagliandata e gommata al 60%.
                <br />
                Ottima per chi ha esperienza: bella, aggressiva e divertente.
                Qualsiasi prova.
            </p>
            <p>
                <span className="font-bold uppercase">COSTO: </span>
                <span>€ 3600,00</span>
            </p>
            <Link
                href="tel:3923391613"
                className="flex items-center gap-x-2 rounded-xl bg-primary px-4 py-3.5 uppercase text-light"
            >
                <Icon
                    icon="material-symbols:info-outline-rounded"
                    className="text-[24px]"
                />
                Più info
            </Link>
        </div>
    );
};

export default page;
