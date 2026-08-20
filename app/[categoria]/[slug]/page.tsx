import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AntesDepoisGrid } from "@/components/AntesDepois";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { StickyBar } from "@/components/StickyBar";
import { antesDepois } from "@/data/antesDepois";
import { categorias, getServico, getServicosPorCategoria, type CategoriaSlug } from "@/data/servicos";
import { site } from "@/data/site";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildCanonicalUrl, formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return categorias.flatMap((categoria) =>
    getServicosPorCategoria(categoria.slug as CategoriaSlug).map((servico) => ({
      categoria: categoria.slug,
      slug: servico.slug,
    })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ categoria: string; slug: string }> }): Promise<Metadata> {
  const { categoria, slug } = await params;
  const servico = getServico(categoria as CategoriaSlug, slug);

  if (!servico) {
    return { title: "Serviço" };
  }

  return {
    title: servico.nome,
    description: servico.descricaoCurta,
    alternates: {
      canonical: `/${categoria}/${slug}`,
    },
    openGraph: {
      title: `${servico.nome} | ${site.nome}`,
      description: servico.descricaoCurta,
      url: buildCanonicalUrl(`/${categoria}/${slug}`),
    },
  };
}

export default async function ServicoDetalhesPage({ params }: { params: Promise<{ categoria: string; slug: string }> }) {
  const { categoria, slug } = await params;
  const servico = getServico(categoria as CategoriaSlug, slug);

  if (!servico) {
    notFound();
  }

  const categoriaAtiva = categorias.find((item) => item.slug === categoria);
  const relacionados = getServicosPorCategoria(categoria as CategoriaSlug)
    .filter((item) => item.slug !== servico.slug)
    .slice(0, 3);
  const antesDepoisFiltrados = antesDepois.filter((item) => item.servicoSlug === servico.slug);
  const breadcrumbItems = [
    { name: "Início", url: site.url },
    { name: categoriaAtiva?.nome ?? categoria, url: buildCanonicalUrl(`/${categoria}`) },
    { name: servico.nome, url: buildCanonicalUrl(`/${categoria}/${slug}`) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={serviceSchema(servico)} />
      <JsonLd data={faqSchema(servico.faq)} />

      <main className="pb-20">
        <Section eyebrow="Serviço" title={servico.h1}>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-brand-900 px-3 py-2 text-sm font-semibold text-gold-300">{servico.precoTexto}</span>
                <span className="rounded-full border border-[#e8d7c4] bg-white px-3 py-2 text-sm font-medium text-brand-900">Duração: {servico.duracao}</span>
                <span className="rounded-full border border-[#e8d7c4] bg-white px-3 py-2 text-sm font-medium text-brand-900">Manutenção: {servico.manutencao}</span>
              </div>

              <div className="space-y-4 text-base leading-8 text-slate-600">
                {servico.descricaoLonga.map((paragrafo) => (
                  <p key={paragrafo}>{paragrafo}</p>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#e8d7c4] bg-white p-3 shadow-soft">
              <Image src="/placeholders/hero-salao.svg" alt={servico.nome} width={700} height={700} sizes="(max-width: 768px) 100vw, 40vw" className="h-full w-full rounded-[1.5rem] object-cover" />
            </div>
          </div>
        </Section>

        <Section eyebrow="Detalhes" title="Tudo o que você precisa saber antes de agendar" subtitle="A precisão da técnica e a rotina de cuidado fazem toda a diferença no resultado final.">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#e8d7c4] bg-white p-6 shadow-soft">
              <h3 className="text-2xl text-brand-900">Indicado para</h3>
              <ul className="mt-5 space-y-3 text-base text-slate-600">
                {servico.indicadoPara.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-white">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#e8d7c4] bg-white p-6 shadow-soft">
              <h3 className="text-2xl text-brand-900">Cuidados pós-procedimento</h3>
              <ul className="mt-5 space-y-3 text-base text-slate-600">
                {servico.cuidados.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-900 text-[10px] font-bold text-gold-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {antesDepoisFiltrados.length > 0 && (
          <Section eyebrow="Antes e depois" title="Resultado do procedimento" subtitle="Veja a transformação em um contexto real e específico para este serviço.">
            <AntesDepoisGrid items={antesDepoisFiltrados} limit={2} />
          </Section>
        )}

        <Section eyebrow="FAQ" title="Perguntas frequentes do serviço" subtitle="Tudo para deixar mais claro o que esperar antes, durante e após o procedimento.">
          <Faq items={servico.faq} title={servico.nome} />
        </Section>

        <Section eyebrow="Relacionados" title="Serviços que combinam com esta escolha" subtitle="Se você curtiu esta especialidade, estas opções também podem fazer sentido para o seu cabelo e seu objetivo.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relacionados.map((item) => (
              <div key={item.slug} className="rounded-2xl border border-[#e8d7c4] bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700/80">{item.categoria.replace("-", " ")}</p>
                <h3 className="mt-3 text-2xl text-brand-900">{item.nome}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.descricaoCurta}</p>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <span className="text-base font-semibold text-brand-900">{formatPrice(item.precoDe)}</span>
                  <Link href={`/${item.categoria}/${item.slug}`} className="text-sm font-semibold text-brand-900 hover:text-gold-500">
                    Saber mais →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <StickyBar precoTexto={servico.precoTexto} />
      </main>
    </>
  );
}
