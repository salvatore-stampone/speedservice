import SplitLanding from "@/components/landing/SplitLanding";
import "@/styles/tailwind.landing.css";

export const metadata = {
    title: "Speedservice Lucera S.r.l.s.",
    description:
        "Scegli tra spedizioni e corrieri oppure il nostro usato garantito — Lucera s.r.l.s.",
    openGraph: {
        title: "Speedservice Lucera S.r.l.s.",
        description:
            "Scegli tra spedizioni e corrieri oppure il nostro usato garantito.",
        url: "https://www.speedservicelucera.com/",
        siteName: "Speedservice Lucera S.r.l.s.",
        locale: "it_IT",
        type: "website",
    },
};

export default function HomePage() {
    return <SplitLanding />;
}
