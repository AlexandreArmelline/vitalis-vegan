"use client";

import { useState } from "react";

/* ------------------------------------------------------------------
   1 FORMULÁRIO DE CONTATO
   1.1 Estado e validação
   1.2 Componente
------------------------------------------------------------------ */

/* 1.1 Estado e validação */
const subjects = [
  "Dúvida sobre veganismo",
  "Sugestão de receita",
  "Correção de conteúdo",
  "Parceria / imprensa",
  "Problema técnico",
];

/* 1.2 Componente */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(subjects[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!validEmail || message.trim().length < 10 || name.trim().length < 2) {
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  if (status === "success") {
    return (
      <div className="card u-scanlines p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(184,255,47,0.5)] bg-[rgba(184,255,47,0.1)]">
          <span className="text-xl text-acid" aria-hidden="true">✓</span>
        </div>
        <h2 className="mt-4 text-xl font-bold">Mensagem registrada</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-fog">
          Ambiente de demonstração: nenhum envio real foi feito. Em produção, conecte este
          formulário a um endpoint (Next.js Route Handler + Resend) ou serviço de formulários.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn btn-ghost mt-6">
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8" noValidate>
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="ct-name" className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
              nome *
            </label>
            <input
              id="ct-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              placeholder="Seu nome"
              className="mt-2 w-full rounded border border-[var(--color-line)] bg-black/40 px-3.5 py-2.5 text-sm text-bone placeholder:text-fog/50 focus:border-acid focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="ct-email" className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
              e-mail *
            </label>
            <input
              id="ct-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder="voce@email.com"
              className="mt-2 w-full rounded border border-[var(--color-line)] bg-black/40 px-3.5 py-2.5 text-sm text-bone placeholder:text-fog/50 focus:border-acid focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="ct-subject" className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
            assunto
          </label>
          <select
            id="ct-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-2 w-full rounded border border-[var(--color-line)] bg-black/40 px-3.5 py-2.5 text-sm text-bone focus:border-acid focus:outline-none"
          >
            {subjects.map((item) => (
              <option key={item} value={item} className="bg-[#080d13]">
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="ct-message" className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
            mensagem *
          </label>
          <textarea
            id="ct-message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escreva sua dúvida, sugestão ou correção…"
            aria-describedby={status === "error" ? "ct-error" : undefined}
            className="mt-2 w-full resize-y rounded border border-[var(--color-line)] bg-black/40 px-3.5 py-2.5 text-sm text-bone placeholder:text-fog/50 focus:border-acid focus:outline-none"
          />
        </div>

        {status === "error" && (
          <p id="ct-error" role="alert" className="text-xs text-plasma">
            Preencha nome, e-mail válido e uma mensagem com pelo menos 10 caracteres.
          </p>
        )}

        <button type="submit" className="btn btn-primary w-full">
          Enviar mensagem
        </button>
      </div>
    </form>
  );
}

/* Índice
   1 FORMULÁRIO DE CONTATO
     1.1 Estado e validação
     1.2 Componente
*/
