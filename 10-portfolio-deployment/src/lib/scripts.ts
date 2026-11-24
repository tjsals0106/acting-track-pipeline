import { marked } from 'marked';

const files = import.meta.glob('../../../01-monologue-scripts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export interface ScriptEntry {
  slug: string;
  title: string;
  meta: string[];
  html: string;
}

const SKIP = new Set(['README', 'template']);

export function loadScripts(): ScriptEntry[] {
  return Object.entries(files)
    .map(([path, raw]) => {
      const slug = path.split('/').pop()!.replace(/\.md$/, '');
      const lines = raw.split('\n');
      const h1 = lines.find((l) => l.startsWith('# '));
      const title = (h1 ?? '# ' + slug).slice(2).replace(/^Sample:\s*/, '').trim();
      const meta = lines
        .filter((l) => /^- (Character|Situation|Word count|Range):/.test(l))
        .map((l) => l.slice(2));
      return { slug, title, meta, html: marked.parse(raw, { async: false }) as string };
    })
    .filter((s) => !SKIP.has(s.slug))
    .sort((a, b) => a.title.localeCompare(b.title));
}
