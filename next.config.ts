import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",             // generates static HTML
  basePath: "/Portfolio_Website", // your GitHub repo name
  images: {
    unoptimized: true,          // disable server-side image optimization
  },
  eslint: {
    ignoreDuringBuilds: true,   // ✅ disable ESLint checks during build
  },
};

export default nextConfig;
