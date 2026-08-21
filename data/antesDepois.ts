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
    antes: "/placeholders/antes-1.PNG",
    depois: "/placeholders/depois-1.JPG",
    alt: "Antes e depois de mega hair com volume e brilho maior",
    legenda: "Transformação com mega hair e volume sofisticado.",
  },
  {
    id: "2",
    servicoSlug: "lace-bio-humana",
    antes: "/placeholders/depois-2.JPG",
    depois: "/placeholders/depois-2.JPG",
    alt: "Antes e depois de prótese capilar com visual natural",
    legenda: "Prótese capilar com acabamento natural e elegante.",
  },
  {
    id: "3",
    servicoSlug: "progressiva",
    antes: "/placeholders/antes-3.JPG",
    depois: "/placeholders/depois-3.JPG",
    alt: "Antes e depois de progressiva capilar com menos frizz",
    legenda: "Progressiva com fios mais alinhados e livres de frizz.",
  },
  {
    id: "4",
    servicoSlug: "coloracao",
    antes: "/placeholders/antes-4.JPG",
    depois: "/placeholders/depois-4.JPG",
    alt: "Antes e depois de coloração sem brilho e com cor renovada",
    legenda: "Coloração revitalizada com brilho intenso e brilho uniforme.",
  },
  {
    id: "5",
    servicoSlug: "soltura-de-cachos",
    antes: "/placeholders/antes-5.JPG",
    depois: "/placeholders/depois-5.JPG",
    alt: "Antes e depois de cachos definidos com menos frizz",
    legenda: "Definição de cachos com textura natural e brilho.",
  },
  {
    id: "7",
    servicoSlug: "mechas-luzes",
    antes: "/placeholders/antes-7.JPG",
    depois: "/placeholders/depois-7.PNG",
    alt: "Antes e depois de luzes com brilho e contraste de cor",
    legenda: "Luzes com brilho e um visual mais iluminado.",
  },
];
