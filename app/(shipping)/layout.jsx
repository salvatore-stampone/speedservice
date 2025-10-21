import Float from "@/components/Tracking/Float";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import CarsFloat from "../components/Cars/Float";
import ClientNavbar from "../components/ClientNavbar";

export const metadata = {
    title: {
        template: "%s | Speedservice Lucera",
        default: "Campioni di Puntualità | Speedservice Lucera",
    },
    description: "Richiedi un ritiro o spedisci ovunque nel mondo.",
    applicationName: "Speedservice Lucera",
    keywords: [
        "Speedservice",
        "Speedservice Lucera",
        "Spedizioni",
        "Devo spedire",
        "Ritiri",
        "Corrieri",
    ],
    openGraph: {
        title: "Campioni di Puntualità | Speedservice Lucera",
        description: "Richiedi un ritiro o spedisci ovunque nel mondo.",
        url: "https://www.speedservicelucera.com/",
        siteName: "Speedservice Lucera",
        images: [
            {
                url: "https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                width: 1200,
                height: 700,
            },
        ],
        locale: "it_IT",
        type: "website",
    },
    icons: {
        icon: "/images/logo-rounded.png",
        shortcut: "/images/logo-rounded.png",
        apple: "/images/logo-rounded.png",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "/images/logo-rounded.png",
        },
    },
    manifest: "/manifest.json",
    twitter: {
        card: "summary_large_image",
        title: "Campioni di Puntualità | Speedservice Lucera",
        description: "Richiedi un ritiro o spedisci ovunque nel mondo.",
        images: [
            "https://images.pexels.com/photos/4498136/pexels-photo-4498136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <>
            <ClientNavbar />
            <CarsFloat />
            <Float />
            <Link
                href="https://wa.me/390881042353"
                className="float whatsapp__float"
                target="_blank"
                rel="noopener noreferrer"
            >
                <BsWhatsapp className="whatsapp__icon" />
            </Link>
            <main>{children}</main>
        </>
    );
}
