"use client";

import { useState } from "react";

/* ------------------------------------------------------------------
   1 FORMULÁRIO DE NEWSLETTER
   1.1 Estado e validação
   1.2 Mensagem de sucesso
   1.3 Componente
------------------------------------------------------------------ */

/* 1.1 Estado e validação */
type Status = "idle" | "error" | "success";

function validate(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

/* 1.2 Mensagem de sucesso */
function Success({ onReset }: { onReset: () => void }) {
  return (
    <div className="card u-scanlines p-8 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(184,255,47,0.5)] bg-[rgba(184,255,47,0.1)]">
        <span className="text-xl text-acid" aria-hidden="true">✓</span>
      </div>
      <h3 className="mt-4 text-xl font-bold">Inscrição registrada</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-fog">
        Este é um ambiente de demonstração: nenhum dado foi enviado a servidores externos. Em
        produção, conecte este formulário a um serviço como Resend, Mailchimp ou Brevo.
      </p>
      <button type="button" onClick={onReset} className="btn btn-ghost mt-6">
        Inscrever outro e-mail
      </button>
    </div>
  );
}

/* 1.3 Componente */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("receitas");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  if (status === "success") {
    return (
      <Success
        onReset={() => {
          setStatus("idle");
          setEmail("");
          setName("");
        }}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8" noValidate>
      <div className="grid gap-4">
        <div>
          <label htmlFor="nl-name" className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
            seu primeiro nome
          </label>
          <input
            id="nl-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Como te chamamos?"
            autoComplete="given-name"
            className="mt-2 w-full rounded border border-[var(--color-line)] bg-black/40 px-3.5 py-2.5 text-sm text-bone placeholder:text-fog/50 focus:border-acid focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="nl-email" className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
            seu melhor e-mail *
          </label>
          <input
            id="nl-email"
            type="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="voce@email.com"
            autoComplete="email"
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "nl-error" : undefined}
            className={`mt-2 w-full rounded border bg-black/40 px-3.5 py-2.5 text-sm text-bone placeholder:text-fog/50 focus:outline-none ${
              status === "error" ? "border-plasma" : "border-[var(--color-line)] focus:border-acid"
            }`}
          />
          {status === "error" && (
            <p id="nl-error" role="alert" className="mt-1.5 text-xs text-plasma">
              Digite um e-mail válido para continuar.
            </p>
          )}
        </div>

        <fieldset>
          <legend className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
            o que te interessa mais?
          </legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {[
              { id: "receitas", label: "Receitas" },
              { id: "saude", label: "Saúde e nutrição" },
              { id: "impacto", label: "Impacto e ética" },
            ].map((option) => (
              <label
                key={option.id}
                className={`flex cursor-pointer items-center gap-2 rounded border px-3 py-2 text-xs transition-colors ${
                  interest === option.id
                    ? "border-acid bg-[rgba(184,255,47,0.08)] text-acid"
                    : "border-[var(--color-line)] text-fog hover:border-[rgba(184,255,47,0.4)]"
                }`}
              >
                <input
                  type="radio"
                  name="interest"
                  value={option.id}
                  checked={interest === option.id}
                  onChange={() => setInterest(option.id)}
                  className="sr-only"
                />
                <span
                  className={`h-2 w-2 rounded-full ${interest === option.id ? "bg-acid" : "bg-[var(--color-line)]"}`}
                  aria-hidden="true"
                />
                {option.label}
              </label>
            ))}
          </div>
        </fieldset>

        <button type="submit" className="btn btn-primary mt-1 w-full">
          Quero receber →
        </button>

        <p className="text-center text-[0.72rem] leading-relaxed text-fog/70">
          Um e-mail por semana. Sem spam, sem venda de dados. Cancele com um clique.
        </p>
      </div>
    </form>
  );
}

/* Índice
   1 FORMULÁRIO DE NEWSLETTER
     1.1 Estado e validação
     1.2 Mensagem de sucesso
     1.3 Componente
*/
