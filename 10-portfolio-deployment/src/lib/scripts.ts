import type { CollectionEntry } from 'astro:content';

export interface ScriptMeta {
  title: string;
  label: string | null;
  note: string | null;
  fields: Record<string, string>;
  character: string | null;
  situation: string | null;
  range: string | null;
  spine: string | null;
  publicDomain: boolean;
  notes: { label: string; text: string }[];
  words: number;
  minutes: number;
}

const NOTE_FIELDS = ['text source', 'rights'];

export function scriptMeta(entry: CollectionEntry<'scripts'>): ScriptMeta {
  const body = entry.body ?? '';
  const h1 = body.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? entry.id;
  const [, label, rest] = h1.match(/^([^:]{1,20}):\s*(.+)$/) ?? [];
  const fields: Record<string, string> = {};
  const intro = body.split(/^##\s/m)[0] ?? '';
  const notes: ScriptMeta['notes'] = [];
  for (const m of intro.matchAll(/^-\s+([^:\n]+):\s*(.+)$/gm)) {
    const key = m[1].trim().toLowerCase();
    const value = m[2].trim().replace(/\*([^*]+)\*/g, '$1');
    if (NOTE_FIELDS.includes(key)) notes.push({ label: m[1].trim(), text: value });
    else fields[key] = value;
  }
  const note =
    intro
      .split(/\n\s*\n/)
      .map((b) => b.trim())
      .find((b) => b && !b.startsWith('#') && !b.startsWith('-')) ?? null;
  const spine = section(body, 'Spine');
  const text = section(body, 'Text') ?? body;
  const words = text.split(/\s+/).filter(Boolean).length;
  return {
    title: rest ?? h1,
    label: label ?? null,
    note,
    fields,
    character: fields['character'] ?? fields['character, age, and status'] ?? null,
    situation: fields['situation'] ?? fields['given circumstances'] ?? null,
    range: fields['range'] ?? null,
    spine,
    publicDomain: notes.length > 0,
    notes,
    words,
    minutes: Math.max(1, Math.round(words / 130)),
  };
}

function section(body: string, name: string): string | null {
  const re = new RegExp(`^##\\s+${name}\\s*$([\\s\\S]*?)(?=^##\\s|$(?![\\s\\S]))`, 'm');
  const out = body.match(re)?.[1]?.trim();
  return out ? out : null;
}

/** Originals first, then public-domain speeches, each alphabetical by file name. */
export function sortScripts<T extends CollectionEntry<'scripts'>>(entries: T[]): T[] {
  const rank = (e: T) => (scriptMeta(e).publicDomain ? 1 : 0);
  return [...entries].sort((a, b) => rank(a) - rank(b) || a.id.localeCompare(b.id));
}
