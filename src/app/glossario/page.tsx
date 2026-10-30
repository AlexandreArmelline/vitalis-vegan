import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/ui/Section";
import { ActionLink, JsonLd } from "@/components/ui/Atoms";
import { glossary } from "@/data/content";
import { buildMetadata, breadcrumbSchema, definedTermSetSchema } from "@/lib/schema-extra";

/* ------------------------------------------------------------------
   1 PÁGINA: GLOSSÁRIO
   1.1 Metadados
   1.2 Hero
   1.3 Lista alfabética
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Glossário vegano: 28 termos que você precisa conhecer",
  description:
    "De aquafaba a V-Label: glossário com os principais termos do universo vegano explicados de forma direta — para ler rótulos, menus e artigos sem se perder.",
  path: "/glossario",
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
            <li className="text-acid">glossário</li>
          </ol>
        </nav>
        <span className="eyebrow">dicionário vitalis</span>
        <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98]">
          Fale <span className="u-neon">vegano</span> sem decoreba
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
          {glossary.length} termos que aparecem em rótulos, menus, grupos e artigos — explicados em
          uma frase, sem jargão.
        </p>
      </div>
    </section>
  );
}

/* 1.3 Lista alfabética */
function Terms() {
  const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term, "pt-BR"));
  const letters = Array.from(new Set(sorted.map((item) => item.term[0].toUpperCase())));

  return (
    <Section>
      <div className="mb-8 flex flex-wrap gap-1.5">
        {letters.map((letter) => (
          <span
            key={letter}
            className="flex h-7 w-7 items-center justify-center rounded border border-[var(--color-line)] font-mono text-[0.7rem] text-fog"
          >
            {letter}
          </span>
        ))}
      </div>
      <dl className="grid gap-3 md:grid-cols-2">
        {sorted.map((item) => (
          <div key={item.term} className="card p-5">
            <dt className="text-base font-bold text-acid">{item.term}</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-fog">{item.def}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-10 flex flex-wrap gap-3">
        <ActionLink href="/compras">Guia de compras</ActionLink>
        <ActionLink href="/mitos" variant="ghost">Derrubar mitos</ActionLink>
      </div>
    </Section>
  );
}

/* Página */
export default function GlossarioPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Glossário", path: "/glossario" },
          ]),
          definedTermSetSchema(glossary),
        ]}
      />
      <Hero />
      <Terms />
    </>
  );
}

/* Índice
   1 PÁGINA: GLOSSÁRIO
     1.1 Metadados
     1.2 Hero
     1.3 Lista alfabética
*/
