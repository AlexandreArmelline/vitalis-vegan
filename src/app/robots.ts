import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/* ------------------------------------------------------------------
   1 ROBOTS.TXT
   1.1 Regras de rastreamento
   1.2 Sitemap e host
------------------------------------------------------------------ */

/* 1.1 Regras de rastreamento */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/buscar", "/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
    ],
    /* 1.2 Sitemap e host */
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}

/* Índice
   1 ROBOTS.TXT
     1.1 Regras de rastreamento
     1.2 Sitemap e host
*/
