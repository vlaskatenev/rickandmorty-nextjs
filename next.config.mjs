/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_RICK_AND_MORTY: process.env.API_RICK_AND_MORTY,
    },
    images: {
        domains: [process.env.DOMAIN_RICK_AND_MORTY],
    },
}

export default nextConfig
