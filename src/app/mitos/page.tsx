import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/ui/Section";
import { ActionLink, Chip, JsonLd } from "@/components/ui/Atoms";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

/* ------------------------------------------------------------------
   1 PÁGINA: MITOS
   1.1 Metadados
   1.2 Hero
   1.3 Lista de mitos
   1.4 CTA
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "12 mitos sobre veganismo respondidos com evidência",
  description:
    "Proteína, anemia, soja, ossos, custo e sabor: os 12 mitos mais comuns sobre veganismo, com resposta direta e base científica.",
  path: "/mitos",
});

type Myth = { myth: string; truth: string; detail: string; area: string };

const myths: Myth[] = [
  {
    myth: "Vegano não tem proteína suficiente",
    truth: "Proteína vegetal cobre a meta com folga.",
    detail:
      "Leguminosas, soja, quinoa, aveia e sementes entregam de 1,2 a 1,6 g/kg sem qualquer suplemento. A ideia de que é preciso combinar aminoácidos na mesma refeição é um mito: o corpo mantém um pool ao longo do dia.",
    area: "Nutrição",
  },
  {
    myth: "Vegano fica anêmico",
    truth: "Risco existe, mas é gerenciável.",
    detail:
      "Ferro não-heme absorve menos, então associe vitamina C e evite café/chá nas refeições. Monitorar ferritina e hemograma resolve o resto. A anemia não é consequência inevitável do veganismo.",
    area: "Nutrição",
  },
  {
    myth: "Soja aumenta estrogênio e faz mal aos homens",
    truth: "Meta-análises não mostram efeito na testosterona.",
    detail:
      "Fitoestrogênios não se comportam como estrogênio em níveis fisiológicos. A soja é um dos alimentos mais estudados do mundo e é segura em consumo alimentar normal.",
    area: "Ciência",
  },
  {
    myth: "Ser vegano é caro",
    truth: "Comida vegana é mais barata; industrializados são caros.",
    detail:
      "Arroz, feijão, lentilha, aveia e sazonais custam menos por grama de proteína que carne. O custo alto vem de produtos processados veganos — que não são necessários.",
    area: "Prático",
  },
  {
    myth: "Precisa de leite para ter ossos fortes",
    truth: "Cálcio vegetal cumpre a meta.",
    detail:
      "Tofu com cálcio, tahine, couve, brócolis e bebidas fortificadas fornecem cálcio suficiente. Vitamina D e exercício de resistência são tão importantes quanto o cálcio.",
    area: "Nutrição",
  },
  {
    myth: "Crianças não podem ser veganas",
    truth: "Podem, com acompanhamento nutricional.",
    detail:
      "Academy of Nutrition and Dietetics e SBP reconhecem dietas vegetarianas bem planejadas em todas as fases. B12 é obrigatória e a curva de crescimento deve ser monitorada.",
    area: "Saúde",
  },
  {
    myth: "Comida vegana não tem gosto",
    truth: "Umami vegetal existe e é poderoso.",
    detail:
      "Levedura nutricional, shoyu, cogumelos, tomate seco, páprica defumada e dendê constroem sabor profundo. A culinária asiática e brasileira já fazem isso há séculos.",
    area: "Culinária",
  },
  {
    myth: "Vegano vive doente e fraco",
    truth: "Coortes mostram menor IMC e menor risco cardiovascular.",
    detail:
      "EPIC-Oxford e outros estudos mostram menor risco de cardiopatia e diabetes tipo 2, além de menor IMC médio. Dieta vegana mal planejada é que é ruim — como qualquer dieta mal planejada.",
    area: "Ciência",
  },
  {
    myth: "Só resolve se todo mundo virar vegano",
    truth: "Redução agregada tem impacto proporcional.",
    detail:
      "Se 10% da população reduzir 50% do consumo animal, o efeito é equivalente a 5% de conversão total. Não é tudo-ou-nada: é soma de escolhas.",
    area: "Ambiente",
  },
  {
    myth: "Vegano é radical e fanático",
    truth: "Radical é a escala do sistema atual.",
    detail:
      "80 bilhões de animais terrestres abatidos por ano é o número radical. Ser vegano é uma escolha cotidiana de consumo, não uma militância obrigatória.",
    area: "Cultura",
  },
  {
    myth: "É só uma moda passageira",
    truth: "A palavra existe desde 1844; o crescimento é que é novo.",
    detail:
      "O termo 'vegan' foi cunhado por Donald Watson em 1944, na Inglaterra. O que é recente é a escala de adoção, impulsionada por informação e redes sociais.",
    area: "Cultura",
  },
  {
    myth: "Eu não conseguiria",
    truth: "Conseguir é consequência de plano, não de força de vontade.",
    detail:
      "Quem falha em três dias geralmente tentou mudar tudo de uma vez, sem receitas, sem lista de compras e sem apoio. Comece com 7 dias e uma receita por vez.",
    area: "Prático",
  },
];

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
            <li className="text-acid">mitos</li>
          </ol>
        </nav>
        <span className="eyebrow">desinformação desmontada</span>
        <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98]">
          12 mitos sobre <span className="u-glow u-neon">veganismo</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
          Nenhuma dessas objeções vem de má-fé. Vêm de informação incompleta. Aqui está a resposta
          direta, a explicação e o que a literatura realmente mostra.
        </p>
      </div>
    </section>
  );
}

/* 1.3 Lista de mitos */
function Myths() {
  return (
    <Section>
      <div className="grid gap-4">
        {myths.map((item, index) => (
          <article key={item.myth} className="card grid gap-4 p-5 md:grid-cols-[auto_1fr] md:p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-[rgba(255,45,149,0.3)] bg-[rgba(255,45,149,0.06)]">
              <span className="font-mono text-[0.7rem] font-bold text-plasma">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Chip tone="plasma">mito</Chip>
                <span className="chip chip-mute !text-[0.7rem]">{item.area}</span>
              </div>
              <h2 className="mt-2.5 text-lg font-bold leading-snug">&ldquo;{item.myth}&rdquo;</h2>
              <p className="mt-2 flex items-start gap-2 text-sm font-medium text-acid">
                <span aria-hidden="true">✓</span>
                {item.truth}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-fog">{item.detail}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <ActionLink href="/comecar">Começar o guia de 21 dias</ActionLink>
        <ActionLink href="/nutricao" variant="ghost">Ver guia de nutrição</ActionLink>
      </div>
    </Section>
  );
}

/* 1.4 CTA */
function Cta() {
  return (
    <Section tone="panel">
      <SectionHead
        align="center"
        eyebrow="Próximo passo"
        title="A dúvida que te travou já tem resposta"
        description="Se sobrou alguma objeção sem resposta, ela provavelmente está no guia de 21 dias — junto com a tarefa prática para o dia de hoje."
      />
      <div className="flex flex-wrap justify-center gap-3">
        <ActionLink href="/comecar">Começar agora</ActionLink>
        <ActionLink href="/contato" variant="ghost">Enviar uma dúvida</ActionLink>
      </div>
    </Section>
  );
}

/* Página */
export default function MitosPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Mitos", path: "/mitos" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: myths.map((item) => ({
              "@type": "Question",
              name: item.myth,
              acceptedAnswer: { "@type": "Answer", text: `${item.truth} ${item.detail}` },
            })),
          },
        ]}
      />
      <Hero />
      <Myths />
      <Cta />
    </>
  );
}

/* Índice
   1 PÁGINA: MITOS
     1.1 Metadados
     1.2 Hero
     1.3 Lista de mitos
     1.4 CTA
*/
