import Image from "next/image";
import Link from "next/link";
import { unsplash } from "@/lib/images";

/* ------------------------------------------------------------------
   1 HERO (dobra principal de conversão)
   1.1 Rótulo de status
   1.2 Título com glitch
   1.3 Proposta de valor + CTAs
   1.4 Prova social imediata
   1.5 Mosaico de imagens
   1.6 Marquee inferior
------------------------------------------------------------------ */

/* 1.1 Rótulo de status */
function StatusTag() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(184,255,47,0.28)] bg-[rgba(184,255,47,0.07)] px-3.5 py-1.5">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-acid" />
      </span>
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-acid">
        guia de 21 dias · aberto
      </span>
    </div>
  );
}

/* 1.2 Título com glitch */
function HeroTitle() {
  return (
    <h1 className="mt-6 text-[clamp(2.4rem,7vw,4.9rem)] font-bold leading-[0.94] tracking-[-0.04em]">
      <span className="block text-bone">Descubra o</span>
      <span
        className="u-glitch mt-1 block u-gradient-text"
        data-text="modo vegano"
      >
        modo vegano
      </span>
      <span className="mt-3 block text-[0.42em] font-normal leading-tight tracking-normal text-fog">
        de viver, comer e pensar — sem sermão, sem culpa e sem perder o sabor.
      </span>
    </h1>
  );
}

/* 1.3 Proposta de valor + CTAs */
function HeroActions() {
  return (
    <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link href="/comecar" className="btn btn-primary !px-6 !py-4 text-[0.8rem]">
        Começar o guia de 21 dias
      </Link>
      <Link href="/quiz" className="btn btn-ghost !px-6 !py-4 text-[0.8rem]">
        Descobrir meu perfil →
      </Link>
    </div>
  );
}

/* 1.4 Prova social imediata */
function SocialProof() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[var(--color-line)] pt-6">
      <div className="flex items-center gap-2.5">
        <div className="flex -space-x-2" aria-hidden="true">
          {["photo-1494790108377-be9c29b29330", "photo-1500648767791-00dcc994a43e", "photo-1544005313-94ddf0286df2"].map(
            (id) => (
              <Image
                key={id}
                src={unsplash(id, 72)}
                alt=""
                width={30}
                height={30}
                className="h-[30px] w-[30px] rounded-full border-2 border-void object-cover"
              />
            ),
          )}
        </div>
        <p className="text-xs text-fog">
          <strong className="text-bone">+18.400</strong> pessoas usando o método
        </p>
      </div>
      <p className="text-xs text-fog">
        <strong className="text-bone">120+</strong> receitas brasileiras
      </p>
      <p className="text-xs text-fog">
        <strong className="text-bone">0</strong> cadastros obrigatórios
      </p>
    </div>
  );
}

/* 1.5 Mosaico de imagens */
function HeroVisual() {
  return (
    <div className="relative">
      {/* halo neon */}
      <div
        className="absolute -inset-8 rounded-[40px] bg-[radial-gradient(circle_at_60%_40%,rgba(184,255,47,0.16),transparent_65%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="relative grid aspect-square grid-cols-3 grid-rows-3 gap-2.5 md:gap-3">
        {/* Imagem principal */}
        <div className="relative col-span-2 row-span-2 overflow-hidden rounded-lg border border-[var(--color-line)]">
          <Image
            src={unsplash("photo-1512621776951-a57141f2eefd", 800)}
            alt="Bowl vegano com vegetais e leguminosas"
            fill
            priority
            sizes="(max-width: 1024px) 60vw, 320px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(4,7,11,0.75))]" />
          <div className="absolute inset-x-0 bottom-0 p-3">
            <span className="chip !bg-black/70 !text-[0.64rem]">bowl proteico</span>
          </div>
        </div>

        {/* Imagem superior direita */}
        <div className="relative overflow-hidden rounded-lg border border-[var(--color-line)]">
          <Image
            src={unsplash("photo-1519996529931-28324d5a630e", 400)}
            alt="Legumes frescos cortados"
            fill
            sizes="(max-width: 1024px) 30vw, 160px"
            className="object-cover"
          />
        </div>

        {/* Imagem direita meio */}
        <div className="relative overflow-hidden rounded-lg border border-[var(--color-line)]">
          <Image
            src={unsplash("photo-1543362906-acfc16c67564", 400)}
            alt="Grão-de-bico cozido"
            fill
            sizes="(max-width: 1024px) 30vw, 160px"
            className="object-cover"
          />
        </div>

        {/* Cartão de dado */}
        <div className="u-scanlines col-span-2 flex items-center gap-4 rounded-lg border border-[rgba(184,255,47,0.35)] bg-[rgba(8,13,19,0.92)] px-4 py-3 backdrop-blur">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fog">
              impacto de 1 ano
            </p>
            <p className="font-display text-2xl font-bold leading-none text-acid">~30</p>
            <p className="mt-0.5 text-[0.7rem] leading-tight text-bone/75">
              animais poupados
            </p>
          </div>
          <div className="h-10 w-px bg-[var(--color-line)]" />
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fog">
              água
            </p>
            <p className="font-display text-2xl font-bold leading-none text-[#7ae9ff]">1,2mi</p>
            <p className="mt-0.5 text-[0.7rem] leading-tight text-bone/75">litros/ano</p>
          </div>
        </div>

        {/* Imagem inferior direita */}
        <div className="relative overflow-hidden rounded-lg border border-[var(--color-line)]">
          <Image
            src={unsplash("photo-1546069901-ba9599a7e63c", 400)}
            alt="Prato vegano finalizado"
            fill
            sizes="(max-width: 1024px) 30vw, 160px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(184,255,47,0.08)]" />
        </div>
      </div>
    </div>
  );
}

/* 1.6 Marquee inferior */
function Marquee() {
  const items = [
    "sem colesterol dietético",
    "alto teor de fibras",
    "custo por proteína menor",
    "25% menos risco cardiovascular",
    "zero sofrimento animal",
    "pegada de carbono −73%",
    "receitas brasileiras",
    "guia gratuito de 21 dias",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-[var(--color-line)] bg-[#060a0f] py-3">
      <div className="u-marquee gap-8 whitespace-nowrap">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-fog/70"
          >
            {item}
            <span className="text-acid" aria-hidden="true">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* Componente Hero */
export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 u-grid opacity-25" aria-hidden="true" />
        <div
          className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,45,149,0.14),transparent_70%)] blur-2xl"
          aria-hidden="true"
        />
        <div className="container-x relative grid gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="u-reveal">
            <StatusTag />
            <HeroTitle />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-fog md:text-lg">
              O <strong className="text-bone">VITALIS</strong> reúne tudo o que você precisa para
              reduzir ou eliminar o consumo animal com ciência, receitas brasileiras e um plano
              diário. <span className="text-acid">Comece hoje, no seu ritmo.</span>
            </p>
            <HeroActions />
            <SocialProof />
          </div>
          <div className="u-reveal">
            <HeroVisual />
          </div>
        </div>
      </section>
      <Marquee />
    </>
  );
}

/* Índice
   1 HERO (dobra principal de conversão)
     1.1 Rótulo de status
     1.2 Título com glitch
     1.3 Proposta de valor + CTAs
     1.4 Prova social imediata
     1.5 Mosaico de imagens
     1.6 Marquee inferior
*/
