import Image from "next/image";
import Link from "next/link";
import { AntesDepoisGrid } from "@/components/AntesDepois";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { antesDepois } from "@/data/antesDepois";
import { getDestaques } from "@/data/servicos";
import { site } from "@/data/site";
import { beautySalonSchema, websiteSchema } from "@/lib/schema";

const pilares = [
  "Mega hair premium",
  "Prótese capilar natural",
  "Química com cuidado",
  "Cachos definidos",
];

const depoimentos = [
  { nome: "Larissa M.", servico: "Mega Hair", texto: "Fiquei encantada com o volume e a naturalidade do resultado. O atendimento foi impecável e o acabamento super sofisticado." },
  { nome: "Júlia C.", servico: "Lace Bio Humana", texto: "A prótese ficou muito natural e confortável. Meu cabelo ficou com brilho e estrutura além do esperado." },
  { nome: "Nathália R.", servico: "Progressiva", texto: "O cabelo ficou liso, super macio e com menos frizz. Pareceu que eu estava com um tratamento de luxo em casa." },
  { nome: "Marina P.", servico: "Transição Capilar", texto: "A Bruna me ajudou a entender cada etapa do processo. Hoje me sinto muito mais segura com meus cachos." },
];

const faqGeral = [
  { q: "Quanto tempo dura uma mega hair?", a: "Em média, a manutenção é recomendada a cada 90 dias, mas o intervalo pode variar conforme o crescimento do fio e a técnica aplicada." },
  { q: "A prótese capilar parece natural?", a: "Sim. Quando a aplicação e o ajuste são feitos com atenção, o resultado fica muito integrado ao rosto e ao couro cabeludo." },
  { q: "Fazer química e cabelo cacheado pode ser compatível?", a: "Sim, desde que a técnica seja adequada ao tipo de fio e às necessidades do cabelo. A avaliação profissional é essencial." },
  { q: "É preciso manter uma rotina para cachos?", a: "Sim. Hidratação, produtos sem agressão e organização da rotina ajudam a manter a definição, o brilho e o bom aspecto dos cachos." },
  { q: "O studio atende em Jaboatão dos Guararapes?", a: "Sim. A unidade fica na Rua Quatro, 201, no bairro Cajueiro Seco, em Jaboatão dos Guararapes/PE." },
  { q: "Como funciona a primeira consulta?", a: "Na primeira conversa, a profissional avalia o seu cabelo, o objetivo do tratamento e define a melhor técnica para o seu caso." },
];

