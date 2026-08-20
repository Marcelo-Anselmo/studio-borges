"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categorias } from "@/data/servicos";
import { buildWhatsAppLink, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-900/15 bg-white text-brand-900 shadow-soft"
      >
        <span className="sr-only">Menu</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
          <path d={open ? "M6 6L18 18M18 6L6 18" : "M4 7H20M4 12H20M4 17H20"} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-4 right-4 top-full mt-3 rounded-2xl border border-[#e8d7c4] bg-white p-4 shadow-soft">
          <nav aria-label="Menu mobile" className="space-y-3">
            <Link href="/" className="block text-base font-medium text-brand-900" onClick={() => setOpen(false)}>
              Início
            </Link>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Especialidades</p>
              {categorias.map((categoria) => (
                <Link
                  key={categoria.slug}
                  href={`/${categoria.slug}`}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-brand-900/5"
                  onClick={() => setOpen(false)}
                >
                  {categoria.nome}
                </Link>
              ))}
            </div>
            <Link href="/precos" className="block text-base font-medium text-brand-900" onClick={() => setOpen(false)}>
              Preços
            </Link>
            <Link href="/antes-e-depois" className="block text-base font-medium text-brand-900" onClick={() => setOpen(false)}>
              Antes & Depois
            </Link>
            <Link href="/sobre" className="block text-base font-medium text-brand-900" onClick={() => setOpen(false)}>
              Sobre
            </Link>
            <Link href="/contato" className="block text-base font-medium text-brand-900" onClick={() => setOpen(false)}>
              Contato
            </Link>
            <a
              href={buildWhatsAppLink("Olá! Quero agendar um atendimento.")}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-4 py-3 text-sm font-semibold text-white"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e9d8c7] bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Ir para a página inicial do Studio Bruna Borges HS">
          <Image
            src="/logo.png"
            alt="Logo Studio Bruna Borges HS"
            width={48}
            height={48}
            priority
            className="h-12 w-12 rounded-full object-cover ring-1 ring-brand-900/10 shadow-soft"
          />
          <div>
            <p className="text-lg font-semibold tracking-[0.12em] text-brand-900">Studio Bruna</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Borges HS</p>
          </div>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          <Link href="/" className="text-sm font-medium text-brand-900 transition hover:text-gold-500">
            Início
          </Link>
          <details className="group relative">
            <summary className="list-none cursor-pointer text-sm font-medium text-brand-900 transition hover:text-gold-500">
              Especialidades
            </summary>
            <div className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-[#e8d7c4] bg-white p-3 shadow-soft">
              {categorias.map((categoria) => (
                <Link
                  key={categoria.slug}
                  href={`/${categoria.slug}`}
                  className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-brand-900/5 hover:text-brand-900"
                >
                  {categoria.nome}
                </Link>
              ))}
            </div>
          </details>
          <Link href="/precos" className="text-sm font-medium text-brand-900 transition hover:text-gold-500">
            Preços
          </Link>
          <Link href="/antes-e-depois" className="text-sm font-medium text-brand-900 transition hover:text-gold-500">
            Antes & Depois
          </Link>
          <Link href="/sobre" className="text-sm font-medium text-brand-900 transition hover:text-gold-500">
            Sobre
          </Link>
          <Link href="/contato" className="text-sm font-medium text-brand-900 transition hover:text-gold-500">
            Contato
          </Link>
        </nav>

        <div className="hidden md:block">
          <WhatsAppCTA mensagem="Olá! Quero agendar um atendimento no Studio Bruna Borges HS." label="Agendar" className="px-4 py-2.5" />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
