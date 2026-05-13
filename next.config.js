/** @type {import('next').NextConfig} */
const nextConfig = {
    // ExFAT/external volumes create AppleDouble `._*` files next to real dirs; Turbopack's
    // dev filesystem cache parses cache folder names as hex and crashes (invalid digit).
    experimental: {
        turbopackFileSystemCacheForDev: false,
    },
    reactStrictMode: true,
    images: {
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
