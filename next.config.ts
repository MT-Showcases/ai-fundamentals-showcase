import type { NextConfig } from "next";
import path from "path";

const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  // Keep tracing scoped to this project to avoid scanning sibling workspaces
  outputFileTracingRoot: path.join(__dirname),
  // Standalone is useful for self-host Docker, but unnecessary on Vercel and slightly slower.
  output: isVercel ? undefined : "standalone",
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
