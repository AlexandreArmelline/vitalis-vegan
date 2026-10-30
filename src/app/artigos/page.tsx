import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHead } from "@/components/ui/Section";
import { Chip, JsonLd } from "@/components/ui/Atoms";
import { articles, articleCategories } from "@/data/articles";
import { buildMetadata, breadcrumbSchema, itemListSchema } from "@/lib/seo";
import { unsplash } from "@/lib/images";

/* ------------------------------------------------------------------
   1 PÁGINA: ARTIGOS (listagem)
   1.1 Metadados
   1.2 Hero
   1.3 Grade de artigos
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Artigos sobre veganismo com fontes verificáveis",
  description:
    "Conteúdo aprofundado sobre veganismo: senciência animal, impacto ambiental, nutrição baseada em evidências, rótulos, família e atletas plant-based.",
  path: "/artigos",
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
            <li className="text-acid">artigos</li>
          </ol>
        </nav>
        <span className="eyebrow">biblioteca vitalis</span>
        <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98]">
          Entenda antes de <span className="u-neon">decidir</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
          Cada artigo cita fontes primárias, tem data de atualização visível e evita
          sensacionalismo. Informação boa reduz medo — e medo é o que trava a mudança.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {articleCategories.map((cat) => (
            <span key={cat} className="chip chip-mute">{cat}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 1.3 Grade de artigos */
function Grid() {
  const [main, ...rest] = articles;
  return (
    <>
      <Section className="!pt-12">
        <Link
          href={`/artigos/${main.slug}`}
          className="card card-lift group grid gap-6 overflow-hidden md:grid-cols-[1fr_1fr] md:items-center"
        >
          <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:h-full md:min-h-[300px]">
            <Image
              src={unsplash(main.image, 900)}
              alt={main.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(4,7,11,0.7))]" />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2">
              <Chip>{main.category}</Chip>
              <span className="chip chip-plasma">destaque</span>
            </div>
            <h2 className="mt-4 text-2xl font-bold leading-tight group-hover:text-acid md:text-3xl">
              {main.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-fog md:text-base">{main.description}</p>
            <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fog/70">
              {main.readingMinutes} min · atualizado em {new Date(main.updated ?? main.date).toLocaleDateString("pt-BR")}
            </p>
          </div>
        </Link>
      </Section>

      <Section className="!pt-0">
        <SectionHead eyebrow="Todos os artigos" title="Biblioteca completa" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/artigos/${article.slug}`}
              className="card card-lift group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={unsplash(article.image, 600)}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(4,7,11,0.9))]" />
                <span className="absolute left-3 top-3 chip !bg-black/70 !text-[0.7rem]">
                  {article.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold leading-snug group-hover:text-acid">
                  {article.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-[0.82rem] leading-relaxed text-fog">
                  {article.description}
                </p>
                <p className="mt-4 border-t border-[var(--color-line)] pt-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fog/70">
                  {article.readingMinutes} min de leitura
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}

/* Página */
export default function ArtigosPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Artigos", path: "/artigos" },
          ]),
          itemListSchema(articles.map((a) => ({ name: a.title, path: `/artigos/${a.slug}` }))),
        ]}
      />
      <Hero />
      <Grid />
    </>
  );
}

/* Índice
   1 PÁGINA: ARTIGOS (listagem)
     1.1 Metadados
     1.2 Hero
     1.3 Grade de artigos
*/
