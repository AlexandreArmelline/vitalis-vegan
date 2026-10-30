import Link from "next/link";

/* ------------------------------------------------------------------
   1 PÁGINA 404 PERSONALIZADA
   1.1 Visual cyberpunk
   1.2 Rotas de fuga
------------------------------------------------------------------ */
export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0 u-grid opacity-25" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/3 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,149,0.16),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="container-x relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-plasma">
          erro 404 · sinal perdido
        </p>
        <h1
          className="u-glitch mt-6 font-display text-[clamp(4rem,16vw,10rem)] font-black leading-none u-gradient-text"
          data-text="404"
        >
          404
        </h1>
        <h2 className="mt-2 text-xl font-bold md:text-2xl">
          Esta página saiu da dieta — ou nunca existiu.
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-fog">
          O link pode estar quebrado ou o conteúdo foi movido. Mas o caminho de volta está logo
          abaixo.
        </p>

        {/* 1.2 Rotas de fuga */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          <Link href="/" className="btn btn-primary">Voltar ao início</Link>
          <Link href="/comecar" className="btn btn-ghost">Guia de 21 dias</Link>
          <Link href="/receitas" className="btn btn-ghost">Receitas</Link>
        </div>

        <div className="mt-10 grid w-full max-w-lg grid-cols-2 gap-2 sm:grid-cols-3">
          {[
            { href: "/impacto", label: "Calculadora" },
            { href: "/nutricao", label: "Nutrição" },
            { href: "/mitos", label: "Mitos" },
            { href: "/compras", label: "Compras" },
            { href: "/glossario", label: "Glossário" },
            { href: "/buscar", label: "Buscar" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded border border-[var(--color-line)] px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fog transition-colors hover:border-[rgba(184,255,47,0.5)] hover:text-acid"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Índice
   1 PÁGINA 404 PERSONALIZADA
     1.1 Visual cyberpunk
     1.2 Rotas de fuga
*/
