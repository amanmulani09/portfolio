# Aman Mulani Portfolio

Frontend-only portfolio for Aman Mulani, AI + Full-Stack Engineer focused on multi-agent systems, RAG, backend platforms, product interfaces, and production operations.

Design and interaction system reproduced from the owner-approved Samkit Kothari portfolio source, with content and public assets replaced from Aman's résumé.

## Experience

- AI + full-stack product system map in the hero.
- Six evidence-backed case studies: THG Commerce Storefront, Razorpay Push Provisioning, HMX Interactive 3D Commerce, Chitra.ai, RAG Architecture Lab, and Codo.
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
VITE_SITE_URL=https://your-custom-domain.example npm run build
```

Production builds default to `https://aman-mulani.vercel.app/` for canonical URLs, Open Graph URLs, sitemap generation, and crawler-readable metadata. Set `VITE_SITE_URL` only when moving to a custom canonical domain; it overrides the Vercel origin.

SEO output includes descriptive titles and summaries, `ProfilePage`/`Person`/`CreativeWork` structured data, `robots.txt`, `sitemap.xml`, social preview metadata, and pre-rendered route shells. Search ranking remains dependent on useful content, crawlability, authority, links, performance, and indexing; metadata alone cannot guarantee rank.

No database, Drizzle schema, authentication, or application backend is included. `server/index.js` only provides static SPA route fallback for OpenAI Sites.
