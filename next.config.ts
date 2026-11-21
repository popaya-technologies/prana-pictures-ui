import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function nextConfig(phase: string): NextConfig {
  return {
    turbopack: {
      root: process.cwd(),
    },
    images: {
      // Local development only. On IPv6-only (NAT64) networks,
      // s3.pranapictures.com resolves to a 64:ff9b:: address, which Next.js 16
      // treats as private and refuses to load. remotePatterns below still limits
      // images to our bucket, and production builds keep the protection on.
      dangerouslyAllowLocalIP: phase === PHASE_DEVELOPMENT_SERVER,
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
}
