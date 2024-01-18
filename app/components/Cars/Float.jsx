"use client";

import { Icon } from "@iconify/react";
import "@splidejs/react-splide/css";
import Link from "next/link";

const Float = () => {
    return (
        <>
            <Link
                href="/used"
                className="fixed left-4 top-4 z-[2] flex cursor-pointer items-center gap-x-2 rounded-full bg-primary-dark px-4 py-4 text-light shadow-[2px_2px_8px_-4px_black] xl:left-auto xl:right-12 xl:top-20"
            >
                <Icon icon="maki:car" className="text-[24px] xl:text-[28px]" />
                <span className="text-[12px] xl:text-[16px]">
                    Veicoli Usati
                </span>
            </Link>
            {/* <Link href="/cars">
                <Splide
                    options={{
                        rewind: true,
                        gap: "1rem",
                    }}
                    aria-label="My Favorite Images"
                >
                    <SplideSlide>
                        <Image
                            src="https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg"
                            alt="Image 1"
                            width={500}
                            height={200}
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image
                            src="https://images.pexels.com/photos/5025669/pexels-photo-5025669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Image 2"
                            width={500}
                            height={200}
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image src="image3.jpg" alt="Image 3" />
                    </SplideSlide>
                </Splide>
            </Link> */}
        </>
    );
};

export default Float;
