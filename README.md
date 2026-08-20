# Studio Bruna Borges HS

Site institucional em Next.js 15 + TypeScript + Tailwind CSS v4 para o salão de beleza especializado em mega hair e prótese capilar.

## Stack

- Next.js 15 (App Router)
- TypeScript strict
- Tailwind CSS v4
- Sem dependências de UI externas
- Preparado para deploy na Vercel

## Variáveis de ambiente

Copie o arquivo .env.local.example para .env.local e ajuste os valores:

```bash
cp .env.local.example .env.local
```

Arquivo exemplo:

```env
NEXT_PUBLIC_SITE_URL=https://studiobrunaborgeshs.com.br
```

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse:

```bash
http://localhost:3000
```

## Como trocar WhatsApp, Instagram e domínio

- WhatsApp: edite o número em `data/site.ts`
- Instagram: edite `site.instagram` em `data/site.ts`
- Domínio: ajuste `NEXT_PUBLIC_SITE_URL` em `.env.local`
- Fotos/placeholder: substitua os arquivos em `public/placeholders/`

## Checklist de deploy

- Vercel conectado ao repositório
- Definir a variável `NEXT_PUBLIC_SITE_URL` no ambiente do projeto
- Configurar DNS do domínio e apontar para Vercel
- Integrar Google Analytics 4 (GA4)
- Registrar o site no Google Search Console
- Atualizar o Google Meu Negócio com endereço, horários e fotos

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run typecheck
```
