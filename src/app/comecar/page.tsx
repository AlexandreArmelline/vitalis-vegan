import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHead } from "@/components/ui/Section";
import { ActionLink, Chip, JsonLd } from "@/components/ui/Atoms";
import { guideDays } from "@/data/content";
import { buildMetadata, breadcrumbSchema, howToSchema, faqSchema } from "@/lib/seo";
import { unsplash } from "@/lib/images";

/* ------------------------------------------------------------------
   1 PÁGINA: COMEÇAR (guia de 21 dias)
   1.1 Metadados
   1.2 Hero da página
   1.3 Fases do método
   1.4 Timeline dos 21 dias
   1.5 FAQ + CTA
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Guia de 21 dias para começar sem radicalismo",
  description:
    "Plano gratuito de 21 dias para reduzir ou eliminar produtos de origem animal: 21 tarefas diárias de 5 a 60 minutos, em 3 fases. Sem cadastro.",
  path: "/comecar",
  image: "/og-comecar.svg",
});

const phases = [
  {
    name: "Reset",
    range: "Dias 1 a 7",
    color: "acid",
    desc: "Criar consciência e conseguir a primeira vitória. Nada é proibido: você só observa, troca um item e mede.",
  },
  {
    name: "Substituição",
    range: "Dias 8 a 15",
    color: "volt",
    desc: "Trocar proteína, queijo, lanche e refeições fora de casa. É a fase em que o hábito se forma.",
  },
  {
    name: "Expansão",
    range: "Dias 16 a 21",
    color: "plasma",
    desc: "Consolidar: prato-padrão, nutrientes críticos, exames e definição do seu compromisso real.",
  },
];

/* 1.2 Hero da página */
function PageHero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="absolute inset-0 u-grid opacity-20" aria-hidden="true" />
      <div className="container-x relative grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <div>
          <nav aria-label="Você está aqui" className="mb-5">
            <ol className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
              <li><Link href="/" className="hover:text-acid">início</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-acid">começar</li>
            </ol>
          </nav>
          <Chip>método vitalis</Chip>
          <h1 className="mt-4 text-[clamp(2rem,5.5vw,3.6rem)] font-bold leading-[0.98]">
            O guia de 21 dias para
            <br />
            <span className="u-gradient-text">virar vegano sem drama</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-fog md:text-lg">
            Vinte e uma tarefas, três fases e uma regra: se você falhar em um dia, continua no
            próximo. O objetivo não é perfeição — é consistência. Cinco minutos por dia bastam.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#dia-1" className="btn btn-primary">Começar no dia 1 ↓</a>
            <ActionLink href="/kit" variant="ghost">Baixar checklist</ActionLink>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fog">
            <span>◆ 100% gratuito</span>
            <span>◆ sem cadastro</span>
            <span>◆ 21 tarefas</span>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--color-line)]">
          <Image
            src={unsplash("photo-1543362906-acfc16c67564", 900)}
            alt="Ingredientes vegetais frescos organizados"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,11,0.1),rgba(4,7,11,0.75))]" />
          <div className="u-scanlines absolute inset-x-0 bottom-0 p-5">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-acid">
              fase 1 · reset
            </p>
            <p className="mt-1 text-sm text-bone/90">
              &ldquo;Você não precisa mudar tudo hoje.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 1.3 Fases do método */
