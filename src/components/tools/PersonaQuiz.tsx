"use client";

import { useState } from "react";
import Link from "next/link";
import { personas, type Persona } from "@/data/site";

/* ------------------------------------------------------------------
   1 QUIZ DE PERFIL VEGANO
   1.1 Perguntas e mapeamento de persona
   1.2 Barra de progresso
   1.3 Resultado personalizado
   1.4 Componente principal
------------------------------------------------------------------ */

/* 1.1 Perguntas e mapeamento de persona */
type Question = {
  id: string;
  text: string;
  options: { label: string; persona: Persona["id"] }[];
};

const questions: Question[] = [
  {
    id: "motivo",
    text: "O que mais te incomoda hoje no consumo de animais?",
    options: [
      { label: "O sofrimento dos animais", persona: "animal" },
      { label: "O impacto no clima e na água", persona: "planeta" },
      { label: "Os efeitos na minha saúde", persona: "saude" },
      { label: "Não sei ainda, estou curioso(a)", persona: "iniciante" },
    ],
  },
  {
    id: "ritmo",
    text: "Como você prefere começar?",
    options: [
      { label: "Trocando uma coisa por vez", persona: "iniciante" },
      { label: "Com um plano de 21 dias", persona: "pratico" },
      { label: "Com dados e metas mensuráveis", persona: "saude" },
      { label: "Com apoio de outras pessoas", persona: "animal" },
    ],
  },
  {
    id: "cozinha",
    text: "Quanto tempo você tem para cozinhar por dia?",
    options: [
      { label: "Até 15 minutos", persona: "pratico" },
      { label: "20 a 40 minutos", persona: "iniciante" },
      { label: "Gosto de cozinhar com calma", persona: "saude" },
      { label: "Cozinho para a família toda", persona: "familia" },
    ],
  },
  {
    id: "ambiente",
    text: "Quem mora com você?",
    options: [
      { label: "Moro sozinho(a)", persona: "iniciante" },
      { label: "Parceiro(a) ou amigos", persona: "pratico" },
      { label: "Família com crianças", persona: "familia" },
      { label: "Família que não pretende mudar", persona: "familia" },
    ],
  },
  {
    id: "treino",
    text: "Você pratica atividade física?",
    options: [
      { label: "Treino forte, 4x ou mais por semana", persona: "saude" },
      { label: "Me movimento algumas vezes", persona: "pratico" },
      { label: "Quase nunca", persona: "iniciante" },
      { label: "Meu foco é alimentar a casa", persona: "familia" },
    ],
  },
  {
    id: "barreira",
    text: "Qual é o seu maior medo nessa mudança?",
    options: [
      { label: "Passar fome ou ficar sem proteína", persona: "saude" },
      { label: "Não ter sabor ou variedade", persona: "pratico" },
      { label: "Brigar com a família e amigos", persona: "familia" },
      { label: "Desistir e me sentir culpado(a)", persona: "iniciante" },
    ],
  },
];

/* 1.2 Barra de progresso */
function Progress({ current, total }: { current: number; total: number }) {
  const percent = (current / total) * 100;
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
        <span>pergunta {Math.min(current + 1, total)} de {total}</span>
        <span className="text-acid">{Math.round(percent)}%</span>
      </div>
      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-[var(--color-line)]">
        <div
          className="h-full bg-[linear-gradient(90deg,var(--color-acid),var(--color-volt))] transition-all duration-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

/* 1.3 Resultado personalizado */
function Result({ persona, onRestart }: { persona: Persona; onRestart: () => void }) {
  return (
    <div className="card u-scanlines p-6 md:p-8">
      <div className="flex items-center gap-3">
        <span className="text-3xl" aria-hidden="true">{persona.emoji}</span>
        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-acid">
            seu perfil
          </p>
          <h3 className="font-display text-xl font-bold">{persona.title}</h3>
        </div>
      </div>

      <p className="mt-4 text-base font-medium text-bone">{persona.headline}</p>
      <p className="mt-3 text-sm leading-relaxed text-fog">{persona.summary}</p>

      <div className="mt-6">
        <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-fog">
          seus 3 primeiros passos
        </p>
        <ol className="mt-3 grid gap-2.5">
          {persona.firstSteps.map((step, index) => (
            <li key={step} className="flex gap-3 text-sm text-bone/85">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[rgba(184,255,47,0.35)] font-mono text-[0.72rem] text-acid">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {persona.path.map((href) => (
          <Link key={href} href={href} className="chip hover:!bg-[rgba(184,255,47,0.16)]">
            {href.replace("/", "").replace(/-/g, " ") || "início"}
          </Link>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-2.5 sm:flex-row">
        <Link href={persona.path[0]} className="btn btn-primary flex-1 !text-[0.7rem]">
          Começar por aqui →
        </Link>
        <button type="button" onClick={onRestart} className="btn btn-ghost !text-[0.7rem]">
          Refazer o quiz
        </button>
      </div>
    </div>
  );
}

/* 1.4 Componente principal */
export function PersonaQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (personaId: Persona["id"]) => {
    const next = [...answers, personaId];
    setAnswers(next);
    if (next.length === questions.length) {
      setStep(questions.length);
    } else {
      setStep(step + 1);
    }
  };

  const restart = () => {
    setAnswers([]);
    setStep(0);
  };

  if (step >= questions.length) {
    const counts = answers.reduce<Record<string, number>>((acc, id) => {
      acc[id] = (acc[id] ?? 0) + 1;
      return acc;
    }, {});
    const winnerId = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "iniciante";
    const persona = personas.find((p) => p.id === winnerId) ?? personas[0];
    return <Result persona={persona} onRestart={restart} />;
  }

  const question = questions[step];

  return (
    <div className="card p-6 md:p-8">
      <Progress current={step} total={questions.length} />
      <h3 className="text-lg font-semibold leading-snug md:text-xl">{question.text}</h3>
      <div className="mt-5 grid gap-2.5">
        {question.options.map((option) => (
          <button
            key={option.label}
            type="button"
            onClick={() => handleAnswer(option.persona)}
            className="group flex items-center justify-between gap-3 rounded-md border border-[var(--color-line)] bg-white/[0.02] px-4 py-3 text-left text-sm text-bone/90 transition-all hover:border-[rgba(184,255,47,0.5)] hover:bg-[rgba(184,255,47,0.06)] hover:text-acid"
          >
            {option.label}
            <span className="font-mono text-xs opacity-0 transition-opacity group-hover:opacity-100">
              →
            </span>
          </button>
        ))}
      </div>
      {step > 0 && (
        <button
          type="button"
          onClick={() => {
            setStep(step - 1);
            setAnswers(answers.slice(0, -1));
          }}
          className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fog hover:text-acid"
        >
          ← voltar
        </button>
      )}
    </div>
  );
}

/* Índice
   1 QUIZ DE PERFIL VEGANO
     1.1 Perguntas e mapeamento de persona
     1.2 Barra de progresso
     1.3 Resultado personalizado
     1.4 Componente principal
*/
