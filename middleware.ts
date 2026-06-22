import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAdminSessionValid } from "@/lib/auth/admin";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const session = request.cookies.get("admin_session")?.value;
    const authenticated = isAdminSessionValid(session);

    if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
        if (!authenticated) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }
    }

    if (pathname === "/admin/login" && authenticated) {
        return NextResponse.redirect(new URL("/admin/vehicles", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
};
