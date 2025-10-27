"use client";

import { useWindowSize } from "@/lib/hooks";
import Link from "next/link";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";

const links = [
    {
        text: "Home",
        href: "#home",
    },
    {
        text: "Servizi",
        href: "#services",
    },
    {
        text: "Preventivo",
        href: "#estimate",
    },
    {
        text: "Ritiro",
        href: "#parcel-collection",
    },
    {
        text: "Vieni a Trovarci",
        href: "#where",
    },
    {
        text: "Chi Siamo",
        href: "#about",
    },

    {
        text: "Contattaci",
        href: "#contacts",
    },
];

export default function Navbar() {
    const { width } = useWindowSize();
    const isSmallScreen = width < 1280;

    const [isNavbarActive, setIsNavbarActive] = useState(false);

    const compactNavbar = (
        <>
            <button
                onClick={() => setIsNavbarActive(!isNavbarActive)}
                className="sidebar__menu-icon"
                style={{
                    backgroundColor: isNavbarActive
                        ? "var(--light-clr)"
                        : "var(--primary-clr)",
                    color: isNavbarActive
                        ? "var(--primary-clr)"
                        : "var(--light-clr)",
                }}
            >
                {isNavbarActive ? <IoClose /> : <BiMenuAltRight />}
            </button>
            <nav className={`sidebar ${isNavbarActive ? "active" : ""}`}>
                <ul className="navbar__nav-list">
                    {links.map((link) => {
                        return (
                            <li className="navbar__nav-item" key={link.text}>
                                <Link
                                    href={link.href}
                                    className="navbar__nav-link"
                                    onClick={() => setIsNavbarActive(false)}
                                >
                                    {link.text}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="sidebar__backdrop"></div>
        </>
    );

    const largeNavbar = (
        <nav className="navbar">
            <ul className="navbar__nav-list">
                {links.map((link) => {
                    return (
                        <li className="navbar__nav-item" key={link.text}>
                            <Link href={link.href} className="navbar__nav-link">
                                {link.text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );

    if (isSmallScreen) {
        return compactNavbar;
    } else {
        return largeNavbar;
    }
}
