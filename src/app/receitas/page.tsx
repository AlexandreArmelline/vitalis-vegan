import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/ui/Atoms";
import { RecipeExplorer } from "@/components/recipes/RecipeExplorer";
import { recipes } from "@/data/recipes";
import { buildMetadata, breadcrumbSchema, itemListSchema } from "@/lib/seo";

/* ------------------------------------------------------------------
   1 PÁGINA: RECEITAS (listagem)
   1.1 Metadados
   1.2 Hero
   1.3 Explorador com filtros
   1.4 Nota sobre ingredientes
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Receitas veganas brasileiras: feijoada, pão de queijo e mais",
  description:
    "Receitas veganas testadas com ingredientes brasileiros e acessíveis: feijoada vegana, moqueca de banana-da-terra, strogonoff de grão-de-bico, pão de queijo vegano e brigadeiro.",
  path: "/receitas",
  image: "/og-receitas.svg",
});

/* 1.2 Hero */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="absolute inset-0 u-grid opacity-20" aria-hidden="true" />
      <div className="container-x relative py-14 md:py-18">
        <nav aria-label="Você está aqui" className="mb-5">
          <ol className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
            <li><Link href="/" className="hover:text-acid">início</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-acid">receitas</li>
          </ol>
        </nav>
        <span className="eyebrow">cozinha vitalis</span>
        <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98]">
          Comida brasileira, <span className="u-neon">sem nada de origem animal</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
          Feijoada, moqueca, pão de queijo, strogonoff, brigadeiro. Todas as receitas foram
          pensadas para ingredientes que existem no mercado do bairro — e para quem tem pouco tempo.
        </p>
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fog">
          <span className="text-acid">◆ {recipes.length} receitas</span>
          <span>◆ tempo e proteína por porção</span>
          <span>◆ filtro por categoria</span>
        </div>
      </div>
    </section>
  );
}

/* 1.3 Explorador com filtros */
function Explorer() {
  return (
    <Section className="!pt-10">
      <RecipeExplorer recipes={recipes} />
    </Section>
  );
}

/* 1.4 Nota sobre ingredientes */
function Note() {
  return (
    <Section tone="panel" className="!py-12">
      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-acid">
            sobre os ingredientes
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-fog">
            Usamos itens disponíveis em mercados comuns: polvilho, mandioquinha, proteína de soja,
            levedura nutricional e castanha de caju.
          </p>
        </div>
        <div>
          <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-acid">
            substituições
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-fog">
            Cada receita traz a nota de proteína por porção e uma dica de execução. Erros comuns
            estão explicados — como o creme de castanha que talha.
          </p>
        </div>
        <div>
          <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-acid">
            custo real
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-fog">
            Classificamos o custo de R$ a R$$$. A maioria das receitas fica em R$ — cozinhar vegano
            é mais barato que pedir delivery.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* Página */
export default function ReceitasPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Receitas", path: "/receitas" },
          ]),
          itemListSchema(recipes.map((r) => ({ name: r.title, path: `/receitas/${r.slug}` }))),
        ]}
      />
      <Hero />
      <Explorer />
      <Note />
    </>
  );
}

/* Índice
   1 PÁGINA: RECEITAS (listagem)
     1.1 Metadados
     1.2 Hero
     1.3 Explorador com filtros
     1.4 Nota sobre ingredientes
*/
