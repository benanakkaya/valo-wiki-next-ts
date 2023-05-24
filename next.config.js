const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{hostname:"media.valorant-api.com", protocol:"https"}]
    }
}

module.exports = nextConfig