function Phases() {
  return (
    <Section>
      <SectionHead
        eyebrow="Como funciona"
        title="Três fases, uma progressão"
        description="A ordem importa. Cada fase prepara a próxima — e nenhuma exige que você seja perfeito."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {phases.map((phase, index) => (
          <div key={phase.name} className="card u-scanlines p-6">
            <div className="flex items-center justify-between">
              <span
                className={`font-mono text-[0.72rem] uppercase tracking-[0.2em] ${
                  phase.color === "volt" ? "text-[#7ae9ff]" : phase.color === "plasma" ? "text-plasma" : "text-acid"
                }`}
              >
                fase {index + 1}
              </span>
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fog">
                {phase.range}
              </span>
            </div>
            <h3 className="mt-3 text-xl font-bold">{phase.name}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-fog">{phase.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 1.4 Timeline dos 21 dias */
function Timeline() {
  return (
    <Section tone="panel" id="guia">
      <SectionHead
        eyebrow="Plano diário"
        title="As 21 tarefas"
        description="Cada cartão tem o que fazer, por que fazer e quanto tempo leva. Marque o que já fez no seu ritmo."
      />
      <ol className="relative grid gap-3">
        {guideDays.map((day) => {
          const phaseColor =
            day.phase === "Reset"
              ? "border-[rgba(184,255,47,0.35)] text-acid"
              : day.phase === "Substituição"
                ? "border-[rgba(34,230,255,0.35)] text-[#7ae9ff]"
                : "border-[rgba(255,45,149,0.35)] text-plasma";
          return (
            <li
              key={day.day}
              id={`dia-${day.day}`}
              className="card group grid gap-4 p-5 scroll-mt-24 sm:grid-cols-[auto_1fr_auto] sm:items-start"
            >
              <div className={`flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded border bg-black/40 ${phaseColor}`}>
                <span className="font-mono text-[0.7rem] uppercase leading-none opacity-70">dia</span>
                <span className="font-display text-base font-bold leading-tight">{day.day}</span>
              </div>
              <div>
                <h3 className="text-base font-semibold leading-snug">{day.title}</h3>
                <p className="mt-1.5 text-sm text-bone/80">{day.task}</p>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-fog">
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-acid">
                    por quê:{" "}
                  </span>
                  {day.why}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                <span className="chip chip-mute !text-[0.7rem]">{day.phase}</span>
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fog">
                  {day.minutes === 0 ? "livre" : `${day.minutes} min`}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

/* 1.5 FAQ + CTA */
const guideFaq = [
  {
    question: "E se eu não conseguir cumprir um dia?",
    answer:
      "Você não recomeça do zero: segue para o próximo dia. O método foi desenhado para tolerar falhas, porque adesão importa mais que perfeição.",
  },
  {
    question: "Preciso comprar suplementos para começar?",
    answer:
      "Só a vitamina B12 é obrigatória em dietas veganas. Você pode comprá-la na farmácia (custo baixo) — não precisa de nada sofisticado.",
  },
  {
    question: "Funciona se eu só quero reduzir, não eliminar?",
    answer:
      "Sim. O guia foi construído para funcionar mesmo em redução parcial. Fazer 70% já entrega a maior parte do benefício.",
  },
];

function GuideFaqAndCta() {
  return (
    <>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead eyebrow="Antes de começar" title="Três dúvidas justas" />
            <div className="grid gap-3">
              {guideFaq.map((item) => (
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
            <Chip tone="plasma">próximo passo</Chip>
            <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
              Quer o plano em PDF para imprimir e colar na geladeira?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-fog">
              O kit de transição inclui a lista de compras, a tabela de nutrientes, o checklist de
              21 dias e 5 receitas de emergência.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <ActionLink href="/kit">Baixar o kit</ActionLink>
              <ActionLink href="/impacto" variant="ghost">Calcular impacto</ActionLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* Página */
export default function ComecarPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Começar", path: "/comecar" },
          ]),
          howToSchema({
            name: "Guia de 21 dias para começar uma alimentação vegana",
            description:
              "Plano diário de 21 tarefas em três fases para reduzir ou eliminar produtos de origem animal.",
            steps: guideDays.map((day) => ({ name: day.title, text: day.task })),
          }),
          faqSchema(guideFaq),
        ]}
      />
      <PageHero />
      <Phases />
      <Timeline />
      <GuideFaqAndCta />
    </>
  );
}

/* Índice
   1 PÁGINA: COMEÇAR (guia de 21 dias)
     1.1 Metadados
     1.2 Hero da página
     1.3 Fases do método
     1.4 Timeline dos 21 dias
     1.5 FAQ + CTA
*/
