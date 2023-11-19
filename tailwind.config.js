const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{html,js,ts,jsx,tsx,mdx}",
        "./app/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                lexend: ["var(--font-lexend)", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                light: "#F5F5F5",
                dark: "#212121",
                primary: "#1357A0",
                "primary-dark": "#0f447d",
                secondary: "#9D6629",
            },
            keyframes: {
                slideDown: {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                slideUp: {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
                slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
            },
        },
    },
    plugins: [],
};
