import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Section, SectionHead } from "@/components/ui/Section";
import { ActionLink, Chip, Eyebrow, JsonLd, StatBadge } from "@/components/ui/Atoms";
import { Hero } from "@/components/home/Hero";
import { ImpactCalculator } from "@/components/tools/ImpactCalculator";
import { PersonaQuiz } from "@/components/tools/PersonaQuiz";
import { pillars, stats } from "@/data/site";
import { homeFaq, testimonials } from "@/data/content";
import { featuredArticles, articles } from "@/data/articles";
import { recipes } from "@/data/recipes";
import { buildMetadata, faqSchema, itemListSchema } from "@/lib/seo";
import { unsplash } from "@/lib/images";

/* ------------------------------------------------------------------
   1 PÁGINA INICIAL
   1.1 Metadados
   1.2 Hero
   1.3 Barra de estatísticas
   1.4 Os três pilares (segmentação por motivação)
   1.5 Ferramenta: calculadora de impacto
   1.6 Guia de 21 dias (prévia)
   1.7 Receitas em destaque
   1.8 Quiz de perfil
   1.9 Artigos em destaque
   1.10 Depoimentos
   1.11 FAQ
   1.12 CTA final
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "VITALIS — Portal Vegano: guia de 21 dias, receitas e ciência",
  description:
    "Comece a comer 100% vegetal sem radicalismo: guia de 21 dias gratuito, 120+ receitas brasileiras, calculadora de impacto ambiental e ciência da nutrição vegana.",
  path: "/",
});

/* 1.2 Hero */
/* 1.3 Barra de estatísticas */
function StatsBar() {
  return (
    <div className="border-y border-[var(--color-line)] bg-[#070c12]/60">
      <div className="container-x grid grid-cols-2 gap-4 py-8 md:grid-cols-4">
        {stats.map((stat) => (
          <StatBadge
            key={stat.label}
            value={stat.value}
            label={stat.label}
            source={stat.source}
            accent={stat.accent}
          />
        ))}
      </div>
    </div>
  );
}

