"use client";

import { useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------
   1 CABEÇALHO
   1.1 Barra de aviso superior
   1.2 Navegação principal com mega-menu
   1.3 Menu mobile
   1.4 Estrutura raiz
------------------------------------------------------------------ */

/* 1.1 Barra de aviso superior */
function TopBar() {
  return (
    <div className="border-b border-[var(--color-line)] bg-[#060a0f]">
      <div className="container-x flex h-9 items-center justify-between gap-4 text-[0.72rem] font-mono uppercase tracking-[0.16em] text-fog">
        <p className="flex items-center gap-2 truncate">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-acid" />
          <span className="truncate">Guia de 21 dias · gratuito e sem cadastro</span>
        </p>
        <p className="hidden shrink-0 sm:block">
          <Link href="/newsletter" className="transition-colors hover:text-acid">
            Receba 1 e-mail/semana →
          </Link>
        </p>
      </div>
    </div>
  );
}

/* 1.2 Navegação principal com mega-menu */
type NavItem = { label: string; href: string; desc: string; tag?: string };
type NavGroup = { label: string; href: string; items: NavItem[] };

function DesktopNav({ groups }: { groups: NavGroup[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <nav aria-label="Navegação principal" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {groups.map((group) => (
          <li
            key={group.label}
            className="relative"
            onMouseEnter={() => setOpen(group.label)}
            onMouseLeave={() => setOpen(null)}
          >
            <Link
              href={group.href}
              className={`flex items-center gap-1.5 rounded px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] transition-colors ${
                open === group.label ? "text-acid" : "text-bone/80 hover:text-acid"
              }`}
              aria-expanded={open === group.label}
            >
              {group.label}
              <span aria-hidden="true" className="text-[0.64rem] opacity-60">
                ▾
              </span>
            </Link>

            {open === group.label && (
              <div className="absolute left-0 top-full z-50 w-[330px] pt-2">
                <div className="card u-scanlines overflow-hidden p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
                  {group.items.map((item) => (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      className="group flex flex-col gap-0.5 rounded-md p-2.5 transition-colors hover:bg-[rgba(184,255,47,0.07)]"
                    >
                      <span className="flex items-center gap-2 text-sm font-semibold text-bone group-hover:text-acid">
                        {item.label}
                        {item.tag && <span className="chip !px-1.5 !py-0 !text-[0.64rem]">{item.tag}</span>}
                      </span>
                      <span className="text-xs leading-snug text-fog">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* 1.3 Menu mobile */
function MobileNav({ groups }: { groups: NavGroup[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="flex h-10 w-10 items-center justify-center rounded border border-[var(--color-line)] text-acid"
      >
        <span className="font-mono text-lg leading-none">{open ? "✕" : "≡"}</span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 max-h-[75vh] overflow-y-auto border-b border-[var(--color-line)] bg-[#060a0f] p-4">
          {groups.map((group) => (
            <div key={group.label} className="border-b border-[var(--color-line)] py-3 last:border-0">
              <Link
                href={group.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-acid"
              >
                {group.label}
              </Link>
              <ul className="mt-2 grid gap-1">
                {group.items.map((item) => (
                  <li key={item.href + item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded px-2 py-1.5 text-sm text-bone/85 hover:bg-white/5 hover:text-acid"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/comecar"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 w-full"
          >
            Começar o guia de 21 dias
          </Link>
        </div>
      )}
    </div>
  );
}

/* 1.4 Estrutura raiz */
export function Header({ groups }: { groups: NavGroup[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[#04070b]/85 backdrop-blur-xl">
      <TopBar />
      <div className="container-x relative flex h-16 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Vitalis — página inicial">
          <span className="relative flex h-9 w-9 items-center justify-center rounded border border-[rgba(184,255,47,0.5)] bg-[rgba(184,255,47,0.1)]">
            <span className="font-display text-lg font-black leading-none text-acid">V</span>
            <span className="absolute inset-0 rounded border border-acid/30 transition-transform group-hover:scale-110" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-black tracking-tight">
              VITA<span className="u-neon">LIS</span>
            </span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-fog">
              portal vegano
            </span>
          </span>
        </Link>

        <DesktopNav groups={groups} />

        <div className="flex items-center gap-2">
          <Link
            href="/impacto"
            className="hidden font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fog transition-colors hover:text-acid md:block"
          >
            Calculadora
          </Link>
          <Link href="/comecar" className="btn btn-primary hidden !px-4 !py-2.5 sm:inline-flex">
            21 dias
          </Link>
          <MobileNav groups={groups} />
        </div>
      </div>
    </header>
  );
}

/* Índice
   1 CABEÇALHO
     1.1 Barra de aviso superior
     1.2 Navegação principal com mega-menu
     1.3 Menu mobile
     1.4 Estrutura raiz
*/
