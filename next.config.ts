import type { NextConfig } from "next";

/* ------------------------------------------------------------------
   1 CONFIGURAÇÃO DO NEXT.JS
   1.1 Imagens remotas gratuitas (Unsplash)
   1.2 Performance, segurança e compressão
------------------------------------------------------------------ */

/* 1.1 Imagens remotas gratuitas (Unsplash) */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 828, 1080, 1200, 1600, 1920],
    minimumCacheTTL: 2678400,
  },

  /* 1.2 Performance, segurança e compressão */
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

/* Índice
   1 CONFIGURAÇÃO DO NEXT.JS
     1.1 Imagens remotas gratuitas (Unsplash)
     1.2 Performance, segurança e compressão
*/
