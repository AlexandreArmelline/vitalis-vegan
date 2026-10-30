import Link from "next/link";

/* ------------------------------------------------------------------
   1 RODAPÉ
   1.1 Bloco de marca e newsletter rápida
   1.2 Colunas de links
   1.3 Base legal e créditos de imagens
------------------------------------------------------------------ */
type FooterColumn = { title: string; links: { label: string; href: string }[] };

/* 1.1 Bloco de marca e newsletter rápida */
function BrandBlock() {
  return (
    <div className="max-w-sm">
      <Link href="/" className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded border border-[rgba(184,255,47,0.5)] bg-[rgba(184,255,47,0.1)]">
          <span className="font-display text-lg font-black leading-none text-acid">V</span>
        </span>
        <span className="font-display text-lg font-black tracking-tight">
          VITA<span className="u-neon">LIS</span>
        </span>
      </Link>
      <p className="mt-4 text-sm leading-relaxed text-fog">
        O portal que transforma curiosidade em escolha consciente. Conteúdo verificável, receitas
        brasileiras e um plano de 21 dias para ninguém começar sozinho.
      </p>
      <Link href="/newsletter" className="btn btn-ghost mt-5 !text-[0.72rem]">
        Assinar a newsletter →
      </Link>
    </div>
  );
}

/* 1.2 Colunas de links */
function LinkColumns({ columns }: { columns: FooterColumn[] }) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {columns.map((column) => (
        <div key={column.title}>
          <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-acid">
            {column.title}
          </h3>
          <ul className="mt-3.5 grid gap-2">
            {column.links.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="text-[0.82rem] text-fog transition-colors hover:text-bone"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* 1.3 Base legal e créditos de imagens */
export function Footer({ columns }: { columns: FooterColumn[] }) {
  return (
    <footer className="relative border-t border-[var(--color-line)] bg-[#05090d]">
      <div className="container-x py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
          <BrandBlock />
          <LinkColumns columns={columns} />
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--color-line)] pt-6 text-[0.7rem] text-fog/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Vitalis. Conteúdo educativo — não substitui consulta com
            nutricionista ou médico.
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">
            Fotos: Unsplash (uso livre) · Feito com Next.js
          </p>
        </div>
      </div>
      <div className="h-1 w-full bg-[linear-gradient(90deg,var(--color-acid),var(--color-volt),var(--color-plasma))] opacity-70" />
    </footer>
  );
}

/* Índice
   1 RODAPÉ
     1.1 Bloco de marca e newsletter rápida
     1.2 Colunas de links
     1.3 Base legal e créditos de imagens
*/
