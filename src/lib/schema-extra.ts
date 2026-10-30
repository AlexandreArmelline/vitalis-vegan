/* ------------------------------------------------------------------
   1 SCHEMAS ADICIONAIS DO SCHEMA.ORG
   1.1 DefinedTermSet (glossário)
   1.2 WebPage com Speakable
   1.3 CollectionPage
   1.4 Service / HowTo de kit
------------------------------------------------------------------ */
import { SITE } from "./seo";

/* 1.1 DefinedTermSet (glossário) */
export function definedTermSetSchema(terms: { term: string; def: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossário Vegano Vitalis",
    description: "Termos do universo vegano explicados de forma direta.",
    inLanguage: SITE.language,
    url: `${SITE.url}/glossario`,
    hasDefinedTerm: terms.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.def,
      inDefinedTermSet: `${SITE.url}/glossario`,
    })),
  };
}

/* 1.2 WebPage com Speakable */
export function webPageSchema(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    inLanguage: SITE.language,
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".prose-blog > p:first-child"],
    },
  };
}

/* 1.3 CollectionPage */
export function collectionPageSchema(input: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    inLanguage: SITE.language,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: input.items.length,
      itemListElement: input.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: `${SITE.url}${item.path}`,
      })),
    },
  };
}

/* 1.4 Service / HowTo de kit */
export function digitalDocumentSchema(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: input.name,
    description: input.description,
    url: `${SITE.url}${input.path}`,
    inLanguage: SITE.language,
    isAccessibleForFree: true,
    publisher: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
  };
}

export { buildMetadata, breadcrumbSchema, faqSchema, SITE } from "./seo";

/* Índice
   1 SCHEMAS ADICIONAIS DO SCHEMA.ORG
     1.1 DefinedTermSet (glossário)
     1.2 WebPage com Speakable
     1.3 CollectionPage
     1.4 Service / HowTo de kit
*/
