import { articles } from "@/data/articles";
import { SITE } from "@/lib/seo";

/* ------------------------------------------------------------------
   1 RSS FEED
   1.1 Helpers de escape
   1.2 Geração do XML
------------------------------------------------------------------ */

/* 1.1 Helpers de escape */
function escapeXml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/* 1.2 Geração do XML */
export async function GET() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.updated ?? b.date).getTime() - new Date(a.updated ?? a.date).getTime(),
  );

  const items = sorted
    .map((article) => {
      const url = `${SITE.url}/artigos/${article.slug}`;
      const pubDate = new Date(article.date).toUTCString();
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.description)}</description>
      <category>${escapeXml(article.category)}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>VITALIS — Portal Vegano</title>
    <link>${SITE.url}</link>
    <description>${escapeXml(SITE.description)}</description>
    <language>pt-BR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

/* Índice
   1 RSS FEED
     1.1 Helpers de escape
     1.2 Geração do XML
*/
