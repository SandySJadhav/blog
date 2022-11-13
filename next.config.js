/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.com"],
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
