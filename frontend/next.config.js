/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: [],
  typescript: {
    ignoreBuildErrors: false,
  },
  turbopack: {},
};

module.exports = nextConfig;
