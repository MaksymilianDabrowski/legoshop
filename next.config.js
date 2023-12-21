/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io", // src prop dla zdjęć na stronie // domains a remotePatterns?
            },
        ],
    },
};

module.exports = nextConfig
