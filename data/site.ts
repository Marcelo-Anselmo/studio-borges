export type Endereco = {
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  completo: string;
};

export type Horario = {
  dia: string;
  abertura: string;
  fechamento: string;
};

export type Site = {
  nome: string;
  profissional: string;
  anosExperiencia: number;
  endereco: Endereco;
  geo: {
    lat: number;
    lng: number;
  };
  whatsapp: {
    numero: string;
    link: string;
  };
  instagram: string;
  horarios: Horario[];
  url: string;
  descricaoCurta: string;
};

const rawWhatsapp = "5581981797019";

export function buildWhatsAppLink(mensagem = "Olá! Quero agendar um atendimento no Studio Bruna Borges HS.") {
  return `https://wa.me/${rawWhatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const site: Site = {
  nome: "Studio Bruna Borges HS",
  profissional: "Bruna Borges, 9 anos de experiência",
  anosExperiencia: 9,
  endereco: {
    rua: "Rua Quatro",
    numero: "201",
    bairro: "Cajueiro Seco",
    cidade: "Jaboatão dos Guararapes",
    uf: "PE",
    cep: "54320-220",
    completo: "Rua Quatro, 201 — Cajueiro Seco, Jaboatão dos Guararapes/PE",
  },
  geo: {
    lat: -8.1889,
    lng: -34.9256,
  },
  whatsapp: {
    numero: rawWhatsapp,
    link: buildWhatsAppLink(),
  },
  instagram: "@studiobrunaborgeshs",
  horarios: [
    { dia: "Terça", abertura: "10:00", fechamento: "20:00" },
    { dia: "Quarta", abertura: "10:00", fechamento: "20:00" },
    { dia: "Quinta", abertura: "10:00", fechamento: "20:00" },
    { dia: "Sexta", abertura: "10:00", fechamento: "20:00" },
    { dia: "Sábado", abertura: "10:00", fechamento: "20:00" },
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://studiobrunaborgeshs.com.br",
  descricaoCurta:
    "Especializada em mega hair, prótese capilar, química e cachos, com atendimento premium e resultados elegantes em Jaboatão dos Guararapes.",
};
