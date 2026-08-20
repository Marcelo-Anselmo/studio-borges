import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { personSchema } from "@/lib/schema";

const pilares = [
  "Atendimento humanizado e acolhedor",
  "Técnica premium e atualizada",
  "Foco em saúde capilar e naturalidade",
  "Resultado sofisticado e duradouro",
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sobre",
    description: "Conheça a história, a filosofia e a formação da profissional Bruna Borges, especialista em mega hair, prótese capilar, química e cachos.",
    alternates: {
      canonical: "/sobre",
    },
  };
}

export default function SobrePage() {
  return (
    <>
      <JsonLd data={personSchema()} />

      <main>
        <Section eyebrow="Sobre a Bruna" title="Uma profissional apaixonada por transformar cabelo e autoestima" subtitle="Com 9 anos de experiência, Bruna Borges trabalha com técnica, atenção aos detalhes e um cuidado genuíno em cada atendimento.">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-[#e8d7c4] bg-white p-3 shadow-soft">
              <Image src="/placeholders/bruna.png" alt="Bruna Borges, especialista em beleza e cabelos" width={700} height={900} sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full rounded-[1.5rem] object-cover" />
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                A jornada da Bruna começou com a vontade de transformar a relação das pessoas com o cabelo. Ao longo de nove anos dedicados à estética capilar, ela desenvolveu uma rotina baseada em técnica, sensibilidade e um olhar atento para a personalidade de cada cliente.
              </p>
              <p>
                Sua especialização em mega hair, prótese capilar, química e cachos une conhecimento técnico com estética refinada. O objetivo sempre foi entregar um resultado bonito e acolhedor, com cuidado para a saúde do fio e para a autoestima da pessoa.
              </p>
              <p>
                No Studio Bruna Borges HS, o atendimento é pensado para criar uma experiência especial: clara, honesta, sofisticada e centrada no bem-estar da cliente. A ideia é resolver o que ela deseja, respeitando a estrutura capilar e o estilo que ela quer viver.
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Formação e filosofia" title="Uma abordagem honesta, técnica e com propósito" subtitle="Bruna entende que a beleza capilar vai muito além do visual: ela precisa estar conectada ao bem-estar, ao cuidado e à autenticidade.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pilares.map((item) => (
              <div key={item} className="rounded-2xl border border-[#e8d7c4] bg-white p-6 shadow-soft">
                <p className="text-lg leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Atelier" title="Estrutura do studio" subtitle="Um ambiente pensado para acolher, inspirar e entregar resultados de alto padrão com segurança e conforto.">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-brand-900 p-6 text-[#f8efe8] shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-300">Ambiente</p>
              <p className="mt-4 text-xl leading-8 text-[#fff8f3]">Sala elegante, bem iluminada e pensada para um atendimento premium.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-700/80">Atendimento</p>
              <p className="mt-4 text-xl leading-8 text-slate-700">Consulta detalhada, cuidado individual e orientação de manutenção personalizadas.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-700/80">Resultado</p>
              <p className="mt-4 text-xl leading-8 text-slate-700">Visual sofisticado, natural e alinhado ao estilo de vida da cliente.</p>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
