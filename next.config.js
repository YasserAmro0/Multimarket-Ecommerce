/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'], 
    },
    env:{
        SERVER_URL:"https://multimarket.onrender.com/api/v1/",
        NEXT_PUBLIC_SERVER_URL:'https://multimarket.onrender.com/api/v1/',
        NEXT_PUBLIC_API_KEY:'pk_test_51NuGkYGEwBDIklNoGpfUSr2fvw6ZM0qXBCmrV9qsIiAh8wYM8auw4ONvTEVUnpWregorMNoetFOX8mEdbXFZXX2s00l1JnouXF',
    }
}

module.exports = nextConfig
