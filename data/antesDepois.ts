export type AntesDepoisItem = {
  id: string;
  servicoSlug: string;
  antes: string;
  depois: string;
  alt: string;
  legenda: string;
};

export const antesDepois: AntesDepoisItem[] = [
  {
    id: "1",
    servicoSlug: "microcapsulas-queratina",
    antes: "/placeholders/antes-1.png",
    depois: "/placeholders/depois-1.jpg",
    alt: "Antes e depois de mega hair com volume e brilho maior",
    legenda: "Transformação com mega hair e volume sofisticado.",
  },
  {
    id: "2",
    servicoSlug: "lace-bio-humana",
    antes: "/placeholders/depois-2.jpg",
    depois: "/placeholders/depois-2.jpg",
    alt: "Antes e depois de prótese capilar com visual natural",
    legenda: "Prótese capilar com acabamento natural e elegante.",
  },
  {
    id: "3",
    servicoSlug: "progressiva",
    antes: "/placeholders/antes-3.jpg",
    depois: "/placeholders/depois-3.jpg",
    alt: "Antes e depois de progressiva capilar com menos frizz",
    legenda: "Progressiva com fios mais alinhados e livres de frizz.",
  },
  {
    id: "4",
    servicoSlug: "coloracao",
    antes: "/placeholders/antes-4.jpg",
    depois: "/placeholders/depois-4.jpg",
    alt: "Antes e depois de coloração sem brilho e com cor renovada",
    legenda: "Coloração revitalizada com brilho intenso e brilho uniforme.",
  },
  {
    id: "5",
    servicoSlug: "soltura-de-cachos",
    antes: "/placeholders/antes-5.jpg",
    depois: "/placeholders/depois-5.jpg",
    alt: "Antes e depois de cachos definidos com menos frizz",
    legenda: "Definição de cachos com textura natural e brilho.",
  },
  {
    id: "6",
    servicoSlug: "cronograma-capilar",
    antes: "/placeholders/antes-6.png",
    depois: "/placeholders/depois-6.png",
    alt: "Antes e depois de cronograma capilar com hidratação e brilho",
    legenda: "Cabelo mais hidratado e com fios mais saudáveis.",
  },
  {
    id: "7",
    servicoSlug: "mechas-luzes",
    antes: "/placeholders/antes-7.jpg",
    depois: "/placeholders/depois-7.png",
    alt: "Antes e depois de luzes com brilho e contraste de cor",
    legenda: "Luzes com brilho e um visual mais iluminado.",
  },
  {
    id: "8",
    servicoSlug: "corte-curvado",
    antes: "/placeholders/antes-8.png",
    depois: "/placeholders/depois-8.png",
    alt: "Antes e depois de corte curvado para cachos bem definidos",
    legenda: "Corte curvado para valorizar a forma dos cachos.",
  },
];
