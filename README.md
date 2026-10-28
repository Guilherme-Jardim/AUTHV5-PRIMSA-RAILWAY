# AUTHV5-PRIMSA-RAILWAY

Projeto de estudo de autenticação com Auth.js v5 (NextAuth), Prisma e PostgreSQL hospedado no Railway. Tem login com Google, área logada, área de administração e CRUD de produtos por API.

## Tecnologias

- Next.js 14 (App Router), React e TypeScript
- Auth.js v5 com login Google e sessão em banco
- Prisma e PostgreSQL
- Tailwind CSS

## Como instalar e rodar

```bash
git clone https://github.com/Guilherme-Jardim/AUTHV5-PRIMSA-RAILWAY.git
cd AUTHV5-PRIMSA-RAILWAY
npm install
cp .env.example .env   # preencha as variáveis
npx prisma migrate deploy
npm run dev
```

Abra http://localhost:3000. Precisa de um PostgreSQL (pode ser o do Railway) e de um cliente OAuth do Google.

A API de produtos fica em `/api/product`. Leitura é pública; criar, editar e apagar exige estar logado.
