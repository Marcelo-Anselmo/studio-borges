import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { categorias, getServicosPorCategoria } from "@/data/servicos";
import { site } from "@/data/site";
import { breadcrumbSchema } from "@/lib/schema";
import { buildCanonicalUrl } from "@/lib/utils";

const passos = [
  "Avaliação do cabelo e dos objetivos do cliente.",
  "Definição da técnica mais adequada à estrutura capilar.",
  "Execução do tratamento com cuidado e acabamento premium.",
  "Orientações de manutenção para prolongar o resultado.",
];

export function generateStaticParams() {
  return categorias.map((categoria) => ({ categoria: categoria.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string }> }): Promise<Metadata> {
  const { categoria } = await params;
  const current = categorias.find((item) => item.slug === categoria);

  if (!current) {
    return { title: "Especialidade" };
  }

  return {
    title: current.nome,
    description: current.descricao,
    alternates: {
      canonical: `/${current.slug}`,
    },
    openGraph: {
      title: `${current.nome} | ${site.nome}`,
      description: current.descricao,
      url: buildCanonicalUrl(`/${current.slug}`),
    },
  };
}

export default async function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const current = categorias.find((item) => item.slug === categoria);

  if (!current) {
    notFound();
  }

  const servicos = getServicosPorCategoria(current.slug as (typeof categorias)[number]["slug"]);
  const faqCategoria = servicos.flatMap((servico) => servico.faq).slice(0, 6);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Início", url: site.url },
          { name: current.nome, url: buildCanonicalUrl(`/${current.slug}`) },
        ])}
      />

      <main>
        <Section eyebrow="Especialidade" title={current.h1} subtitle={current.descricao}>
          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              A abordagem desse serviço foi pensada para entregar o máximo de valor ao seu cabelo, respeitando a estrutura natural dos fios e criando um visual com mais elegância, disciplina e beleza.
            </p>
            <p>
              No Studio Bruna Borges HS, cada procedimento é cuidadosamente planejado para alinhar estética, presença e resultado duradouro, levando em conta a rotina, o tipo de cabelo e a personalidade de cada cliente.
            </p>
          </div>
        </Section>

        <Section eyebrow="Tratamentos" title="Serviços desta categoria" subtitle="Detalhes, resultado e cuidado para cada procedimento de forma clara e personalizada.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {servicos.map((servico) => (
              <ServiceCard key={servico.slug} servico={servico} />
            ))}
          </div>
        </Section>

        <Section eyebrow="Como funciona" title="Processo simples e pensado para você" subtitle="A jornada até o resultado final combina avaliação, personalizado e rotina de manutenção com expertise profissional.">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {passos.map((passo, index) => (
              <div key={passo} className="rounded-2xl border border-[#e8d7c4] bg-white p-6 shadow-soft">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-900 text-sm font-semibold text-gold-300">
                  0{index + 1}
                </div>
                <p className="text-lg leading-7 text-slate-700">{passo}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="FAQ" title="Perguntas frequentes desta categoria" subtitle="Respostas práticas para você entender melhor o que esperar do procedimento e da rotina de manutenção.">
          <Faq items={faqCategoria} title={current.nome} />
        </Section>

        <section className="pb-20">
          <div className="mx-auto max-w-5xl px-4 text-center lg:px-8">
            <div className="rounded-[2rem] bg-brand-900 p-8 text-[#f8efe8] shadow-soft md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">Agende sua visita</p>
              <h2 className="mt-4 text-4xl text-[#fff8f3] md:text-5xl">Gostou da proposta?</h2>
              <p className="mt-5 text-base leading-7 text-[#f6efe9]/80">
                Fale com a Bruna e tire todas as dúvidas sobre o procedimento ideal para o seu cabelo e sua rotina.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a href={site.whatsapp.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white">
                  Falar no WhatsApp
                </a>
                <Link href="/contato" className="inline-flex items-center justify-center rounded-full border border-gold-300/60 px-6 py-3 text-sm font-semibold text-gold-300">
                  Ver contato
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
