import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ActionLink, Chip, JsonLd } from "@/components/ui/Atoms";
import { NewsletterForm } from "@/components/tools/NewsletterForm";
import { buildMetadata, breadcrumbSchema } from "@/lib/schema-extra";

/* ------------------------------------------------------------------
   1 PÁGINA: NEWSLETTER
   1.1 Metadados
   1.2 Hero + formulário
   1.3 O que você recebe
   1.4 Promessa editorial
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Newsletter Vitalis: 1 e-mail por semana, zero culpa",
  description:
    "Receba uma vez por semana: uma receita testada, um dado científico e uma tarefa prática do guia de 21 dias. Sem spam, sem venda de dados.",
  path: "/newsletter",
});

const benefits = [
  { title: "Uma receita testada", desc: "Sempre com ingredientes de mercado comum e nota de proteína por porção." },
  { title: "Um dado que importa", desc: "Um número com fonte — para você argumentar com segurança, não com achismo." },
  { title: "Uma tarefa prática", desc: "Algo que leva menos de 15 minutos e move seu hábito para frente." },
];

/* 1.2 Hero + formulário */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="absolute inset-0 u-grid opacity-20" aria-hidden="true" />
      <div
        className="absolute left-1/3 top-0 h-72 w-[520px] rounded-full bg-[radial-gradient(circle,rgba(184,255,47,0.14),transparent_70%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="container-x relative grid gap-10 py-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-18">
        <div>
          <nav aria-label="Você está aqui" className="mb-5">
            <ol className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
              <li><Link href="/" className="hover:text-acid">início</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-acid">newsletter</li>
            </ol>
          </nav>
          <Chip>1 e-mail por semana</Chip>
          <h1 className="mt-4 text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[0.98]">
            O empurrão semanal que
            <br />
            <span className="u-neon">falta na sua rotina</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-fog md:text-lg">
            Sem contagem de calorias, sem culpa e sem radicalismo. Uma mensagem curta, prática e útil
            — toda quinta-feira.
          </p>
          <div className="mt-8 grid gap-3">
            {benefits.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-acid" aria-hidden="true" />
                <p className="text-sm text-bone/85">
                  <strong className="text-bone">{item.title}.</strong>{" "}
                  <span className="text-fog">{item.desc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:sticky lg:top-24">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}

/* 1.3 O que você recebe */
function Sample() {
  return (
    <Section tone="panel">
      <div className="card u-scanlines mx-auto max-w-2xl p-6 md:p-8">
        <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-3">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-acid">
            exemplo de edição
          </p>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-fog">
            edição #001
          </p>
        </div>
        <h2 className="mt-4 text-lg font-bold">A semana em que você não precisa ser perfeito</h2>
        <div className="mt-4 grid gap-4 text-sm leading-relaxed text-fog">
          <p>
            <strong className="text-acid">◆ Receita:</strong> strogonoff de grão-de-bico — 20 minutos,
            14 g de proteína por porção. O creme de castanha não talha se você desligar o fogo antes.
          </p>
          <p>
            <strong className="text-[#7ae9ff]">◆ Dado:</strong> trocar 3 refeições com carne por
            semana reduz sua pegada alimentar em cerca de 20%. Fonte: Poore &amp; Nemecek (Science, 2018).
          </p>
          <p>
            <strong className="text-plasma">◆ Tarefa:</strong> compre uma leguminosa que você nunca
            cozinhou. Só isso. Sem mais.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* 1.4 Promessa editorial */
function Promise() {
  return (
    <Section>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Sem spam", desc: "Um e-mail por semana, sempre na quinta. Não vendemos sua lista." },
          { title: "Cancelamento fácil", desc: "Um clique no rodapé e você sai. Sem formulário, sem drama." },
          { title: "Conteúdo verificável", desc: "Todo dado científico tem fonte citada. Editorial independente." },
        ].map((item) => (
          <div key={item.title} className="card p-5">
            <h2 className="text-base font-bold text-acid">{item.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-fog">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <ActionLink href="/comecar">Começar o guia de 21 dias</ActionLink>
        <ActionLink href="/artigos" variant="ghost">Ler artigos</ActionLink>
      </div>
    </Section>
  );
}

/* Página */
export default function NewsletterPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Newsletter", path: "/newsletter" },
          ]),
        ]}
      />
      <Hero />
      <Sample />
      <Promise />
    </>
  );
}

/* Índice
   1 PÁGINA: NEWSLETTER
     1.1 Metadados
     1.2 Hero + formulário
     1.3 O que você recebe
     1.4 Promessa editorial
*/
