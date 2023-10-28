import React, { useEffect, useState } from "react";
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
        text: "Servizi Aggiuntivi",
        href: "#additional-services",
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
    const [isSmallScreen, setIsSmallScreen] = useState(
        window.matchMedia("(max-width: 1280px)").matches //Desktop: false; smartphone: true
    );
    const [isNavbarActive, setIsNavbarActive] = useState(false);

    useEffect(() => {
        window
            .matchMedia("(max-width: 1280px)")
            .addEventListener("change", (e) => setIsSmallScreen(e.matches));
    }, []);

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
            <div className={`sidebar ${isNavbarActive ? "active" : ""}`}>
                <ul className="navbar__nav-list">
                    {links.map((link) => {
                        return (
                            <li className="navbar__nav-item">
                                <a
                                    href={link.href}
                                    className="navbar__nav-link"
                                    onClick={() => setIsNavbarActive(false)}
                                >
                                    {link.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="sidebar__backdrop"></div>
        </>
    );

    const largeNavbar = (
        <nav className="navbar">
            <ul className="navbar__nav-list">
                {links.map((link) => {
                    return (
                        <li className="navbar__nav-item">
                            <a href={link.href} className="navbar__nav-link">
                                {link.text}
                            </a>
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
