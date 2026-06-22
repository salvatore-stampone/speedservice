import { cookies } from "next/headers";

const SESSION_COOKIE = "admin_session";

export function verifyAdminCredentials(
    username: string,
    password: string
): boolean {
    return (
        username === process.env.ADMIN_USER &&
        password === process.env.ADMIN_PASSWORD
    );
}

export async function createAdminSession() {
    const token = process.env.ADMIN_SESSION_TOKEN;
    if (!token) {
        throw new Error("ADMIN_SESSION_TOKEN is not configured");
    }

    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });
}

export async function clearAdminSession() {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE);
}

export async function isAdminAuthenticated(): Promise<boolean> {
    const token = process.env.ADMIN_SESSION_TOKEN;
    if (!token) return false;

    const cookieStore = await cookies();
    return cookieStore.get(SESSION_COOKIE)?.value === token;
}

export function isAdminSessionValid(token: string | undefined): boolean {
    const expected = process.env.ADMIN_SESSION_TOKEN;
    if (!expected || !token) return false;
    return token === expected;
}
