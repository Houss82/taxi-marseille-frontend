const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Dev : garder les pages compilées longtemps en mémoire pour éviter que le navigateur
  // garde un HTML qui pointe vers d’anciens chunks (CSS en 404 → page sans styles).
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 25,
  },
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };

    // En dev : cache mémoire (pas de .pack.gz sur disque) — moins de corruptions qu’un
    // cache fichier, rebuilds plus stables que cache: false avec gros projet.
    if (dev) {
      config.cache = { type: 'memory' };
    }

    return config;
  },
}

module.exports = nextConfig
