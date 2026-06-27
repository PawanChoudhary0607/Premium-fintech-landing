import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "crumb.arthbit.com",
      },
    ],
  },
};

export default nextConfig;
