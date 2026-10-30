/* ------------------------------------------------------------------
   1 DADOS DE NAVEGAÇÃO E CONTEÚDO INSTITUCIONAL
   1.1 Estrutura de menus
   1.2 Pilares da mensagem (framing por motivação)
   1.3 Personas do quiz
   1.4 Estatísticas com fontes
------------------------------------------------------------------ */

/* 1.1 Estrutura de menus */
export type NavItem = {
  label: string;
  href: string;
  desc: string;
  tag?: string;
};

export type NavGroup = {
  label: string;
  href: string;
  items: NavItem[];
};

export const primaryNav: NavGroup[] = [
  {
    label: "Comece aqui",
    href: "/comecar",
    items: [
      { label: "Guia de 21 dias", href: "/comecar", desc: "Um passo por dia, sem radicalismo.", tag: "grátis" },
      { label: "Calculadora de impacto", href: "/impacto", desc: "Veja quanto você poupa em animais, água e CO₂." },
      { label: "Quiz: seu perfil vegano", href: "/quiz", desc: "Descubra seu caminho ideal em 6 perguntas." },
      { label: "Kit de transição", href: "/kit", desc: "Checklist em PDF para a primeira semana." },
    ],
  },
  {
    label: "Cozinha",
    href: "/receitas",
    items: [
      { label: "Todas as receitas", href: "/receitas", desc: "120+ receitas com ingredientes brasileiros." },
      { label: "Café da manhã", href: "/receitas?cat=Caf%C3%A9%20da%20manh%C3%A3", desc: "Do pão de queijo vegano ao açaí." },
      { label: "Pratos principais", href: "/receitas?cat=Prato%20Principal", desc: "Feijoada, moqueca, strogonoff." },
      { label: "Doces & sobremesas", href: "/receitas?cat=Doce", desc: "Brigadeiro, bolo, pudim sem ovos." },
    ],
  },
  {
    label: "Saúde",
    href: "/nutricao",
    items: [
      { label: "Guia de nutrição", href: "/nutricao", desc: "Proteína, B12, ferro, ômega-3 e cálcio." },
      { label: "Nutrientes essenciais", href: "/nutricao#nutrientes", desc: "Tabela prática com fontes vegetais." },
      { label: "Mitos derrubados", href: "/mitos", desc: "12 objeções respondidas com evidência." },
      { label: "Vegano e atleta", href: "/artigos/vegano-e-atleta-performance", desc: "Performance, recuperação e proteína." },
    ],
  },
  {
    label: "Impacto",
    href: "/impacto",
    items: [
      { label: "Calculadora de impacto", href: "/impacto", desc: "Dados por porção e por ano." },
      { label: "Animais", href: "/artigos/crueldade-animal-na-industria", desc: "O que muda na vida de quem sente." },
      { label: "Clima e água", href: "/artigos/impacto-ambiental-da-pecuaria", desc: "O número que a ONU confirmou." },
      { label: "Guia de compras", href: "/compras", desc: "Marcas, rótulos e armadilhas." },
    ],
  },
  {
    label: "Comunidade",
    href: "/onde-comer",
    items: [
      { label: "Onde comer", href: "/onde-comer", desc: "Restaurantes, lanchonetes e entregas." },
      { label: "Glossário", href: "/glossario", desc: "52 termos do universo vegano." },
      { label: "Artigos", href: "/artigos", desc: "Conteúdo aprofundado e atualizado." },
      { label: "Newsletter", href: "/newsletter", desc: "1 e-mail por semana, zero culpa." },
    ],
  },
];