/* 1.4 Os três pilares (segmentação por motivação) */
function Pillars() {
  return (
    <Section id="pilares">
      <SectionHead
        eyebrow="Escolha seu motivo"
        title={
          <>
            Ninguém muda por um motivo só.
            <br />
            <span className="u-gradient-text">Qual é o seu?</span>
          </>
        }
        description="Nosso cérebro adere melhor quando a decisão tem uma razão pessoal. Escolha o pilar que mais te move e comece por ele — o resto vem depois, sem cobrança."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Link
            key={pillar.id}
            href={pillar.href}
            className="card card-lift u-scanlines group relative overflow-hidden p-6 pt-7"
          >
            <div
              className={`absolute inset-x-0 top-0 h-px ${
                pillar.accent === "plasma"
                  ? "bg-[linear-gradient(90deg,transparent,var(--color-plasma),transparent)]"
                  : pillar.accent === "volt"
                    ? "bg-[linear-gradient(90deg,transparent,var(--color-volt),transparent)]"
                    : "bg-[linear-gradient(90deg,transparent,var(--color-acid),transparent)]"
              }`}
            />
            <div className="flex items-start justify-between">
              <span
                className={`font-display text-3xl leading-none ${
                  pillar.accent === "plasma"
                    ? "u-neon-plasma"
                    : pillar.accent === "volt"
                      ? "text-[#7ae9ff]"
                      : "u-neon"
                }`}
                aria-hidden="true"
              >
                {pillar.icon}
              </span>
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-fog/60">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-5 text-xl font-bold">{pillar.title}</h3>
            <p className="mt-2 text-[0.95rem] font-medium text-acid">{pillar.claim}</p>
            <p className="mt-3 text-sm leading-relaxed text-fog">{pillar.detail}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="chip chip-mute">{pillar.stat}</span>
              <span className="font-mono text-xs text-acid transition-transform group-hover:translate-x-1">
                explorar →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* 1.5 Ferramenta: calculadora de impacto */
function ImpactSection() {
  return (
    <Section tone="panel" id="impacto">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-center">
        <div>
          <Eyebrow>Ferramenta interativa</Eyebrow>
          <h2 className="mt-4 text-[clamp(1.8rem,4vw,2.9rem)] font-bold">
            O que muda se você trocar <span className="u-neon">uma refeição</span>?
          </h2>
          <p className="mt-4 text-fog">
            Ajuste os controles e veja a projeção anual de animais poupados, água e CO₂ evitados.
            Não é discurso: é aritmética. Baseada em pegadas hídricas e de carbono publicadas
            (Water Footprint Network e FAO).
          </p>
          <ul className="mt-6 grid gap-2.5 text-sm text-bone/85">
            <li className="flex gap-2.5">
              <span className="text-acid" aria-hidden="true">▸</span>
              Cada dia sem carne bovina evita ~60 kg de CO₂e
            </li>
            <li className="flex gap-2.5">
              <span className="text-acid" aria-hidden="true">▸</span>
              Um vegano poupa cerca de 30 animais terrestres por ano
            </li>
            <li className="flex gap-2.5">
              <span className="text-acid" aria-hidden="true">▸</span>
              Trocar 3 refeições/semana já reduz ~20% da sua pegada alimentar
            </li>
          </ul>
          <ActionLink href="/impacto" variant="ghost" className="mt-7">
            Abrir calculadora completa
          </ActionLink>
        </div>
        <ImpactCalculator compact />
      </div>
    </Section>
  );
}

/* 1.6 Guia de 21 dias (prévia) */
const previewDays = [
  { day: 1, title: "Fotografe o que você come hoje", phase: "Reset" },
  { day: 4, title: "Desmonte a geladeira sem culpa", phase: "Reset" },
  { day: 8, title: "Substitua a proteína do almoço", phase: "Substituição" },
  { day: 15, title: "Dia 100% vegetal", phase: "Substituição" },
  { day: 20, title: "Resolva os nutrientes críticos", phase: "Expansão" },
  { day: 21, title: "Defina sua versão de vegano", phase: "Expansão" },
];

function GuidePreview() {
  return (
    <Section id="guia">
      <SectionHead
        eyebrow="O método"
        title={
          <>
            21 dias, 21 tarefas, <span className="u-neon">zero radicalismo</span>
          </>
        }
        description="Três fases: Reset (criar consciência), Substituição (trocar sem sofrer) e Expansão (consolidar). Cada dia tem uma tarefa de 5 a 60 minutos. Se você falhar em um dia, continua no próximo."
        action={<ActionLink href="/comecar">Ver o guia completo</ActionLink>}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {previewDays.map((item) => (
          <div key={item.day} className="card flex gap-4 p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-[rgba(184,255,47,0.35)] bg-[rgba(184,255,47,0.08)]">
              <span className="font-display text-lg font-bold text-acid">
                {String(item.day).padStart(2, "0")}
              </span>
            </div>
            <div>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-fog/70">
                {item.phase}
              </p>
              <h3 className="mt-1.5 text-[0.98rem] font-semibold leading-snug">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-fog/70">
        + 15 tarefas diárias no guia completo · sem cadastro · sem custo
      </p>
    </Section>
  );
}

/* 1.7 Receitas em destaque */
function RecipesPreview() {
  const picks = [recipes[0], recipes[3], recipes[2], recipes[6]];
  return (
    <Section tone="panel" id="receitas">
      <SectionHead
        eyebrow="Cozinha real"
        title={
          <>
            Receitas que funcionam <span className="u-neon">na sua cozinha</span>
          </>
        }
        description="Feijoada, pão de queijo, strogonoff, brigadeiro. Nada de ingrediente importado caro: comida brasileira, sem origem animal."
        action={<ActionLink href="/receitas" variant="ghost">Todas as receitas</ActionLink>}
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {picks.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/receitas/${recipe.slug}`}
            className="card card-lift group overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={unsplash(recipe.image, 600)}
                alt={recipe.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(4,7,11,0.95))]" />
              <span className="absolute left-3 top-3 chip !bg-black/60">{recipe.category}</span>
            </div>
            <div className="p-4">
              <h3 className="text-[0.98rem] font-semibold leading-snug group-hover:text-acid">
                {recipe.title}
              </h3>
              <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fog">
                {recipe.prepMinutes + recipe.cookMinutes} min · {recipe.proteinNote.split("(")[0]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* 1.8 Quiz de perfil */
function QuizSection() {
  return (
    <Section id="quiz">
      <SectionHead
        align="center"
        eyebrow="Teste de 60 segundos"
        title={
          <>
            Qual é o seu <span className="u-gradient-text">perfil vegano</span>?
          </>
        }
        description="6 perguntas rápidas. No final você recebe um caminho personalizado com as páginas e os primeiros passos que fazem sentido para você — sem e-mail, sem cadastro."
      />
      <div className="mx-auto max-w-2xl">
        <PersonaQuiz />
      </div>
    </Section>
  );
}

/* 1.9 Artigos em destaque */
function ArticlesPreview() {
  const [main, ...rest] = featuredArticles;
  return (
    <Section tone="panel" id="artigos">
      <SectionHead
        eyebrow="Conteúdo verificado"
        title="Entenda antes de decidir"
        description="Artigos com fontes primárias, revisão anual e linguagem sem sensacionalismo. Aqui você encontra dados, não slogans."
        action={<ActionLink href="/artigos" variant="ghost">Todos os artigos</ActionLink>}
      />
      <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
        <Link
          href={`/artigos/${main.slug}`}
          className="card card-lift group relative flex min-h-[380px] flex-col justify-end overflow-hidden p-6"
        >
          <Image
            src={unsplash(main.image, 1200)}
            alt={main.title}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,11,0.35),rgba(4,7,11,0.97))]" />
          <div className="relative">
            <div className="flex items-center gap-2">
              <Chip>{main.category}</Chip>
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fog">
                {main.readingMinutes} min de leitura
              </span>
            </div>
            <h3 className="mt-4 text-2xl font-bold leading-tight group-hover:text-acid">
              {main.title}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm text-fog">{main.description}</p>
          </div>
        </Link>

        <div className="grid gap-4">
          {rest.slice(0, 3).map((article) => (
            <Link
              key={article.slug}
              href={`/artigos/${article.slug}`}
              className="card card-lift group flex gap-4 p-4"
            >
              <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded">
                <Image
                  src={unsplash(article.image, 300)}
                  alt={article.title}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-acid">
                  {article.category}
                </p>
                <h3 className="mt-1.5 text-sm font-semibold leading-snug group-hover:text-acid">
                  {article.title}
                </h3>
                <p className="mt-1.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fog/70">
                  {article.readingMinutes} min
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* 1.10 Depoimentos */
function Testimonials() {
  return (
    <Section id="historias">
      <SectionHead
        align="center"
        eyebrow="Histórias reais"
        title="Gente comum, mudanças concretas"
        description="Não são influenciadores. São pessoas que começaram exatamente onde você está agora."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((item) => (
          <figure key={item.name} className="card u-scanlines flex flex-col p-6">
            <div className="mb-3 flex gap-0.5 text-acid" aria-label="5 de 5 estrelas">
              {"★★★★★".split("").map((star, i) => (
                <span key={i} aria-hidden="true">{star}</span>
              ))}
            </div>
            <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-bone/90">
              “{item.text}”
            </blockquote>
            <figcaption className="mt-5 flex items-center justify-between border-t border-[var(--color-line)] pt-4">
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fog">
                  {item.role}
                </p>
              </div>
              <span className="chip">{item.result}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* 1.11 FAQ */
function Faq() {
  return (
    <Section tone="panel" id="faq">
      <SectionHead
        eyebrow="Dúvidas honestas"
        title="As perguntas que todo mundo faz"
        description="Respostas diretas, sem rodeio e sem julgamento."
        action={<ActionLink href="/mitos" variant="ghost">Os 12 mitos →</ActionLink>}
      />
      <div className="grid gap-3 lg:grid-cols-2">
        {homeFaq.map((item) => (
          <details
            key={item.question}
            className="card group p-5 transition-colors open:border-[rgba(184,255,47,0.4)]"
          >
            <summary className="flex cursor-pointer items-start justify-between gap-4 text-[0.97rem] font-semibold marker:content-none">
              {item.question}
              <span className="mt-0.5 shrink-0 font-mono text-acid transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-fog">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

/* 1.12 CTA final */
function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-[var(--color-line)]">
      <div className="absolute inset-0 u-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(184,255,47,0.18),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="container-x relative py-20 text-center md:py-28">
        <Eyebrow>Próximo passo</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[0.98]">
          Você não precisa mudar tudo hoje.
          <br />
          <span className="u-neon">Precisa mudar uma refeição.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-fog">
          Comece o guia de 21 dias agora. É gratuito, não pede cadastro e leva 5 minutos por dia.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ActionLink href="/comecar" className="!px-7 !py-4">
            Começar o dia 1 →
          </ActionLink>
          <ActionLink href="/impacto" variant="ghost" className="!px-7 !py-4">
            Calcular meu impacto
          </ActionLink>
        </div>
        <p className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-fog/60">
          sem cadastro · sem custo · sem culpa
        </p>
      </div>
    </section>
  );
}

/* Página */
export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(homeFaq),
          itemListSchema(articles.map((a) => ({ name: a.title, path: `/artigos/${a.slug}` }))),
        ]}
      />
      <Hero />
      <StatsBar />
      <Pillars />
      <ImpactSection />
      <GuidePreview />
      <RecipesPreview />
      <QuizSection />
      <ArticlesPreview />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}

/* Índice
   1 PÁGINA INICIAL
     1.1 Metadados
     1.2 Hero
     1.3 Barra de estatísticas
     1.4 Os três pilares (segmentação por motivação)
     1.5 Ferramenta: calculadora de impacto
     1.6 Guia de 21 dias (prévia)
     1.7 Receitas em destaque
     1.8 Quiz de perfil
     1.9 Artigos em destaque
     1.10 Depoimentos
     1.11 FAQ
     1.12 CTA final
*/
