/* ------------------------------------------------------------------
   1 BANCO DE ARTIGOS (conteúdo pilar do portal)
   1.1 Tipos
   1.2 Lista de artigos
   1.3 Helpers
------------------------------------------------------------------ */

/* 1.1 Tipos */
export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "stat"; value: string; label: string; source: string }
  | { type: "callout"; title: string; text: string; tone?: "acid" | "plasma" | "volt" }
  | { type: "table"; head: string[]; rows: string[][] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: "Saúde" | "Animais" | "Planeta" | "Prático" | "Cultura" | "Ciência";
  image: string;
  date: string;
  updated?: string;
  readingMinutes: number;
  author: string;
  featured?: boolean;
  keywords: string[];
  blocks: ArticleBlock[];
  faq?: { question: string; answer: string }[];
  related: string[];
};

/* 1.2 Lista de artigos */
export const articles: Article[] = [
  {
    slug: "crueldade-animal-na-industria",
    title: "O que acontece com os animais na indústria: um guia sem sensacionalismo",
    description:
      "Fatos verificáveis sobre criação intensiva no Brasil e no mundo — o que é padrão legal, o que é prática comum e o que a ciência diz sobre a senciência animal.",
    category: "Animais",
    image: "photo-1516467508483-a7212febe31a",
    date: "2025-11-02",
    updated: "2026-01-18",
    readingMinutes: 11,
    author: "Equipe Vitalis",
    featured: true,
    keywords: ["crueldade animal", "indústria da carne", "senciência", "bem-estar animal", "pecuária intensiva"],
    blocks: [
      {
        type: "p",
        text: "Este texto não usa imagens de choque. A escolha é deliberada: pesquisas em comunicação de causa mostram que o público reage melhor a informação verificável e a histórias específicas do que a imagens extremas, que tendem a gerar bloqueio emocional e reatância. Nosso objetivo aqui é responder a uma pergunta simples e desconfortável: o que, exatamente, acontece com os animais que viram comida?",
      },
      { type: "h2", text: "1. O ponto de partida: senciência" },
      {
        type: "p",
        text: "Senciência é a capacidade de ter experiências subjetivas — sentir dor, medo, prazer. Em 2012, um grupo de neurocientistas publicou a Declaração de Cambridge sobre a Consciência, afirmando que mamíferos e aves, incluindo muitas outras criaturas, possuem os substratos neurológicos necessários para gerar consciência. Isso não é ativismo: é literatura revisada por pares.",
      },
      {
        type: "stat",
        value: "≈ 80 bilhões",
        label: "de animais terrestres abatidos por ano no mundo",
        source: "FAO, estimativas de produção 2022",
      },
      { type: "h2", text: "2. O que é legal não é o mesmo que é bom" },
      {
        type: "p",
        text: "A maior parte do sofrimento na criação intensiva é perfeitamente legal. Frangos de corte são geneticamente selecionados para crescer tão rápido que muitas aves não conseguem se manter em pé aos 40 dias de vida. Galinhas poedeiras vivem em gaiolas ou galpões superlotados. Leitões são castrados sem anestesia. Nada disso é ilegal no Brasil ou na maior parte do mundo — é o custo da eficiência produtiva.",
      },
      {
        type: "callout",
        title: "Um número que resume a escala",
        text: "O Brasil abate cerca de 5,5 bilhões de aves e 30 milhões de bovinos por ano. Dividindo pelo número de habitantes, cada brasileiro 'consome' aproximadamente 26 animais terrestres anualmente — sem contar peixes, que não entram nas estatísticas oficiais.",
        tone: "plasma",
      },
      { type: "h2", text: "3. As três categorias de sofrimento" },
      {
        type: "ul",
        items: [
          "Sofrimento de confinamento: espaço insuficiente para comportamentos naturais (andar, esticar as asas, nidificar).",
          "Sofrimento de manejo: mutilações rotineiras como corte de bico, castração, descorna, sem analgesia.",
          "Sofrimento de transporte e abate: jornadas longas sem água ou comida, insensibilização falha em parte dos abates.",
        ],
      },
      { type: "h2", text: "4. E o 'boi a pasto' resolve?" },
      {
        type: "p",
        text: "Criação extensiva melhora indicadores de bem-estar, mas não elimina o abate — e tem custo ambiental maior por quilo de proteína, porque o animal vive mais tempo, ocupa mais terra e emite mais metano. A questão não é escolher entre crueldade e conforto; é decidir se usar um ser senciente como matéria-prima é necessário. Para a maioria dos brasileiros, a resposta prática está a uma refeição de distância: feijão, arroz, lentilha e soja entregam a mesma proteína.",
      },
      {
        type: "quote",
        text: "A pergunta não é se os animais podem raciocinar, nem se conseguem falar, mas se podem sofrer.",
        cite: "Jeremy Bentham, 1789",
      },
      { type: "h2", text: "5. O que fazer com essa informação" },
      {
        type: "ol",
        items: [
          "Não converta culpa em paralisia: culpa não muda hábito, plano muda.",
          "Troque uma proteína animal por semana por uma leguminosa — o impacto agregado é enorme.",
          "Prefira reduzir de forma consistente a ser perfeito por três dias e desistir.",
          "Se quiser começar de vez, use nosso guia de 21 dias.",
        ],
      },
    ],
    faq: [
      {
        question: "Animais morrem apenas para alimentação humana?",
        answer:
          "Não. A produção de leite e ovos também envolve abate: bezerros machos e pintinhos machos não têm função produtiva e são descartados na cadeia. Por isso o veganismo inclui derivados animais.",
      },
      {
        question: "Existe abate humanitário?",
        answer:
          "O termo técnico é abate humanitário e se refere a protocolos de insensibilização antes da sangria. Reduz sofrimento no momento final, mas não elimina o confinamento, as mutilações nem o transporte.",
      },
    ],
    related: ["impacto-ambiental-da-pecuaria", "vegano-e-atleta-performance", "vegano-em-familia"],
  },
  {
    slug: "impacto-ambiental-da-pecuaria",
    title: "O impacto ambiental da pecuária em números verificáveis",
    description:
      "Emissões, água, desmatamento e uso de terra: os dados por trás da afirmação de que a proteína animal é a escolha alimentar mais cara para o planeta.",
    category: "Planeta",
    image: "photo-1441974231531-c6227db76b6e",
    date: "2025-10-28",
    updated: "2026-01-12",
    readingMinutes: 9,
    author: "Equipe Vitalis",
    featured: true,
    keywords: ["impacto ambiental da pecuária", "desmatamento", "pegada hídrica", "emissões de metano", "dieta sustentável"],
    blocks: [
      {
        type: "p",
        text: "Discussões sobre meio ambiente geralmente param em canudos de plástico. Números de uso da terra e emissões entram com outro peso. A boa notícia: a alavanca individual mais eficaz na alimentação é conhecida e mensurável.",
      },
      { type: "h2", text: "1. Emissões de gases de efeito estufa" },
      {
        type: "p",
        text: "A FAO estima que a cadeia pecuária responde por cerca de 14,5% de todas as emissões antrópicas de gases de efeito estufa. A maior parte vem do metano entérico dos ruminantes (fermentação no rúmen) e do óxido nitroso de fertilizantes e dejetos.",
      },
      {
        type: "stat",
        value: "14,5%",
        label: "das emissões globais vêm da pecuária",
        source: "FAO — Tackling Climate Change Through Livestock",
      },
      { type: "h2", text: "2. Água: o número que muda a conversa" },
      {
        type: "p",
        text: "Mekonnen e Hoekstra (Water Footprint Network) calcularam a pegada hídrica dos alimentos. A carne bovina demanda cerca de 15.400 litros de água por quilo — com boa parte associada à irrigação de forragem e à chuva sobre pastagem. A proteína vegetal sai de 10 a 50 vezes mais barata em água.",
      },
      {
        type: "table",
        head: ["Alimento", "Água (L/kg)", "Emissões (kg CO₂e/kg)"],
        rows: [
          ["Carne bovina", "~15.400", "~60"],
          ["Carne de frango", "~4.300", "~6"],
          ["Arroz", "~2.500", "~4"],
          ["Feijão", "~5.000 (100% chuva)", "~2"],
          ["Tofu / soja", "~2.500", "~3"],
          ["Legumes", "~300", "~0,5"],
        ],
      },
      {
        type: "callout",
        title: "Atenção ao detalhe do feijão",
        text: "O feijão tem pegada hídrica alta em litros, mas majoritariamente de água da chuva (verde), que não compete com consumo urbano. Comparações honestas distinguem água verde, azul e cinza.",
        tone: "volt",
      },
      { type: "h2", text: "3. Desmatamento e uso da terra" },
      {
        type: "p",
        text: "No Brasil, a pecuária é historicamente o principal vetor de conversão de floresta. Mesmo quando a expansão agrícola é o motor econômico, a pastagem ocupa a maior área de terra convertida. São cerca de 160 milhões de hectares de pastagens no país — área maior que a soma de vários países europeus.",
      },
      { type: "h2", text: "4. A escala da troca" },
      {
        type: "p",
        text: "Um estudo da Universidade de Oxford (Poore & Nemecek, 2018, Science) mostrou que eliminar carne e laticínios da dieta reduz a pegada de gases de efeito estufa individual em até 73%, além de diminuir em 75% o uso de terra e 54% o consumo de água. É a maior alavanca alimentar disponível.",
      },
      { type: "h2", text: "5. Prático: como reduzir amanhã" },
      {
        type: "ol",
        items: [
          "Troque 3 refeições com carne por semana: já reduz sua pegada em cerca de 20%.",
          "Prefira feijões, lentilhas e grão-de-bico a produtos ultraprocessados 'plant-based' importados.",
          "Compre em feira local e a granel: menos embalagem, menos transporte.",
          "Use a nossa calculadora de impacto para ver sua projeção anual.",
        ],
      },
    ],
    faq: [
      {
        question: "Comer soja não desmata a Amazônia?",
        answer:
          "Cerca de 95% da soja brasileira é usada como ração animal, não como alimento humano. O consumo de soja por um vegano é menor e mais eficiente do que o consumo indireto pela cadeia de carne.",
      },
    ],
    related: ["crueldade-animal-na-industria", "vegano-e-atleta-performance", "alimentacao-vegetariana-para-criancas"],
  },
  {
    slug: "vegano-e-atleta-performance",
    title: "Vegano e atleta: o que a ciência diz sobre performance",
    description:
      "Proteína, recuperação, creatina e ferro em atletas plant-based. Protocolo prático com gramaturas por quilo corporal.",
    category: "Saúde",
    image: "photo-1517649763962-0c623066013b",
    date: "2025-11-14",
    updated: "2026-02-02",
    readingMinutes: 12,
    author: "Equipe Vitalis",
    featured: true,
    keywords: ["vegano atleta", "proteína vegetal", "creatina vegana", "performance vegana", "musculação vegana"],
    blocks: [
      {
        type: "p",
        text: "A dúvida mais comum de quem treina é direta: dá para ganhar músculo sem proteína animal? A resposta curta é sim. A resposta longa envolve planejamento — e é isso que este artigo entrega.",
      },
      { type: "h2", text: "1. Quanto de proteína você realmente precisa" },
      {
        type: "p",
        text: "Diretrizes de nutrição esportiva recomendam de 1,2 a 1,6 g de proteína por quilo corporal para quem treina de forma recreativa e até 2,0 g/kg em fases de déficit calórico. O ponto importante: a quantidade total importa mais do que a origem.",
      },
      {
        type: "table",
        head: ["Alimento (100 g)", "Proteína", "Observação"],
        rows: [
          ["Tofu firme", "8-16 g", "Depende da prensagem"],
          ["Lentilha cozida", "9 g", "Alto teor de fibra"],
          ["Grão-de-bico cozido", "8,9 g", "Lisina abundante"],
          ["Proteína de ervilha", "80 g", "Isolado; suplemento"],
          ["Quinoa cozida", "4,4 g", "Aminoácidos completos"],
          ["Pasta de amendoim", "25 g", "Calórico, rico em gordura boa"],
          ["Levedura nutricional", "50 g", "Sabor umami + B12 fortificada"],
        ],
      },
      { type: "h2", text: "2. Combinar ou não combinar aminoácidos?" },
      {
        type: "p",
        text: "A ideia de que é preciso combinar arroz e feijão na mesma garfada é um mito. O corpo mantém um pool de aminoácidos e a complementação pode acontecer ao longo do dia. Dito isso, feijão com arroz continua uma excelente ideia — por sabor, custo e praticidade.",
      },
      {
        type: "callout",
        title: "Regra prática",
        text: "Em cada refeição principal, inclua uma fonte concentrada de proteína vegetal do tamanho de uma concha (leguminosa) ou o equivalente. Pronto: você já bate 20 g por refeição.",
        tone: "acid",
      },
      { type: "h2", text: "3. Creatina: o ponto que merece atenção" },
      {
        type: "p",
        text: "A creatina é encontrada principalmente em tecido muscular animal. Vegetarianos tendem a ter estoques intramusculares mais baixos e respondem melhor à suplementação. É o suplemento com maior evidência para força e potência — 3 a 5 g por dia de creatina monohidratada, versão sintética (vegana).",
      },
      { type: "h2", text: "4. Ferro, B12 e ômega-3" },
      {
        type: "ul",
        items: [
          "Ferro: consuma leguminosas com fonte de vitamina C (laranja, acerola, tomate) para multiplicar a absorção.",
          "B12: obrigatória a suplementação. Não existe fonte vegetal confiável. 25 µg/dia ou 2.500 µg/semana.",
          "Ômega-3: linhaça, chia e nozes. Para quem quer EPA/DHA, suplemento de algas.",
          "Vitamina D: sol e, se necessário, suplementação — vale para veganos e onívoros.",
        ],
      },
      { type: "h2", text: "5. Protocolo de 7 dias para atleta iniciante" },
      {
        type: "ol",
        items: [
          "Calcule sua meta proteica: peso × 1,4 g.",
          "Distribua em 3 a 4 refeições com 25 g cada.",
          "Adicione creatina 3 g/dia em qualquer horário.",
          "Faça exame basal: hemograma, ferritina, B12, homocisteína, vitamina D.",
          "Repita os exames em 90 dias.",
        ],
      },
    ],
    faq: [
      {
        question: "Veganos precisam de mais proteína que onívoros?",
        answer:
          "A digestibilidade de algumas fontes vegetais é menor. Na prática, recomenda-se uma margem de 10% a 15% acima da meta calculada para compensar, sobretudo em dietas com muitas leguminosas inteiras e poucos isolados.",
      },
      {
        question: "Creatina é sempre vegana?",
        answer:
          "A creatina monohidratada comercial é sintetizada industrialmente, não extraída de animais. Ela é, portanto, vegana — mesmo quando o rótulo não diz isso.",
      },
    ],
    related: ["guia-nutricao-vegana-completo", "crueldade-animal-na-industria", "mitos-sobre-veganismo"],
  },
  {
    slug: "guia-nutricao-vegana-completo",
    title: "Nutrição vegana: o guia completo dos 7 nutrientes críticos",
    description:
      "Proteína, ferro, B12, cálcio, ômega-3, iodo e zinco: quanto consumir, onde encontrar em versão vegetal e como monitorar com exames.",
    category: "Ciência",
    image: "photo-1512621776951-a57141f2eefd",
    date: "2025-09-18",
    updated: "2026-01-30",
    readingMinutes: 14,
    author: "Equipe Vitalis",
    keywords: ["nutrição vegana", "vitamina B12 vegano", "ferro vegetal", "cálcio vegano", "ômega 3 vegano"],
    blocks: [
      {
        type: "p",
        text: "Dieta vegana bem planejada é nutricionalmente adequada em todas as fases da vida — essa é a posição da Academia de Nutrição e Dietética dos EUA, da Associação Dietética Britânica e da Sociedade Vegetariana Brasileira. A palavra-chave é 'bem planejada'. Este guia é o planejamento.",
      },
      { type: "h2", text: "1. Proteína" },
      {
        type: "p",
        text: "Meta: 1,0 a 1,6 g/kg, conforme atividade física. Fontes: leguminosas (feijão, lentilha, grão-de-bico, ervilha), soja e derivados (tofu, tempeh, edamame), quinoa, aveia, sementes e oleaginosas.",
      },
      { type: "h2", text: "2. Ferro" },
      {
        type: "p",
        text: "O ferro vegetal (não-heme) tem menor biodisponibilidade. Estratégia: consumir com vitamina C e evitar café/chá nas refeições principais. Fontes: feijão, lentilha, tofu, sementes de abóbora, folhas escuras, tahine.",
      },
      { type: "h2", text: "3. Vitamina B12" },
      {
        type: "callout",
        title: "Não negociável",
        text: "Suplementação de B12 é obrigatória em dietas veganas. Deficiência causa anemia megaloblástica e dano neurológico irreversível. Dose usual: 25 µg/dia ou 2.500 µg/semana. Alimentos fortificados ajudam, mas não bastam sozinhos.",
        tone: "plasma",
      },
      { type: "h2", text: "4. Cálcio" },
      {
        type: "p",
        text: "Meta: 700 a 1.000 mg/dia. Fontes: tofu com sulfato de cálcio, bebidas vegetais fortificadas, tahine, brócolis, couve, amêndoas, gergelim.",
      },
      { type: "h2", text: "5. Ômega-3 (EPA/DHA)" },
      {
        type: "p",
        text: "Linhaça, chia e nozes fornecem ALA, que o corpo converte de forma limitada em EPA/DHA. Para saúde cardiovascular e cognitiva, a suplementação de EPA/DHA de algas é a rota mais confiável — 250 a 500 mg/dia.",
      },
      { type: "h2", text: "6. Iodo e 7. Zinco" },
      {
        type: "p",
        text: "Iodo: sal iodado resolve na maioria dos casos. Zinco: leguminosas, sementes e cereais integrais; o fitato reduz absorção, mas o remolho e a fermentação ajudam.",
      },
      {
        type: "table",
        head: ["Nutriente", "Meta diária", "Melhores fontes vegetais"],
        rows: [
          ["Proteína", "1,0-1,6 g/kg", "Leguminosas, soja, quinoa, aveia"],
          ["Ferro", "14-32 mg", "Feijão, lentilha, tahine, sementes"],
          ["B12", "25 µg (ou 2.500 µg/sem)", "Suplemento (obrigatório)"],
          ["Cálcio", "700-1.000 mg", "Tofu com cálcio, bebidas fortificadas, tahine"],
          ["Ômega-3", "250-500 mg EPA/DHA", "Algas, linhaça, chia, nozes"],
          ["Iodo", "150 µg", "Sal iodado, algas"],
          ["Zinco", "8-11 mg", "Leguminosas, sementes de abóbora"],
        ],
      },
      { type: "h2", text: "Exames recomendados" },
      {
        type: "ul",
        items: [
          "Hemograma completo e ferritina",
          "B12 sérica e homocisteína (mais sensível que a B12 isolada)",
          "Vitamina D (25-OH)",
          "Perfil lipídico completo",
          "TSH (para monitorar iodo e função tireoidiana)",
        ],
      },
    ],
    faq: [
      {
        question: "Preciso suplementar todos os nutrientes?",
        answer:
          "Apenas a B12 é universalmente necessária. Vitamina D depende de exposição solar; ômega-3 pode vir de algas; os demais podem ser obtidos pela dieta com planejamento. Exames guiam a decisão.",
      },
    ],
    related: ["vegano-e-atleta-performance", "mitos-sobre-veganismo", "alimentacao-vegetariana-para-criancas"],
  },
  {
    slug: "mitos-sobre-veganismo",
    title: "12 mitos sobre veganismo respondidos com evidência",
    description:
      "Proteína, custo, sabor, ossos, anemia, soja e hormônios: as objeções mais comuns e o que a literatura científica realmente mostra.",
    category: "Prático",
    image: "photo-1498837167922-ddd27525d352",
    date: "2025-12-01",
    updated: "2026-02-10",
    readingMinutes: 10,
    author: "Equipe Vitalis",
    featured: true,
    keywords: ["mitos veganismo", "vegano faz mal", "proteína vegana", "soja faz mal"],
    blocks: [
      {
        type: "p",
        text: "As objeções ao veganismo costumam ser razoáveis — vêm de informação incompleta, não de má-fé. Aqui estão as 12 mais frequentes, com resposta direta e fonte.",
      },
      {
        type: "ul",
        items: [
          "Mito 1: 'Você não vai ter proteína suficiente.' — Leguminosas, soja, quinoa e sementes cobrem a meta com folga. Meta de 1,2 a 1,6 g/kg é atingível sem suplemento.",
          "Mito 2: 'É caro.' — Feijão, lentilha, arroz, aveia e sazonais custam menos por grama de proteína que carne. Produtos industrializados veganos são caros; comida vegana não.",
          "Mito 3: 'Comida vegana não tem gosto.' — Especiarias, levedura nutricional, shoyu, dendê e defumados constroem umami sem origem animal.",
          "Mito 4: 'Veganos ficam anêmicos.' — Risco existe se não houver planejamento, mas é gerenciável com vitamina C associada e monitoramento de ferritina.",
          "Mito 5: 'Soja aumenta estrogênio e faz mal aos homens.' — Revisões de meta-análise não mostram efeito sobre testosterona em níveis fisiológicos.",
          "Mito 6: 'Precisa de leite para os ossos.' — Cálcio de vegetais, tofu com cálcio e bebidas fortificadas cumprem a meta.",
          "Mito 7: 'Crianças não podem ser veganas.' — Podem, com acompanhamento nutricional. Academia de Nutrição e Dietética apoia dietas veganas em todas as fases.",
          "Mito 8: 'Veganos vivem doentes.' — Coortes mostram menor IMC e menor risco cardiovascular e de diabetes tipo 2.",
          "Mito 9: 'É uma moda passageira.' — A palavra vegana existe em documentos ingleses desde 1847. O crescimento é recente; a filosofia não.",
          "Mito 10: 'Só resolve se todo mundo virar vegano.' — Redução agregada tem impacto proporcional e imediato; não é tudo-ou-nada.",
          "Mito 11: 'Vegano é radical e fanático.' — Radical é a escala do sistema atual. Ser vegano é, na prática, uma escolha cotidiana de consumo.",
          "Mito 12: 'Eu não conseguiria.' — Conseguir é consequência de plano, não de força de vontade. Comece com 7 dias.",
        ],
      },
      {
        type: "callout",
        title: "O mito mais custoso de todos",
        text: "'Preciso ser perfeito.' Não precisa. Reduzir 70% do consumo animal tem a maior parte do benefício e é muito mais sustentável como hábito do que uma virada radical seguida de recaída.",
        tone: "acid",
      },
    ],
    faq: [
      {
        question: "Vegano pode comer mel?",
        answer:
          "Tecnicamente não: o mel é produzido por abelhas e explorado comercialmente. Muitos veganos evitam; o impacto individual é tema de debate dentro da comunidade.",
      },
      {
        question: "Vegano come cogumelo?",
        answer: "Sim. Cogumelos são fungos, não animais, e são parte central da culinária vegana pelo sabor umami.",
      },
    ],
    related: ["guia-nutricao-vegana-completo", "vegano-em-familia", "crueldade-animal-na-industria"],
  },
  {
    slug: "vegano-em-familia",
    title: "Como ser vegano em uma família que não é",
    description:
      "Estratégias de negociação à mesa: adaptação de receitas, redução de atrito e como não transformar o jantar em debate ideológico.",
    category: "Cultura",
    image: "photo-1556909212-d5b604d0c90d",
    date: "2025-12-15",
    readingMinutes: 8,
    author: "Equipe Vitalis",
    keywords: ["vegano em família", "conversar sobre veganismo", "família vegana", "adaptar receitas"],
    blocks: [
      {
        type: "p",
        text: "Mudar a própria alimentação é simples; conviver com quem não mudou é o verdadeiro teste. A boa notícia é que a psicologia da persuasão tem respostas pouco intuitivas — e elas funcionam melhor que qualquer discurso.",
      },
      { type: "h2", text: "1. Comece pelo sabor, nunca pelo argumento" },
      {
        type: "p",
        text: "Ninguém se convence de uma ideia durante uma refeição. Leve um prato vegano gostoso para o almoço de domingo, sem anunciar que é vegano. Deixe que perguntem. A conversão em família acontece por repetição positiva, não por debate.",
      },
      { type: "h2", text: "2. A regra do prato compartilhado" },
      {
        type: "ul",
        items: [
          "Adapte um prato que a família já ama em vez de introduzir um novo.",
          "Mantenha a porção animal disponível para quem quiser — pressão gera resistência.",
          "Assuma a tarefa de cozinhar ao menos uma vez por semana.",
          "Elogie o que já funciona: 'esse arroz com feijão é vegano e ninguém reclamou'.",
        ],
      },
      { type: "h2", text: "3. As perguntas que você vai ouvir" },
      {
        type: "p",
        text: "Prepare respostas curtas para as cinco perguntas clássicas: proteína, anemia, custo, sabor e 'por que você não come o que eu fiz?'. Respostas curtas encerram conversas; sermões as prolongam.",
      },
      {
        type: "callout",
        title: "Regra de ouro das festas",
        text: "Nunca chegue com fome a uma festa. Coma antes, leve um prato para compartilhar e evite fazer do evento uma aula. A pessoa que come bem e não incomoda ninguém é a melhor propaganda possível.",
        tone: "volt",
      },
      { type: "h2", text: "4. Crianças na família" },
      {
        type: "p",
        text: "Se há crianças, envolva-as no preparo. Crianças que cozinham experimentam mais. E evite transformar a alimentação em território de disputa entre adultos — a criança percebe e usa.",
      },
    ],
    faq: [
      {
        question: "Devo forçar meus filhos a serem veganos?",
        answer:
          "A recomendação é envolver, explicar e oferecer opções. Dietas veganas são adequadas na infância com acompanhamento, mas imposição rígida tende a gerar rejeição na adolescência.",
      },
    ],
    related: ["mitos-sobre-veganismo", "alimentacao-vegetariana-para-criancas", "crueldade-animal-na-industria"],
  },
  {
    slug: "alimentacao-vegetariana-para-criancas",
    title: "Alimentação vegana para crianças: o que a ciência e os pediatras dizem",
    description:
      "Crescimento, energia, B12, ferro e acompanhamento profissional. Guia responsável para famílias veganas com crianças.",
    category: "Saúde",
    image: "photo-1490818387583-1baba5e638af",
    date: "2026-01-08",
    readingMinutes: 9,
    author: "Equipe Vitalis",
    keywords: ["criança vegana", "vegetariano infantil", "pediatria vegana", "B12 criança"],
    blocks: [
      {
        type: "p",
        text: "A Academia de Nutrição e Dietética (AND) e a Sociedade Brasileira de Pediatria reconhecem que dietas vegetarianas bem planejadas são adequadas em todas as fases da vida, incluindo infância e adolescência. 'Bem planejadas' significa acompanhamento e atenção a nutrientes críticos.",
      },
      { type: "h2", text: "1. Energia é prioridade" },
      {
        type: "p",
        text: "Crianças veganas precisam de refeições frequentes e densas em energia. Volume grande de comida pouco calórica (saladas, caldos) não sustenta crescimento. Use pasta de amendoim, tahine, abacate, azeite e oleaginosas moídas.",
      },
      { type: "h2", text: "2. Nutrientes que exigem atenção" },
      {
        type: "ul",
        items: [
          "B12: suplementação obrigatória desde o início, com dose pediátrica.",
          "Ferro: oferecer leguminosas diariamente com fonte de vitamina C.",
          "Zinco e cálcio: sementes, tahine, bebidas vegetais fortificadas.",
          "Ômega-3: óleo de linhaça em pequenas quantidades ou suplemento de algas.",
          "Vitamina D: exposição solar e suplementação conforme exame.",
        ],
      },
      { type: "h2", text: "3. Acompanhamento" },
      {
        type: "p",
        text: "Consulta com nutricionista especializado não é opcional em dietas veganas infantis. Curvas de crescimento, hemograma e B12 devem ser monitorados ao menos anualmente.",
      },
      {
        type: "callout",
        title: "Sinal de alerta",
        text: "Perda de peso, queda na curva de crescimento, palidez, apatia ou atraso de desenvolvimento exigem avaliação imediata. Nenhuma ideologia vale mais que a saúde de uma criança.",
        tone: "plasma",
      },
    ],
    faq: [
      {
        question: "Criança vegana precisa de suplemento?",
        answer:
          "Sim. B12 é obrigatória. Vitamina D e eventualmente ferro, zinco e ômega-3 podem ser necessários conforme exames e dieta.",
      },
    ],
    related: ["guia-nutricao-vegana-completo", "vegano-em-familia", "mitos-sobre-veganismo"],
  },
  {
    slug: "como-ler-rotulos-veganos",
    title: "Como ler rótulos: 27 ingredientes de origem animal escondidos",
    description:
      "Caseína, gelatina, carmim, lanolina, shellac e outros nomes que parecem veganos — mas não são. Guia de bolso para o supermercado.",
    category: "Prático",
    image: "photo-1542838132-92c53300491e",
    date: "2025-11-25",
    readingMinutes: 7,
    author: "Equipe Vitalis",
    keywords: ["rótulo vegano", "ingredientes de origem animal", "carmim", "caseína", "selo vegano"],
    blocks: [
      {
        type: "p",
        text: "O selo vegano nem sempre existe — e a lista de ingredientes é a única fonte confiável. Aqui vão os nomes técnicos que enganam até quem já lê rótulos há anos.",
      },
      { type: "h2", text: "1. Os 27 suspeitos de sempre" },
      {
        type: "table",
        head: ["Ingrediente no rótulo", "Origem", "Onde aparece"],
        rows: [
          ["Caseína / caseinato", "Leite", "Queijos, barras, suplementos"],
          ["Soro de leite / whey", "Leite", "Pães, biscoitos, suplementos"],
          ["Gelatina", "Colágeno animal", "Balas, marshmallows, iogurtes"],
          ["Carmim / cochonilha (E120)", "Inseto", "Bebidas vermelhas, doces"],
          ["Shellac (E904)", "Resina de inseto", "Confeitos, frutas enceradas"],
          ["Lanolina (E913)", "Sebo de ovelha", "Pães, gomas"],
          ["Mono e diglicerídeos", "Gordura animal/vegetal", "Margarinas, pães"],
          ["Lecitina E471", "Pode ser animal", "Chocolates, panificados"],
          ["Albumina", "Clara de ovo", "Vinhos, doces"],
          ["Colágeno", "Pele/ossos", "Suplementos, cápsulas"],
          ["Estearato de magnésio", "Pode ser animal", "Cápsulas de suplemento"],
          ["Glicerina", "Animal ou vegetal", "Cosméticos, doces"],
          ["Taurina", "Sintética ou animal", "Energéticos"],
          ["Carmim de ácido carmínico", "Inseto", "Cosméticos"],
          ["Quitosana", "Casca de crustáceo", "Suplementos"],
          ["Ácido esteárico", "Gordura animal", "Chocolates, velas"],
          ["Vitamina D3", "Lanolina (geralmente)", "Leites fortificados"],
          ["Enzimas (renina/quimosina)", "Estômago de bezerro", "Queijos"],
          ["Fosfato dissódico", "Ossos", "Cereais"],
          ["Pepsina", "Estômago animal", "Suplementos"],
          ["Bissulfito de sódio", "Pode ter origem animal", "Vinhos"],
          ["Clarificante (colágeno)", "Animal", "Cervejas, vinhos"],
          ["Xarope de glicose com gelatina", "Animal", "Doces"],
          ["Iogurte em pó", "Leite", "Snacks"],
          ["Manteiga de leite", "Leite", "Chocolates"],
          ["Cera de abelha (E901)", "Abelha", "Confeitos"],
          ["Própolis e geleia real", "Abelha", "Suplementos"],
        ],
      },
      { type: "h2", text: "2. Estratégia de compra em 4 passos" },
      {
        type: "ol",
        items: [
          "Procure o selo vegano (SVB, V-Label) — resolve 80% dos casos.",
          "Sem selo, leia a lista completa: os primeiros 5 ingredientes concentram 90% do risco.",
          "Desconfie de 'pode conter leite': é alerta de contaminação cruzada, não ingrediente.",
          "Fotografe rótulos ambíguos e consulte o app ou o site da marca depois.",
        ],
      },
      {
        type: "callout",
        title: "Cuidado com o 'vegetariano'",
        text: "O selo 'vegetariano' permite leite e ovos. Não é vegano. Em suplementos, procure sempre 'sem ingredientes de origem animal' ou certificação V-Label Vegan.",
        tone: "volt",
      },
    ],
    related: ["mitos-sobre-veganismo", "guia-nutricao-vegana-completo", "vegano-em-familia"],
  },
];

/* 1.3 Helpers */
export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export const featuredArticles = articles.filter((article) => article.featured);

export const articleCategories = Array.from(new Set(articles.map((a) => a.category)));

/* Índice
   1 BANCO DE ARTIGOS (conteúdo pilar do portal)
     1.1 Tipos
     1.2 Lista de artigos
     1.3 Helpers
*/
