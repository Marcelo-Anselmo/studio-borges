import type { Metadata } from "next";
import { categorias, getServicosPorCategoria, type CategoriaSlug } from "@/data/servicos";
import { formatPrice } from "@/lib/utils";
import { Section } from "@/components/Section";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Preços",
    description: "Tabela de preços por categoria do Studio Bruna Borges HS com mega hair, prótese capilar, química e cachos.",
    alternates: {
      canonical: "/precos",
    },
  };
}

export default function PrecosPage() {
  return (
    <main>
      <Section eyebrow="Tabela de preços" title="Valores transparentes e personalizados" subtitle="Os valores podem variar conforme comprimento, volume, estrutura do fio e manutenção desejada. Aqui você encontra a referência inicial por categoria.">
        <div className="hidden overflow-hidden rounded-[2rem] border border-[#e8d7c4] bg-white shadow-soft md:block">
          <table className="min-w-full divide-y divide-[#f0e0d1] text-left">
            <thead className="bg-brand-900 text-[#f8efe8]">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]">Categoria</th>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]">Serviço</th>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]">Tempo</th>
                <th className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em]">Investimento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f0e0d1]">
              {categorias.flatMap((categoria) =>
                getServicosPorCategoria(categoria.slug as CategoriaSlug).map((servico) => (
                  <tr key={servico.slug} className="transition hover:bg-cream/80">
                    <td className="px-6 py-4 text-sm font-semibold text-brand-900">{categoria.nome}</td>
                    <td className="px-6 py-4 text-sm text-slate-700">{servico.nome}</td>
                    <td className="px-6 py-4 text-sm text-slate-700">{servico.duracao}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-brand-900">{servico.precoTexto}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>

        <div className="grid gap-5 md:hidden">
          {categorias.map((categoria) => (
            <div key={categoria.slug} className="rounded-[1.5rem] border border-[#e8d7c4] bg-white p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-700/80">{categoria.nome}</p>
              <div className="mt-4 space-y-4">
                {getServicosPorCategoria(categoria.slug as CategoriaSlug).map((servico) => (
                  <div key={servico.slug} className="rounded-2xl bg-cream p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-base font-semibold text-brand-900">{servico.nome}</p>
                      <span className="text-sm font-semibold text-brand-900">{formatPrice(servico.precoDe)}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{servico.duracao}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#e8d7c4] bg-white p-6 text-base leading-7 text-slate-600 shadow-soft">
          <p>
            <strong className="text-brand-900">Importante:</strong> os valores acima são referências iniciais e podem variar conforme o comprimento, o volume, a estrutura do fio e a manutenção necessária para cada cliente.
          </p>
        </div>
      </Section>
    </main>
  );
}
