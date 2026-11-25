import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const scripts = defineCollection({
  loader: glob({
    base: '../01-monologue-scripts',
    pattern: ['*.md', '!README.md', '!template.md', '!links-*.md'],
  }),
});

export const collections = { scripts };
