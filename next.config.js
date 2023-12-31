/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'upload.wikimedia.org'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
