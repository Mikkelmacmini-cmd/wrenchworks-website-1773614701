import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/automated-review-systems",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/google-business-profile",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/local-seo-ai-search",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/mobile-first-websites",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
