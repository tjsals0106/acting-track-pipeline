import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// SITE_URL and SITE_BASE are set by the GitHub Actions workflow.
// Locally they fall back to a root-relative dev setup.
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.SITE_BASE || '/',
  integrations: [tailwind()],
});
