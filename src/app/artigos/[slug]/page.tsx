import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ActionLink, Chip, JsonLd } from "@/components/ui/Atoms";
import { articles, getArticle, type ArticleBlock } from "@/data/articles";
import { buildMetadata, articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { unsplash } from "@/lib/images";
import { SITE } from "@/lib/seo";

/* ------------------------------------------------------------------
   1 PÁGINA: ARTIGO (detalhe)
   1.1 Rotas estáticas
   1.2 Metadados
   1.3 Cabeçalho
   1.4 Renderizador de blocos
   1.5 Sumário lateral
   1.6 FAQ e relacionados
------------------------------------------------------------------ */

/* 1.1 Rotas estáticas */
export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

/* 1.2 Metadados */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/artigos/${article.slug}`,
    image: unsplash(article.image, 1200),
    type: "article",
    publishedTime: article.date,
    tags: article.keywords,
  });
}

/* 1.3 Cabeçalho */
function ArticleHeader({ article }: { article: NonNullable<ReturnType<typeof getArticle>> }) {
  return (
    <section className="relative border-b border-[var(--color-line)]">
      <div className="absolute inset-0 u-grid opacity-15" aria-hidden="true" />
      <div className="container-x relative py-12">
        <nav aria-label="Você está aqui" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fog">
            <li><Link href="/" className="hover:text-acid">início</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/artigos" className="hover:text-acid">artigos</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-acid">{article.category}</li>
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Chip>{article.category}</Chip>
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fog">
                {article.readingMinutes} min de leitura
              </span>
            </div>
            <h1 className="mt-4 max-w-3xl text-[clamp(1.8rem,4.6vw,3.1rem)] font-bold leading-[1.03]">
              {article.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
              {article.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--color-line)] pt-4 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fog">
              <span>por {article.author}</span>
              <span>publicado em {new Date(article.date).toLocaleDateString("pt-BR")}</span>
              {article.updated && (
                <span className="text-acid">
                  revisado em {new Date(article.updated).toLocaleDateString("pt-BR")}
                </span>
              )}
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-[var(--color-line)]">
            <Image
              src={unsplash(article.image, 900)}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 1.4 Renderizador de blocos */
function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h2":
      return <h2 id={slugify(block.text)}>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote>
          {block.text}
          {block.cite && <footer className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fog">— {block.cite}</footer>}
        </blockquote>
      );
    case "stat":
      return (
        <div className="stat-box !border-[rgba(184,255,47,0.3)] !bg-[rgba(184,255,47,0.05)]">
          <p className="font-display text-3xl font-bold text-acid">{block.value}</p>
          <p className="mt-1 text-sm text-bone/85">{block.label}</p>
          <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fog/70">
            fonte: {block.source}
          </p>
        </div>
      );
    case "callout":
      return (
        <div
          className={`rounded-lg border p-5 ${
            block.tone === "plasma"
              ? "border-[rgba(255,45,149,0.3)] bg-[rgba(255,45,149,0.06)]"
              : block.tone === "volt"
                ? "border-[rgba(34,230,255,0.3)] bg-[rgba(34,230,255,0.06)]"
                : "border-[rgba(184,255,47,0.3)] bg-[rgba(184,255,47,0.06)]"
          }`}
        >
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-acid">
            {block.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-bone/90">{block.text}</p>
        </div>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-lg border border-[var(--color-line)]">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-line)] bg-black/40">
                {block.head.map((cell) => (
                  <th key={cell} scope="col" className="p-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-acid">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, index) => (
                <tr key={index} className="border-b border-[var(--color-line)]/60 last:border-0">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className={`p-3 text-[0.85rem] ${cellIndex === 0 ? "font-medium text-bone" : "text-fog"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/* 1.5 Sumário lateral */
function Content({ article }: { article: NonNullable<ReturnType<typeof getArticle>> }) {
  const headings = article.blocks.filter((block) => block.type === "h2") as { type: "h2"; text: string }[];

  return (
    <section className="py-14">
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
        <article className="prose-blog max-w-none">
          {article.blocks.map((block, index) => (
            <Block key={index} block={block} />
          ))}

          <div className="!mt-10 rounded-lg border border-[var(--color-line)] bg-[rgba(184,255,47,0.05)] p-5 not-prose">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-acid">
              próximo passo prático
            </p>
            <p className="mt-2 text-sm leading-relaxed text-bone/85">
              Ler muda a cabeça; cozinhar muda o hábito. Comece pelo guia de 21 dias — são 5 minutos
              por dia e nenhum cadastro.
            </p>
            <ActionLink href="/comecar" className="mt-4">Começar o guia →</ActionLink>
          </div>
        </article>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card p-5">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-acid">
              neste artigo
            </p>
            <ol className="mt-3 grid gap-2">
              {headings.map((heading, index) => (
                <li key={heading.text}>
                  <a
                    href={`#${slugify(heading.text)}`}
                    className="flex gap-2 text-[0.8rem] leading-snug text-fog transition-colors hover:text-acid"
                  >
                    <span className="font-mono text-[0.72rem] text-acid/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {heading.text.replace(/^\d+\.\s*/, "")}
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div className="card mt-4 p-5">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
              transparência
            </p>
            <p className="mt-2 text-[0.78rem] leading-relaxed text-fog">
              Conteúdo educativo, sem substituir consulta profissional.{" "}
              <Link href="/metodologia" className="text-acid hover:underline">
                Nossa metodologia
              </Link>
              .
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* 1.6 FAQ e relacionados */
function ArticleFaq({ article }: { article: NonNullable<ReturnType<typeof getArticle>> }) {
  if (!article.faq?.length) return null;
  return (
    <section className="border-t border-[var(--color-line)] bg-[#070c12]/60 py-14">
      <div className="container-x max-w-3xl">
        <h2 className="font-display text-xl font-bold">Perguntas frequentes</h2>
        <div className="mt-5 grid gap-3">
          {article.faq.map((item) => (
            <details key={item.question} className="card p-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 text-sm font-semibold marker:content-none">
                {item.question}
                <span className="shrink-0 text-acid">+</span>
              </summary>
              <p className="mt-2.5 text-sm leading-relaxed text-fog">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Related({ article }: { article: NonNullable<ReturnType<typeof getArticle>> }) {
  const related = article.related
    .map((slug) => getArticle(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  if (!related.length) return null;

  return (
    <section className="border-t border-[var(--color-line)] py-14">
      <div className="container-x">
        <h2 className="font-display text-xl font-bold">Leia também</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/artigos/${item.slug}`} className="card card-lift group flex gap-4 p-4">
              <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded">
                <Image src={unsplash(item.image, 300)} alt={item.title} fill sizes="96px" className="object-cover" />
              </div>
              <div>
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-acid">
                  {item.category}
                </p>
                <h3 className="mt-1.5 text-sm font-semibold leading-snug group-hover:text-acid">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Página */
export default async function ArtigoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: article.title,
            description: article.description,
            slug: article.slug,
            date: article.date,
            updated: article.updated,
            image: unsplash(article.image, 1200),
            section: article.category,
          }),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Artigos", path: "/artigos" },
            { name: article.title, path: `/artigos/${article.slug}` },
          ]),
          ...(article.faq ? [faqSchema(article.faq)] : []),
        ]}
      />
      <ArticleHeader article={article} />
      <Content article={article} />
      <ArticleFaq article={article} />
      <Related article={article} />
      <p className="sr-only">{SITE.legalName}</p>
    </>
  );
}

/* Índice
   1 PÁGINA: ARTIGO (detalhe)
     1.1 Rotas estáticas
     1.2 Metadados
     1.3 Cabeçalho
     1.4 Renderizador de blocos
     1.5 Sumário lateral
     1.6 FAQ e relacionados
*/
