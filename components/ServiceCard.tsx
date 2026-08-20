import Image from "next/image";
import Link from "next/link";
import type { Servico } from "@/data/servicos";
import { formatPrice } from "@/lib/utils";

export function ServiceCard({ servico }: { servico: Servico }) {
  const image = "/placeholders/hero-salao.svg";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e8d7c4] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 overflow-hidden bg-brand-900">
        <Image src={image} alt={servico.nome} fill className="object-cover opacity-85" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="rounded-full bg-brand-900/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700">
            {servico.categoria.replace("-", " ")}
          </span>
          <span className="text-sm font-semibold text-brand-900">{servico.duracao}</span>
        </div>
        <h3 className="text-2xl font-semibold text-brand-900">{servico.nome}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{servico.descricaoCurta}</p>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#f0e0d1] pt-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Investimento</p>
            <p className="mt-1 text-lg font-semibold text-brand-900">{formatPrice(servico.precoDe)}</p>
          </div>
          <Link
            href={`/${servico.categoria}/${servico.slug}`}
            className="inline-flex items-center rounded-full border border-brand-900/20 px-4 py-2 text-sm font-medium text-brand-900 transition hover:border-brand-900 hover:bg-brand-900 hover:text-white"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}
