export type CategoriaSlug = "mega-hair" | "protese-capilar" | "quimica" | "cachos";

export type Servico = {
  slug: string;
  categoria: CategoriaSlug;
  nome: string;
  h1: string;
  descricaoCurta: string;
  descricaoLonga: string[];
  precoDe: number;
  precoTexto: string;
  duracao: string;
  manutencao?: string;
  indicadoPara: string[];
  cuidados: string[];
  faq: { q: string; a: string }[];
  destaque?: boolean;
};

export const categorias = [
  {
    slug: "mega-hair",
    nome: "Mega Hair",
    h1: "Mega hair e extensões sofisticadas para volume e movimento",
    descricao:
      "Soluções de mega hair com acabamento discreto, leveza e naturalidade para quem busca transformação com conforto e elegância.",
    icone: "✦",
  },
  {
    slug: "protese-capilar",
    nome: "Prótese Capilar",
    h1: "Prótese capilar com acabamento natural e técnica premium",
    descricao:
      "Modelagem de prótese capilar para quem deseja volume, cobertura e realce com aparência personalizada e disciplina no dia a dia.",
    icone: "✧",
  },
  {
    slug: "quimica",
    nome: "Química",
    h1: "Tratamentos químicos com saúde capilar e resultado duradouro",
    descricao:
      "Tratamentos de química para suavizar, alisar, colorir e revitalizar os fios com proteção e cuidado real ao couro cabeludo.",
    icone: "❋",
  },
  {
    slug: "cachos",
    nome: "Cachos",
    h1: "Cachos e curvaturas com definição e equilíbrio para o cabelo natural",
    descricao:
      "Atendimento especial para cabelos cacheados e ondulados com definição, hidratação e rotina adaptada ao formato do fio.",
    icone: "◌",
  },
] as const;

