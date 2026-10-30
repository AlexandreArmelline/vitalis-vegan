import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/ui/Section";
import { ActionLink, Chip, JsonLd } from "@/components/ui/Atoms";
import { shoppingGroups, shoppingBeware } from "@/data/content";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

/* ------------------------------------------------------------------
   1 PÁGINA: GUIA DE COMPRAS
   1.1 Metadados
   1.2 Hero
   1.3 Lista por categoria
   1.4 Armadilhas de rótulo
   1.5 Como economizar
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Guia de compras vegano: lista completa e armadilhas de rótulo",
  description:
    "Lista de compras vegana organizada por categoria, ingredientes de origem animal escondidos em rótulos e como economizar sem perder nutrientes.",
  path: "/compras",
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
            <li className="text-acid">compras</li>
          </ol>
        </nav>
        <span className="eyebrow">supermercado real</span>
        <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98]">
          A lista que resolve <span className="u-neon">a semana inteira</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
          Tudo aqui existe no mercado do bairro. Organize a compra por categoria, evite os rótulos
          com ingredientes animais escondidos e coma bem gastando menos.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          <Chip>6 categorias</Chip>
          <Chip tone="volt">foco em custo</Chip>
          <Chip tone="plasma">rótulos decifrados</Chip>
        </div>
      </div>
    </section>
  );
}

/* 1.3 Lista por categoria */
function ShoppingList() {
  return (
    <Section>
      <SectionHead
        eyebrow="Lista base"
        title="O básico que não pode faltar"
        description="Com esses itens em casa você consegue montar qualquer receita do portal sem correr ao mercado."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shoppingGroups.map((group) => (
          <div key={group.title} className="card p-5">
            <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-acid">
              {group.title}
            </h3>
            <ul className="mt-3.5 grid gap-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-bone/85">
                  <span
                    className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm border border-[rgba(184,255,47,0.4)]"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 1.4 Armadilhas de rótulo */
function Beware() {
  return (
    <Section tone="panel">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHead
            eyebrow="Atenção"
            title="O que se esconde no rótulo"
            description="Cinco armadilhas frequentes que passam despercebidas até por quem já lê rótulos."
          />
          <ul className="grid gap-3">
            {shoppingBeware.map((item) => (
              <li key={item} className="card flex items-start gap-3 p-4">
                <span className="mt-0.5 font-mono text-sm text-plasma" aria-hidden="true">!</span>
                <p className="text-sm leading-relaxed text-bone/85">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHead eyebrow="Economia" title="Como gastar menos" />
          <div className="grid gap-3">
            {[
              { title: "Compre a granel", text: "Feijão, arroz, aveia e castanhas a granel custam de 20% a 40% menos que embalados." },
              { title: "Cozinhe leguminosas secas", text: "Uma panela de pressão rende 6 porções por menos que uma lata." },
              { title: "Faça seu tofu", text: "1 kg de soja rende cerca de 3 kg de tofu — economia de até 80%." },
              { title: "Use feira no fim do dia", text: "Preços caem até 50% na última hora. Congele o que sobrar." },
              { title: "Evite o 'selo vegano caro'", text: "Arroz e feijão são veganos sem precisar de certificação. O selo encarece o processado." },
            ].map((tip) => (
              <div key={tip.title} className="card p-4">
                <h3 className="text-sm font-semibold text-acid">{tip.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-fog">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <ActionLink href="/artigos/como-ler-rotulos-veganos">Ler o guia de rótulos</ActionLink>
        <ActionLink href="/receitas" variant="ghost">Ver receitas</ActionLink>
      </div>
    </Section>
  );
}

/* Página */
export default function ComprasPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Guia de compras", path: "/compras" },
          ]),
        ]}
      />
      <Hero />
      <ShoppingList />
      <Beware />
    </>
  );
}

/* Índice
   1 PÁGINA: GUIA DE COMPRAS
     1.1 Metadados
     1.2 Hero
     1.3 Lista por categoria
     1.4 Armadilhas de rótulo
     1.5 Como economizar
*/
