import Link from "next/link";
import { cn } from "@/lib/utils";

type WhatsAppCTAProps = {
  mensagem?: string;
  label?: string;
  className?: string;
  href?: string;
};

export function WhatsAppCTA({
  mensagem = "Olá! Quero agendar um atendimento no Studio Bruna Borges HS.",
  label = "Agendar",
  className,
  href,
}: WhatsAppCTAProps) {
  const whatsappUrl = href ?? `https://wa.me/5581981797019?text=${encodeURIComponent(mensagem)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-gold-300 hover:text-brand-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-900 focus-visible:ring-offset-2",
        className,
      )}
    >
      <span aria-hidden="true">WhatsApp</span>
      <span>{label}</span>
    </Link>
  );
}
