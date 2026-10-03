import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90],
    deviceSizes: [640, 750, 828, 1080, 1280, 1600, 1920, 2560],
  },
};

export default nextConfig;
