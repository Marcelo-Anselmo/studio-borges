import { buildWhatsAppLink } from "@/data/site";

export function StickyBar({ precoTexto }: { precoTexto: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e8d7c4] bg-white/95 p-3 shadow-[0_-10px_30px_rgba(44,11,16,0.12)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-full border border-[#e8d7c4] bg-cream px-3 py-2">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Investimento</p>
          <p className="text-sm font-semibold text-brand-900">{precoTexto}</p>
        </div>
        <a
          href={buildWhatsAppLink("Olá! Quero agendar um atendimento no Studio Bruna Borges HS.")}
          target="_blank"
          rel="noreferrer"
          aria-label="Agendar pelo WhatsApp"
          className="inline-flex items-center justify-center rounded-full bg-gold-500 px-4 py-2.5 text-sm font-semibold text-white"
        >
          Agendar
        </a>
      </div>
    </div>
  );
}
