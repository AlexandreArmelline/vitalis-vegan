/* ------------------------------------------------------------------
   1 CONFIGURAÇÃO DE SEO CENTRAL
   1.1 Constantes do site
   1.2 Metadados base reutilizáveis
   1.3 Builders de JSON-LD (Schema.org)
------------------------------------------------------------------ */

/* 1.1 Constantes do site */
export const SITE = {
  name: "VITALIS",
  legalName: "Vitalis — Portal Vegano",
  tagline: "O portal que transforma curiosidade em escolha consciente.",
  description:
    "VITALIS é o portal vegano brasileiro que reúne guia de 21 dias, 120+ receitas plant-based, ciência da nutrição, calculadora de impacto, mapa de restaurantes e respostas para os 12 mitos mais comuns sobre veganismo.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vitalisvegan.com.br",
  locale: "pt_BR",
  language: "pt-BR",
  author: {
    name: "Alexandre Armelline",
    url: "https://www.aledev.com.br",
  },
  social: {
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    tiktok: "https://www.tiktok.com/",
  },
  keywords: [
    "veganismo",
    "vegano",
    "dieta vegana",
    "receitas veganas",
    "como virar vegano",
    "vegano iniciante",
    "proteína vegetal",
    "alimentação plant-based",
    "veganismo no brasil",
    "impacto ambiental da carne",
    "crueldade animal",
    "saúde vegana",
  ],
} as const;

/* 1.2 Metadados base reutilizáveis */
type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og-default.svg",
  type = "website",
  publishedTime,
  tags,
}: SeoProps) {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    keywords: tags ?? [...SITE.keywords],
    alternates: {
      canonical: path,
      types: {
        "application/rss+xml": "/feed.xml",
      },
    },
    openGraph: {
      type,
      url,
      siteName: SITE.legalName,
      title,
      description,
      locale: SITE.locale,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}

/* 1.3 Builders de JSON-LD (Schema.org) */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    description: SITE.description,
    founder: {
      "@type": "Person",
      name: SITE.author.name,
      url: SITE.author.url,
    },
    sameAs: Object.values(SITE.social),
    areaServed: "BR",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.language,
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/buscar?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  image: string;
  section: string;
}) {
  const url = `${SITE.url}/artigos/${input.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: [input.image],
    datePublished: input.date,
    dateModified: input.updated ?? input.date,
    articleSection: input.section,
    inLanguage: SITE.language,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: SITE.author.name,
      url: SITE.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
      logo: { "@type": "ImageObject", url: `${SITE.url}/icon.svg` },
    },
  };
}

export function recipeSchema(input: {
  title: string;
  description: string;
  slug: string;
  image: string;
  prepMinutes: number;
  cookMinutes: number;
  servings: number;
  calories: number;
  ingredients: string[];
  steps: string[];
  category: string;
}) {
  const url = `${SITE.url}/receitas/${input.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: input.title,
    description: input.description,
    image: [input.image],
    url,
    inLanguage: SITE.language,
    recipeCategory: input.category,
    recipeCuisine: "Brasileira vegana",
    keywords: "vegano, plant-based, receita sem ingredientes de origem animal",
    prepTime: `PT${input.prepMinutes}M`,
    cookTime: `PT${input.cookMinutes}M`,
    totalTime: `PT${input.prepMinutes + input.cookMinutes}M`,
    recipeYield: `${input.servings} porções`,
    suitableForDiet: "https://schema.org/VeganDiet",
    nutrition: {
      "@type": "NutritionInformation",
      calories: `${input.calories} kcal`,
      servingSize: "1 porção",
    },
    recipeIngredient: input.ingredients,
    recipeInstructions: input.steps.map((step) => ({
      "@type": "HowToStep",
      text: step,
    })),
    author: { "@type": "Person", name: SITE.author.name },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE.url}${crumb.path}`,
    })),
  };
}

export function howToSchema(input: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    totalTime: "P21D",
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${SITE.url}/comecar#dia-${index + 1}`,
    })),
  };
}

export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${SITE.url}${item.path}`,
    })),
  };
}

/* Índice
   1 CONFIGURAÇÃO DE SEO CENTRAL
     1.1 Constantes do site
     1.2 Metadados base reutilizáveis
     1.3 Builders de JSON-LD (Schema.org)
*/
