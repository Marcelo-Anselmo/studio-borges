import Link from "next/link";
import { categorias } from "@/data/servicos";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brand-900 text-[#f7eee5]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold tracking-[0.12em] text-gold-300">Studio Bruna</p>
            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#f7eee5]/70">Borges HS</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#f7eee5]/80">{site.descricaoCurta}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gold-300">Navegação</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#f7eee5]/80">
              <li><Link href="/">Início</Link></li>
              <li><Link href="/precos">Preços</Link></li>
              <li><Link href="/antes-e-depois">Antes & Depois</Link></li>
              <li><Link href="/sobre">Sobre</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gold-300">Especialidades</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#f7eee5]/80">
              {categorias.map((categoria) => (
                <li key={categoria.slug}><Link href={`/${categoria.slug}`}>{categoria.nome}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#7b4f53] pt-8 text-sm text-[#f7eee5]/75">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>{site.endereco.completo}</p>
            <p>Terça a Sábado, 10h às 20h</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
