import type { NextConfig } from "next";

// Static export: the whole site is pre-rendered to plain HTML in /out,
// so it runs on Vercel (or any static host) with zero server configuration.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
