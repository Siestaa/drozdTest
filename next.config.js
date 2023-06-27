/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    return config;
  },

  // ...other config
};
