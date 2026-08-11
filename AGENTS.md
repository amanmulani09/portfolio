# Repository Guidelines

## Project Structure & Module Organization

Application code lives in `src/`. Route-level views are in `src/components/pages`, reusable page sections in `src/components/sections`, layout elements in `src/components/layout`, and small shared controls or visuals in `src/components/ui`. Keep portfolio content in `src/data/resume.ts`, shared shapes in `src/types`, hooks in `src/hooks`, and CSS in `src/styles`. Static files such as the résumé, social preview, sitemap, and favicon belong in `public/`. `server/index.js` provides the SPA fallback used by OpenAI Sites; `scripts/prepare-sites-build.mjs` copies it into the generated `dist/` output.

## Build, Test, and Development Commands

- `npm ci`: install the locked dependency set (Node 20.x is required).
- `npm run dev`: start the Vite development server with hot reload.
- `npm run build`: run TypeScript project checks, create the production bundle, and prepare the Sites worker.
- `npm run preview`: serve the production build on all interfaces for final review.

Do not edit or commit `dist/`, `node_modules/`, `*.tsbuildinfo`, or generated JavaScript configuration files.

## Coding Style & Naming Conventions

Follow the existing TypeScript style: two-space indentation, double quotes, semicolons, and trailing commas in multiline structures. Use PascalCase for React components and exported types (`CaseStudyPage`, `ProjectId`), camelCase for functions and data, and the `use` prefix for hooks. Prefer named exports for reusable modules and keep component-specific logic near the component. Use semantic CSS class names and existing design tokens from `src/styles/tokens.css` instead of introducing isolated color or spacing values. TypeScript is strict; avoid `any` and resolve compiler errors rather than suppressing them.

## Testing Guidelines

No automated test framework or coverage threshold is currently configured. Before submitting changes, run `npm run build` and manually verify the home page, `/work/:project` routes, unknown-route handling, theme switching, keyboard navigation, responsive layouts, and reduced-motion behavior as relevant. If adding tests, use colocated `*.test.ts` or `*.test.tsx` files and add the corresponding `npm test` script in the same change.

## Commit & Pull Request Guidelines

Recent history follows Conventional Commit-style subjects such as `feat:`, `fix:`, `style:`, and `refactor:`. Keep commits focused and write imperative, lowercase summaries. Pull requests should explain the user-visible change, list validation performed, link related issues, and include before/after screenshots for visual changes. Call out accessibility, responsive, routing, or deployment implications explicitly.

## Security & Configuration

Never commit `.env` files, credentials, private client details, or unpublished portfolio claims. Treat everything under `public/` as publicly downloadable. Keep deployment routing changes synchronized between `vercel.json` and the Sites fallback when applicable.
