/* ------------------------------------------------------------------
   1 CONTEÚDO ESTRUTURAL DO PORTAL
   1.1 Guia de 21 dias
   1.2 Glossário
   1.3 Restaurantes
   1.4 Catálogo de compras
   1.5 Depoimentos
   1.6 Perguntas frequentes da home
------------------------------------------------------------------ */

/* 1.1 Guia de 21 dias */
export type GuideDay = {
  day: number;
  phase: "Reset" | "Substituição" | "Expansão";
  title: string;
  task: string;
  why: string;
  minutes: number;
};

export const guideDays: GuideDay[] = [
  { day: 1, phase: "Reset", title: "Fotografe o que você come hoje", task: "Sem julgamento: anote ou fotografe todas as refeições do dia.", why: "Consciência antes de mudança. Você precisa ver o padrão para intervir nele.", minutes: 5 },
  { day: 2, phase: "Reset", title: "Escolha sua motivação principal", task: "Animais, saúde ou planeta. Escreva em uma frase por que você está aqui.", why: "Pesquisas mostram que motivação clara sustenta 3x mais a adesão em 30 dias.", minutes: 5 },
  { day: 3, phase: "Reset", title: "Troque o leite do café", task: "Beba café com bebida vegetal (aveia, coco ou castanha) o dia inteiro.", why: "Uma troca pequena e sem dor cria a primeira vitória. Não precisa ser perfeito.", minutes: 2 },
  { day: 4, phase: "Reset", title: "Desmonte a geladeira", task: "Separe o que tem origem animal e o que é vegetal. Não jogue nada fora.", why: "Culpa não converte. Aproveitar o que já comprou evita desperdício e reduz atrito.", minutes: 10 },
  { day: 5, phase: "Reset", title: "Compre 3 leguminosas", task: "Feijão, lentilha e grão-de-bico. Vá pela versão seca, é mais barata.", why: "Leguminosa é a base proteica vegana. Ter o ingrediente em casa é meio caminho.", minutes: 15 },
  { day: 6, phase: "Reset", title: "Cozinhe uma receita do portal", task: "Escolha uma receita com nota 'Fácil' e faça com calma.", why: "A primeira vitória culinária muda a percepção de dificuldade para sempre.", minutes: 40 },
  { day: 7, phase: "Reset", title: "Faça o balanço da semana", task: "Quantas refeições foram 100% vegetais? Anote o número.", why: "Medir gera progresso. Progresso visível gera continuidade.", minutes: 5 },
  { day: 8, phase: "Substituição", title: "Substitua a proteína do almoço", task: "Troque a carne do almoço por feijão, lentilha ou tofu.", why: "Esta é a troca de maior impacto ambiental e ético do seu dia.", minutes: 10 },
  { day: 9, phase: "Substituição", title: "Aprenda o umami vegetal", task: "Use levedura nutricional ou shoyu em um prato e sinta a diferença.", why: "O sabor é a objeção real. Umami resolve a sensação de 'falta algo'.", minutes: 20 },
  { day: 10, phase: "Substituição", title: "Café da manhã 100% vegetal", task: "Tofu mexido, açaí ou pão com pasta de amendoim.", why: "Começar bem o dia reduz a chance de recaída no almoço.", minutes: 15 },
  { day: 11, phase: "Substituição", title: "Leia 3 rótulos", task: "Procure caseína, soro de leite e gelatina em produtos que você já consome.", why: "Você vai descobrir ingredientes animais onde não imaginava.", minutes: 10 },
  { day: 12, phase: "Substituição", title: "Substitua o queijo", task: "Teste tofu defumado, castanha fermentada ou queijo vegano de castanha.", why: "O queijo é o item mais difícil de abandonar. Existe rota.", minutes: 25 },
  { day: 13, phase: "Substituição", title: "Lanche vegano na mochila", task: "Fruta, castanhas, homus com cenoura.", why: "Fome sem opção é o principal motivo de recaída fora de casa.", minutes: 10 },
  { day: 14, phase: "Substituição", title: "Jantar fora sem carne", task: "Peça um prato vegetariano e confirme se leva queijo ou ovo.", why: "Ambiente social é onde a mudança realmente é testada.", minutes: 60 },
  { day: 15, phase: "Substituição", title: "Dia 100% vegetal", task: "Todas as refeições do dia, sem exceção.", why: "Um dia inteiro prova a si mesmo que é possível. É o marco psicológico.", minutes: 0 },
  { day: 16, phase: "Expansão", title: "Monte seu prato padrão", task: "50% vegetais, 25% leguminosa, 25% cereal integral.", why: "Prato-padrão elimina a decisão diária e garante nutrientes.", minutes: 10 },
  { day: 17, phase: "Expansão", title: "Orgânico, local, sazonal", task: "Compre 3 itens em feira de produtores.", why: "Reduz impacto ambiental e melhora sabor. Sustentabilidade completa.", minutes: 30 },
  { day: 18, phase: "Expansão", title: "Aprenda a fermentar", task: "Faça tofu, tempeh ou iogurte de coco em casa.", why: "Fermentados melhoram absorção de nutrientes e o custo por porção.", minutes: 60 },
  { day: 19, phase: "Expansão", title: "Convide alguém para comer", task: "Cozinhe para um amigo ou familiar e observe a reação.", why: "O sabor é o argumento mais persuasivo que existe.", minutes: 60 },
  { day: 20, phase: "Expansão", title: "Resolva os nutrientes críticos", task: "Compre B12, agende exame de homocisteína e ferritina.", why: "Nutrição bem planejada é o que sustenta a decisão no longo prazo.", minutes: 20 },
  { day: 21, phase: "Expansão", title: "Defina sua versão de vegano", task: "100% ou 90%? Escreva seu compromisso e a data de reavaliação.", why: "Metas realistas superam metas perfeitas. O objetivo é durar.", minutes: 15 },
];

