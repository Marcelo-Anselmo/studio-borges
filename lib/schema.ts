import { categorias, servicos, type Servico } from "@/data/servicos";
import { site } from "@/data/site";

export function beautySalonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "LocalBusiness"],
    name: site.nome,
    description: site.descricaoCurta,
    image: new URL("/og-image.svg", site.url).toString(),
    telephone: `+${site.whatsapp.numero}`,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.endereco.rua}, ${site.endereco.numero}`,
      addressLocality: site.endereco.bairro,
      addressRegion: site.endereco.cidade,
      postalCode: site.endereco.cep,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    sameAs: [`https://www.instagram.com/${site.instagram.replace("@", "")}`],
    priceRange: "R$$",
    openingHoursSpecification: site.horarios.map((horario) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: horario.dia,
      opens: horario.abertura,
      closes: horario.fechamento,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços do Studio Bruna Borges HS",
      itemListElement: servicos.map((servico) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: servico.nome,
          description: servico.descricaoCurta,
          category: servico.categoria,
          offers: {
            "@type": "Offer",
            price: servico.precoDe,
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
  } as const;
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.nome,
    url: site.url,
    description: site.descricaoCurta,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  } as const;
}

export function serviceSchema(servico: Servico) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: servico.nome,
    serviceType: servico.categoria,
    provider: {
      "@type": "Person",
      name: "Bruna Borges",
      sameAs: `https://www.instagram.com/${site.instagram.replace("@", "")}`,
    },
    areaServed: "Jaboatão dos Guararapes",
    offers: {
      "@type": "Offer",
      price: servico.precoDe,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: `${site.url}/${servico.categoria}/${servico.slug}`,
    },
    description: servico.descricaoCurta,
  } as const;
}

export function faqSchema(faq: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  } as const;
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  } as const;
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bruna Borges",
    jobTitle: "Especialista em mega hair, prótese capilar, química e cachos",
    description: "Profissional com 9 anos de experiência em mega hair, prótese capilar, química e cachos.",
    alumniOf: "Studio Bruna Borges HS",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.endereco.rua}, ${site.endereco.numero}`,
      addressLocality: site.endereco.bairro,
      addressRegion: site.endereco.cidade,
      addressCountry: "BR",
    },
    sameAs: [`https://www.instagram.com/${site.instagram.replace("@", "")}`],
  } as const;
}

export const allSchemas = {
  beautySalon: beautySalonSchema(),
  website: websiteSchema(),
  faq: faqSchema(servicos.flatMap((servico) => servico.faq)),
  breadcrumb: breadcrumbSchema(
    categorias.map((categoria) => ({
      name: categoria.nome,
      url: `${site.url}/${categoria.slug}`,
    })),
  ),
  person: personSchema(),
};
