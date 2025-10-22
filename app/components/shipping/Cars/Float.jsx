"use client";

import { Icon } from "@iconify/react";
import "@splidejs/react-splide/css";
import Link from "next/link";

const Float = () => {
    return (
        <>
            <Link
                href="/vehicles"
                className="bg-primary-dark text-light fixed top-4 left-4 z-2 flex cursor-pointer items-center gap-x-2 rounded-full px-4 py-4 shadow-[2px_2px_8px_-4px_black] xl:top-20 xl:right-12 xl:left-auto!"
            >
                <Icon icon="maki:car" className="text-[24px] xl:text-[28px]" />
                <span className="text-[12px] xl:text-[16px]">
                    Veicoli Usati
                </span>
            </Link>
        </>
    );
};

export default Float;
