# VITALIS — Super Portal Vegano

Portal brasileiro sobre veganismo construído para **conversão real**: guia de 21 dias, receitas
brasileiras, ciência da nutrição, calculadora de impacto e quiz de perfil. Visual **cyberpunk**
(preto profundo + verde ácido, ciano e magenta) com foco em SEO técnico e UX/UI.

> **Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Deploy na Vercel

---

## 1 Pesquisa que fundamentou o projeto

O portal foi desenhado a partir dos formatos com maior taxa de conversão comprovada no mundo:

| Referência | Mecanismo de conversão | Como foi aplicado |
|---|---|---|
| **Veganuary** (UK, 1M+ participantes) | Desafio de duração curta com apoio diário | Guia de 21 dias, 3 fases, tarefa diária de 5–60 min |
| **Challenge 22** (Israel) | Grupo de apoio + acompanhamento | Personas e caminho personalizado por perfil |
| **Vegan Society / ProVeg** | Segmentação por motivação (animais/saúde/ambiente) | Seção "Escolha seu motivo" com 3 pilares |
| **NutritionFacts.org** | Ciência com fontes, reduz objeção "faz mal" | Artigos com blocos de estatística + fonte |
| **SVB (Brasil)** | Localização cultural | Feijoada, pão de queijo, moqueca, açaí, brigadeiro |
| **Psicologia da mudança de hábito** | Redução gradual, tom acolhedor, remoção de atrito | Zero radicalismo, "se falhar, continue no próximo dia" |

**Decisões editoriais derivadas da pesquisa:**
- **Sem imagens de choque por padrão** — informação verificável converte melhor que choque.
- **Tom de elevação moral** (inspiração) em vez de culpa — reduz reatância.
- **Três objeções reais respondidas em 1 clique:** proteína, custo e "não sei o que comer".
- **Ferramentas interativas** (calculadora, quiz) → tempo de permanência e sinais de SEO.
- **Segmentação por persona** — cada visitante entra pela porta que faz sentido para ele.

---

## 2 Arquitetura de informação (clusters de SEO)

```
/                        Home — conversão principal
/comecar                 Pilar: guia de 21 dias (HowTo schema)
/impacto                 Pilar: calculadora + dados (ferramenta)
/quiz                    Pilar: quiz de perfil (interativo)
/receitas                Cluster: 12 receitas (Recipe schema)
  /receitas/[slug]       12 páginas estáticas
/artigos                 Cluster: 8 artigos (Article schema)
  /artigos/[slug]        8 páginas estáticas
/nutricao                Pilar: nutrição vegana
/mitos                   12 mitos (FAQPage schema)
/compras                 Guia de compras
/kit                     Kit de transição (imprimível)
/onde-comer              Restaurantes por cidade
/glossario               28 termos (DefinedTermSet)
/newsletter              Captura de e-mail
/metodologia              E-E-A-T / política editorial
/fontes                  Bibliografia
/contato                 Contato
/buscar                  Busca interna (noindex)
```

---

## 3 SEO técnico implementado

### 3.1 Metadados
- `metadataBase`, `title.template`, canonical por página
- Open Graph + Twitter Card completos (com **OG image dinâmica** via `next/og`)
- `keywords`, `authors`, `robots` com `max-image-preview: large`

### 3.2 Dados estruturados (JSON-LD)
| Schema | Onde |
|---|---|
| `Organization` + `WebSite` (+ SearchAction) | Global |
| `Article` | Todos os 8 artigos |
| `Recipe` (com `suitableForDiet: VeganDiet`) | Todas as 12 receitas |
| `FAQPage` | Home, guia, artigos, mitos, nutrição, quiz |
| `HowTo` | Guia de 21 dias |
| `BreadcrumbList` | Todas as páginas internas |
| `ItemList` / `CollectionPage` | Listagens |
| `DefinedTermSet` | Glossário |
| `DigitalDocument` | Kit de transição |

### 3.3 Arquivos técnicos
- `sitemap.xml` dinâmico (36 URLs, prioridades e `lastModified`)
- `robots.txt` com regras para GPTBot e Google-Extended
- `feed.xml` (RSS 2.0 com Atom self-link)
- `manifest.webmanifest` (PWA básico com atalhos)
- `icon.svg` + `og-default.svg` + OG images dinâmicas

