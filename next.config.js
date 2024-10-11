// next.config.js
module.exports = {
  output: 'export', // Enable static export
  webpack: (config, { dev, isServer }) => {
    config.devtool = 'source-map';
    return config;
  },
  images: {
    unoptimized: true, // Avoid image optimization issues during SSG
  },
};