// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://tjsals0106.github.io',
  base: process.env.BASE_PATH ?? '/acting-track-pipeline',
  output: 'static',
  trailingSlash: 'ignore',
  markdown: { syntaxHighlight: false },
  vite: {
    plugins: [tailwindcss()],
    server: { fs: { allow: ['..'] } },
  },
});
