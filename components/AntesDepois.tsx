"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { categorias, type CategoriaSlug } from "@/data/servicos";
import type { AntesDepoisItem } from "@/data/antesDepois";

export function AntesDepoisGrid({ items, limit = 4 }: { items: AntesDepoisItem[]; limit?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.slice(0, limit).map((item) => (
        <figure key={item.id} className="overflow-hidden rounded-2xl border border-[#e8d7c4] bg-white shadow-soft">
          <div className="grid grid-cols-2 gap-2 p-3">
            <div className="relative h-52 overflow-hidden rounded-xl">
              <Image src={item.antes} alt={`${item.alt} - antes`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="relative h-52 overflow-hidden rounded-xl">
              <Image src={item.depois} alt={`${item.alt} - depois`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          </div>
          <figcaption className="px-4 pb-5 text-sm text-slate-600">{item.legenda}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function AntesDepoisFilter({ items }: { items: AntesDepoisItem[] }) {
  const [categoria, setCategoria] = useState<"all" | CategoriaSlug>("all");

  const filteredItems = useMemo(() => {
    if (categoria === "all") {
      return items;
    }

    return items.filter((item) => {
      const match = item.servicoSlug.startsWith(categoria.replace("-", ""));
      return match;
    });
  }, [categoria, items]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setCategoria("all")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${categoria === "all" ? "bg-brand-900 text-white" : "bg-white text-brand-900 ring-1 ring-brand-900/15"}`}
        >
          Todos
        </button>
        {categorias.map((item) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setCategoria(item.slug as CategoriaSlug)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${categoria === item.slug ? "bg-brand-900 text-white" : "bg-white text-brand-900 ring-1 ring-brand-900/15"}`}
          >
            {item.nome}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {filteredItems.map((item) => (
          <figure key={item.id} className="overflow-hidden rounded-2xl border border-[#e8d7c4] bg-white shadow-soft">
            <div className="grid grid-cols-2 gap-2 p-3">
              <div className="relative h-52 overflow-hidden rounded-xl">
                <Image src={item.antes} alt={`${item.alt} - antes`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
              <div className="relative h-52 overflow-hidden rounded-xl">
                <Image src={item.depois} alt={`${item.alt} - depois`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
            <figcaption className="px-4 pb-5 text-sm text-slate-600">{item.legenda}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
