const withPWA = require('@ducanh2912/next-pwa').default({
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    dest: 'public', // output directory of the service worker files
    fallbacks: {
        //image: '/static/images/fallback.png',
        document: '/offline', // trigger this route when the client is offline
    },
    workboxOptions: {
        disableDevLogs: true,
    },
    disable: process.env.NODE_ENV === 'development' ? true : false // Disable is DEVELOPMENT mode 
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true
}

module.exports = withPWA(nextConfig)
