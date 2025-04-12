/** @type {import('next').NextConfig} */
const nextConfig = {
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