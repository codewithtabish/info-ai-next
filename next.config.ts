/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows images from all domains
      },
      {
        protocol: "http",
        hostname: "**", // Allows images from all HTTP domains
      },
    ],
    formats: ["image/avif", "image/webp"], // Supports modern image formats
    unoptimized: true, // Allows all images without Next.js optimization
  },
};

module.exports = nextConfig;
