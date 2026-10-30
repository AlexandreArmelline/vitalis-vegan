import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

/* ------------------------------------------------------------------
   1 WEB APP MANIFEST (PWA básico)
   1.1 Metadados do app
   1.2 Ícones e atalhos
------------------------------------------------------------------ */
export default function manifest(): MetadataRoute.Manifest {
  return {
    /* 1.1 Metadados do app */
    name: "VITALIS — Portal Vegano",
    short_name: "VITALIS",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#04070b",
    theme_color: "#04070b",
    lang: "pt-BR",
    dir: "ltr",
    categories: ["health", "food", "education", "lifestyle"],

    /* 1.2 Ícones e atalhos */
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "Guia de 21 dias", url: "/comecar" },
      { name: "Receitas", url: "/receitas" },
      { name: "Calculadora de impacto", url: "/impacto" },
    ],
  };
}

/* Índice
   1 WEB APP MANIFEST (PWA básico)
     1.1 Metadados do app
     1.2 Ícones e atalhos
*/
