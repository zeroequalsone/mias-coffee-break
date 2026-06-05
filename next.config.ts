import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS?.split(","),
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
