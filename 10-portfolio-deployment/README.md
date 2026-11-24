# 10 Portfolio and Deployment

Checklist for each release:

- [ ] Final reel link
- [ ] Monologue video links
- [ ] Headshot and resume updated
- [ ] Links tested
- [ ] Date published

## Portfolio Site

Static Astro + Tailwind CSS site, published to GitHub Pages from the `gh-pages` branch by `.github/workflows/deploy-portfolio.yml` on every push to `main`.

Live URL: https://tjsals0106.github.io/acting-track-pipeline/

### Where to edit

| What | File |
|---|---|
| Name, headline, representation, contact links | `src/data/profile.ts` |
| Monologue reels (paste any YouTube link or ID) | `src/data/reels.ts` |
| Voice and diction takes (direct audio file URL) | `src/data/audio.ts` |
| Script archive | `01-monologue-scripts/*.md` (read at build time; `README.md` and `template.md` are skipped) |

Empty `youtube` or `src` values render as "in edit" or "link pending". Keep media in cloud storage and store only links here.

### Commands

Run from this directory (Node 22+):

```sh
npm ci
npm run dev      # http://localhost:4321/acting-track-pipeline/
npm run build    # astro check + static build to dist/
npm run preview
```

### One-time GitHub setup

After the first successful run, open Settings → Pages and set Source to "Deploy from a branch", branch `gh-pages`, folder `/ (root)`.