export const footerNav = [
  {
    title: "Começar",
    links: [
      { label: "Guia de 21 dias", href: "/comecar" },
      { label: "Quiz de perfil", href: "/quiz" },
      { label: "Calculadora de impacto", href: "/impacto" },
      { label: "Kit de transição", href: "/kit" },
    ],
  },
  {
    title: "Conteúdo",
    links: [
      { label: "Receitas", href: "/receitas" },
      { label: "Nutrição", href: "/nutricao" },
      { label: "Mitos", href: "/mitos" },
      { label: "Artigos", href: "/artigos" },
      { label: "Glossário", href: "/glossario" },
    ],
  },
  {
    title: "Prático",
    links: [
      { label: "Guia de compras", href: "/compras" },
      { label: "Onde comer", href: "/onde-comer" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Buscar", href: "/buscar" },
    ],
  },
  {
    title: "Transparência",
    links: [
      { label: "Nossa metodologia", href: "/metodologia" },
      { label: "Fontes científicas", href: "/fontes" },
      { label: "Política editorial", href: "/metodologia#editorial" },
      { label: "Contato", href: "/contato" },
    ],
  },
];

/* 1.2 Pilares da mensagem (framing por motivação) */
export const pillars = [
  {
    id: "animais",
    icon: "♥",
    title: "Pelos animais",
    claim: "Nenhum animal precisa morrer para você almoçar.",
    detail:
      "Um vegano poupa cerca de 30 animais terrestres e centenas de animais marinhos por ano. Cada refeição é uma escolha — e escolhas somam.",
    href: "/artigos/crueldade-animal-na-industria",
    accent: "plasma" as const,
    stat: "~30 animais/ano",
  },
  {
    id: "saude",
    icon: "⊕",
    title: "Pela sua saúde",
    claim: "Menos colesterol, mais fibra, mais energia.",
    detail:
      "Dietas à base de plantas são associadas a menor risco cardiovascular, menor IMC e menor incidência de diabetes tipo 2 em grandes coortes populacionais.",
    href: "/nutricao",
    accent: "acid" as const,
    stat: "−25% risco cardíaco",
  },
  {
    id: "planeta",
    icon: "◍",
    title: "Pelo planeta",
    claim: "Uma troca de hambúrguer economiza 2.400 litros de água.",
    detail:
      "A pecuária responde por cerca de 14,5% das emissões globais de gases de efeito estufa e é a principal vetor de desmatamento no Brasil.",
    href: "/artigos/impacto-ambiental-da-pecuaria",
    accent: "volt" as const,
    stat: "14,5% das emissões",
  },
];

/* 1.3 Personas do quiz */
export type Persona = {
  id: string;
  title: string;
  emoji: string;
  headline: string;
  summary: string;
  path: string[];
  firstSteps: string[];
};

export const personas: Persona[] = [
  {
    id: "iniciante",
    title: "O Explorador",
    emoji: "🌱",
    headline: "Você quer testar sem pressão. Perfeito.",
    summary:
      "Seu perfil responde melhor a metas curtas e vitórias rápidas. Você não precisa virar vegano hoje: precisa de 3 receitas que funcionem e um plano de 7 dias.",
    path: ["/comecar", "/receitas", "/kit"],
    firstSteps: [
      "Escolha 3 receitas do portal e cozinhe uma neste fim de semana",
      "Faça o 'Dia 1' do guia de 21 dias amanhã",
      "Troque o leite do café por uma versão vegetal por 7 dias",
    ],
  },
  {
    id: "saude",
    title: "O Otimizador",
    emoji: "⚡",
    headline: "Você quer dados e resultado mensurável.",
    summary:
      "Comece pela tabela de nutrientes, monte um prato com proteína vegetal em cada refeição e acompanhe exames em 90 dias. Seu caminho é técnico, não emocional.",
    path: ["/nutricao", "/receitas?cat=Prato%20Principal", "/artigos/vegano-e-atleta-performance"],
    firstSteps: [
      "Calcule sua meta de proteína (1,2 a 1,6 g/kg para quem treina)",
      "Compre B12 e agende exame de homocisteína",
      "Monte 5 combinações de arroz + leguminosa que você goste",
    ],
  },
  {
    id: "animal",
    title: "O Empático",
    emoji: "❤️",
    headline: "Você sente primeiro, decide depois.",
    summary:
      "Seu motor é a compaixão. Você precisa de contexto sobre a indústria e de uma rede de apoio para não se sentir sozinho nessa. Histórias reais vão te sustentar.",
    path: ["/artigos/crueldade-animal-na-industria", "/onde-comer", "/mitos"],
    firstSteps: [
      "Assista a um documentário e escreva por que decidiu mudar",
      "Entre em um grupo vegano da sua cidade",
      "Comece por substituições simples: leite, ovos, queijo",
    ],
  },
  {
    id: "planeta",
    title: "O Guardião",
    emoji: "🌍",
    headline: "Você quer que a conta feche com o planeta.",
    summary:
      "Seu argumento é sistêmico: emissões, água, solo. Use a calculadora de impacto para ver o efeito real das suas trocas e priorize alimentos locais e sazonais.",
    path: ["/impacto", "/artigos/impacto-ambiental-da-pecuaria", "/compras"],
    firstSteps: [
      "Rode a calculadora de impacto com sua dieta atual",
      "Substitua a proteína animal de 3 jantares por semana",
      "Prefira feiras locais e alimentos a granel",
    ],
  },
  {
    id: "pratico",
    title: "O Prático",
    emoji: "🥄",
    headline: "Você quer resolver o jantar em 20 minutos.",
    summary:
      "Seu gargalo não é ideologia, é logística. Você precisa de receitas com poucos ingredientes, lista de compras pronta e um mapa de onde comer perto de você.",
    path: ["/receitas", "/compras", "/onde-comer"],
    firstSteps: [
      "Use o filtro 'até 20 min' em receitas",
      "Baixe o kit de transição e faça a lista de compras",
      "Escolha 1 restaurante vegano perto de casa para testar",
    ],
  },
  {
    id: "familia",
    title: "A Família",
    emoji: "🏠",
    headline: "Você precisa levar todo mundo junto.",
    summary:
      "Conversão em casa é negociação: pratos familiares adaptados, uma porção animal opcional e muita paciência. Comece pelo sabor, não pelo discurso.",
    path: ["/artigos/vegano-em-familia", "/receitas?cat=Prato%20Principal", "/mitos"],
    firstSteps: [
      "Adapte 1 receita da família por semana (sem anunciar)",
      "Deixe uma opção animal na mesa para reduzir resistência",
      "Evite discussões à mesa: lidere pelo exemplo",
    ],
  },
];

/* 1.4 Estatísticas com fontes */
export const stats = [
  {
    value: "14,5%",
    label: "das emissões globais de GEE",
    source: "FAO — Livestock's Long Shadow / UNEP (2023)",
    accent: "volt" as const,
  },
  {
    value: "1.847 L",
    label: "de água por 100 g de carne bovina",
    source: "Mekonnen & Hoekstra — Water Footprint Network",
    accent: "acid" as const,
  },
  {
    value: "~16 mi",
    label: "de brasileiros declaram reduzir carne",
    source: "Ipsos / The Vegan Society Brasil (estimativas agregadas)",
    accent: "plasma" as const,
  },
  {
    value: "−25%",
    label: "risco cardiovascular associado",
    source: "Estudos de coorte (EPIC-Oxford, 2021)",
    accent: "acid" as const,
  },
];

/* Índice
   1 DADOS DE NAVEGAÇÃO E CONTEÚDO INSTITUCIONAL
     1.1 Estrutura de menus
     1.2 Pilares da mensagem (framing por motivação)
     1.3 Personas do quiz
     1.4 Estatísticas com fontes
*/
