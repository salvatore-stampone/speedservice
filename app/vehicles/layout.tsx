"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "@/styles/tailwind.vehicles.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "public/images/logo.png";
import vehiclesLogo from "public/images/vehicles-logo.png";
import { PropsWithChildren } from "react";

type Props = {};

const links = [
    {
        name: "Auto",
        href: "/vehicles/cars",
    },
    {
        name: "Moto",
        href: "/vehicles/motorcycles",
    },
    {
        name: "Furgoni",
        href: "/vehicles/vans",
    },
];

const Layout = ({ children }: PropsWithChildren<Props>) => {
    const pathname = usePathname();

    const getCurrentTab = () => {
        if (pathname.includes("/cars")) return "cars";
        if (pathname.includes("/motorcycles")) return "motorcycles";
        if (pathname.includes("/vans")) return "vans";
        return "";
    };

    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="bg-card border-b shadow-lg">
                <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
                    <div className="flex flex-col gap-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
                        <Link
                            href="/vehicles"
                            className="logo-container flex cursor-pointer items-center justify-center space-x-3 transition-opacity hover:opacity-80 sm:justify-start"
                        >
                            <Image
                                src={vehiclesLogo}
                                alt="Vehicles Logo"
                                width={1080}
                                height={1080}
                                className="navbar-logo h-10 w-auto sm:h-12"
                            />
                        </Link>

                        <Tabs
                            value={getCurrentTab()}
                            className="w-full sm:max-w-md sm:flex-1"
                        >
                            <TabsList className="bg-muted flex w-full gap-x-1 sm:gap-x-2">
                                {links.map((link) => (
                                    <TabsTrigger
                                        key={link.name}
                                        value={
                                            link.href.split("/").pop() || "cars"
                                        }
                                        asChild
                                    >
                                        <Link
                                            href={link.href}
                                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground w-full text-xs transition-all duration-300 sm:text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>
                </div>
            </div>
            <main className="mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-6 lg:px-8 lg:py-8">
                {children}
            </main>

            {/* Floating Back Button */}
            <div className="fixed bottom-4 left-4 z-50">
                <Button
                    asChild
                    size="icon"
                    className="text-primary-foreground h-16 w-16 rounded-full border border-[#0f447d]/20 bg-[#0f447d]/90 shadow-lg backdrop-blur-sm hover:bg-[#0f447d]"
                    title="Torna alla home (spedizioni)"
                >
                    <Link href="/" className="flex items-center justify-center">
                        <Image
                            src={logo}
                            alt="Speedservice Logo"
                            width={1600}
                            height={1600}
                            className="h-12 w-12"
                        />
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default Layout;
