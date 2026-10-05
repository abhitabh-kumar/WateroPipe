import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Static HTML export for Firebase Hosting (no Node server). */
  output: "export",
};

export default nextConfig;
