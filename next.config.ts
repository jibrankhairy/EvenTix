import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "fortunate-raven-469.convex.cloud",
        protocol: "https",
      },
      {
        hostname: "accomplished-coyote-386.convex.cloud",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
