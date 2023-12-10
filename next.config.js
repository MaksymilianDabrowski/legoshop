/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: {
        domains: ["cdn.sanity.io"], // src prop dla zdjęć na stronie // domains a remotePatterns?
    },
};

module.exports = nextConfig
