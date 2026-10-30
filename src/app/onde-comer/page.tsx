import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHead } from "@/components/ui/Section";
import { ActionLink, Chip, JsonLd } from "@/components/ui/Atoms";
import { restaurants } from "@/data/content";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";

/* ------------------------------------------------------------------
   1 PÁGINA: ONDE COMER
   1.1 Metadados
   1.2 Hero
   1.3 Lista de restaurantes
   1.4 Dicas para comer fora
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Onde comer vegano no Brasil: guia por cidade",
  description:
    "Restaurantes, lanchonetes e entregas veganas em São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Fortaleza e Manaus.",
  path: "/onde-comer",
});

/* 1.2 Hero */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="absolute inset-0 u-grid opacity-20" aria-hidden="true" />
      <div className="container-x relative py-14 md:py-18">
        <nav aria-label="Você está aqui" className="mb-5">
          <ol className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
            <li><Link href="/" className="hover:text-acid">início</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-acid">onde comer</li>
          </ol>
        </nav>
        <span className="eyebrow">mapa afetivo</span>
        <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98]">
          Comer fora sem <span className="u-neon">interrogatório ao garçom</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-fog md:text-lg">
          Uma seleção de casas 100% vegetais e opções confiáveis em grandes cidades brasileiras.
          Sempre confirme ingredientes: menu muda, cozinha também.
        </p>
      </div>
    </section>
  );
}

/* 1.3 Lista de restaurantes */
function List() {
  return (
    <Section>
      <SectionHead
        eyebrow="Seleção"
        title="Casas para conhecer"
        description="Exemplos de referência por cidade. Os dados são ilustrativos — confirme horários e menu antes de ir."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {restaurants.map((place) => (
          <div key={place.name} className="card u-scanlines flex flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-bold">{place.name}</h3>
                <p className="mt-0.5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fog">
                  {place.city} · {place.type}
                </p>
              </div>
              <span className="chip !text-[0.7rem]">{place.range}</span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-bone/85">{place.highlight}</p>
            <div className="mt-4 flex items-center justify-between border-t border-[var(--color-line)] pt-3">
              <span className="font-mono text-[0.72rem] text-acid" aria-label={`Nota ${place.rating} de 5`}>
                ★ {place.rating.toFixed(1)}
              </span>
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fog">
                100% vegetal
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* 1.4 Dicas para comer fora */
function Tips() {
  return (
    <Section tone="panel">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Sobrevivência social" title="Comer fora sem estresse" />
          <div className="grid gap-3">
            {[
              { title: "Ligue antes", text: "Pergunte se há opção vegana e o que ela leva. Evita surpresa na mesa." },
              { title: "Peça adaptações simples", text: "Sem queijo, sem bacon, sem ovo. A maioria das cozinhas aceita." },
              { title: "Coma algo antes", text: "Nunca chegue com fome a um evento onde você não sabe o menu." },
              { title: "Leve um prato", text: "Em festas de família, chegue com algo para compartilhar. Sempre funciona." },
            ].map((tip) => (
              <div key={tip.title} className="card p-4">
                <h3 className="text-sm font-semibold text-acid">{tip.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-fog">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card u-scanlines flex flex-col justify-center p-8">
          <Chip tone="volt">kit prático</Chip>
          <h2 className="mt-4 text-2xl font-bold leading-tight">
            Quer a lista de compras e o roteiro da primeira semana?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-fog">
            O kit de transição do Vitalis tem checklist de 21 dias, lista de compras por categoria,
            tabela de nutrientes e 5 receitas de emergência.
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <ActionLink href="/kit">Baixar kit</ActionLink>
            <ActionLink href="/comecar" variant="ghost">Ver guia</ActionLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* Página */
export default function OndeComerPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Onde comer", path: "/onde-comer" },
          ]),
        ]}
      />
      <Hero />
      <List />
      <Tips />
    </>
  );
}

/* Índice
   1 PÁGINA: ONDE COMER
     1.1 Metadados
     1.2 Hero
     1.3 Lista de restaurantes
     1.4 Dicas para comer fora
*/
