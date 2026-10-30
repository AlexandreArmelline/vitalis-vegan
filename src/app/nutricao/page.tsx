import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHead } from "@/components/ui/Section";
import { ActionLink, Chip, JsonLd } from "@/components/ui/Atoms";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";
import { unsplash } from "@/lib/images";

/* ------------------------------------------------------------------
   1 PÁGINA: NUTRIÇÃO VEGANA
   1.1 Metadados
   1.2 Hero
   1.3 Nutrientes essenciais (cards)
   1.4 Tabela de fontes vegetais
   1.5 Prato ideal
   1.6 Exames
   1.7 FAQ
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Nutrição vegana: proteína, B12, ferro, cálcio e ômega-3",
  description:
    "Guia de nutrição vegana baseado em evidências: quanto de proteína você precisa, onde encontrar ferro e cálcio em fontes vegetais, por que a B12 é obrigatória e quais exames fazer.",
  path: "/nutricao",
  image: "/og-nutricao.svg",
});

/* 1.2 Hero */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="absolute inset-0 u-grid opacity-20" aria-hidden="true" />
      <div className="container-x relative grid gap-10 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <nav aria-label="Você está aqui" className="mb-5">
            <ol className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
              <li><Link href="/" className="hover:text-acid">início</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-acid">nutrição</li>
            </ol>
          </nav>
          <Chip>baseado em evidências</Chip>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98]">
            Dieta vegana bem planejada é
            <br />
            <span className="u-neon">nutricionalmente adequada</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-fog md:text-lg">
            Essa é a posição da Academy of Nutrition and Dietetics, da British Dietetic Association
            e da Sociedade Vegetariana Brasileira. A palavra-chave é &ldquo;bem planejada&rdquo; — e
            é isso que este guia entrega.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#nutrientes" className="btn btn-primary">Ver os 7 nutrientes ↓</a>
            <ActionLink href="/artigos/guia-nutricao-vegana-completo" variant="ghost">
              Ler o guia completo
            </ActionLink>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-lg border border-[var(--color-line)]">
          <Image
            src={unsplash("photo-1490645935967-10de6ba17061", 900)}
            alt="Bowl vegano colorido com leguminosas e vegetais"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,11,0.15),rgba(4,7,11,0.8))]" />
        </div>
      </div>
    </section>
  );
}

/* 1.3 Nutrientes essenciais (cards) */
const nutrients = [
  {
    name: "Proteína",
    goal: "1,0 a 1,6 g/kg",
    accent: "acid",
    why: "Quantidade total importa mais que a origem. Não é preciso combinar aminoácidos na mesma refeição.",
    sources: ["Feijão", "Lentilha", "Tofu", "Grão-de-bico", "Quinoa", "Aveia"],
  },
  {
    name: "Ferro",
    goal: "14 a 32 mg",
    accent: "volt",
    why: "Ferro não-heme tem menor absorção: consuma com vitamina C e evite café/chá nas refeições.",
    sources: ["Feijão", "Lentilha", "Tahine", "Sementes de abóbora", "Couve"],
  },
  {
    name: "Vitamina B12",
    goal: "25 µg/dia ou 2.500 µg/semana",
    accent: "plasma",
    why: "Não existe fonte vegetal confiável. A suplementação é obrigatória — e não é negociável.",
    sources: ["Suplemento", "Alimentos fortificados (parcial)"],
  },
  {
    name: "Cálcio",
    goal: "700 a 1.000 mg",
    accent: "acid",
    why: "Não depende de leite. Vegetais verdes, tofu com cálcio e bebidas fortificadas resolvem.",
    sources: ["Tofu com cálcio", "Tahine", "Couve", "Brócolis", "Bebidas fortificadas"],
  },
  {
    name: "Ômega-3",
    goal: "250 a 500 mg EPA/DHA",
    accent: "volt",
    why: "ALA de linhaça e chia converte pouco em EPA/DHA. Para garantir, suplemento de algas.",
    sources: ["Linhaça", "Chia", "Nozes", "Óleo de algas"],
  },
  {
    name: "Iodo",
    goal: "150 µg",
    accent: "acid",
    why: "Sal iodado resolve na maioria dos casos. Algas são ótimas fontes, mas variam muito.",
    sources: ["Sal iodado", "Algas"],
  },
  {
    name: "Zinco",
    goal: "8 a 11 mg",
    accent: "volt",
    why: "Fitato reduz absorção. Remolho, fermentação e germinação melhoram o aproveitamento.",
    sources: ["Leguminosas", "Sementes de abóbora", "Cereais integrais"],
  },
];

