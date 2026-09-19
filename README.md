# Masjid Noor

Public website for Masjid Noor — programmes, community stories, location, and contact.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com) v4
- TypeScript

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All visitor-facing copy, programmes, testimonials, and contact details live in a single file:

[`src/content/site.ts`](src/content/site.ts)

Replace bracketed placeholders (`[Street address]`, bank details, etc.) with verified mosque information before publishing.

## Images

Place photography in `public/images/` (see that folder’s README). Until then, the site uses an architectural light treatment so the layout stays polished.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm typecheck` | TypeScript check |
| `pnpm lint` | ESLint |
| `pnpm start` | Run production server |
