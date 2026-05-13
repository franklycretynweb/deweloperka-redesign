import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["react-map-gl", "mapbox-gl"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quptos-web-data.sensevr.pl",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
