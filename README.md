# Aman Mulani Portfolio

Frontend-only portfolio for Aman Mulani, AI + Full-Stack Engineer focused on multi-agent systems, RAG, backend platforms, product interfaces, and production operations.

Design and interaction system reproduced from the owner-approved Samkit Kothari portfolio source, with content and public assets replaced from Aman's résumé.

## Experience

- AI + full-stack product system map in the hero.
- Five public-source case studies: Chitra.ai, RAG Architecture Lab, Codo, PGKhata, and Shodh.
- Decision logs, simplified system models, constraints, outcomes, and learnings.
- Professional journey, operating principles, LinkedIn writing, measured impact, and technical toolkit.
- Separate local blog archive and article routes sourced only from Aman's LinkedIn profile.
- Dated LinkedIn reaction snapshots plus private device-local article appreciation; no database or analytics endpoint.
- Light and dark themes, responsive layouts, reduced-motion behavior, and keyboard-accessible interactions.
- React Bits spotlight and magnetic interactions, active-section navigation, and scroll progress.
- Credibility-first homepage order: experience, selected work, toolkit, then supporting story and principles.

## Stack

- React 18
- TypeScript
- Vite
- CSS
- Lucide React
- React Bits source components (licensed notice in `THIRD_PARTY_NOTICES.md`)

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

Set public production origin before building:

```bash
VITE_SITE_URL=https://your-domain.example npm run build
```

`VITE_SITE_URL` enables absolute canonical URLs, Open Graph URLs, sitemap generation, and crawler-readable HTML metadata for every case-study and blog route. Keep it unset until final public domain is known; publishing placeholder canonical URLs damages indexing signals.

SEO output includes descriptive titles and summaries, `ProfilePage`/`Person`/`CreativeWork` structured data, `robots.txt`, `sitemap.xml`, social preview metadata, and pre-rendered route shells. Search ranking remains dependent on useful content, crawlability, authority, links, performance, and indexing; metadata alone cannot guarantee rank.

No database, Drizzle schema, authentication, or application backend is included. `server/index.js` only provides static SPA route fallback for OpenAI Sites.
