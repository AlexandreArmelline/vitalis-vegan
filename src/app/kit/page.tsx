import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ActionLink, Chip, JsonLd } from "@/components/ui/Atoms";
import { PrintButton } from "@/components/tools/PrintButton";
import { shoppingGroups, guideDays } from "@/data/content";
import { buildMetadata, breadcrumbSchema, digitalDocumentSchema } from "@/lib/schema-extra";

/* ------------------------------------------------------------------
   1 PÁGINA: KIT DE TRANSIÇÃO
   1.1 Metadados
   1.2 Hero
   1.3 Conteúdo do kit
   1.4 Checklist imprimível
   1.5 Lista de compras imprimível
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Kit de transição vegana: checklist, lista de compras e receitas",
  description:
    "Kit gratuito para a primeira semana vegana: checklist de 21 dias, lista de compras por categoria, tabela de nutrientes e 5 receitas de emergência. Imprima e cole na geladeira.",
  path: "/kit",
});

/* 1.2 Hero */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="absolute inset-0 u-grid opacity-20" aria-hidden="true" />
      <div
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(34,230,255,0.14),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="container-x relative py-14 md:py-18">
        <nav aria-label="Você está aqui" className="mb-5">
          <ol className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
            <li><Link href="/" className="hover:text-acid">início</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-acid">kit</li>
          </ol>
        </nav>
        <Chip tone="volt">100% gratuito</Chip>
        <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98]">
          O kit que deixa a <span className="u-neon">primeira semana</span> fácil
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
          Quatro peças que resolvem 90% dos atritos de quem está começando: o que fazer, o que
          comprar, o que comer e o que monitorar.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrintButton />
          <ActionLink href="/comecar" variant="ghost">Ver o guia completo</ActionLink>
        </div>
      </div>
    </section>
  );
}

/* 1.3 Conteúdo do kit */
const kitContents = [
  { title: "Checklist de 21 dias", desc: "Uma linha por dia com a tarefa e o tempo estimado.", icon: "☑" },
  { title: "Lista de compras por categoria", desc: "Proteína, gorduras boas, grãos, temperos, laticínios vegetais e suplementos.", icon: "▤" },
  { title: "Tabela de nutrientes", desc: "Metas e fontes vegetais de proteína, ferro, cálcio, B12, ômega-3, iodo e zinco.", icon: "◈" },
  { title: "5 receitas de emergência", desc: "Pratos de até 20 minutos, com ingredientes de mercado comum.", icon: "◆" },
];

function Contents() {
  return (
    <Section>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kitContents.map((item) => (
          <div key={item.title} className="card p-5">
            <span className="font-display text-2xl text-acid" aria-hidden="true">{item.icon}</span>
            <h2 className="mt-3 text-base font-bold">{item.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-fog">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 1.4 Checklist imprimível */
function Checklist() {
  return (
    <Section tone="panel">
      <div className="mb-8">
        <span className="eyebrow">peça 1 de 4</span>
        <h2 className="mt-3 text-2xl font-bold md:text-3xl">Checklist de 21 dias</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fog">
          Imprima e marque a cada dia cumprido. Se falhar, não reinicie: continue no próximo.
        </p>
      </div>
      <div className="grid gap-2.5 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3">
        {guideDays.map((day) => (
          <div
            key={day.day}
            className="card flex items-start gap-3 p-3.5 print:break-inside-avoid print:border-black/20"
          >
            <span
              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-[rgba(184,255,47,0.45)]"
              aria-hidden="true"
            />
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fog">
                dia {String(day.day).padStart(2, "0")} · {day.phase}
              </p>
              <p className="mt-0.5 text-[0.82rem] leading-snug text-bone/90">{day.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 1.5 Lista de compras imprimível */
function ShoppingList() {
  return (
    <Section>
      <div className="mb-8">
        <span className="eyebrow">peça 2 de 4</span>
        <h2 className="mt-3 text-2xl font-bold md:text-3xl">Lista de compras</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fog">
          Leve ao mercado. Complete as quantidades conforme a sua casa.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3">
        {shoppingGroups.map((group) => (
          <div key={group.title} className="card p-5 print:break-inside-avoid">
            <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-acid">
              {group.title}
            </h3>
            <ul className="mt-3 grid gap-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.85rem] text-bone/85">
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
      <div className="mt-10 flex flex-wrap gap-3">
        <ActionLink href="/nutricao">Tabela de nutrientes</ActionLink>
        <ActionLink href="/receitas" variant="ghost">Receitas de emergência</ActionLink>
      </div>
    </Section>
  );
}

/* Página */
export default function KitPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Kit de transição", path: "/kit" },
          ]),
          digitalDocumentSchema({
            name: "Kit de transição vegana Vitalis",
            description: "Checklist de 21 dias, lista de compras, tabela de nutrientes e receitas de emergência.",
            path: "/kit",
          }),
        ]}
      />
      <Hero />
      <Contents />
      <Checklist />
      <ShoppingList />
    </>
  );
}

/* Índice
   1 PÁGINA: KIT DE TRANSIÇÃO
     1.1 Metadados
     1.2 Hero
     1.3 Conteúdo do kit
     1.4 Checklist imprimível
     1.5 Lista de compras imprimível
*/
