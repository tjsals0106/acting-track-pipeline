import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages project site: https://<owner>.github.io/<repo>/
const site = process.env.SITE_URL || 'https://tjsals0106.github.io';
const base = process.env.SITE_BASE || '/acting-track-pipeline';

export default defineConfig({
  site,
  base,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    server: { fs: { allow: ['..'] } },
  },
});
