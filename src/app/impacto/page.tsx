import type { Metadata } from "next";
import { Section, SectionHead } from "@/components/ui/Section";
import { ActionLink, JsonLd } from "@/components/ui/Atoms";
import { ImpactCalculator } from "@/components/tools/ImpactCalculator";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

/* ------------------------------------------------------------------
   1 PÁGINA: IMPACTO (calculadora + dados)
   1.1 Metadados
   1.2 Hero
   1.3 Calculadora completa
   1.4 Tabela comparativa
   1.5 Metodologia e fontes
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Calculadora de impacto vegano: animais, água e CO₂",
  description:
    "Descubra quantos animais, litros de água e kg de CO₂ você poupa ao trocar refeições com carne por opções vegetais. Calculadora gratuita com fontes abertas.",
  path: "/impacto",
});

/* 1.2 Hero */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="absolute inset-0 u-grid opacity-20" aria-hidden="true" />
      <div className="container-x relative py-16 text-center md:py-20">
        <span className="eyebrow justify-center">ferramenta interativa</span>
        <h1 className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,5.5vw,3.6rem)] font-bold leading-[0.98]">
          Qual é o <span className="u-neon">peso real</span> da sua próxima refeição?
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
          Ajuste os controles e veja sua projeção anual. Usamos pegadas hídricas e de carbono
          publicadas por FAO e Water Footprint Network — sem números inventados para impressionar.
        </p>
      </div>
    </section>
  );
}

/* 1.3 Calculadora completa */
function CalculatorSection() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <ImpactCalculator />
      </div>
    </Section>
  );
}

/* 1.4 Tabela comparativa */
const comparison = [
  { food: "Carne bovina", water: "15.400 L", co2: "60 kg", land: "164 m²", note: "Maior pegada por quilo" },
  { food: "Carne suína", water: "6.000 L", co2: "7 kg", land: "11 m²", note: "Impacto médio" },
  { food: "Frango", water: "4.300 L", co2: "6 kg", land: "7 m²", note: "Menor que ruminantes" },
  { food: "Ovos", water: "3.300 L", co2: "4,5 kg", land: "6 m²", note: "Por kg de produto" },
  { food: "Leite de vaca", water: "1.000 L", co2: "3 kg", land: "9 m²", note: "Por litro" },
  { food: "Tofu", water: "2.500 L", co2: "3 kg", land: "3 m²", note: "Proteína vegetal densa" },
  { food: "Leguminosas", water: "5.000 L*", co2: "2 kg", land: "8 m²", note: "*Água majoritariamente da chuva" },
  { food: "Vegetais", water: "300 L", co2: "0,5 kg", land: "0,3 m²", note: "Menor pegada global" },
];

function Comparison() {
  return (
    <Section tone="panel">
      <SectionHead
        eyebrow="Referência rápida"
        title="Pegada comparada por quilo"
        description="Números médios globais. Comparações variam por região, método de produção e transporte — mas a ordem de grandeza se mantém em praticamente todos os estudos."
      />
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">Comparativo de pegada hídrica, de carbono e de terra por alimento</caption>
            <thead>
              <tr className="border-b border-[var(--color-line)] bg-black/40">
                <th scope="col" className="p-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-acid">Alimento</th>
                <th scope="col" className="p-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-acid">Água</th>
                <th scope="col" className="p-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-acid">CO₂e</th>
                <th scope="col" className="p-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-acid">Terra</th>
                <th scope="col" className="p-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-acid">Observação</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.food} className="border-b border-[var(--color-line)]/60 last:border-0 hover:bg-white/[0.02]">
                  <th scope="row" className="p-3 font-medium text-bone">{row.food}</th>
                  <td className="p-3 font-mono text-xs text-[#7ae9ff]">{row.water}</td>
                  <td className="p-3 font-mono text-xs text-plasma">{row.co2}</td>
                  <td className="p-3 font-mono text-xs text-fog">{row.land}</td>
                  <td className="p-3 text-xs text-fog">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-4 font-mono text-[0.72rem] uppercase leading-relaxed tracking-[0.12em] text-fog/60">
        Fontes: Mekonnen &amp; Hoekstra (Water Footprint Network, 2010-2012) · Poore &amp; Nemecek
        (Science, 2018) · FAO (Livestock&apos;s Long Shadow). Valores por kg de produto.
      </p>
    </Section>
  );
}

/* 1.5 Metodologia e fontes */
const impactFaq = [
  {
    question: "Como vocês calculam animais poupados?",
    answer:
      "Usamos uma média ponderada de abates de aves e bovinos por habitante no Brasil dividida pelo número de refeições com carne por ano. É uma aproximação conservadora, pois não inclui peixes nem animais marinhos.",
  },
  {
    question: "Por que a água do feijão é alta e a pegada é considerada baixa?",
    answer:
      "Porque a maior parte da água usada no feijão é água da chuva (pegada verde), que não compete com o abastecimento urbano. Separar água verde, azul e cinza é a forma correta de comparar.",
  },
  {
    question: "Os números são os mesmos para o Brasil?",
    answer:
      "As ordens de grandeza sim. A pecuária brasileira é majoritariamente a pasto, o que muda o perfil de emissões (mais metano entérico, menos uso de ração), mas não inverte a conclusão.",
  },
];

function Methodology() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHead eyebrow="Transparência" title="Como calculamos" />
          <div className="grid gap-3">
            {impactFaq.map((item) => (
              <details key={item.question} className="card p-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-sm font-semibold marker:content-none">
                  {item.question}
                  <span className="text-acid">+</span>
                </summary>
                <p className="mt-2.5 text-sm leading-relaxed text-fog">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="card u-scanlines flex flex-col justify-center p-8">
          <h2 className="text-2xl font-bold leading-tight">
            Números não mudam o mundo. Hábitos mudam.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-fog">
            Use esses dados como bússola, não como troféu. O próximo passo prático é trocar uma
            refeição — e o guia de 21 dias faz isso com você.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <ActionLink href="/comecar">Começar o guia</ActionLink>
            <ActionLink href="/receitas" variant="ghost">Ver receitas</ActionLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* Página */
export default function ImpactoPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Impacto", path: "/impacto" },
          ]),
          faqSchema(impactFaq),
        ]}
      />
      <Hero />
      <CalculatorSection />
      <Comparison />
      <Methodology />
    </>
  );
}

/* Índice
   1 PÁGINA: IMPACTO (calculadora + dados)
     1.1 Metadados
     1.2 Hero
     1.3 Calculadora completa
     1.4 Tabela comparativa
     1.5 Metodologia e fontes
*/
