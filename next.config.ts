import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every page is prerendered at build time (see `ensureStatic` in app/layout.tsx).
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    // AVIF first (smallest), WebP fallback — next/image picks per browser.
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920],
  },
  async headers() {
    return [
      {
        // The hero video never changes under the same name — cache it for a year.
        source: "/video/:file*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
