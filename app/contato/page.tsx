import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { beautySalonSchema, personSchema } from "@/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contato",
    description: "Entre em contato com o Studio Bruna Borges HS para agendar mega hair, prótese capilar, química e cachos em Jaboatão dos Guararapes/PE.",
    alternates: {
      canonical: "/contato",
    },
  };
}

export default function ContatoPage() {
  return (
    <>
      <JsonLd data={beautySalonSchema()} />
      <JsonLd data={personSchema()} />

      <main>
        <Section eyebrow="Contato" title="Agende seu atendimento" subtitle="Estamos aqui para cuidar do seu cabelo com atenção, técnica e resultados de alto padrão.">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5">
              <div className="rounded-[2rem] border border-[#e8d7c4] bg-white p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700/80">Endereço</p>
                <p className="mt-4 text-2xl font-semibold text-brand-900">{site.endereco.completo}</p>
                <p className="mt-3 text-base text-slate-600">Cajueiro Seco, Jaboatão dos Guararapes/PE</p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[#e8d7c4] bg-white p-5 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700/80">WhatsApp</p>
                  <p className="mt-3 text-base text-slate-700">+55 81 98179-7019</p>
                  <a href={site.whatsapp.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-brand-900 hover:text-gold-500">
                    Falar agora →
                  </a>
                </div>

                <div className="rounded-[1.5rem] border border-[#e8d7c4] bg-white p-5 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700/80">Instagram</p>
                  <p className="mt-3 text-base text-slate-700">{site.instagram}</p>
                  <a href="https://www.instagram.com/studiobrunaborgeshs" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-brand-900 hover:text-gold-500">
                    Visitar perfil →
                  </a>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[#e8d7c4] bg-white p-5 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700/80">Horários</p>
                <ul className="mt-4 space-y-3 text-base text-slate-700">
                  {site.horarios.map((horario) => (
                    <li key={horario.dia} className="flex items-center justify-between gap-4 border-b border-[#f0e0d1] pb-2 last:border-b-0 last:pb-0">
                      <span>{horario.dia}</span>
                      <span>{horario.abertura} às {horario.fechamento}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#e8d7c4] bg-white p-3 shadow-soft">
              <div className="overflow-hidden rounded-[1.6rem] border border-[#e8d7c4]">
                <iframe
                  title="Mapa do Studio Bruna Borges HS"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.3702566557513!2d-34.926509024244865!3d-8.165401081823518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1202d54c6e5%3A0x4f6d4860b081bd04!2sStudio%20Bruna%20Borges%20hs!5e0!3m2!1spt-BR!2sbr!4v1787325558959!5m2!1spt-BR!2sbr"
                  className="h-[460px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section eyebrow="Como chegar" title="Localização fácil e estratégica" subtitle="No bairro Cajueiro Seco, com acesso simples pela região de Jaboatão dos Guararapes e proximidade com a BR-101.">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#e8d7c4] bg-white p-6 shadow-soft">
              <p className="text-xl font-semibold text-brand-900">Referências</p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
                <li>• Próximo ao bairro Cajueiro Seco e à região central de Jaboatão dos Guararapes.</li>
                <li>• Fácil acesso pela BR-101 e viações locais.</li>
                <li>• Atendimento com conforto e estacionamento facilitado para clientes da região.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#e8d7c4] bg-white p-6 shadow-soft">
              <p className="text-xl font-semibold text-brand-900">Dicas</p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Para facilitar sua visita, prefira chegar com 10 a 15 minutos de antecedência e, se possível, informe o serviço desejado ao agendar para otimizar o atendimento.
              </p>
              <div className="mt-6">
                <Link href={site.whatsapp.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-white">
                  Solicitar orientação
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
