/** @type {import('next').NextConfig} */
import type {NextConfig} from "next";
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
    typescript: {
      ignoreBuildErrors: true,
    },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        pathname: '**', // Allow all image paths from this domain
      },
    ],
  },
};

module.exports = nextConfig;