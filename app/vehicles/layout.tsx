"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "@/styles/tailwind.vehicles.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        return "cars";
    };

    return (
        <div className="bg-background text-foreground min-h-screen">
            <div className="bg-card border-b shadow-lg">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        <Link
                            href="/vehicles"
                            className="logo-container flex cursor-pointer items-center space-x-3 transition-opacity hover:opacity-80"
                        >
                            <Image
                                src={vehiclesLogo}
                                alt="Vehicles Logo"
                                width={1080}
                                height={1080}
                                className="navbar-logo h-12 w-auto"
                            />
                        </Link>

                        <Tabs
                            value={getCurrentTab()}
                            className="max-w-md flex-1"
                        >
                            <TabsList className="bg-muted flex w-full gap-x-2">
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
                                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground w-full transition-all duration-300"
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
            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
};

export default Layout;
