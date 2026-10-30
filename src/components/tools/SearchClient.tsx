"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Article } from "@/data/articles";
import type { Recipe } from "@/data/recipes";

/* ------------------------------------------------------------------
   1 BUSCA INTERNA
   1.1 Índice unificado
   1.2 Filtro
   1.3 Componente
------------------------------------------------------------------ */

/* 1.1 Índice unificado */
type Entry = {
  title: string;
  description: string;
  href: string;
  type: "artigo" | "receita" | "página";
  keywords: string;
};

export function SearchClient({ articles, recipes }: { articles: Article[]; recipes: Recipe[] }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"todos" | Entry["type"]>("todos");

  const index: Entry[] = useMemo(
    () => [
      ...articles.map((a) => ({
        title: a.title,
        description: a.description,
        href: `/artigos/${a.slug}`,
        type: "artigo" as const,
        keywords: `${a.keywords.join(" ")} ${a.category}`.toLowerCase(),
      })),
      ...recipes.map((r) => ({
        title: r.title,
        description: r.description,
        href: `/receitas/${r.slug}`,
        type: "receita" as const,
        keywords: `${r.tags.join(" ")} ${r.category} ${r.ingredients.join(" ")}`.toLowerCase(),
      })),
      ...[
        { title: "Guia de 21 dias", description: "Plano diário para começar sem radicalismo.", href: "/comecar" },
        { title: "Calculadora de impacto", description: "Animais, água e CO₂ poupados por ano.", href: "/impacto" },
        { title: "Quiz de perfil vegano", description: "Descubra seu caminho em 6 perguntas.", href: "/quiz" },
        { title: "Nutrição vegana", description: "Guia dos 7 nutrientes críticos.", href: "/nutricao" },
        { title: "Mitos sobre veganismo", description: "12 objeções respondidas com evidência.", href: "/mitos" },
        { title: "Guia de compras", description: "Lista completa e armadilhas de rótulo.", href: "/compras" },
        { title: "Onde comer", description: "Restaurantes veganos por cidade.", href: "/onde-comer" },
        { title: "Glossário vegano", description: "Termos do universo vegano explicados.", href: "/glossario" },
        { title: "Kit de transição", description: "Checklist, compras e receitas para imprimir.", href: "/kit" },
      ].map((p) => ({
        title: p.title,
        description: p.description,
        href: p.href,
        type: "página" as const,
        keywords: p.title.toLowerCase() + " " + p.description.toLowerCase(),
      })),
    ],
    [articles, recipes],
  );

  /* 1.2 Filtro */
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = index;
    if (type !== "todos") list = list.filter((item) => item.type === type);
    if (!q) return list.slice(0, 8);
    return list.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.keywords.includes(q),
    );
  }, [index, query, type]);

  const typeLabel = { artigo: "Artigo", receita: "Receita", página: "Página" } as const;

  return (
    <div>
      <div className="card p-4 md:p-5">
        <label htmlFor="search" className="sr-only">
          Buscar no portal
        </label>
        <div className="flex items-center gap-3">
          <span className="font-mono text-acid" aria-hidden="true">⌕</span>
          <input
            id="search"
            type="search"
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Busque por receita, nutriente, mito, cidade…"
            className="w-full bg-transparent text-base text-bone placeholder:text-fog/50 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="font-mono text-xs uppercase tracking-[0.14em] text-fog hover:text-acid"
            >
              limpar
            </button>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[var(--color-line)] pt-3">
          {(["todos", "artigo", "receita", "página"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setType(item)}
              className={`rounded-full border px-3 py-1 font-mono text-[0.72rem] uppercase tracking-[0.14em] transition-colors ${
                type === item
                  ? "border-acid bg-acid text-[#06140a]"
                  : "border-[var(--color-line)] text-fog hover:border-[rgba(184,255,47,0.5)] hover:text-acid"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fog">
        {results.length} resultado{results.length !== 1 ? "s" : ""}
        {!query && " · sugestões"}
      </p>

      {/* 1.3 Resultados */}
      <div className="mt-3 grid gap-2.5">
        {results.length === 0 ? (
          <div className="card p-8 text-center">
            <p className="text-sm text-fog">
              Nada encontrado para <strong className="text-bone">“{query}”</strong>.
            </p>
            <p className="mt-2 text-xs text-fog/70">
              Tente termos como &ldquo;proteína&rdquo;, &ldquo;feijão&rdquo;, &ldquo;B12&rdquo; ou
              &ldquo;mito&rdquo;.
            </p>
          </div>
        ) : (
          results.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card group flex flex-col gap-1 p-4 transition-colors hover:border-[rgba(184,255,47,0.45)] sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="flex items-center gap-2">
                  <span className="chip !py-0 !text-[0.7rem]">{typeLabel[item.type]}</span>
                  <span className="truncate text-sm font-semibold text-bone group-hover:text-acid">
                    {item.title}
                  </span>
                </p>
                <p className="mt-1 line-clamp-1 text-xs text-fog">{item.description}</p>
              </div>
              <span className="shrink-0 font-mono text-xs text-acid opacity-0 transition-opacity group-hover:opacity-100">
                abrir →
              </span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

/* Índice
   1 BUSCA INTERNA
     1.1 Índice unificado
     1.2 Filtro
     1.3 Componente
*/
