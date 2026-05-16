/** @type {import('next').NextConfig} */
const nextConfig = {
    // ExFAT/external volumes create AppleDouble `._*` files next to real dirs; Turbopack's
    // dev filesystem cache parses cache folder names as hex and crashes (invalid digit).
    experimental: {
        turbopackFileSystemCacheForDev: false,
    },
    reactStrictMode: true,
    images: {
        // ExFAT volumes create AppleDouble `._*` files; sharp can serve those instead of
        // real images in dev. Public/static paths still work; skip the optimizer locally.
        unoptimized: process.env.NODE_ENV === "development",
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
                pathname: "/photos/**",
            },
        ],
    },
};

module.exports = nextConfig;
