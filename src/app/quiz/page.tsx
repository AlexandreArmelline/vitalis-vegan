import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/ui/Section";
import { ActionLink, Chip, JsonLd } from "@/components/ui/Atoms";
import { PersonaQuiz } from "@/components/tools/PersonaQuiz";
import { buildMetadata, breadcrumbSchema, faqSchema } from "@/lib/seo";

/* ------------------------------------------------------------------
   1 PÁGINA: QUIZ DE PERFIL
   1.1 Metadados
   1.2 Hero
   1.3 Quiz
   1.4 Os seis perfis
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Quiz: qual é o seu perfil vegano? (60 segundos)",
  description:
    "Responda 6 perguntas e descubra seu perfil — explorador, otimizador, empático, guardião, prático ou família — com um caminho personalizado de primeiros passos.",
  path: "/quiz",
});

/* 1.2 Hero */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="absolute inset-0 u-grid opacity-20" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-72 w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,149,0.16),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="container-x relative py-14 text-center md:py-18">
        <nav aria-label="Você está aqui" className="mb-5 flex justify-center">
          <ol className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
            <li><Link href="/" className="hover:text-acid">início</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-acid">quiz</li>
          </ol>
        </nav>
        <span className="eyebrow justify-center">teste de 60 segundos</span>
        <h1 className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98]">
          Qual é o seu <span className="u-gradient-text">perfil vegano</span>?
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
          Todo mundo começa por um motivo diferente. Descubra o seu e receba um caminho com os
          primeiros passos que realmente fazem sentido para você — sem cadastro.
        </p>
      </div>
    </section>
  );
}

/* 1.3 Quiz */
function QuizBlock() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <PersonaQuiz />
      </div>
    </Section>
  );
}

/* 1.4 Os seis perfis */
const profiles = [
  { emoji: "🌱", name: "Explorador", desc: "Quer testar sem pressão. Responde a metas curtas e vitórias rápidas." },
  { emoji: "⚡", name: "Otimizador", desc: "Quer dados e resultado mensurável. Exames, gramaturas, metas." },
  { emoji: "❤️", name: "Empático", desc: "Sente primeiro, decide depois. Precisa de contexto e rede de apoio." },
  { emoji: "🌍", name: "Guardião", desc: "Argumento sistêmico: emissões, água, solo. Quer que a conta feche." },
  { emoji: "🥄", name: "Prático", desc: "Gargalo é logística. Precisa de receita de 20 min e lista pronta." },
  { emoji: "🏠", name: "Família", desc: "Precisa levar todo mundo junto. Negociação, sabor, paciência." },
];

function Profiles() {
  return (
    <Section tone="panel">
      <SectionHead
        align="center"
        eyebrow="Os seis caminhos"
        title="Cada perfil, uma porta de entrada"
        description="Não existe um jeito certo de começar. Existe o jeito que funciona para você."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile) => (
          <div key={profile.name} className="card p-5">
            <span className="text-2xl" aria-hidden="true">{profile.emoji}</span>
            <h3 className="mt-3 text-base font-bold">{profile.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-fog">{profile.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center gap-3">
        <ActionLink href="/comecar">Ver o guia de 21 dias</ActionLink>
        <ActionLink href="/impacto" variant="ghost">Calcular impacto</ActionLink>
      </div>
    </Section>
  );
}

const quizFaq = [
  {
    question: "O quiz guarda minhas respostas?",
    answer:
      "Não. O cálculo acontece inteiramente no seu navegador. Nenhuma resposta é enviada para servidor, banco de dados ou ferramenta de analytics.",
  },
  {
    question: "Posso ter mais de um perfil?",
    answer:
      "Sim, e é comum. O quiz mostra o perfil dominante, mas os caminhos se sobrepõem. Use o resultado como ponto de partida, não como caixa.",
  },
];

/* Página */
export default function QuizPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Quiz", path: "/quiz" },
          ]),
          faqSchema(quizFaq),
        ]}
      />
      <Hero />
      <QuizBlock />
      <Profiles />
      <Section className="!pt-0">
        <div className="mx-auto max-w-2xl">
          <div className="grid gap-3">
            {quizFaq.map((item) => (
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
      </Section>
    </>
  );
}

/* Índice
   1 PÁGINA: QUIZ DE PERFIL
     1.1 Metadados
     1.2 Hero
     1.3 Quiz
     1.4 Os seis perfis
*/
