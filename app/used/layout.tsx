import Link from "next/link";
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

const layout = ({ children }: PropsWithChildren<Props>) => {
    return (
        <div>
            <nav className="bg-red-600 px-5 py-3.5">
                <ul className="flex justify-evenly gap-x-4 text-lg text-white transition-[filter] hover:brightness-90">
                    {links.map((link) => {
                        return (
                            <li key={link.name}>
                                <Link href={link.href}>{link.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default layout;
