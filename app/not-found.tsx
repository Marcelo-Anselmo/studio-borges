import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center px-4 py-20">
      <div className="max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-700/70">Erro 404</p>
        <h1 className="mt-6 text-5xl font-semibold text-brand-900 md:text-6xl">Página não encontrada</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          A página que você procura não está disponível ou foi movida. Mas você pode seguir navegando pelo Studio Bruna Borges HS.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="inline-flex items-center justify-center rounded-full bg-brand-900 px-5 py-3 text-sm font-semibold text-white shadow-soft">
            Voltar para o início
          </Link>
          <Link href="/contato" className="inline-flex items-center justify-center rounded-full border border-brand-900 px-5 py-3 text-sm font-semibold text-brand-900">
            Falar com a equipe
          </Link>
        </div>
      </div>
    </main>
  );
}
