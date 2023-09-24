/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'], 
    },
    publicRuntimeConfig: {
        API_URL: process.env.SERVER_URL
    }
}

module.exports = nextConfig
