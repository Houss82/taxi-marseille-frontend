const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Dev : éviter d’évincer trop vite les entrées (sinon le HTML peut référencer un ancien
  // chunk CSS → 404 sur layout.css et page « sans CSS » jusqu’au reload).
  onDemandEntries: {
    maxInactiveAge: 120 * 1000,
    pagesBufferLength: 8,
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