/* 1.2 Glossário */
export const glossary = [
  { term: "Aquafaba", def: "Água de cozimento do grão-de-bico. Funciona como clara de ovo em doces e merengues." },
  { term: "B12", def: "Vitamina essencial de fonte bacteriana. Em dietas veganas, a suplementação é obrigatória." },
  { term: "Caseína", def: "Proteína do leite. Aparece em produtos variados, de queijos a barras de cereal." },
  { term: "Carnismo", def: "Sistema cultural que naturaliza o consumo de animais. Conceito cunhado por Melanie Joy." },
  { term: "Cochonilha / Carmim", def: "Corante vermelho obtido de insetos (E120). Comum em bebidas e doces." },
  { term: "Cruelty-free", def: "Sem testes em animais. Não significa necessariamente vegano (pode conter ingredientes animais)." },
  { term: "DHA/EPA", def: "Ômega-3 de cadeia longa. Em versão vegana, obtido de microalgas." },
  { term: "Especismo", def: "Discriminação baseada na espécie. Análogo ao racismo e ao sexismo, aplicado a animais não humanos." },
  { term: "Gelatina", def: "Proteína obtida de colágeno animal. Substituída por ágar-agar ou pectina." },
  { term: "Levedura nutricional", def: "Flocos de levedura inativa com sabor umami, rica em proteína e B12 fortificada." },
  { term: "Leguminosa", def: "Família de grãos como feijão, lentilha, grão-de-bico e ervilha. Base proteica vegana." },
  { term: "Livre de crueldade", def: "Equivalente a cruelty-free. Atenção: não é sinônimo de vegano." },
  { term: "Macrobiótica", def: "Abordagem alimentar baseada em equilíbrio yin-yang, geralmente vegetariana." },
  { term: "Manteiga de cacau", def: "Gordura vegetal do cacau. Vegana — e frequentemente confundida com manteiga de leite." },
  { term: "Ovolactovegetariano", def: "Vegetariano que consome ovos e leite. Diferente de vegano." },
  { term: "Palmoil / Óleo de palma", def: "Gordura vegetal de origem vegetal, mas associada a desmatamento. Vegano, porém controverso." },
  { term: "Plant-based", def: "Baseado em plantas. Termo alimentar, não necessariamente alinhado ao veganismo ético." },
  { term: "Seitan", def: "Proteína do trigo (glúten) cozida. Alto teor proteico e textura de carne." },
  { term: "Selo Vegano", def: "Certificação que atesta ausência de ingredientes animais e testes. No Brasil, SVB e V-Label." },
  { term: "Soja texturizada", def: "Proteína de soja desidratada. Barata, versátil e rica em proteína." },
  { term: "Tahine", def: "Pasta de gergelim. Fonte de cálcio e base do homus." },
  { term: "Tempeh", def: "Soja fermentada de origem indonésia. Alta proteína e sabor terroso." },
  { term: "Tofu", def: "Coágulo de leite de soja. Versátil, sabor neutro, absorve temperos." },
  { term: "Veganuary", def: "Desafio global de 31 dias sem produtos animais, iniciado no Reino Unido em 2014." },
  { term: "V-Label", def: "Certificação internacional vegana e vegetariana, de origem suíça." },
  { term: "Whey", def: "Proteína do soro do leite. Substituída por ervilha, arroz ou soja." },
  { term: "Umami", def: "Quinto gosto básico. Encontrado em cogumelos, shoyu, levedura e tomate seco." },
  { term: "Zerado", def: "Expressão brasileira para produtos sem ingredientes de origem animal (uso popular)." },
];

