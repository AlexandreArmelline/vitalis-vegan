import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ActionLink, Chip, JsonLd } from "@/components/ui/Atoms";
import { getRecipe, recipes } from "@/data/recipes";
import { buildMetadata, breadcrumbSchema, recipeSchema } from "@/lib/seo";
import { unsplash } from "@/lib/images";

/* ------------------------------------------------------------------
   1 PÁGINA: RECEITA (detalhe)
   1.1 Geração estática de rotas
   1.2 Metadados dinâmicos
   1.3 Cabeçalho da receita
   1.4 Ingredientes e modo de preparo
   1.5 Dica + nutrição
   1.6 Relacionadas e CTA
------------------------------------------------------------------ */

/* 1.1 Geração estática de rotas */
export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

/* 1.2 Metadados dinâmicos */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return {};
  return buildMetadata({
    title: `${recipe.title} — receita vegana`,
    description: recipe.description,
    path: `/receitas/${recipe.slug}`,
    image: unsplash(recipe.image, 1200),
    type: "article",
    publishedTime: "2025-11-01",
    tags: recipe.tags,
  });
}

/* 1.3 Cabeçalho da receita */
function RecipeHeader({ recipe }: { recipe: NonNullable<ReturnType<typeof getRecipe>> }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="container-x grid gap-10 py-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <nav aria-label="Você está aqui" className="mb-5">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fog">
              <li><Link href="/" className="hover:text-acid">início</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/receitas" className="hover:text-acid">receitas</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-acid">{recipe.category}</li>
            </ol>
          </nav>
          <Chip>{recipe.category}</Chip>
          <h1 className="mt-4 text-[clamp(1.9rem,4.5vw,3rem)] font-bold leading-[1.02]">
            {recipe.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-fog">{recipe.description}</p>

          <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "preparo", value: `${recipe.prepMinutes} min` },
              { label: "cozimento", value: `${recipe.cookMinutes} min` },
              { label: "porções", value: String(recipe.servings) },
              { label: "calorias", value: `${recipe.calories}` },
            ].map((item) => (
              <div key={item.label} className="rounded border border-[var(--color-line)] bg-black/30 p-3">
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fog">
                  {item.label}
                </dt>
                <dd className="mt-1 font-display text-base font-bold text-acid">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--color-line)]">
          <Image
            src={unsplash(recipe.image, 900)}
            alt={recipe.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* 1.4 Ingredientes e modo de preparo */
function RecipeBody({ recipe }: { recipe: NonNullable<ReturnType<typeof getRecipe>> }) {
  return (
    <section className="py-14">
      <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="card u-scanlines p-6">
            <h2 className="font-display text-lg font-bold">Ingredientes</h2>
            <p className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fog">
              {recipe.servings} porções
            </p>
            <ul className="mt-4 grid gap-2.5">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex gap-2.5 text-sm leading-snug text-bone/85">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-acid" aria-hidden="true" />
                  {ingredient}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded border border-[rgba(184,255,47,0.25)] bg-[rgba(184,255,47,0.05)] p-3">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-acid">
                proteína
              </p>
              <p className="mt-1 text-sm text-bone/85">{recipe.proteinNote}</p>
            </div>
          </div>
        </aside>

        <div>
          <h2 className="font-display text-2xl font-bold">Modo de preparo</h2>
          <ol className="mt-5 grid gap-4">
            {recipe.steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[rgba(184,255,47,0.35)] bg-[rgba(184,255,47,0.06)] font-mono text-[0.7rem] font-bold text-acid">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-[0.95rem] leading-relaxed text-bone/90">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-lg border border-[rgba(34,230,255,0.25)] bg-[rgba(34,230,255,0.05)] p-5">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-[#7ae9ff]">
              dica de execução
            </p>
            <p className="mt-2 text-sm leading-relaxed text-bone/85">{recipe.tip}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span key={tag} className="chip chip-mute">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 1.5 Relacionadas e CTA */
function Related({ recipe }: { recipe: NonNullable<ReturnType<typeof getRecipe>> }) {
  const others = recipes.filter((r) => r.slug !== recipe.slug && r.category === recipe.category).slice(0, 3);
  const fallback = recipes.filter((r) => r.slug !== recipe.slug).slice(0, 3);
  const list = others.length >= 2 ? others : fallback;

  return (
    <section className="border-t border-[var(--color-line)] bg-[#070c12]/60 py-14">
      <div className="container-x">
        <h2 className="font-display text-xl font-bold">Continue cozinhando</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item) => (
            <Link key={item.slug} href={`/receitas/${item.slug}`} className="card card-lift group flex gap-4 p-4">
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
        <div className="mt-8 flex flex-wrap gap-3">
          <ActionLink href="/comecar">Começar o guia de 21 dias</ActionLink>
          <ActionLink href="/compras" variant="ghost">Guia de compras</ActionLink>
        </div>
      </div>
    </section>
  );
}

/* Página */
export default async function ReceitaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) notFound();

  return (
    <>
      <JsonLd
        data={[
          recipeSchema({
            title: recipe.title,
            description: recipe.description,
            slug: recipe.slug,
            image: unsplash(recipe.image, 1200),
            prepMinutes: recipe.prepMinutes,
            cookMinutes: recipe.cookMinutes,
            servings: recipe.servings,
            calories: recipe.calories,
            ingredients: recipe.ingredients,
            steps: recipe.steps,
            category: recipe.category,
          }),
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Receitas", path: "/receitas" },
            { name: recipe.title, path: `/receitas/${recipe.slug}` },
          ]),
        ]}
      />
      <RecipeHeader recipe={recipe} />
      <RecipeBody recipe={recipe} />
      <Related recipe={recipe} />
    </>
  );
}

/* Índice
   1 PÁGINA: RECEITA (detalhe)
     1.1 Geração estática de rotas
     1.2 Metadados dinâmicos
     1.3 Cabeçalho da receita
     1.4 Ingredientes e modo de preparo
     1.5 Dica + nutrição
     1.6 Relacionadas e CTA
*/
