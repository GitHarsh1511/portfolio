// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      },
      { protocol: "https", hostname: "github-readme-stats.vercel.app" },
    ],
  },
};

export default nextConfig;
