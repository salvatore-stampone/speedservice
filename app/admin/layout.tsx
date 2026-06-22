import "@/styles/tailwind.vehicles.css";
import type { PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <div className="bg-background text-foreground min-h-screen font-sans antialiased">
            {children}
        </div>
    );
}