### 3.4 Performance
- SSG para 45 rotas (HTML pré-renderizado)
- `next/image` com AVIF/WebP, `sizes` e lazy loading automático
- Fontes via `next/font` (self-hosted, `display: swap`, sem CLS)
- JS compartilhado: **103 kB** (First Load JS)

---

## 4 UX/UI e acessibilidade

- **Mobile-first** — testado em 390px sem overflow horizontal
- **Skip link**, landmarks semânticos, `aria-label`/`aria-expanded`/`aria-invalid`
- **Foco visível** customizado (`:focus-visible` com outline neon)
- **Contraste**: corpo 17:1, links e acentos acima de AA
- **Fontes mínimas de 0.7rem (11.2px)** — auditado por script
- **`prefers-reduced-motion`** desativa glitch, marquee e animações
- **`prefers-color-scheme: dark`** nativo
- Interações testadas via E2E (quiz, calculadora, filtros, menu, busca, FAQ)

---

## 5 Identidade visual cyberpunk

| Token | Valor | Uso |
|---|---|---|
| `--color-void` | `#04070b` | Fundo profundo |
| `--color-acid` | `#b8ff2f` | Verde ácido (CTA / neon) |
| `--color-plasma` | `#ff2d95` | Magenta (alertas / destaque) |
| `--color-volt` | `#22e6ff` | Ciano (dados) |
| `--color-fog` | `#9fb0c2` | Texto secundário |

**Efeitos:** grade de fundo, scanlines, ruído SVG, glitch com `clip-path` animado, borda cônica
giratória (`@property --angle`), marquee, texto com gradiente triclorem e revelação por scroll
(`animation-timeline: view()`).

---

## 6 Como rodar localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm run start      # serve o build
npm run typecheck  # verificação de tipos
```

---

## 7 Deploy na Vercel

### Opção A — via GitHub (recomendado)
```bash
git init && git add -A && git commit -m "feat: portal VITALIS"
# crie o repositório no GitHub e então:
git remote add origin https://github.com/SEU_USUARIO/vitalis-vegan.git
git push -u origin main
```
Depois: **vercel.com → Add New Project → importe o repositório**. A Vercel detecta Next.js
automaticamente (`vercel.json` já configurado com região `gru1` — São Paulo).

### Opção B — via CLI
```bash
npm i -g vercel
vercel        # preview
vercel --prod # produção
```

### Variável de ambiente (opcional, recomendada)
```
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
```
Usada em canonical, sitemap, Open Graph e RSS.

---

## 8 Estrutura de arquivos

```
src/
├── app/
│   ├── layout.tsx              Layout raiz + fontes + metadados
│   ├── page.tsx                Home (12 seções)
│   ├── globals.css             Design system cyberpunk
│   ├── sitemap.ts / robots.ts / manifest.ts
│   ├── opengraph-image.tsx     OG dinâmica
│   ├── feed.xml/route.ts       RSS
│   ├── not-found.tsx / global-error.tsx
│   ├── comecar/ impacto/ quiz/ receitas/ artigos/
│   ├── nutricao/ mitos/ compras/ kit/ onde-comer/
│   ├── glossario/ newsletter/ metodologia/ fontes/ contato/ buscar/
├── components/
│   ├── layout/   Header, Footer
│   ├── home/     Hero
│   ├── tools/    ImpactCalculator, PersonaQuiz, NewsletterForm,
│   │             ContactForm, SearchClient, PrintButton
│   ├── recipes/  RecipeExplorer
│   └── ui/       Section, Atoms
├── data/         articles, recipes, site, content
└── lib/          seo, schema-extra, images
```

---

## 9 O que conectar em produção

- [ ] **Newsletter** — Resend / Brevo / Mailchimp (o formulário já valida e mostra estado de sucesso)
- [ ] **Contato** — Route Handler `POST /api/contato` + serviço de e-mail
- [ ] **Analytics** — Vercel Analytics ou Plausible
- [ ] **Domínio** — apontar `vitalisvegan.com.br` (ou o definitivo) na Vercel
- [ ] **Imagens** — todas são Unsplash (uso gratuito); substituir por fotos próprias quando houver

---

## 10 Aviso

Conteúdo educativo. Não substitui consulta com nutricionista ou médico. Dados de nutrição e
impacto ambiental são médias publicadas e podem variar por região e método de produção.

---

**Desenvolvido por Alexandre Armelline**
Desenvolvedor Web · [aledev.com.br](https://www.aledev.com.br)
