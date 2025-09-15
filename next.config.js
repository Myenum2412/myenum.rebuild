/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    middleware: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
};

module.exports = nextConfig;
