# 10 Portfolio and Deployment

Astro + Tailwind static site. It builds to `dist/` and is deployed to GitHub Pages by `.github/workflows/deploy-portfolio.yml`.

## Local use

```
cd 10-portfolio-deployment
npm install
npm run dev
```

## Deployment

- Pushes to `main` that touch this folder, the monologue folder, or the workflow file run the build and deploy.
- The site URL is https://tjsals0106.github.io/acting-track-pipeline/ once Pages is enabled.
- One-time setup: in the repo settings, under Pages, set Source to GitHub Actions.

## Release checklist

- [ ] Final reel link
- [ ] Monologue video links
- [ ] Headshot and resume updated
- [ ] Links tested
- [ ] Date published