/* 1.3 Restaurantes */
export const restaurants = [
  { name: "Casa do Sabor", city: "São Paulo", type: "Restaurante vegano", rating: 4.8, range: "R$$", highlight: "Feijoada vegana aos domingos" },
  { name: "Verde Vivo", city: "São Paulo", type: "Almoço por quilo", rating: 4.6, range: "R$", highlight: "Buffet 100% vegetal com feijão e arroz diário" },
  { name: "Lótus Cozinha", city: "Rio de Janeiro", type: "À la carte", rating: 4.9, range: "R$$$", highlight: "Moqueca de banana-da-terra premiada" },
  { name: "Raiz Urbana", city: "Belo Horizonte", type: "Lanchonete vegana", rating: 4.7, range: "R$", highlight: "Hambúrguer de feijão preto com batata paleo" },
  { name: "Semente", city: "Curitiba", type: "Café e brunch", rating: 4.5, range: "R$$", highlight: "Pão de queijo vegano e açaí proteico" },
  { name: "Terra Alta", city: "Porto Alegre", type: "Bistrô", rating: 4.6, range: "R$$", highlight: "Menu degustação de 5 tempos" },
  { name: "Mandacaru", city: "Fortaleza", type: "Regional vegano", rating: 4.8, range: "R$", highlight: "Baião de dois com proteína de jaca" },
  { name: "Amazônia Roots", city: "Manaus", type: "Regional vegano", rating: 4.7, range: "R$", highlight: "Tacacá adaptado sem camarão" },
];

/* 1.4 Catálogo de compras */
export const shoppingGroups = [
  {
    title: "Proteína vegetal",
    items: ["Feijão carioca e preto", "Lentilha", "Grão-de-bico", "Proteína de soja texturizada", "Tofu firme", "Tempeh", "Ervilha seca"],
  },
  {
    title: "Gorduras boas",
    items: ["Azeite de oliva", "Pasta de amendoim integral", "Tahine", "Castanha-do-pará", "Sementes de abóbora", "Abacate"],
  },
  {
    title: "Grãos e cereais",
    items: ["Arroz integral", "Aveia em flocos", "Quinoa", "Cuscuz de milho", "Pão integral vegano"],
  },
  {
    title: "Temperos e umami",
    items: ["Levedura nutricional", "Shoyu natural", "Páprica defumada", "Cúrcuma", "Levante de alho e cebola", "Pimenta-do-reino"],
  },
  {
    title: "Laticínios vegetais",
    items: ["Bebida vegetal de aveia", "Leite de coco", "Iogurte de coco", "Creme de castanha de caju"],
  },
  {
    title: "Suplementos",
    items: ["Vitamina B12", "Vitamina D3 vegana", "Ômega-3 de algas", "Creatina monohidratada"],
  },
];

export const shoppingBeware = [
  "Caseína e soro de leite em barras de cereal e pães 'integrais'",
  "Gelatina em iogurtes, balas e marshmallows",
  "Carmim (E120) em bebidas vermelhas e doces",
  "Manteiga de leite em chocolates 'amargos'",
  "Vitamina D3 de lanolina em leites vegetais fortificados",
];