function Nutrients() {
  return (
    <Section id="nutrientes">
      <SectionHead
        eyebrow="Os 7 críticos"
        title="O que realmente exige atenção"
        description="Uma dieta vegana falha quando ignora esses sete pontos. Com eles resolvidos, não há déficit nutricional esperado."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {nutrients.map((nutrient) => (
          <div key={nutrient.name} className="card flex flex-col p-5">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold">{nutrient.name}</h3>
              <span
                className={`font-mono text-[0.72rem] uppercase tracking-[0.12em] ${
                  nutrient.accent === "plasma"
                    ? "text-plasma"
                    : nutrient.accent === "volt"
                      ? "text-[#7ae9ff]"
                      : "text-acid"
                }`}
              >
                {nutrient.goal}
              </span>
            </div>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-fog">{nutrient.why}</p>
            <div className="mt-4 flex flex-wrap gap-1.5 border-t border-[var(--color-line)] pt-3">
              {nutrient.sources.map((source) => (
                <span key={source} className="chip chip-mute !text-[0.7rem]">
                  {source}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 1.4 Tabela de fontes vegetais */
const plantSources = [
  ["Tofu firme (100 g)", "8-16 g", "150 mg", "2,5 mg"],
  ["Lentilha cozida (100 g)", "9 g", "19 mg", "3,3 mg"],
  ["Grão-de-bico cozido (100 g)", "8,9 g", "49 mg", "2,9 mg"],
  ["Tahine (2 colheres)", "5 g", "130 mg", "2,7 mg"],
  ["Sementes de abóbora (30 g)", "9 g", "14 mg", "2,5 mg"],
  ["Quinoa cozida (100 g)", "4,4 g", "17 mg", "1,5 mg"],
  ["Aveia (40 g)", "5 g", "21 mg", "1,9 mg"],
  ["Espinafre cozido (100 g)", "2,9 g", "136 mg", "2,7 mg"],
];

function Sources() {
  return (
    <Section tone="panel">
      <SectionHead
        eyebrow="Tabela prática"
        title="Fontes vegetais por 100 g"
        description="Valores aproximados de referência. Marcas e preparos alteram os números — rótulos mandam."
      />
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-line)] bg-black/40">
                <th scope="col" className="p-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-acid">Alimento</th>
                <th scope="col" className="p-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-acid">Proteína</th>
                <th scope="col" className="p-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-acid">Cálcio</th>
                <th scope="col" className="p-3 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-acid">Ferro</th>
              </tr>
            </thead>
            <tbody>
              {plantSources.map((row) => (
                <tr key={row[0]} className="border-b border-[var(--color-line)]/60 last:border-0 hover:bg-white/[0.02]">
                  <th scope="row" className="p-3 font-medium text-bone">{row[0]}</th>
                  <td className="p-3 font-mono text-xs text-acid">{row[1]}</td>
                  <td className="p-3 font-mono text-xs text-[#7ae9ff]">{row[2]}</td>
                  <td className="p-3 font-mono text-xs text-plasma">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-fog/60">
        Fontes: TACO (Tabela Brasileira de Composição de Alimentos) e USDA FoodData Central.
      </p>
    </Section>
  );
}

/* 1.5 Prato ideal */
function Plate() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHead
            eyebrow="Método visual"
            title="O prato que resolve tudo"
            description="Se você não quer contar gramas, use esta proporção em cada refeição principal. Ela cobre proteína, fibra, micronutrientes e saciedade."
          />
          <div className="grid gap-3">
            {[
              { pct: "50%", label: "Vegetais e folhas", desc: "Volume, fibra, vitamina C, minerais", color: "bg-acid" },
              { pct: "25%", label: "Leguminosa", desc: "Feijão, lentilha, grão-de-bico, tofu — a proteína", color: "bg-[#22e6ff]" },
              { pct: "25%", label: "Cereal integral", desc: "Arroz, quinoa, cuscuz, batata — energia", color: "bg-[#ff2d95]" },
            ].map((item) => (
              <div key={item.label} className="card flex items-center gap-4 p-4">
                <span className={`h-10 w-10 shrink-0 rounded ${item.color} opacity-80`} aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold">
                    <span className="mr-2 font-mono text-acid">{item.pct}</span>
                    {item.label}
                  </p>
                  <p className="text-xs text-fog">{item.desc}</p>
                </div>
              </div>
            ))}
            <p className="mt-1 text-sm text-fog">
              <strong className="text-bone">+</strong> uma fonte de gordura boa (azeite, castanhas,
              abacate) e tempero à vontade.
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--color-line)]">
          <Image
            src={unsplash("photo-1546069901-ba9599a7e63c", 900)}
            alt="Prato vegano equilibrado"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(4,7,11,0.8))]" />
        </div>
      </div>
    </Section>
  );
}

/* 1.6 Exames */
const nutritionFaq = [
  {
    question: "Vegano precisa tomar suplemento de proteína?",
    answer:
      "Não. A proteína vem da comida: leguminosas, soja, cereais integrais e sementes. Suplemento proteico é conveniência, não necessidade.",
  },
  {
    question: "A soja faz mal por causa dos fitoestrogênios?",
    answer:
      "Meta-análises não mostram efeito sobre testosterona em níveis fisiológicos em homens. A soja é um alimento seguro e nutricionalmente denso.",
  },
  {
    question: "Quais exames fazer antes de começar?",
    answer:
      "Hemograma, ferritina, B12, homocisteína, vitamina D e perfil lipídico. Repita em 90 dias para acompanhar a adaptação.",
  },
  {
    question: "Preciso de nutricionista?",
    answer:
      "Recomendado, especialmente com crianças, gestantes, atletas ou doenças crônicas. Para adultos saudáveis, o guia acima é um bom ponto de partida — mas exames são essenciais.",
  },
];

function Exams() {
  return (
    <Section tone="panel">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHead eyebrow="Monitoramento" title="Exames que valem a pena" />
          <ul className="grid gap-2.5">
            {[
              "Hemograma completo e ferritina",
              "B12 sérica + homocisteína (mais sensível)",
              "Vitamina D (25-OH)",
              "Perfil lipídico completo",
              "TSH (iodo e tireoide)",
              "Cálcio iônico e albumina (se houver sintomas)",
            ].map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-bone/85">
                <span className="text-acid" aria-hidden="true">▸</span>
                {item}
              </li>
            ))}
          </ul>
          <ActionLink href="/kit" className="mt-6" variant="ghost">
            Baixar tabela de nutrientes
          </ActionLink>
        </div>
        <div>
          <div className="grid gap-3">
            {nutritionFaq.map((item) => (
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
      </div>
    </Section>
  );
}

/* Página */
export default function NutricaoPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Nutrição", path: "/nutricao" },
          ]),
          faqSchema(nutritionFaq),
        ]}
      />
      <Hero />
      <Nutrients />
      <Sources />
      <Plate />
      <Exams />
    </>
  );
}

/* Índice
   1 PÁGINA: NUTRIÇÃO VEGANA
     1.1 Metadados
     1.2 Hero
     1.3 Nutrientes essenciais (cards)
     1.4 Tabela de fontes vegetais
     1.5 Prato ideal
     1.6 Exames
     1.7 FAQ
*/
