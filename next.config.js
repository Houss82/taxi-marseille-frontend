const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Désactiver le cache webpack en développement pour éviter les problèmes de CSS
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    
    // En développement, désactiver le cache webpack pour éviter les problèmes de CSS
    if (dev && !isServer) {
      config.cache = false;
    }
    
    return config;
  },
}

module.exports = nextConfig
