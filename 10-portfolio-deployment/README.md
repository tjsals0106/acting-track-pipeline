# 10 Portfolio and Deployment

Static Astro + Tailwind CSS site. `.github/workflows/deploy-portfolio.yml` builds it on every pull request and deploys it to GitHub Pages (Source: GitHub Actions) on every push to `main` that touches this folder, `01-monologue-scripts/`, or the workflow.

Live URL: https://tjsals0106.github.io/acting-track-pipeline/

## Release checklist

- [ ] Final reel link
- [ ] Monologue video links
- [ ] Headshot and resume updated
- [ ] Links tested
- [ ] Date published

## Where to edit

| What | File |
|---|---|
| Name, headline, representation, contact links | `src/data/profile.ts` |
| Monologue reels (paste any YouTube link or ID) | `src/data/reels.ts` |
| Voice and diction takes (audio URL, or a file in `public/audio/` referenced as `audio/<file>`) | `src/data/audio.ts` |
| Script archive | `01-monologue-scripts/*.md` (read at build time; `README.md`, `template.md` and `links-*.md` are skipped) |

Every value in `src/data/profile.ts` is a placeholder. Empty links, `youtube`, or `src` values render as placeholders, "in edit", or "link pending". The site is dark by default; the nav toggle switches to light and remembers the choice.

## Commands

Run from this directory (Node 22+):

```sh
npm ci
npm run dev      # http://localhost:4321/acting-track-pipeline/
npm run build    # astro check + static build to dist/
npm run preview
```

## One-time GitHub setup

Settings → Pages → Source: GitHub Actions.
