import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ActionLink, JsonLd } from "@/components/ui/Atoms";
import { methodology } from "@/data/content";
import { buildMetadata, breadcrumbSchema, webPageSchema } from "@/lib/schema-extra";

/* ------------------------------------------------------------------
   1 PÁGINA: METODOLOGIA
   1.1 Metadados
   1.2 Hero
   1.3 Princípios editoriais
   1.4 Fontes utilizadas
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Metodologia e política editorial",
  description:
    "Como o Vitalis produz conteúdo: prioridade em fontes primárias, ausência de imagens de choque, independência editorial e revisão anual de conteúdo de saúde.",
  path: "/metodologia",
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
            <li className="text-acid">metodologia</li>
          </ol>
        </nav>
        <span className="eyebrow">transparência</span>
        <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98]">
          Como a gente <span className="u-neon">chega nas conclusões</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
          Um portal que pede confiança precisa mostrar o método. Estas são as regras que seguimos
          para escrever, revisar e corrigir qualquer conteúdo publicado aqui.
        </p>
      </div>
    </section>
  );
}

/* 1.3 Princípios editoriais */
function Principles() {
  return (
    <Section>
      <div className="grid gap-4 md:grid-cols-2">
        {methodology.map((item, index) => (
          <article key={item.title} className="card p-6">
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-acid">
              princípio {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-2.5 text-lg font-bold">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-fog">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* 1.4 Fontes utilizadas */
const references = [
  { name: "FAO — Food and Agriculture Organization", url: "https://www.fao.org", note: "Emissões da pecuária, produção de alimentos" },
  { name: "Water Footprint Network", url: "https://waterfootprint.org", note: "Pegada hídrica de alimentos" },
  { name: "Academy of Nutrition and Dietetics", url: "https://www.eatright.org", note: "Posição sobre dietas vegetarianas" },
  { name: "Sociedade Vegetariana Brasileira", url: "https://www.svb.org.br", note: "Nutrição e certificação vegana no Brasil" },
  { name: "The Vegan Society", url: "https://www.vegansociety.com", note: "Definição de veganismo e dados de mercado" },
  { name: "Our World in Data", url: "https://ourworldindata.org", note: "Visualizações e dados ambientais" },
  { name: "PubMed / NIH", url: "https://pubmed.ncbi.nlm.nih.gov", note: "Literatura científica revisada por pares" },
  { name: "Water Footprint Network — Mekonnen & Hoekstra", url: "https://waterfootprint.org", note: "Estudos de pegada hídrica animal vs vegetal" },
  { name: "Poore & Nemecek (Science, 2018)", url: "https://www.science.org", note: "Maior meta-análise de impacto alimentar" },
  { name: "TACO — Tabela Brasileira de Composição de Alimentos", url: "https://www.nepa.unicamp.br", note: "Composição nutricional de alimentos brasileiros" },
];

function References() {
  return (
    <Section tone="panel" id="editorial">
      <div className="max-w-3xl">
        <span className="eyebrow">fontes</span>
        <h2 className="mt-3 text-2xl font-bold md:text-3xl">De onde vêm os dados</h2>
        <p className="mt-3 text-sm leading-relaxed text-fog">
          Sempre que um número aparece no portal, ele tem origem em uma destas instituições ou em
          artigo revisado por pares. Dados de indústria são identificados como tal.
        </p>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {references.map((ref) => (
          <div key={ref.name} className="card p-4">
            <p className="text-sm font-semibold text-bone">{ref.name}</p>
            <p className="mt-1 text-xs text-fog">{ref.note}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <ActionLink href="/contato" variant="ghost">
          Encontrar um erro? Fale com a gente →
        </ActionLink>
      </div>
    </Section>
  );
}

/* Página */
export default function MetodologiaPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Metodologia", path: "/metodologia" },
          ]),
          webPageSchema({
            name: "Metodologia e política editorial",
            description: "Como o Vitalis produz e revisa conteúdo sobre veganismo.",
            path: "/metodologia",
          }),
        ]}
      />
      <Hero />
      <Principles />
      <References />
    </>
  );
}

/* Índice
   1 PÁGINA: METODOLOGIA
     1.1 Metadados
     1.2 Hero
     1.3 Princípios editoriais
     1.4 Fontes utilizadas
*/
