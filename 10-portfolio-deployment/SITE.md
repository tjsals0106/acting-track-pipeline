# Portfolio site

Static Astro + Tailwind site, built from this folder and deployed to GitHub Pages (gh-pages branch) by `.github/workflows/deploy-portfolio.yml` on pushes to `main`.

- Edit your details, YouTube IDs and audio list in `src/data/profile.ts`. Every value there is a placeholder.
- Put audio files in `public/audio/` and reference them as `audio/<file>`.
- The script archive reads `../01-monologue-scripts/*.md` (README and template are skipped).
- Local: `npm install && npm run dev`, build: `npm run build`.
- One-time repo setting: Settings > Pages > Source: Deploy from a branch > `gh-pages` / root.
