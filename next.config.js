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
    
    // En dev : désactiver le cache disque webpack (client + serveur) pour éviter
    // les ENOENT sur .next/cache/webpack/**/ *.pack.gz (cache corrompu / concurrence).
    if (dev) {
      config.cache = false;
    }
    
    return config;
  },
}

module.exports = nextConfig
