import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------
   1 COMPONENTES DE TIPOGRAFIA E UTILITÁRIOS VISUAIS
   1.1 Eyebrow / Chip
   1.2 Badge de estatística
   1.3 Card com borda neon
   1.4 Botão-link
   1.5 JSON-LD helper
------------------------------------------------------------------ */

/* 1.1 Eyebrow / Chip */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function Chip({
  children,
  tone = "acid",
}: {
  children: ReactNode;
  tone?: "acid" | "plasma" | "volt" | "mute";
}) {
  const map = {
    acid: "chip",
    plasma: "chip chip-plasma",
    volt: "chip chip-volt",
    mute: "chip chip-mute",
  } as const;
  return <span className={map[tone]}>{children}</span>;
}

/* 1.2 Badge de estatística */
export function StatBadge({
  value,
  label,
  source,
  accent = "acid",
}: {
  value: string;
  label: string;
  source?: string;
  accent?: "acid" | "plasma" | "volt";
}) {
  const color =
    accent === "plasma" ? "text-plasma" : accent === "volt" ? "text-[#7ae9ff]" : "text-acid";
  return (
    <div className="stat-box">
      <p className={`font-display text-2xl font-bold ${color}`}>{value}</p>
      <p className="mt-1 text-sm leading-snug text-bone/80">{label}</p>
      {source && (
        <p className="mt-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fog/60">
          {source}
        </p>
      )}
    </div>
  );
}

/* 1.3 Card com borda neon */
export function GlowCard({
  children,
  href,
  className = "",
  glow = true,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  glow?: boolean;
}) {
  const base = `card ${glow ? "u-border-glow" : ""} ${className}`;
  if (href) {
    return (
      <Link href={href} className={`${base} card-lift block`}>
        {children}
      </Link>
    );
  }
  return <div className={base}>{children}</div>;
}

/* 1.4 Botão-link */
export function ActionLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "plasma";
  className?: string;
}) {
  const map = {
    primary: "btn btn-primary",
    ghost: "btn btn-ghost",
    plasma: "btn btn-plasma",
  } as const;
  return (
    <Link href={href} className={`${map[variant]} ${className}`}>
      {children}
    </Link>
  );
}

/* 1.5 JSON-LD helper */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* Índice
   1 COMPONENTES DE TIPOGRAFIA E UTILITÁRIOS VISUAIS
     1.1 Eyebrow / Chip
     1.2 Badge de estatística
     1.3 Card com borda neon
     1.4 Botão-link
     1.5 JSON-LD helper
*/
