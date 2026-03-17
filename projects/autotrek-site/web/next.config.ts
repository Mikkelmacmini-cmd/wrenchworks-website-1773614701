import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/preview/autotrek-site",
  assetPrefix: "/preview/autotrek-site",
  images: { unoptimized: true },
};

export default nextConfig;
