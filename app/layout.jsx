import dynamic from "next/dynamic";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";

const NoSSRNavbar = dynamic(() => import("@/components/Navbar"), {
    ssr: false,
});

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

// If loading a variable font, you don't need to specify the font weight
const lexend = Lexend_Deca({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-lexend",
});

export default function RootLayout({ children }) {
    return (
        <html lang="it" className={lexend.variable}>
            <body className="font-lexend">
                <main>{children}</main>
            </body>
        </html>
    );
}
