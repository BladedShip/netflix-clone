/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir:true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'metro.co.uk',
      },
      {
        protocol:"https",
        hostname:"occ-0-6155-3663.1.nflxso.net",
        // had to use this as I'm not hosting the thumbnails myself, lol
      }
    ],
  },
}

module.exports = nextConfig
