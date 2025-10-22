"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type Props = {};

const links = [
    {
        name: "Auto",
        href: "/used/cars",
    },
    {
        name: "Moto",
        href: "/used/motorcycles",
    },
    {
        name: "Furgoni",
        href: "/used/vans",
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
        <div className="min-h-screen bg-gray-50">
            <div className="checkered-border border-b bg-white shadow-lg">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Tabs value={getCurrentTab()} className="w-full">
                        <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-gray-100 to-gray-200">
                            {links.map((link) => (
                                <TabsTrigger
                                    key={link.name}
                                    value={link.href.split("/").pop() || "cars"}
                                    asChild
                                >
                                    <Link
                                        href={link.href}
                                        className="racing-accent w-full transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>
            </div>
            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
};

export default Layout;