export default function HomePage() {
  const destaques = getDestaques();

  return (
    <>
      <JsonLd data={websiteSchema()} />
      <JsonLd data={beautySalonSchema()} />

      <main>
        <section className="relative overflow-hidden bg-brand-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(190,140,65,0.18),_transparent_42%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20 lg:px-8">
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-gold-300/50 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-gold-300">
                9 anos de experiência
              </span>
              <h1 className="mt-6 text-5xl leading-none text-cream md:text-6xl">Beleza premium para cabelos, cachos e autoestima.</h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#f8efe8]/85">
                No Studio Bruna Borges HS, cada procedimento é pensado para valorizar sua beleza com naturalidade, sofisticação e cuidado real para o seu cabelo.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <WhatsAppCTA mensagem="Olá! Quero saber mais sobre os serviços do Studio Bruna Borges HS." label="Falar no WhatsApp" className="bg-gold-500 px-6 py-3.5 text-base" />
                <Link href="/precos" className="inline-flex items-center justify-center rounded-full border border-gold-300/60 bg-transparent px-6 py-3.5 text-base font-semibold text-gold-300 transition hover:bg-gold-300 hover:text-brand-900">
                  Ver preços
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 top-5 h-24 w-24 rounded-full bg-gold-500/20 blur-3xl" />
              <div className="absolute -right-5 bottom-5 h-28 w-28 rounded-full bg-[#f8efe8]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#f4e7d5]/10 p-3 shadow-[0_30px_70px_rgba(17,8,10,0.35)] backdrop-blur-sm">
                <Image src="/placeholders/hero-salao.jpg" alt="Studio de beleza premium com salão elegante e cabelo bem cuidado" width={300} height={300} priority sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full rounded-[1.6rem] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <div className="border-b border-[#e7d9c8] bg-white/70 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {pilares.map((item) => (
              <div key={item} className="flex items-center justify-center rounded-full border border-[#e8d7c4] bg-cream px-4 py-3 text-center text-sm font-medium text-brand-900 shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </div>

        <Section eyebrow="Especialidades" title="Atendimento sob medida para cada tipo de cabelo" subtitle="Tratamentos exclusivos para mega hair, prótese capilar, química e cachos, com a expertise que transforma a imagem e eleva a confiança.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Mega Hair", text: "Volume e naturalidade com técnica premium.", href: "/mega-hair" },
              { title: "Prótese Capilar", text: "Acabamento impecável e visual sofisticado.", href: "/protese-capilar" },
              { title: "Química", text: "Tratamentos para brilho, lisos e saúde capilar.", href: "/quimica" },
              { title: "Cachos", text: "Definição, hidratação e cuidado para sua textura.", href: "/cachos" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#e8d7c4] bg-white p-6 shadow-soft">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-900 text-lg text-gold-300">✦</div>
                <h3 className="text-2xl text-brand-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                <Link href={item.href} className="mt-5 inline-flex text-sm font-semibold text-brand-900 hover:text-gold-500">
                  Saiba mais →
                </Link>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Serviços em destaque" title="Resultados feitos para realçar sua imagem" subtitle="Selecionamos os tratamentos mais procurados para quem busca um cabelo bonito, bem cuidado e com acabamento premium.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {destaques.map((servico) => (
              <ServiceCard key={servico.slug} servico={servico} />
            ))}
          </div>
        </Section>

        <Section eyebrow="Antes e depois" title="Transformações que mostram o impacto real" subtitle="A beleza do resultado está na naturalidade, no equilíbrio e na expressão visual da sua personalidade.">
          <AntesDepoisGrid items={antesDepois} limit={4} />
          <div className="mt-8 text-center">
            <Link href="/antes-e-depois" className="inline-flex items-center rounded-full border border-brand-900 px-5 py-3 text-sm font-semibold text-brand-900 hover:bg-brand-900 hover:text-white">
              Ver galeria completa
            </Link>
          </div>
        </Section>

        <Section eyebrow="Sobre a Bruna" title="A profissional por trás da excelência" subtitle="Com 9 anos de experiência, Bruna Borges combina técnica, visão estética e atendimento acolhedor para cuidar do seu cabelo com verdade e sofisticação.">
          <div className="grid gap-8 md:grid-cols-[1.1fr_1.5fr] md:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-[#e8d7c4] bg-white p-3 shadow-soft">
              <Image src="/placeholders/bruna.png" alt="Bruna Borges, especialista em cabelo" width={700} height={820} sizes="(max-width: 768px) 100vw, 50vw" className="h-full w-full rounded-[1.5rem] object-cover" />
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Bruna Borges construiu sua trajetória com foco em técnica, naturalidade e autoestima. Sua abordagem combina expertise em mega hair, prótese capilar, química e cachos para transformar a imagem com equilíbrio e delicadeza.
              </p>
              <p>
                Cada atendimento é planejado para respeitar a estrutura do cabelo, as preferências da cliente e o estilo que ela deseja viver. O cuidado vai além do resultado visual: ele inclui educação capilar, confiança e um ambiente acolhedor.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-4 shadow-soft">
                  <p className="text-3xl font-semibold text-brand-900">9+</p>
                  <p className="mt-2 text-sm text-slate-600">anos de experiência</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-soft">
                  <p className="text-3xl font-semibold text-brand-900">4</p>
                  <p className="mt-2 text-sm text-slate-600">especialidades</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-soft">
                  <p className="text-3xl font-semibold text-brand-900">100%</p>
                  <p className="mt-2 text-sm text-slate-600">atendimento premium</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section eyebrow="Depoimentos" title="Clientes que confiaram no cuidado do studio" subtitle="Experiências reais de quem encontrou beleza, confiança e resultados surpreendentes com a técnica da Bruna.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {depoimentos.map((item) => (
              <div key={item.nome} className="rounded-2xl border border-[#e8d7c4] bg-white p-6 shadow-soft">
                <p className="text-lg leading-8 text-slate-700">“{item.texto}”</p>
                <div className="mt-6 border-t border-[#f0e0d1] pt-4">
                  <p className="font-semibold text-brand-900">{item.nome}</p>
                  <p className="text-sm text-slate-500">{item.servico}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="FAQ" title="Dúvidas mais comuns" subtitle="Tudo para você entender melhor o processo, os cuidados e o tipo de atendimento mais adequado ao seu cabelo.">
          <Faq items={faqGeral} />
        </Section>

        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] bg-brand-900 px-5 py-10 text-[#f8efe8] shadow-[0_30px_70px_rgba(44,11,16,0.18)] md:px-10 md:py-12">
              <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">Atendimento premium</p>
                  <h2 className="mt-4 max-w-xl text-4xl text-[#fff8f3] md:text-5xl">Seu cabelo merece um cuidado exclusivo.</h2>
                  <p className="mt-5 max-w-xl text-base leading-7 text-[#f6efe9]/80">
                    Agende seu atendimento e descubra como a técnica certa pode transformar seu visual com beleza, conforto e elegância.
                  </p>
                </div>
                <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-300">Endereço</p>
                    <p className="mt-2 text-base text-[#f8efe8]">{site.endereco.completo}</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold-300">Horário</p>
                    <p className="mt-2 text-base text-[#f8efe8]">Terça a Sábado, 10h às 20h</p>
                  </div>
                  <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                    <WhatsAppCTA mensagem="Olá! Quero agendar um atendimento no Studio Bruna Borges HS." label="Agendar agora" className="w-full justify-center bg-gold-500 text-base" />
                    <Link href="/contato" className="inline-flex w-full items-center justify-center rounded-full border border-gold-300/60 px-5 py-3 text-base font-semibold text-gold-300 transition hover:bg-gold-300 hover:text-brand-900">
                      Ver contato
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-white/10">
                <iframe
                  title="Mapa do Studio Bruna Borges HS"
                  src="https://www.google.com/maps?q=-8.1889,-34.9256&z=15&output=embed"
                  className="h-[280px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
