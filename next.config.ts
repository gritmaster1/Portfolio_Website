import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as a static site (no Node.js server needed)
  output: "export",

  // Required for GitHub Pages: use your repo name here
  basePath: "/Portfolio_Website",

  // Disable Next.js Image Optimization (not supported on static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
