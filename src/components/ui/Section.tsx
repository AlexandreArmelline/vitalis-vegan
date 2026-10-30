import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   1 COMPONENTE: SEÇÃO
   1.1 Container padrão com espaçamento
   1.2 Cabeçalho de seção (eyebrow + título + descrição)
   1.3 Divisor neon
------------------------------------------------------------------ */

/* 1.1 Container padrão com espaçamento */
export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "panel" | "acid";
}) {
  const toneClass =
    tone === "panel"
      ? "bg-[#070c12]/70 border-y border-[var(--color-line)]"
      : tone === "acid"
        ? "bg-[linear-gradient(180deg,rgba(184,255,47,0.06),transparent)] border-y border-[rgba(184,255,47,0.18)]"
        : "";
  return (
    <section id={id} className={`py-16 md:py-24 ${toneClass} ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

/* 1.2 Cabeçalho de seção (eyebrow + título + descrição) */
export function SectionHead({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <div
      className={`mb-10 flex flex-col gap-5 md:mb-14 ${
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={align === "center" ? "max-w-3xl" : "max-w-2xl"}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-4 text-[clamp(1.8rem,4.2vw,3.1rem)] font-bold tracking-tight">{title}</h2>
        {description && <p className="mt-4 text-base leading-relaxed text-fog md:text-lg">{description}</p>}
      </div>
      {action}
    </div>
  );
}

/* 1.3 Divisor neon */
export function NeonDivider() {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(184,255,47,0.5),rgba(255,45,149,0.3),transparent)]"
    />
  );
}
