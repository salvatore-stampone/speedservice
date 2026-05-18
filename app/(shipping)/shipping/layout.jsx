import ClientNavbar from "@/components/shipping/ClientNavbar";
import Float from "@/components/shipping/Tracking/Float";
import "@/styles/tailwind.shipping.css";
import Image from "next/image";
import Link from "next/link";
import vehiclesLogo from "public/images/landing/speed-usato-garantito.png";
import { BsWhatsapp } from "react-icons/bs";

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
        icon: "/images/logo-wordmark.png",
        shortcut: "/images/logo-wordmark.png",
        apple: "/images/logo-wordmark.png",
        other: {
            rel: "apple-touch-icon-precomposed",
            url: "/images/logo-wordmark.png",
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
        <main className="font-lexend">
            <ClientNavbar />
            <Link
                href="/vehicles"
                className="fixed bottom-3 left-4 z-10 flex size-16 items-center justify-center rounded-full border border-red-600/60 bg-white backdrop-blur-sm transition-colors hover:border-red-600"
                title="Vai a usato garantito"
            >
                <Image
                    src={vehiclesLogo}
                    alt="Speedservice usato garantito"
                    width={1080}
                    height={1080}
                    className="h-auto w-12"
                />
            </Link>
            <Float />
            <Link
                href="https://wa.me/390881042353"
                className="fixed bottom-3 right-4 z-10 flex size-16 items-center justify-center rounded-full bg-[#25d366] text-white hover:bg-[#25d366]/90"
                target="_blank"
                rel="noopener noreferrer"
            >
                <BsWhatsapp className="text-[30px]" />
            </Link>
            <main>{children}</main>
        </main>
    );
}
