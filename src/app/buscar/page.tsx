import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/ui/Atoms";
import { SearchClient } from "@/components/tools/SearchClient";
import { articles } from "@/data/articles";
import { recipes } from "@/data/recipes";
import { buildMetadata, breadcrumbSchema } from "@/lib/schema-extra";

/* ------------------------------------------------------------------
   1 PÁGINA: BUSCA
   1.1 Metadados
   1.2 Conteúdo
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Buscar no Vitalis",
  description:
    "Busque receitas veganas, artigos, nutrientes, mitos e ferramentas em todo o portal Vitalis.",
  path: "/buscar",
  // Evita indexação de páginas de busca interna
});

export default function BuscarPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Buscar", path: "/buscar" },
          ]),
        ]}
      />
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="absolute inset-0 u-grid opacity-20" aria-hidden="true" />
        <div className="container-x relative py-12">
          <nav aria-label="Você está aqui" className="mb-5">
            <ol className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
              <li><Link href="/" className="hover:text-acid">início</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-acid">buscar</li>
            </ol>
          </nav>
          <span className="eyebrow">busca interna</span>
          <h1 className="mt-4 text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-[0.98]">
            Encontre <span className="u-neon">rápido</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-fog md:text-base">
            {articles.length} artigos, {recipes.length} receitas e 9 ferramentas indexadas — busca
            instantânea, sem servidor.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-x max-w-3xl">
          <SearchClient articles={articles} recipes={recipes} />
        </div>
      </section>
    </>
  );
}

/* Índice
   1 PÁGINA: BUSCA
     1.1 Metadados
     1.2 Conteúdo
*/
