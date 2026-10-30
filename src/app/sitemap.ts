import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { recipes } from "@/data/recipes";
import { SITE } from "@/lib/seo";

/* ------------------------------------------------------------------
   1 SITEMAP.XML DINÂMICO
   1.1 Páginas estáticas
   1.2 Conteúdo dinâmico
------------------------------------------------------------------ */

/* 1.1 Páginas estáticas */
const staticPages: {
  path: string;
  priority: number;
  freq: "daily" | "weekly" | "monthly" | "yearly";
}[] = [
  { path: "/", priority: 1, freq: "weekly" },
  { path: "/comecar", priority: 0.95, freq: "monthly" },
  { path: "/impacto", priority: 0.9, freq: "monthly" },
  { path: "/receitas", priority: 0.9, freq: "weekly" },
  { path: "/nutricao", priority: 0.9, freq: "monthly" },
  { path: "/quiz", priority: 0.85, freq: "monthly" },
  { path: "/mitos", priority: 0.85, freq: "monthly" },
  { path: "/artigos", priority: 0.85, freq: "weekly" },
  { path: "/compras", priority: 0.8, freq: "monthly" },
  { path: "/kit", priority: 0.8, freq: "monthly" },
  { path: "/onde-comer", priority: 0.75, freq: "monthly" },
  { path: "/glossario", priority: 0.7, freq: "monthly" },
  { path: "/newsletter", priority: 0.7, freq: "monthly" },
  { path: "/metodologia", priority: 0.6, freq: "yearly" },
  { path: "/fontes", priority: 0.6, freq: "yearly" },
  { path: "/contato", priority: 0.5, freq: "yearly" },
];

/* 1.2 Conteúdo dinâmico */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${SITE.url}${page.path}`,
    lastModified: now,
    changeFrequency: page.freq,
    priority: page.priority,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${SITE.url}/artigos/${article.slug}`,
    lastModified: new Date(article.updated ?? article.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const recipeEntries: MetadataRoute.Sitemap = recipes.map((recipe) => ({
    url: `${SITE.url}/receitas/${recipe.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...articleEntries, ...recipeEntries];
}

/* Índice
   1 SITEMAP.XML DINÂMICO
     1.1 Páginas estáticas
     1.2 Conteúdo dinâmico
*/