export const servicos: Servico[] = [
  {
    slug: "microcapsulas-queratina",
    categoria: "mega-hair",
    nome: "Microcápsulas de Queratina",
    h1: "Microcápsulas de queratina para volume, leveza e acabamento natural",
    descricaoCurta:
      "Aplicação de microcápsulas de queratina para intensificar o volume e dar acabamento sofisticado, com leveza e movimento natural para o cabelo.",
    descricaoLonga: [
      "A mega hair com microcápsulas de queratina é a opção ideal para quem busca volume instantâneo sem perder a naturalidade do visual. A técnica foi pensada para criar uma aparência mais densa e elegante, respeitando a estrutura do fio e permitindo um acabamento muito refinado.",
      "Durante a aplicação, cada mecha é posicionada com precisão para que o cabelo fique com dimensionalidade, definição e movimento. O resultado é mais encorpado e sofisticado, além de garantir uma fixação segura e conforto no uso diário.",
      "A proposta é entregar uma aparência premium, com visual alinhado ao seu estilo pessoal e manutenção planejada para preservar o brilho, a textura e o aspecto saudável dos fios ao longo do tempo.",
      "Com a orientação certa, essa solução combina estética, praticidade e sensação de cabelo bem cuidado, ideal para quem quer valorizar a imagem sem abrir mão da leveza."],
    precoDe: 350,
    precoTexto: "A partir de R$ 350",
    duracao: "2h",
    manutencao: "90 dias",
    indicadoPara: ["Quem quer aumentar o volume", "Fios finos ou sem volume natural", "Pessoas que querem um visual elegante e duradouro"],
    cuidados: ["Usar shampoo sem sulfato", "Evitar fricção excessiva com o cabelo molhado", "Fazer manutenção conforme cronograma"],
    faq: [
      { q: "Dura quanto tempo a aplicação de microcápsulas de queratina?", a: "Em média, a manutenção é recomendada a cada 90 dias, mas isso varia conforme o crescimento do fio e a aderência do material." },
      { q: "A mega hair dá sensação de cabelo pesado?", a: "Não quando a técnica é bem executada. A aplicação é pensada para manter leveza, movimento e naturalidade." },
      { q: "Posso lavar normalmente?", a: "Sim. O cabelo pode ser lavado normalmente, mas a escolha de produtos adequados e a rotina correta ajudam a manter o resultado por mais tempo." },
      { q: "É indicado para todos os tipos de fio?", a: "A avaliação da profissional é essencial para definir a best fit entre volume, aderência e estrutura do cabelo." }
    ],
    destaque: true,
  },
  {
    slug: "nano-link",
    categoria: "mega-hair",
    nome: "Nano Link",
    h1: "Nano link para acabamento discreto e volume com sensação natural",
    descricaoCurta:
      "Uma das técnicas mais discretas do mercado, com fechamento minimalista e aparência muito natural para criar volume e comprimento com sofisticação.",
    descricaoLonga: [
      "O nano link foi pensado para quem quer um resultado elegante, com fixação delicada e acabamento minimalista. Ele se destaca pela leveza e pela forma como a extensão se integra ao cabelo, reduzindo o impacto visual da colagem.",
      "A técnica é ideal para quem busca uma transformação mais sutil, mantendo a sensação de cabelo real e natural. A colocação é feita com atenção máxima à distribuição da extensão e ao equilíbrio do peso no couro cabeludo.",
      "Além do aspecto estético, a aplicação precisa ser feita com cuidado para garantir conforto, brilho e segurança durante o uso. O resultado é sofisticado, funcional e muito bem adaptado ao estilo da cliente.",
      "A manutenção correta preserva a aparência natural e ajuda a prolongar a durabilidade da extensão sem prejudicar a estrutura dos fios."],
    precoDe: 420,
    precoTexto: "A partir de R$ 420",
    duracao: "2h 30m",
    manutencao: "90 dias",
    indicadoPara: ["Quem quer volume sem exagero", "Pessoas com cabelo fino ou pouco volume", "Quem busca naturalidade no visual"],
    cuidados: ["Dormir com cabelo preso ou em coque leve", "Evitar calor excessivo", "Escolher produtos sem álcool"],
    faq: [
      { q: "Qual a diferença entre nano link e outras técnicas?", a: "A principal diferença está no fechamento mais discreto e no acabamento mais natural, com visual bem integrado ao cabelo." },
      { q: "Como fica a sensação de peso?", a: "Quando a técnica é aplicada com bom planejamento, ela oferece leveza e conforto sem sensação de excesso." },
      { q: "A manutenção é simples?", a: "Sim, a manutenção é feita em intervalos regulares e ajuda a preservar a saúde do fio e o acabamento natural." },
      { q: "Posso ter um visual mais volumoso sem perder naturalidade?", a: "Sim, essa técnica é especialmente indicada para quem quer um efeito discreto e elegante." }
    ],
  },
  {
    slug: "entrelace",
    categoria: "mega-hair",
    nome: "Entrelace",
    h1: "Entrelace com acabamento natural e longa duração",
    descricaoCurta:
      "Técnica de entrelace para criar volume, comprimento e movimento com acabamento sofisticado e manutenção planejada para preservar o efeito.",
    descricaoLonga: [
      "O entrelace é uma solução pensada para quem deseja um visual mais volumoso e cheio, com estrutura que favorece o movimento e a definição da linha capilar. O efeito é marcante, mas ainda muito elegante e adaptado ao estilo de cada cliente.",
      "Nessa técnica, a extensão é inserida com cuidado para que o resultado tenha equilíbrio, textura e naturalidade. O objetivo é ampliar o visual sem deixar o penteado artificial ou pesado.",
      "A manutenção é essencial para garantir que a aparência siga impecável com brilho, leveza e bom encaixe na raiz. Com orientação adequada, a técnica se mantém sofisticada e funcional por mais tempo.",
      "É uma boa alternativa para quem quer variar a imagem sem perder a sensação de cabelo bem cuidado e com acabamento profissional."],
    precoDe: 200,
    precoTexto: "A partir de R$ 200",
    duracao: "2h 45m",
    manutencao: "90 dias",
    indicadoPara: ["Quem quer mais volume e comprimento", "Fios que precisam de leveza visual", "Pessoas que valorizam acabamento sofisticado"],
    cuidados: ["Penteado com pente de dentes largos", "Hidratação semanal leve", "Evitar tração excessiva ao pentear"],
    faq: [
      { q: "Qual é a durabilidade do entrelace?", a: "A técnica ser bem cuidada costuma manter uma boa estética por meses, com manutenção periódica para preservar a estrutura." },
      { q: "É possível fazer um visual mais volumoso sem parecer artificial?", a: "Sim. O entrelace bem aplicado cria volume sem perder a naturalidade da linha do cabelo." },
      { q: "Preciso de cuidados especiais na hora de dormir?", a: "Sim, vale proteger o cabelo com uma touca ou coque leve para reduzir atritos durante a noite." },
      { q: "Posso mexer no cabelo todos os dias?", a: "Sim, desde que os penteados sejam feitos com cuidado e sem excesso de tração." }
    ],
  },
  {
    slug: "tela-costura",
    categoria: "mega-hair",
    nome: "Tela/Costura",
    h1: "Tela ou costura para uma extensão com acabamento refinado",
    descricaoCurta:
      "Essa técnica oferece um visual elegante, com fixação cuidadosa e baixo impacto visual, ideal para quem quer volume e comprimento com naturalidade.",
    descricaoLonga: [
      "A tela ou costura é uma opção muito valorizada por quem busca um acabamento mais refinado, seguro e diferente dos métodos tradicionais. Ela combina precisão, delicadeza e um resultado que favorece a naturalidade do penteado.",
      "O processo exige técnicas apuradas para distribuí-la com equilíbrio e conforto, respeitando a estrutura da cabeça e as necessidades do cliente. O visual final é mais completo, com maior sensação de movimento e leveza.",
      "É uma excelente escolha para quem quer transformar o visual sem perder a elegância do cabelo natural. A manutenção correta ajuda a preservar essas características ao longo do tempo.",
      "Com uma avaliação profissional, é possível criar um resultado harmonioso e bem alinhado ao formato do rosto e à rotina da cliente."],
    precoDe: 260,
    precoTexto: "A partir de R$ 260",
    duracao: "3h",
    manutencao: "90 dias",
    indicadoPara: ["Quem quer aparência mais sofisticada", "Pessoas com cabelo feio ou ressecado", "Quem busca acabamento premium"],
    cuidados: ["Penteados sem tensão", "Hidratação sem excesso de agressão", "Manutenção profissional regular"],
    faq: [
      { q: "A tela/costura dura muito?", a: "A durabilidade é boa quando o procedimento é bem executado e a manutenção acontece no intervalo ideal." },
      { q: "Ela é indicada para cabelos mais finos?", a: "Depende do tipo de fio e da avaliação profissional, mas em muitos casos funciona muito bem para dar mais volume." },
      { q: "O acabamento fica discreto?", a: "Sim, essa técnica costuma ter um acabamento bem integrado ao cabelo natural." },
      { q: "Posso mudar o visual com frequência?", a: "A boa manutenção permite que o visual continue bonito e em bom estado mesmo com o uso diário." }
    ],
  },
  {
    slug: "fita-adesiva",
    categoria: "mega-hair",
    nome: "Fita Adesiva",
    h1: "Fita adesiva para volume instantâneo e efeito elegante",
    descricaoCurta:
      "Uma solução prática para quem quer aumentar o volume e o comprimento com rapidez, sem perder a forma e o brilho do cabelo.",
    descricaoLonga: [
      "A fita adesiva é uma opção feminina, elegante e extremamente funcional para quem deseja um resultado rápido e com muito impacto visual. Ela ajuda a ampliar o volume do cabelo e dá mais comprimento de forma prática.",
      "A aplicação exige técnica e atenção para garantir que a base fique segura, sem prejudicar a estrutura ou o couro cabeludo. É uma opção que funciona muito bem em situações em que a naturalidade e a rapidez se unem.",
      "Mesmo sendo uma solução de rápida execução, o acabamento precisa ser refinado para que o visual fique bonito e equilibrado. Por isso, a avaliação da profissional é essencial para decidir o melhor tipo de extensão.",
      "Com os cuidados corretos, a fita adesiva oferece um efeito visual sofisticado, com brilho, volume e conforto ao uso cotidiano."],
    precoDe: 290,
    precoTexto: "A partir de R$ 290",
    duracao: "1h 45m",
    manutencao: "45 dias",
    indicadoPara: ["Quem precisa de volume imediato", "Clientes que querem resultado rápido", "Quem não quer uma mudança completamente estrutural"],
    cuidados: ["Evitar o uso de produtos oleosos na base", "Não puxar ou arrancar a fita", "Fazer manutenção no prazo recomendado"],
    faq: [
      { q: "A fita adesiva pode ser usada em cabelo fino?", a: "Pode sim, desde que a profissional avalie a estrutura e a aderência ideal para seu tipo de fio." },
      { q: "A manutenção é frequente?", a: "Ela normalmente exige manutenção em um intervalo menor do que outras técnicas, por isso o reforço é importante." },
      { q: "O cabelo fica com aspecto artificial?", a: "Com a técnica correta, o efeito é elegante e quase imperceptível." },
      { q: "Posso dormir com o cabelo solto?", a: "Sim, mas sempre com o cuidado necessário para não puxar ou desgastar a base." }
    ],
  },
  {
    slug: "manutencao-mega-hair",
    categoria: "mega-hair",
    nome: "Manutenção de Mega Hair",
    h1: "Manutenção de mega hair para preservar brilho, volume e acabamento",
    descricaoCurta:
      "A manutenção de mega hair é essencial para preservar a elegância da extensão, o volume e o brilho ao longo do tempo.",
    descricaoLonga: [
      "A manutenção da mega hair é um passo essencial para que o resultado continue bonito, seguro e sem perder a aparência natural. Durante esse processo, a profissional avalia o encaixe, o brilho e o estado geral das mechas para devolver um visual impecável.",
      "O objetivo é manter o cabelo uniforme, com volume equilibrado e sem que o acabamento pareça desgastado. Esse cuidado também ajuda a evitar que a base se desfaça ou que o penteado perca definição.",
      "Além da estética, a manutenção garante mais conforto e preserva a saúde do fio natural. Com a rotina adequada, o cabelo continua com um aspecto sofisticado e bem tratado por mais tempo.",
      "É um cuidado fundamental para quem quer garantir que o investimento continue valendo a pena e que cada dia tenha um visual impecável."],
    precoDe: 290,
    precoTexto: "A partir de R$ 290",
    duracao: "1h 30m",
    manutencao: "Revisão mensal",
    indicadoPara: ["Quem já tem mega hair aplicada", "Clientes que querem manter o visual impecável", "Pessoas que têm rotina de manutenção"],
    cuidados: ["Evitar excesso de calor", "Penteado com cuidado", "Manter a hidratação adequada"],
    faq: [
      { q: "Com que frequência devo fazer manutenção?", a: "A manutenção é geralmente recomendada a cada 60 a 90 dias, conforme o crescimento do fio e a técnica aplicada." },
      { q: "O cabelo natural pode sofrer com a manutenção?", a: "Se feita no intervalo correto e com a técnica adequada, a manutenção preserva a saúde do fio." },
      { q: "Posso fazer hidratação em casa?", a: "Sim, desde que sejam usados produtos suaves e sem excesso de oleosidade na raiz." },
      { q: "Qual sinal de que a manutenção está atrasada?", a: "Perda de brilho, desalinhamento das mechas e sensação de crescimento na raiz são sinais de que o procedimento deve ser revisado." }
    ],
  },
  {
    slug: "remocao-mega-hair",
    categoria: "mega-hair",
    nome: "Remoção de Mega Hair",
    h1: "Remoção de mega hair com técnica segura e cuidado total",
    descricaoCurta:
      "Remoção profissional da mega hair para preservar a saúde do fio e evitar danos ao cabelo natural durante a retirada da extensão.",
    descricaoLonga: [
      "A remoção da mega hair precisa ser feita com cuidado e técnica, porque a retirada inadequada pode comprometer o estado do cabelo natural e do couro cabeludo. Por isso, o procedimento deve ser realizado por uma profissional especializada.",
      "A técnica de remoção visa preservar a integridade dos fios, evitar puxões e preparar o cabelo para a próxima etapa, seja uma nova aplicação ou uma pausa no procedimento.",
      "Além da remoção em si, a profissional pode orientar sobre os cuidados necessários para recuperar brilho, elasticidade e embalar o cabelo para uma boa recuperação antes de um novo processo.",
      "Esse cuidado é essencial para manter a saúde capilar e garantir que o próximo resultado seja ainda melhor."],
    precoDe: 80,
    precoTexto: "A partir de R$ 80",
    duracao: "1h 30m",
    manutencao: "A partir da revisão",
    indicadoPara: ["Quem quer remover a extensão com segurança", "Clientes que vão trocar de técnica", "Pessoas com fios fragilizados"],
    cuidados: ["Não puxar nem raspar no cabelo seco", "Usar shampoo suave após a remoção", "Seguir orientações da professional"],
    faq: [
      { q: "A remoção prejudica o cabelo?", a: "Quando feita corretamente, a remoção é segura e evita danos ao fio natural." },
      { q: "Preciso de acompanhamento após a remoção?", a: "Sim, o cuidado pós-remoção ajuda a recuperar hidratação e maciez do cabelo." },
      { q: "Posso reaplicar logo em seguida?", a: "Depende da condição do fio e da avaliação profissional, mas em muitos casos é possível planejar a próxima etapa." },
      { q: "A remoção é dolorosa?", a: "Ela não é dolorosa quando aplicada com técnica correta e sem excesso de tração." }
    ],
  },
  {
    slug: "lace-bio-humana",
    categoria: "protese-capilar",
    nome: "Lace Bio Humana",
    h1: "Lace bio humana para resultado natural e sofisticado",
    descricaoCurta:
      "Lace bio humana com acabamento refinado, naturalidade excepcional e alta durabilidade para quem busca beleza com conforto e fosca elegante.",
    descricaoLonga: [
      "A lace bio humana é uma das opções mais desejadas por quem busca um resultado altamente natural e sofisticado. Sua estrutura favorece o acabamento discreto, com uma linha de cabelo que se integra ao couro cabeludo de forma impecável.",
      "A técnica é ideal para mulheres e homens que desejam um visual mais completo, sem perder a sensação de leveza e conforto. A fixação é feita com atenção às medidas e ao estilo do cliente para preservar uma aparência elegante e funcional.",
      "O diferencial dessa solução está no acabamento do material e na forma como ele se adapta ao formato da cabeça, criando uma sensação muito mais confortável no uso diário. O resultado pode ser personalizado conforme o grau de volume e densidade desejado.",
      "Com a manutenção certa, a prótese capilar mantém a beleza, a textura e a naturalidade por longos períodos, elevando o visual e a autoestima."],
    precoDe: 600,
    precoTexto: "A partir de R$ 600",
    duracao: "5h",
    manutencao: "45 dias",
    indicadoPara: ["Quem busca naturalidade extrema", "Pessoas que desejam volume com conforto", "Clientes que valorizam acabamento premium"],
    cuidados: ["Evitar tração na costura", "Usar shampoo suave", "Fazer manutenção regular"],
    faq: [
      { q: "A lace bio humana é mais natural que outras próteses?", a: "Sim, ela costuma ter um acabamento muito discreto, com visual extremamente integrado ao crânio." },
      { q: "Ela é confortável para uso diário?", a: "Sim, especialmente quando aplicada com bom ajuste e atenção à distribuição do peso." },
      { q: "Quanto tempo dura a prótese?", a: "A durabilidade depende do tipo de material, do uso e da manutenção, mas costuma ser muito satisfatória com os cuidados certos." },
      { q: "Posso mudar o visual ao longo do tempo?", a: "Sim, a prótese pode ser personalizada e ajustada conforme a preferência e a rotina da cliente." }
    ],
  },
  {
    slug: "protese-masculina",
    categoria: "protese-capilar",
    nome: "Prótese Masculina",
    h1: "Prótese masculina com visual natural e estética premium",
    descricaoCurta:
      "Prótese masculina para homens que querem mais volume, densidade ou uma reformulação de aparência com acabamento natural e sofisticado.",
    descricaoLonga: [
      "A prótese masculina foi desenvolvida para atender homens que querem reforçar densidade, criar cobertura ou ajustar o visual com um desenho mais sofisticado. A proposta é realçar a imagem sem deixar o cabelo artificial.",
      "A técnica considera a linha de implantação, a densidade, o formato e o estilo pessoal para criar uma solução que pareça natural até na menor observação. O foco está em garantir conforto e um efeito moderno, elegante e bem construído.",
      "Além de melhorar a aparência, a prótese pode dar mais autoestima e segurança para quem está buscando uma solução funcional e refinada. O resultado final se destaca pela harmonia e pela naturalidade visual.",
      "Com manutenção adequada, o cabelo segue com um aspecto saudável, macio e alinhado ao comportamento desejado do cliente."],
    precoDe: 620,
    precoTexto: "A partir de R$ 620",
    duracao: "4h 30m",
    manutencao: "45 dias",
    indicadoPara: ["Homens que querem mais volume", "Quem sente a área frontal mais rarefeita", "Pessoas que desejam um visual com mais densidade"],
    cuidados: ["Não puxar a base do cabelo", "Lavar com shampoo suave", "Revisão periódica"],
    faq: [
      { q: "A prótese masculina parece natural?", a: "Sim, especialmente quando a linha do cabelo e o desenho da implantação são pensados de forma cuidadosa." },
      { q: "A fixação é confortável?", a: "Sim, a peça é modelada para proporcionar conforto e boa aderência no uso diário." },
      { q: "Posso usar sem que seja percebido?", a: "Aproximadamente sim, esse é o objetivo: um visual bem integrado ao restante do cabelo e ao rosto." },
      { q: "Quanto tempo leva a manutenção?", a: "Ela normalmente exige revisão em intervalos regulares para manter o acabamento impecável." }
    ],
  },
  {
    slug: "manutencao-protese",
    categoria: "protese-capilar",
    nome: "Manutenção de Prótese",
    h1: "Manutenção de prótese capilar com refinamento e conforto",
    descricaoCurta:
      "A manutenção de prótese capilar preserva a naturalidade, a densidade e a boa aparência da peça ao longo do tempo.",
    descricaoLonga: [
      "A manutenção da prótese capilar é fundamental para que o cabelo continue bonito, leve e bem integrado ao visual do cliente. Nesse processo, a profissional revisa a base, a densidade e o acabamento da peça.",
      "O foco é restaurar o brilho, ajustar o volume e manter uma aparência natural ao longo do tempo. Quando a rotina é correta, a prótese continua bonita, confortável e funcional no dia a dia.",
      "Além do visual, a manutenção também ajuda a preservar a saúde do couro cabeludo e a boa aderência da peça. Isso evita desconforto e assegura uma experiencia mais tranquila para a cliente.",
      "Com revisões periódicas, é possível prolongar a vida útil da prótese sem perder o efeito premium que a profissional desejou entregar."],
    precoDe: 240,
    precoTexto: "A partir de R$ 240",
    duracao: "2h",
    manutencao: "A cada 45 dias",
    indicadoPara: ["Quem usa prótese capilar", "Clientes que desejam manter o visual impecável", "Pessoas com rotina de uso diário"],
    cuidados: ["Hidratação leve e regular", "Não usar produtos muito agressivos", "Revisão frequente do ajuste"],
    faq: [
      { q: "Quanto tempo preciso esperar entre uma manutenção e outra?", a: "Em geral, a revisão é recomendada em intervalos de 45 dias, mas o ideal depende do crescimento do cabelo e do estado da peça." },
      { q: "Posso lavar e manter como se fosse cabelo natural?", a: "Sim, mas com produtos específicos e atenção ao cuidado na base para manter a aderência." },
      { q: "A manutenção também melhora a aparência visual?", a: "Sim, ela revitalize a textura, o volume e o acabamento da peça." },
      { q: "Posso reaproveitar a mesma prótese por mais tempo?", a: "Sim, com manutenção adequada e atenção no uso, a prótese pode ser aproveitada por muito mais tempo." }
    ],
  },
  {
    slug: "colagem-reposicionamento",
    categoria: "protese-capilar",
    nome: "Colagem e Reposicionamento",
    h1: "Colagem e reposicionamento para conforto e visual impecável",
    descricaoCurta:
      "Serviço de colagem e reposicionamento para ajustar a prótese, corrigir a linha de implantação e manter um visual natural e confortável.",
    descricaoLonga: [
      "O reposicionamento da prótese capilar é essencial para manter o ajuste perfeito, o conforto e a naturalidade do visual ao longo do tempo. Com a evolução do cabelo e as necessidades do cliente, a peça pode precisar de reposicionamento para continuar bonita.",
      "Nessa etapa, a profissional revisa a posição da prótese, ajusta a linha de implantação e garante que a base continue bem integrada ao rosto e ao couro cabeludo. O objetivo é manter a estética e o conforto combinados.",
      "Esse cuidado é importante não só para o aspecto visual, mas também para a sensação de leveza durante o dia. Quando bem realizado, o reposicionamento melhora a aparência e a confiança da cliente.",
      "Além disso, a correção na posição pode evitar desconfortos e contribuir para que a prótese se mantenha segura e com um visual premium."],
    precoDe: 280,
    precoTexto: "A partir de R$ 280",
    duracao: "2h 15m",
    manutencao: "Revisão a cada 45 dias",
    indicadoPara: ["Quem sente desconforto com a prótese", "Clientes com ajuste desajustado", "Pessoas que querem manter o visual harmonioso"],
    cuidados: ["Evitar puxar a base", "Usar shampoo sem álcool", "Manter a prótese bem ajustada"],
    faq: [
      { q: "Quando devo reposicionar a prótese?", a: "Quando ela perde o encaixe, a distribuição do volume ou o conforto no uso diário, essa revisão se torna importante." },
      { q: "Ele melhora a aparência do visual?", a: "Sim, porque a peça volta a ter o ajuste e a linha ideal, deixando tudo mais natural." },
      { q: "O reposicionamento é necessário somente em manutenção?", a: "Nem sempre, mas ele é muito útil para corrigir pequenos ajustes e melhorar o conforto." },
      { q: "Ele afeta a durabilidade da peça?", a: "Não, ao contrário: quando bem feito, mantém a prótese em ótimo estado por mais tempo." }
    ],
  },
  {
    slug: "topo",
    categoria: "protese-capilar",
    nome: "Topo",
    h1: "Topo com prótese capilar para cobertura natural e elegância",
    descricaoCurta:
      "Aplicação de topo para reforçar a linha frontal com acabamento discreto e visual mais natural e sofisticado.",
    descricaoLonga: [
      "O topo de prótese capilar é uma solução pensada para realçar a linha frontal, suavizar a área mais sensível do cabelo e criar um visual mais equilibrado e elegante.",
      "A técnica permite reforçar a densidade do topo da cabeça sem perder a naturalidade do penteado, criando um acabamento sofisticado e bem integrado ao cabelo natural.",
      "É uma boa escolha para quem quer um resultado discreto, confortável e com estética premium no dia a dia.",
      "Com a manutenção ideal, o topo segue bonito, leve e alinhado ao visual que você deseja manter.",
    ],
    precoDe: 200,
    precoTexto: "A partir de R$ 200",
    duracao: "1h 30m",
    indicadoPara: ["Quem quer reforçar a linha frontal", "Pessoas com pouca densidade na parte superior", "Clientes que desejam um efeito discreto"],
    cuidados: ["Evitar puxar a base", "Lavar com shampoo suave", "Manter a área sempre bem ajustada"],
    faq: [
      { q: "A aplicação de topo deixa o visual natural?", a: "Sim. A técnica é pensada para um acabamento discreto e muito integrado ao cabelo natural." },
      { q: "Ele é confortável para uso diário?", a: "Sim, principalmente quando a base e o ajuste são feitos com cuidados e precisão." },
      { q: "Preciso de manutenção frequente?", a: "A manutenção depende da rotina e do crescimento do cabelo, mas a revisão periódica ajuda a preservar o resultado." },
      { q: "É indicado para quem tem pouco volume na parte da frente?", a: "Sim, esse é um dos maiores diferenciais do topo de prótese capilar." },
    ],
  },
  {
    slug: "franja",
    categoria: "protese-capilar",
    nome: "Franja",
    h1: "Franja com prótese capilar para acabamento natural e estilo",
    descricaoCurta:
      "Franja de prótese capilar para valorizar o rosto e criar um visual mais sofisticado e bem definido.",
    descricaoLonga: [
      "A franja com prótese capilar é uma opção interessante para quem deseja reestruturar a linha da frente e criar mais impacto visual sem perder a naturalidade.",
      "Ela ajuda a dar dimensão ao rosto, suaviza a expressão e realça a imagem com um acabamento discreto e elegante.",
      "Muito usada em reformulações de visual, a franja com prótese oferece um resultado mais refinado e personalizado conforme a estrutura do rosto.",
      "Com ajuste e manutenção corretos, a peça segue bonita, leve e integrada ao restante do cabelo.",
    ],
    precoDe: 180,
    precoTexto: "A partir de R$ 180",
    duracao: "1h 15m",
    indicadoPara: ["Quem quer mudar a linha frontal", "Pessoas que desejam volume na face", "Clientes que querem um visual mais sofisticado"],
    cuidados: ["Não puxar o acabamento", "Lavar com produtos suaves", "Revisar o ajuste periodicamente"],
    faq: [
      { q: "A franja é fácil de manter?", a: "Sim, desde que o ajuste e a manutenção sejam feitos de forma correta e regular." },
      { q: "Ela deixa o visual artificial?", a: "Não, quando a técnica é bem executada ela se integra ao cabelo natural com um acabamento delicado." },
      { q: "É bom para quem quer reformular o rosto?", a: "Sim, a franja ajuda a iluminar o olhar e balancear o formato do rosto." },
      { q: "Quanto tempo dura o ajuste?", a: "Depende da manutenção e da rotina, mas geralmente a revisão é recomendada em um intervalo de 45 dias." },
    ],
  },
  {
    slug: "tictac",
    categoria: "protese-capilar",
    nome: "Tictac",
    h1: "Tictac com prótese capilar para acabamento elegante e natural",
    descricaoCurta:
      "Técnica de tictac para reforçar o visual com naturalidade, delicadeza e ótimo ajuste na linha da testa.",
    descricaoLonga: [
      "O tictac é uma solução muito buscada para quem quer criar um efeito mais harmonioso na frontalidade, deixando o visual mais elegante e equilibrado.",
      "Com o ajuste certo, essa técnica funciona para melhorar a aparência, reforçar a densidade da região frontal e criar um acabamento muito natural.",
      "É ideal para quem quer um efeito sofisticado sem exagerar no volume e sem abrir mão da leveza do cabelo.",
      "O resultado é bem integrado ao restante da prótese ou do cabelo natural, sendo ótimo para quem procura naturalidade com qualidade.",
    ],
    precoDe: 220,
    precoTexto: "A partir de R$ 220",
    duracao: "1h 45m",
    indicadoPara: ["Quem quer melhorar a frente do cabelo", "Pessoas com área frontal mais sensível", "Clientes que buscam um visual mais sofisticado"],
    cuidados: ["Evitar puxar a linha frontal", "Lavar com shampoo suave", "Fazer manutenção periódica"],
    faq: [
      { q: "O tictac dá destaque na frontalidade?", a: "Sim, ele ajuda a reforçar a área da frente com um acabamento bem integrado ao visual." },
      { q: "É um serviço confortável?", a: "Sí, quando bem ajustado ele oferece conforto e naturalidade ao uso diário." },
      { q: "É escolhido por quem quer só um detalhe?", a: "Sim, é ideal para quem quer um ajuste mais delicado e sofisticado na linha frontal." },
      { q: "Preciso de manutenção?", a: "Sim, a revisão periódica ajuda a manter a naturalidade e o conforto do ajuste." },
    ],
  },
  {
    slug: "rabo-de-cavalo",
    categoria: "protese-capilar",
    nome: "Rabo de Cavalo",
    h1: "Rabo de cavalo com prótese capilar para visual volumoso e elegante",
    descricaoCurta:
      "Rabo de cavalo de prótese capilar para criar volume, comprimento e acabamento sofisticado sem perder a naturalidade.",
    descricaoLonga: [
      "O rabo de cavalo com prótese capilar é uma solução elegante para quem deseja dar mais volume, comprimento e movimento ao visual em diferentes ocasiões.",
      "Essa opção funciona muito bem para quem quer um penteado mais sofisticado, com altura e dinamismo sem perder a sensação de naturalidade.",
      "Além de valorizar o visual, o rabo de cavalo pode complementar cabelos finos ou com menor densidade, trazendo equilíbrio e maior presença ao styling.",
      "Com ajuste correto e manutenção adequada, esse serviço oferece beleza e conforto para uso em diferentes momentos do dia.",
    ],
    precoDe: 260,
    precoTexto: "A partir de R$ 260",
    duracao: "2h",
    indicadoPara: ["Quem quer mais volume e comprimento", "Pessoas que gostam de penteado sofisticado", "Clientes com cabelo mais fino"],
    cuidados: ["Evitar puxar a base", "Lavar com shampoo suave", "Fazer revisão periódica"],
    faq: [
      { q: "Esse serviço funciona para quem tem pouco volume?", a: "Sim, o rabo de cavalo com prótese capilar é uma ótima opção para criar volume e balancear o visual." },
      { q: "Ele deixa o visual artificial?", a: "Não, quando a peça é bem escolhida e ajustada ela fica muito natural." },
      { q: "É elegante para ocasiões especiais?", a: "Sim, é muito usado em penteados com mais presença e sofisticação." },
      { q: "Quantas vezes por ano preciso revisar?", a: "A revisão costuma ser recomendada em intervalos regulares para manter o ajuste e o acabamento impecáveis." },
    ],
  },
  {
    slug: "costura-de-tela-ou-tecelagem",
    categoria: "protese-capilar",
    nome: "Costura de Tela/Tecelagem",
    h1: "Costura de tela/Tecelagem para acabamento refinado e natural",
    descricaoCurta:
      "Técnica de costura de tela/Tecelagem para criar um visual mais completo, natural e elegante com o máximo de conforto.",
    descricaoLonga: [
      "A costura de tela/Tecelagem é uma solução premium para quem quer um acabamento mais refinado e um visual mais natural na linha da prótese ou cabelo natural.",
      "Ela é ideal para criar equilíbrio visual, reforçar a densidade com delicadeza e assegurar que a peça fique bem integrada ao rosto e ao couro cabeludo.",
      "O resultado combina conforto, naturalidade e sofisticação, tornando a estética mais completa e elegante.",
      "Com os devidos cuidados, esse serviço oferece uma sensação muito mais sofisticada e bem adaptada ao estilo da cliente.",
    ],
    precoDe: 120,
    precoTexto: "A partir de R$ 120 cada 100g",
    duracao: "2h 30m",
    indicadoPara: ["Quem busca acabamento premium", "Clientes que querem mais naturalidade", "Pessoas que valorizam atenção aos detalhes"],
    cuidados: ["Evitar puxões na base", "Lavar sempre com shampoo suave", "Revisão periódica do ajuste"],
    faq: [
      { q: "Essa técnica é mais sofisticada?", a: "Sim, ela é muito valorizada por dar acabamento refinado, natural e elegante à prótese ou à linha capilar." },
      { q: "Ela é confortável para o uso diário?", a: "Sim, principalmente quando a técnica é aplicada com bom ajuste e atenção ao conforto." },
      { q: "Qual a principal vantagem?", a: "A principal vantagem é um visual mais integrado, bonito e sofisticado, sem perder a naturalidade." },
      { q: "Preciso de revisão constante?", a: "Sim, a manutenção periódica ajuda a manter a peça bonita e sem desconforto." },
    ],
  },
  {
    slug: "progressiva",
    categoria: "quimica",
    nome: "Progressiva",
    h1: "Progressiva para cabelos lisos, disciplinados e com brilho",
    descricaoCurta:
      "Progressiva com fórmulas de proteção para alisar, reduzir o frizz e disciplinar os fios com mais brilho e movimento natural.",
    descricaoLonga: [
      "A progressiva é uma solução muito buscada por quem deseja fios mais lisos, macios e com menos frizz. Ela age reduzindo o volume e deixando o cabelo mais alinhado, com um visual polido e sofisticado.",
      "O tratamento é indicado para quem quer otimizar o tempo de dia a dia e manter a aparência mais disciplinada sem perder a saúde dos fios. A escolha da fórmula é fundamental para unir beleza e cuidado.",
      "Com a aplicação correta, os cabelos ficam com menos volume, mais fáceis de pentear e com brilho mais evidente. O que torna a progressiva especial é o equilíbrio entre resultado e estrutura capilar.",
      "A avaliação profissional é essencial para adaptar o tratamento ao seu tipo de cabelo e garantir que o resultado fique bonito e duradouro."],
    precoDe: 250,
    precoTexto: "A partir de R$ 250",
    duracao: "3h",
    manutencao: "2 a 4 meses",
    indicadoPara: ["Fios com frizz e volume excessivo", "Quem quer alisar sem perder o brilho", "Pessoas com rotina corrida"],
    cuidados: ["Usar shampoo e condicionador específicos", "Evitar excesso de calor", "Não lavar imediatamente após o procedimento"],
    faq: [
      { q: "A progressiva estraga o cabelo?", a: "Se feita com fórmula e acompanhamento adequados, o tratamento pode ser benéfico e não causar danos excessivos." },
      { q: "Quanto tempo dura o efeito?", a: "A durabilidade varia conforme o tipo de fio e o cuidado diário, mas normalmente fica por meses." },
      { q: "Posso fazer outra química depois?", a: "Sim, mas é importante avaliar o intervalo para manter a saúde capilar." },
      { q: "Ela funciona em todo tipo de cabelo?", a: "Depende da estrutura do fio e das demandas da cliente, por isso a avaliação profissional é importante." }
    ],
  },
  {
    slug: "botox-capilar",
    categoria: "quimica",
    nome: "Botox Capilar",
    h1: "Botox capilar para fios mais macios, nutridos e brilhantes",
    descricaoCurta:
      "Botox capilar para revitalizar os fios, reduzir o frizz, dar maciez e melhorar a aparência sem perder a maleabilidade do cabelo.",
    descricaoLonga: [
      "O botox capilar é uma solução muito procurada por quem quer cabelo mais macio, nutrido e com brilho. A técnica ajuda a recuperar fios cansados, com ressecamento e aspecto sem vida, devolvendo suavidade e estrutura.",
      "Além do aumento da maciez, o tratamento reduz o frizz e melhora a maleabilidade do cabelo, tornando o penteado mais fácil e elegante no dia a dia. O visual fica mais saudável e sofisticado.",
      "A aplicação é feita com atenção à necessidade de cada tipo de fio. Quando adequadamente escolhida, a fórmula age em uma ação de cuidado e revitalização sem deixar o cabelo pesado.",
      "É uma excelente alternativa para quem deseja um tratamento mais reparador e uma melhora real na qualidade visual do cabelo."],
    precoDe: 120,
    precoTexto: "A partir de R$ 120",
    duracao: "3h",
    manutencao: "60 a 90 dias",
    indicadoPara: ["Fios ressecados e sem vida", "Quem quer reduzir o frizz", "Pessoas com rotina de uso intenso de calor"],
    cuidados: ["Usar hidratante após o procedimento", "Evitar excesso de calor", "Manter os fios nutridos"],
    faq: [
      { q: "Botox capilar deixa o cabelo pesado?", a: "Se a formula for adequada ao tipo de fio, o tratamento oferece maciez sem deixar o cabelo pesado." },
      { q: "Como o resultado se mantém?", a: "O cabelo segue mais liso, hidratado e com visual elegante por semanas, dependiendo da rotina de cuidados." },
      { q: "Posso fazer coloracao depois?", a: "Isso pode ser feito com avaliação, mas o ideal é respeitar a recuperação da fibra." },
      { q: "É indicado para cabelos cacheados?", a: "Depende do tipo de fio e do objetivo, mas em alguns casos pode ser muito benéfico para reduzir o frizz." }
    ],
  },
  {
    slug: "selagem",
    categoria: "quimica",
    nome: "Selagem",
    h1: "Selagem para suavidade, brilho e controle do frizz",
    descricaoCurta:
      "Selagem para suavizar o cabelo, reduzir o frizz e dar um aspecto mais saudável, elegante e mais fácil de controlar no dia a dia.",
    descricaoLonga: [
      "A selagem é uma opção muito prática para quem busca diminuir o frizz, facilitar o penteado e melhorar a aparência geral dos fios. Ela deixa o cabelo mais liso, sedoso e com brilho suave.",
      "Esse tipo de tratamento é ideal para quem quer um resultado leve, com menos volume e mais disciplinamento, sem um efeito totalmente radical. O cabelo ganha conforto e beleza visual para o dia a dia.",
      "A formula é escolhida conforme a necessidade do fio e a estrutura capilar, visando deixar o resultado mais natural e elegante. A aplicação precisa ser feita com cuidado para não prejudicar a saúde do cabelo.",
      "A selagem é uma excelente escolha para quem vive em um ritmo acelerado e quer manter o visual bonito sem muito esforço."],
    precoDe: 260,
    precoTexto: "A partir de R$ 260",
    duracao: "2h 30m",
    manutencao: "2 meses",
    indicadoPara: ["Quem quer menos frizz", "Cabelos sem brilho", "Pessoas que desejam visual mais alinhado"],
    cuidados: ["Não lavar imediatamente depois", "Usar shampoo suave", "Historizar a frequência da manutenção"],
    faq: [
      { q: "A selagem deixa o cabelo liso demais?", a: "Ela oferece suavização e menos volume, mas o efeito depende da formula escolhida e do tipo de fio." },
      { q: "Pode ser feita em cabelos coloridos?", a: "Pode, desde que a avaliação da profissional considere a saúde capilar e a estrutura do fio." },
      { q: "Ela melhora a hidratação?", a: "Em muitos casos, sim, especialmente quando a fórmula tem ação nutritiva e condicionante." },
      { q: "Quantas semanas dura?", a: "A duração varia conforme o tipo de cabelo e o cuidado diário, mas normalmente fica por semanas ou meses." }
    ],
  },
  {
    slug: "coloracao",
    categoria: "quimica",
    nome: "Coloração",
    h1: "Coloração profissional para brilho, profundidade e expressão pessoal",
    descricaoCurta:
      "Coloração inteligente para realçar a cor natural, criar brilho, profundidade e uma aparência sofisticada com alto cuidado capilar.",
    descricaoLonga: [
      "A coloração profissional é uma forma de valorizar a personalidade, realçar a beleza do rosto e dar mais brilho ao visual. Ela pode acentuar a cor natural, criar tonalidades mais intensas ou pequenas transformações sem perder a elegância.",
      "Na execução, a profissional considera o tom base, a condição do fio e a intenção de cor para garantir uma escolha equilibrada e bonita. Isso faz toda a diferença para obter uma aparência sofisticada e totalmente harmoniosa.",
      "Além do aspecto estético, a coloração exige cuidado com a saúde do fio. Por isso, a preparação, a técnica e a manutenção pós-serviço são fundamentais para que a cor dure e o cabelo continue bonito.",
      "Com a coloração certa, o cabelo ganha brilho, profundidade e destaque pessoal, elevando a imagem de forma elegante e cuidadosa."],
    precoDe: 80,
    precoTexto: "A partir de R$ 80",
    duracao: "2h 30m",
    manutencao: "30 a 45 dias",
    indicadoPara: ["Quem quer mudar a tonalidade", "Pessoas que valorizam brilho e potência de cor", "Clientes que buscam realce sutil ou mais marcado"],
    cuidados: ["Usar shampoo específico para cor", "Hidratar com frequência", "Atenção ao calor do secador"],
    faq: [
      { q: "A coloração resseca o cabelo?", a: "Pode ressecar se não houver cuidados adequados, mas com produtos específicos e rotina adequada a cor fica bonita e saudável." },
      { q: "Quantas vezes posso retocar?", a: "Depende da cor e da raiz, mas o ideal é respeitar os intervalos para manter a saúde do fio." },
      { q: "Posso clarear o cabelo sem danificar?", a: "Só com orientações e técnicas adequadas, além de atenção à condição do fio e às etapas do processo." },
      { q: "A cor dura sempre igual?", a: "A duração depende do tipo de cor, da rotina e do cuidado com a raiz e as pontas." }
    ],
  },
  {
    slug: "mechas-luzes",
    categoria: "quimica",
    nome: "Mechas e Luzes",
    h1: "Mechas e luzes para brilho, dimensionamento e personalidade",
    descricaoCurta:
      "Mechas e luzes para um efeito estiloso, iluminado e sofisticado, com acabamento profissional e atenção à saúde do fio.",
    descricaoLonga: [
      "As mechas e luzes são ideais para criar profundidade, brilho e movimento no cabelo. Elas destacam o rosto, valorizam o visual e deixam uma imagem mais sofisticada, com personalidade e elegância.",
      "A escolha do tom, do contraste e da técnica faz toda a diferença. Na avaliação profissional, são considerados o tipo de cabelo, a cor natural e o resultado desejado para garantir uma aparência harmoniosa e bonita.",
      "Esse serviço é perfeito para quem quer mudar o visual com um toque leve e elegante. O resultado final pode ser sofisticado ou mais natural, dependendo da proposta escolhida.",
      "O cuidado pós-serviço é fundamental para manter a cor bonita, o brilho intenso e a fibra sempre bem tratada."],
    precoDe: 260,
    precoTexto: "A partir de R$ 260",
    duracao: "2h 30m",
    manutencao: "30 a 60 dias",
    indicadoPara: ["Quem quer brilho e dimensão", "Pessoas que valorizam visual iluminado", "Clientes que desejam um efeito sofisticado"],
    cuidados: ["Hidratação constante", "Shampoo sem sulfato", "Cuidado com o calor"],
    faq: [
      { q: "Quais são os riscos de luzes?", a: "O risco é menor quando a aplicação é profissional e a saúde capilar é respeitada durante todo o processo." },
      { q: "As luzes funcionam em cabelos escuros?", a: "Sim, mas a técnica e a profundidade da coloração precisam ser escolhidas com cuidado e avaliação profissional." },
      { q: "Elas exigem muito cuidado após o serviço?", a: "Sim, uso de produtos específicos e hidratação ajudam a prolongar o brilho e proteger a fibra." },
      { q: "Posso optar por um efeito mais natural?", a: "Sim, o tipo de mecha, o tom e a técnica influenciam bastante no resultado final." }
    ],
  },
  {
    slug: "matizacao",
    categoria: "quimica",
    nome: "Matização",
    h1: "Matização para corrigir e equilibrar a cor com brilho e refinamento",
    descricaoCurta:
      "Matização para neutralizar reflexos indesejados, equilibrar a cor e realçar o brilho do cabelo com um efeito elegante e profissional.",
    descricaoLonga: [
      "A matização é um serviço indispensável para quem deseja neutralizar tons amarelados, alaranjados ou avermelhados. Ela ajuda a equilibrar a coloração e deixar o visual mais sofisticado e elegante.",
      "Além de corrigir a tonalidade, a matização também dá brilho e percepção de cabelo bem cuidado, o que faz toda a diferença em um visual profissional. O efeito final fica mais alinhado à sua identidade e ao tom desejado.",
      "A escolha do pigmento é feita conforme a base da cor e a intenção do resultado. Isso garante um acabamento refinado e muito mais natural. A técnica exige atenção para manter o cabelo bonito sem perder a saúde da fibra.",
      "É uma etapa muito valorizada para quem gosta de cores com aparência impecável e bem executada, seja em colorações mais claras ou em tons mais elaborados."],
    precoDe: 60,
    precoTexto: "A partir de R$ 60",
    duracao: "1h 30m",
    manutencao: "30 dias",
    indicadoPara: ["Quem quer neutralizar o tom da cor", "Pessoas com cabelo descolorido", "Clientes que valorizam brilho e equilíbrio tonal"],
    cuidados: ["Shampoo específico para cabelos tingidos", "Evitar secador em excesso", "Realizar hidratação constante"],
    faq: [
      { q: "Para que serve a matização?", a: "Ela corrige reflexos indesejados e equilibrar a tonalidade, trazendo mais elegância ao cabelo." },
      { q: "Faz diferença para cabelos loiros?", a: "Sim, especialmente para controlar o excesso de amarelado e dar uma aparência mais sofisticada." },
      { q: "Ela é permanente?", a: "Não, o efeito é temporário e depende do cuidado com a cor e da frequência da lavagem." },
      { q: "Pode ser feita em cabelo já colorido?", a: "Sim, desde que a condição do fio permita e a profissional avalie a melhor formula." }
    ],
  },
  {
    slug: "hidratacao-profunda",
    categoria: "quimica",
    nome: "Hidratação Profunda",
    h1: "Hidratação profunda para revitalizar, nutrir e devolver o brilho",
    descricaoCurta:
      "Hidratação profunda para recuperar a maciez, a elasticidade e o brilho natural do cabelo com cuidado intenso e resultados imediatos.",
    descricaoLonga: [
      "A hidratação profunda é um tratamento que traz mais vida ao cabelo, devolvendo a maciez, a elasticidade e o brilho que o fio precisa para se manter bonito. É indicado para quem sente ressecamento, aspereza ou pouca maleabilidade.",
      "O tratamento atua no interior da fibra, ajudando a melhorar a saúde capilar de forma real. O resultado é um visual mais suave, nutrido e irresistivelmente elegante para o dia a dia.",
      "A formula é escolhida conforme a necessidade do cabelo, e os resultados podem ser percebidos em uma única sessão. Esse cuidado é um verdadeiro aliado para manter o visual sempre sofisticado e bem cuidado.",
      "Além da estética, a hidratação ajuda a prevenir pontas duplas, agressões do calor e perda de brilho, porque fortalece a estrutura do fio."],
    precoDe: 90,
    precoTexto: "A partir de R$ 90",
    duracao: "1h 20m",
    manutencao: "30 dias",
    indicadoPara: ["Fios secos ou quebradiços", "Quem quer mais brilho", "Clientes com pós-química ou uso frequente de calor"],
    cuidados: ["Usar produtos de acordo com o tipo de fio", "Evitar excesso de calor", "Manter rotina de hidratação"],
    faq: [
      { q: "A hidratação profunda é diferente de condicionador?", a: "Sim, ela tem ação mais intensiva e ajuda a restaurar a estrutura do fio de forma mais profunda." },
      { q: "Quantas vezes por mês devo fazer?", a: "Depende do estado do cabelo, mas geralmente a manutenção mensal é uma boa prática." },
      { q: "Ela ajuda em cabelo químico?", a: "Sim, principalmente em fios tratados com descoloração, química ou calor frequente." },
      { q: "Posso fazer no mesmo dia que outros tratamentos?", a: "Depende da combinação da profissional, mas geralmente é possível com o planejamento correto." }
    ],
  },
  {
    slug: "soltura-de-cachos",
    categoria: "cachos",
    nome: "Soltura de Cachos",
    h1: "Soltura de cachos para definição, leveza e brilho natural",
    descricaoCurta:
      "Soltura de cachos para definir a textura, reduzir o frizz e valorizar o cabelo natural com efeito elegante e bem estruturado.",
    descricaoLonga: [
      "A soltura de cachos é um serviço pensado para valorizar a textura natural do cabelo, deixando os fios com mais definição, volume controlado e menos frizz. A ideia é preservar a beleza dos cachos com um visual mais organizado e sofisticado.",
      "A técnica considera a estrutura do fio, o nível de ressecamento e a forma dos cachos para criar uma estética que eleve a autoestima e o conforto. O resultado é um visual mais saudável e bem construído.",
      "Além da definição, o serviço melhora o brilho e a estrutura capilar, ajudando a intensificar o cachos sem que eles percam a maleabilidade. Quando bem executado, o cabelo parece cuidado, hidratado e equilibrado.",
      "Esse tipo de atendimento é ideal para quem quer valorizar o cabelo natural sem abrir mão de um visual elegante e funcional para o cotidiano."],
    precoDe: 180,
    precoTexto: "A partir de R$ 180",
    duracao: "2h 30m",
    manutencao: "30 a 45 dias",
    indicadoPara: ["Cabelos cacheados e ondulados", "Quem busca definição sem frizz", "Pessoas que querem valorizar o próprio cabelo"],
    cuidados: ["Usar produtos sem sulfato", "Penteado com gel ou creme sem resíduo", "Hidratação regular"],
    faq: [
      { q: "A soltura de cachos funciona em qualquer tipo de cabelo cacheado?", a: "Sim, mas a técnica e a intensidade podem variar conforme a textura e o nível de ressecamento do fio." },
      { q: "O frizz reduz muito?", a: "Sim, especialmente quando o fio recebe hidratação e estrutura adequada para preservar a forma do cacho." },
      { q: "É um procedimento delicado?", a: "Ele exige atenção, mas o resultado costuma ser muito satisfatório para quem quer definir e dar vida ao cabelo." },
      { q: "Quanto tempo dura o efeito?", a: "Depende da rotina e do cuidado, mas geralmente dura por semanas com uma boa manutenção." }
    ],
  },
  {
    slug: "definicao",
    categoria: "cachos",
    nome: "Permanente Afro",
    h1: "Permanente afro para definição, brilho e movimento dos cachos",
    descricaoCurta:
      "Permanente afro com técnica responsável para valorizar a textura natural e manter os fios definidos, hidratados, elegantes e com movimento.",
    descricaoLonga: [
      "A definição de cachos é ideal para quem quer realçar a textura do cabelo sem perder o brilho e a leveza. O objetivo é deixar cada cacho com forma, volume e acabamento melhor, sem excesso de frizz ou aparência pesada.",
      "A técnica é executada com cuidado para respeitar a estrutura do fio e o formato da textura. Esse tratamento ajuda a estabelecer uma rotina mais organizada e estilosa para quem ama cabelo com cachos vivos.",
      "Além de deixar o cabelo mais bonito no dia a dia, a definição favorece um visual que combina leveza com elegância. O efeito é especialmente interessante para quem quer manter a autenticidade da textura natural.",
      "Quando combinado com rotina de hidratação e produtos adequados, o resultado fica mais duradouro e bem harmonioso."],
    precoDe: 500,
    precoTexto: "A partir de R$ 500",
    duracao: "2h",
    manutencao: "30 dias",
    indicadoPara: ["Cabelos cacheados e ondulados", "Quem quer mais definição e brilho", "Pessoas que sofrem com frizz"],
    cuidados: ["Hidratação regular", "Penteado em fio úmido", "Evitar excesso de calor"],
    faq: [
      { q: "A definição de cachos dá volume excessivo?", a: "Não, a intenção é dar forma e definição sem exagerar no volume." },
      { q: "É indicado para cabelos crespos?", a: "Sim, desde que a técnica seja adaptada ao nível de porosidade e ressecamento do fio." },
      { q: "Como manter a definição em casa?", a: "Com produtos leves, hidratação e nenhum procedimento agressivo que remova a forma do cacho." },
      { q: "Durabilidade é boa?", a: "Sim, especialmente quando a rotina de cuidados continua sendo realizada com regularidade." }
    ],
  },
  {
    slug: "transicao-capilar",
    categoria: "cachos",
    nome: "Transição Capilar",
    h1: "Transição capilar com cuidado, definição e naturalidade",
    descricaoCurta:
      "Atendimento para quem está em transição capilar, com foco em suavizar a diferença entre as texturas e devolver definição ao visual.",
    descricaoLonga: [
      "A transição capilar exige atenção e um cuidado especial, porque envolve combinar partes do cabelo com texturas diferentes. Nesse processo, a profissional atua para preservar a saúde, a definição e o equilíbrio da aparência.",
      "O objetivo é deixar a cliente mais segura e confortável com o seu cabelo, reduzindo o impacto da diferença entre as texturas e valorizando o visual natural. A proposta é favorecer uma transição mais bonita, suave e elegante.",
      "Com técnicas adequadas, é possível melhorar a hidratação, dar mais maleabilidade e criar um visual mais harmônico. O desenho do cabelo e a rotina de cuidados são fundamentais para o resultado.",
      "É um serviço com forte foco em autoestima e bem-estar, porque ajuda a pessoa a sentir que o cabelo está sendo cuidado de forma consciente e profissional."],
    precoDe: 220,
    precoTexto: "A partir de R$ 220",
    duracao: "2h 15m",
    manutencao: "30 a 45 dias",
    indicadoPara: ["Quem está deixando o cabelo natural", "Pessoas com texturas diferentes no mesmo cabelo", "Clientes que querem uma transição mais suave"],
    cuidados: ["hidratação em rotina", "penteado sem tensão", "evitar química agressiva"],
    faq: [
      { q: "A transição capilar precisa de corte?", a: "Nem sempre. Em alguns casos, a transição é trabalhada com definição e hidratação para deixar o cabelo mais bonito e uniforme." },
      { q: "Como a definição funciona nessa fase?", a: "A profissional cria estratégias para reduzir o frizz, facilitar o penteado e manter a forma do cabelo natural." },
      { q: "É possível fazer transição sem química agressiva?", a: "Sim, é preciso adaptar a rotina de cuidados e priorizar hidratação e definição." },
      { q: "A transição é dolorosa?", a: "Não é dolorosa, mas exige paciência e cuidados para preservar a saúde do fio." }
    ],
  },
  {
    slug: "cronograma-capilar",
    categoria: "cachos",
    nome: "Cronograma Capilar",
    h1: "Cronograma capilar para saúde, brilho e cachos bem definidos",
    descricaoCurta:
      "Cronograma capilar personalizado para manter a saúde do cabelo cacheado, com hidratação, nutrição e reconstrução ideal para sua rotina.",
    descricaoLonga: [
      "O cronograma capilar é uma rotina estruturada que respeita as necessidades do seu tipo de fio e da sua textura. Ele combina hidratação, nutrição e reconstrução para devolver maciez, brilho e equilíbrio ao cabelo.",
      "Para quem tem cachos, essa rotina é ainda mais importante, porque os fios tendem a perder umidade mais facilmente. A organização de um cronograma facilita a manutenção do visual e evita que o cabelo fique seco ou sem definição.",
      "A proposta é sempre estimular a saúde do cabelo, não somente a aparência superficial. Quando a rotina é correta, os cachos ficam mais bonitos, definidos e com maior elasticidade.",
      "Com a orientação certa, o cronograma capilar se torna uma ferramenta prática para elevar o resultado dos tratamentos e manter o cabelo em bom estado no dia a dia."],
    precoDe: 150,
    precoTexto: "A partir de R$ 150",
    duracao: "1h 15m",
    manutencao: "Mensal",
    indicadoPara: ["Quem quer manter cachos definidos", "Cabelos secos ou frágeis", "Pessoas que buscam rotina eficiente"],
    cuidados: ["Seguir orientação de produtos", "Manter a rotina de hidratação", "Evitar excesso de calor"],
    faq: [
      { q: "Qual a diferença entre cronograma e hidratação?", a: "O cronograma organiza a rotina de hidratação, nutrição e reconstrução em frequência e etapas específicas ao tipo do fio." },
      { q: "Posso seguir sozinho em casa?", a: "Você pode seguir a rotina proposta pela profissional, mas o acompanhamento inicial ajuda muito na escolha correta dos produtos." },
      { q: "O cronograma melhora a definição dos cachos?", a: "Sim, porque os fios ficam mais hidratados e com menos frizz, o que torna a textura mais bonita e definida." },
      { q: "Quanto tempo demora para ver resultado?", a: "Algumas melhorias aparecem logo nas primeiras semanas, e o efeito mais completo vem com constância." }
    ],
  },
  {
    slug: "corte-curvado",
    categoria: "cachos",
    nome: "Corte Curvado",
    h1: "Corte curvado para ressaltar a textura e a forma do rosto",
    descricaoCurta:
      "Corte curvado com técnica adequada para valorizar a estrutura do cabelo cacheado, com equilíbrio, definição e conforto no uso diário.",
    descricaoLonga: [
      "O corte curvado é uma escolha inteligente para quem quer valorizar a textura e o rosto, respeitando a forma do cabelo natural. A técnica considera a curva, o volume e a densidade para criar um visual que seja bonito e confortável no uso do dia a dia.",
      "O objetivo é realçar os cachos e reduzir a sensação de peso ou descontrole, deixando o cabelo mais leve e harmonioso. A escultura do corte faz toda a diferença para a estrutura sem perder a identidade da textura.",
      "Quando bem feito, o corte curvado dá maior definição, melhora a forma dos cachos e facilita a rotina de manutenção. O visual sai mais equilibrado e elegante, com aquele aspecto saudável e bem cuidado.",
      "É uma ótima opção para quem busca um cabelo bonito, funcional e alinhado ao formato do rosto e ao estilo pessoal."],
    precoDe: 80,
    precoTexto: "A partir de R$ 80",
    duracao: "1h 45m",
    manutencao: "A cada 3 meses",
    indicadoPara: ["Quem quer valorizar cachos", "Pessoas com cabelo crespo ou ondulado", "Clientes que buscam corte leve e sofisticado"],
    cuidados: ["Penteado com cuidado", "Hidratação constante", "Trabalhar com produtos adequados"],
    faq: [
      { q: "O corte curvado ajuda a reduzir o frizz?", a: "Sim, porque ele respeita o desenho do fio e ajuda a distribuir o volume de maneira mais equilibrada." },
      { q: "Preciso de manutenção frequente?", a: "O ideal é revisar periodicamente para manter a forma e a definição do visual." },
      { q: "Pode ser feito em cabelos com transição?", a: "Sim, de acordo com o estágio da transição e a estrutura do cabelo, a técnica pode ser adaptada." },
      { q: "O desenho do corte influencia a aparência final?", a: "Sim, ele é fundamental para valorizar o rosto, os cachos e o volume de forma sofisticada." }
    ],
  },
];

export function getServico(cat: CategoriaSlug, slug: string) {
  return servicos.find((servico) => servico.categoria === cat && servico.slug === slug);
}

export function getServicosPorCategoria(cat: CategoriaSlug) {
  return servicos.filter((servico) => servico.categoria === cat);
}

export function getDestaques() {
  return servicos.filter((servico) => servico.destaque).slice(0, 6);
}
