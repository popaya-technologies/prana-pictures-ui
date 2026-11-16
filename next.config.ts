import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.pranapictures.com",
        port: "",
        pathname: "/pp-admin/**",
      },
    ],
  },
};

export default nextConfig;
