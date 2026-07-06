import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/digital-marketing",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