/* 1.5 Depoimentos */
export const testimonials = [
  {
    name: "Camila R.",
    role: "Professora, 34 — São Paulo",
    text: "Tentei virar vegana três vezes antes e desisti na segunda semana. O guia de 21 dias foi o primeiro que não me pediu para ser perfeita. Estou há 11 meses sem nada de origem animal.",
    result: "11 meses",
  },
  {
    name: "Diego M.",
    role: "Analista de dados, 28 — Curitiba",
    text: "Eu vim pelo lado da saúde e dos números. A calculadora de impacto me mostrou que minhas trocas equivaliam a plantar 180 árvores por ano. Foi o empurrão que faltava.",
    result: "−9 kg",
  },
  {
    name: "Família Nogueira",
    role: "Casal + 2 filhos — Belo Horizonte",
    text: "O artigo sobre família vegana salvou nossos almoços de domingo. Hoje a minha mãe faz a feijoada vegana melhor do que a original.",
    result: "4 pessoas",
  },
  {
    name: "Rafael T.",
    role: "Corredor amador, 41 — Porto Alegre",
    text: "Achei que perderia performance. Fiz os exames no dia 1 e no dia 90: ferritina subiu, colesterol caiu 40 pontos. E corri minha primeira meia maratona vegano.",
    result: "−40 LDL",
  },
];

/* 1.6 Perguntas frequentes da home */
export const homeFaq = [
  {
    question: "Preciso virar vegano de um dia para o outro?",
    answer:
      "Não — e a ciência comportamental indica que não deveria. Reduções graduais e consistentes têm adesão muito maior no longo prazo. Nosso guia de 21 dias começa com trocas pequenas e vai avançando conforme você ganha confiança.",
  },
  {
    question: "Vou ficar sem proteína?",
    answer:
      "Feijão, lentilha, grão-de-bico, soja, tofu, quinoa e sementes cobrem a necessidade com folga. Uma dieta vegana bem planejada entrega de 1,2 a 1,6 g de proteína por quilo corporal sem qualquer suplemento proteico.",
  },
  {
    question: "Vegano precisa suplementar B12?",
    answer:
      "Sim. A B12 não existe de forma confiável em fontes vegetais. A suplementação é obrigatória e barata: 25 µg por dia ou 2.500 µg por semana.",
  },
  {
    question: "É caro ser vegano no Brasil?",
    answer:
      "Comida vegana é mais barata: arroz, feijão, lentilha, aveia, sazonais e tofu caseiro custam menos por grama de proteína do que carne. Produtos industrializados veganos são caros — evite depender deles.",
  },
  {
    question: "Vegano pode ser atleta de alto rendimento?",
    answer:
      "Sim, com planejamento proteico, creatina e monitoramento de ferro. Existem atletas olímpicos e recordistas veganos em modalidades de força e resistência.",
  },
  {
    question: "Quanto tempo leva para se adaptar?",
    answer:
      "A adaptação digestiva ao aumento de fibras leva de 2 a 4 semanas. A adaptação de hábito e paladar leva cerca de 21 a 30 dias com repetição consistente.",
  },
];

export const methodology = [
  {
    title: "Prioridade em fontes primárias",
    text: "Sempre que possível, citamos FAO, OMS, AND (Academy of Nutrition and Dietetics), Water Footprint Network e artigos revisados por pares. Dados de indústria são identificados como tal.",
  },
  {
    title: "Sem imagens de choque por padrão",
    text: "Acreditamos que informação verificável converte mais que choque. Conteúdo sensível é sinalizado e nunca é o primeiro contato do visitante.",
  },
  {
    title: "Independência editorial",
    text: "Não somos financiados por marcas de alimentos. Quando recomendamos produtos, é por critério de rótulo e não por patrocínio.",
  },
  {
    title: "Revisão e atualização",
    text: "Conteúdo de saúde é revisado anualmente. A data de atualização fica visível no topo de cada artigo.",
  },
];

/* Índice
   1 CONTEÚDO ESTRUTURAL DO PORTAL
     1.1 Guia de 21 dias
     1.2 Glossário
     1.3 Restaurantes
     1.4 Catálogo de compras
     1.5 Depoimentos
     1.6 Perguntas frequentes da home
*/
