/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ✅ Allows loading optimized images from Unsplash
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    qualities: [75, 85, 90, 95, 100],
  },
};

module.exports = nextConfig;
