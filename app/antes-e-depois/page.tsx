import type { Metadata } from "next";
import { AntesDepoisFilter } from "@/components/AntesDepois";
import { Section } from "@/components/Section";
import { antesDepois } from "@/data/antesDepois";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Antes e Depois",
    description: "Galeria de transformações do Studio Bruna Borges HS com mega hair, química, cachos e prótese capilar.",
    alternates: {
      canonical: "/antes-e-depois",
    },
  };
}

export default function AntesDepoisPage() {
  return (
    <main>
      <Section eyebrow="Resultados" title="Antes e depois que revelam a diferença" subtitle="Cada transformação mostra como técnica, cuidado e atenção fazem a diferença no visual final de cada cliente.">
        <AntesDepoisFilter items={antesDepois} />
      </Section>
    </main>
  );
}
