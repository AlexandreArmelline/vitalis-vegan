import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ActionLink, JsonLd } from "@/components/ui/Atoms";
import { buildMetadata, breadcrumbSchema } from "@/lib/schema-extra";

/* ------------------------------------------------------------------
   1 PÁGINA: FONTES
   1.1 Metadados
   1.2 Lista de referências por tema
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Fontes e referências científicas",
  description:
    "Bibliografia completa usada no Vitalis: FAO, Water Footprint Network, Academy of Nutrition and Dietetics, Poore & Nemecek, TACO e literatura revisada por pares.",
  path: "/fontes",
});

const groups = [
  {
    area: "Ambiente e clima",
    refs: [
      "FAO. Livestock's Long Shadow: Environmental Issues and Options. Roma, 2006.",
      "FAO. Tackling Climate Change Through Livestock. Roma, 2013.",
      "Poore, J.; Nemecek, T. Reducing food's environmental impacts through producers and consumers. Science, v. 360, 2018.",
      "Mekonnen, M. M.; Hoekstra, A. Y. The green, blue and grey water footprint of farm animals and animal products. Water Footprint Network, 2010.",
      "Our World in Data. Environmental Impacts of Food Production. Oxford, 2023.",
    ],
  },
  {
    area: "Nutrição e saúde",
    refs: [
      "Academy of Nutrition and Dietetics. Position of the Academy: Vegetarian Diets. Journal of the Academy of Nutrition and Dietetics, 2016.",
      "British Dietetic Association. Vegetarian, vegan and plant-based diets: Food Fact Sheet, 2020.",
      "Sociedade Vegetariana Brasileira. Guia Alimentar para Dietas Vegetarianas. São Paulo.",
      "Key, T. J. et al. Consumption of meat and dairy and risk of ischaemic heart disease. EPIC-Oxford, 2021.",
      "NEPA/UNICAMP. Tabela Brasileira de Composição de Alimentos (TACO), 4. ed.",
      "USDA. FoodData Central. Departamento de Agricultura dos Estados Unidos.",
    ],
  },
  {
    area: "Bem-estar animal e ética",
    refs: [
      "Low, P. et al. The Cambridge Declaration on Consciousness. 2012.",
      "Joy, M. Por que amamos cachorros, comemos porcos e vestimos vacas. Cultrix.",
      "Singer, P. Libertação Animal. Editora WMF Martins Fontes.",
      "Francione, G. Introduction to Animal Rights: Your Child or the Dog? Temple University Press.",
      "Brasil. Instrução Normativa nº 56/2008 — Bem-estar animal em abate.",
    ],
  },
  {
    area: "Comportamento e mudança de hábito",
    refs: [
      "Prochaska, J.; DiClemente, C. The Transtheoretical Approach: Crossing Traditional Boundaries of Therapy.",
      "Feinberg, M.; Willer, R. Moral reframing: A technique for effective and persuasive communication. 2019.",
      "Veganuary. Impact Report — edições anuais.",
      "Faunalytics. Study of Current and Former Vegetarians and Vegans, 2014.",
    ],
  },
];

export default function FontesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Fontes", path: "/fontes" },
          ]),
        ]}
      />
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="absolute inset-0 u-grid opacity-20" aria-hidden="true" />
        <div className="container-x relative py-14 md:py-18">
          <nav aria-label="Você está aqui" className="mb-5">
            <ol className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
              <li><Link href="/" className="hover:text-acid">início</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-acid">fontes</li>
            </ol>
          </nav>
          <span className="eyebrow">bibliografia</span>
          <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98]">
            Toda afirmação tem <span className="u-neon">origem rastreável</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
            Referências organizadas por área. Quando um dado do portal não estiver aqui, ele é de
            estimativa própria — e isso será sinalizado no texto.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <div key={group.area} className="card p-6">
              <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-acid">
                {group.area}
              </h2>
              <ul className="mt-4 grid gap-3">
                {group.refs.map((ref) => (
                  <li key={ref} className="border-l border-[var(--color-line)] pl-3 text-sm leading-relaxed text-fog">
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ActionLink href="/metodologia">Nossa metodologia</ActionLink>
          <ActionLink href="/contato" variant="ghost">Reportar correção</ActionLink>
        </div>
      </Section>
    </>
  );
}

/* Índice
   1 PÁGINA: FONTES
     1.1 Metadados
     1.2 Lista de referências por tema
*/
