import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/ui/Atoms";
import { ContactForm } from "@/components/tools/ContactForm";
import { buildMetadata, breadcrumbSchema, webPageSchema } from "@/lib/schema-extra";
import { SITE } from "@/lib/seo";

/* ------------------------------------------------------------------
   1 PÁGINA: CONTATO
   1.1 Metadados
   1.2 Conteúdo
------------------------------------------------------------------ */

/* 1.1 Metadados */
export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Fale com o Vitalis: dúvidas sobre veganismo, sugestões de receita, correções de conteúdo, parcerias e imprensa.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: "Contato", path: "/contato" },
          ]),
          webPageSchema({
            name: "Contato",
            description: "Fale com a equipe do Vitalis.",
            path: "/contato",
          }),
        ]}
      />
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="absolute inset-0 u-grid opacity-20" aria-hidden="true" />
        <div className="container-x relative grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-18">
          <div>
            <nav aria-label="Você está aqui" className="mb-5">
              <ol className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-fog">
                <li><Link href="/" className="hover:text-acid">início</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-acid">contato</li>
              </ol>
            </nav>
            <span className="eyebrow">fale com a gente</span>
            <h1 className="mt-4 text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[0.98]">
              Dúvida, correção ou <span className="u-neon">sugestão</span>?
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-fog">
              Corrigir conteúdo errado é parte do nosso método. Se você encontrou um dado
              desatualizado, uma receita que não funciona ou uma explicação confusa, escreva.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="card p-4">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-acid">
                  e-mail editorial
                </p>
                <p className="mt-1.5 text-sm text-bone">conteudo@vitalisvegan.com.br</p>
              </div>
              <div className="card p-4">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-acid">
                  imprensa e parcerias
                </p>
                <p className="mt-1.5 text-sm text-bone">imprensa@vitalisvegan.com.br</p>
              </div>
              <div className="card p-4">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-acid">
                  prazo de resposta
                </p>
                <p className="mt-1.5 text-sm text-bone">até 3 dias úteis</p>
              </div>
            </div>

            <p className="mt-6 font-mono text-[0.72rem] uppercase leading-relaxed tracking-[0.12em] text-fog/60">
              site: {SITE.url.replace("https://", "")}
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

/* Índice
   1 PÁGINA: CONTATO
     1.1 Metadados
     1.2 Conteúdo
*/
