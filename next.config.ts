import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

// Auto-detect GitHub Pages basePath
let basePath: string | undefined = undefined;

if (process.env.NEXT_PUBLIC_BASE_PATH !== undefined) {
  basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;
} else if (process.env.GITHUB_REPOSITORY) {
  // Running in GitHub Actions environment
  const repoName = process.env.GITHUB_REPOSITORY.split("/")[1];
  if (repoName && !repoName.endsWith(".github.io")) {
    basePath = `/${repoName}`;
  }
} else if (isStaticExport) {
  // Local static export fallback for the 'sds' repository
  basePath = "/sds";
}

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: isStaticExport,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    unoptimized: isStaticExport,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
