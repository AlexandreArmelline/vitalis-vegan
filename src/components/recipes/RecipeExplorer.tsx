"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Recipe } from "@/data/recipes";
import { unsplash } from "@/lib/images";

/* ------------------------------------------------------------------
   1 LISTA DE RECEITAS COM FILTROS
   1.1 Estado e filtros
   1.2 Cabeçalho de controles
   1.3 Grade de cartões
   1.4 Componente principal
------------------------------------------------------------------ */

/* 1.1 Estado e filtros */
const categories = ["Todos", "Café da manhã", "Prato Principal", "Lanche", "Salada", "Doce", "Bebida"];
const sorts = [
  { id: "default", label: "Relevância" },
  { id: "fast", label: "Mais rápido" },
  { id: "protein", label: "Mais proteína" },
  { id: "cheap", label: "Mais barato" },
];

/* 1.2 Cabeçalho de controles */
function Controls({
  category,
  setCategory,
  sort,
  setSort,
  query,
  setQuery,
  count,
}: {
  category: string;
  setCategory: (v: string) => void;
  sort: string;
  setSort: (v: string) => void;
  query: string;
  setQuery: (v: string) => void;
  count: number;
}) {
  return (
    <div className="sticky top-16 z-20 -mx-5 mb-8 border-b border-[var(--color-line)] bg-[#04070b]/92 px-5 py-4 backdrop-blur-xl md:-mx-8 md:px-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`shrink-0 rounded-full border px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-all ${
                category === item
                  ? "border-acid bg-acid text-[#06140a]"
                  : "border-[var(--color-line)] text-fog hover:border-[rgba(184,255,47,0.5)] hover:text-acid"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar receita…"
            aria-label="Buscar receita"
            className="w-full min-w-0 rounded border border-[var(--color-line)] bg-black/40 px-3 py-2 text-sm text-bone placeholder:text-fog/60 focus:border-acid focus:outline-none lg:w-44"
          />
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            aria-label="Ordenar receitas"
            className="shrink-0 rounded border border-[var(--color-line)] bg-black/40 px-2.5 py-2 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-fog focus:border-acid focus:outline-none"
          >
            {sorts.map((option) => (
              <option key={option.id} value={option.id} className="bg-[#080d13]">
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fog/60">
        {count} receita{count !== 1 ? "s" : ""} encontrada{count !== 1 ? "s" : ""}
      </p>
    </div>
  );
}

/* 1.3 Grade de cartões */
function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/receitas/${recipe.slug}`} className="card card-lift group flex flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={unsplash(recipe.image, 600)}
          alt={recipe.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(4,7,11,0.95))]" />
        <div className="absolute left-3 top-3 flex gap-1.5">
          <span className="chip !bg-black/70 !text-[0.7rem]">{recipe.category}</span>
        </div>
        <span className="absolute right-3 top-3 rounded bg-black/70 px-2 py-1 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-acid">
          {recipe.difficulty}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold leading-snug group-hover:text-acid">{recipe.title}</h3>
        <p className="mt-2 line-clamp-2 flex-1 text-[0.82rem] leading-relaxed text-fog">
          {recipe.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-[var(--color-line)] pt-3">
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-fog">
            ⏱ {recipe.prepMinutes + recipe.cookMinutes} min · {recipe.cost}
          </span>
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-acid">
            {recipe.proteinNote.match(/\d+/)?.[0] ?? "—"}g prot.
          </span>
        </div>
      </div>
    </Link>
  );
}

/* 1.4 Componente principal */
export function RecipeExplorer({ recipes }: { recipes: Recipe[] }) {
  const [category, setCategory] = useState("Todos");
  const [sort, setSort] = useState("default");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = recipes;
    if (category !== "Todos") list = list.filter((r) => r.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.tags.some((tag) => tag.includes(q)) ||
          r.ingredients.some((ing) => ing.toLowerCase().includes(q)),
      );
    }
    if (sort === "fast") {
      list = [...list].sort((a, b) => a.prepMinutes + a.cookMinutes - (b.prepMinutes + b.cookMinutes));
    } else if (sort === "protein") {
      list = [...list].sort(
        (a, b) => Number(b.proteinNote.match(/\d+/)?.[0] ?? 0) - Number(a.proteinNote.match(/\d+/)?.[0] ?? 0),
      );
    } else if (sort === "cheap") {
      list = [...list].sort((a, b) => a.cost.length - b.cost.length);
    }
    return list;
  }, [recipes, category, query, sort]);

  return (
    <div>
      <Controls
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        query={query}
        setQuery={setQuery}
        count={filtered.length}
      />
      {filtered.length === 0 ? (
        <div className="card p-10 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.16em] text-fog">
            nenhuma receita encontrada
          </p>
          <button
            type="button"
            onClick={() => {
              setCategory("Todos");
              setQuery("");
            }}
            className="btn btn-ghost mt-5"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

/* Índice
   1 LISTA DE RECEITAS COM FILTROS
     1.1 Estado e filtros
     1.2 Cabeçalho de controles
     1.3 Grade de cartões
     1.4 Componente principal
*/
