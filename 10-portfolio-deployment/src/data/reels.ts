export interface Reel {
  title: string;
  character: string;
  register: string;
  youtube: string;
  runtime?: string;
  script?: string;
}

/**
 * Paste any YouTube link (watch, youtu.be, shorts, embed) or an 11-character ID into `youtube`.
 * Leave it empty to show the card as "in edit". `script` links to a file id in 01-monologue-scripts.
 */
export const reels: Reel[] = [
  {
    title: 'Cold Restraint',
    character: 'Miriam, 50s — hospital administrator',
    register: 'Low emotion, high control',
    youtube: '',
    runtime: '1:10',
    script: 'cold-restraint-sample',
  },
  {
    title: 'Explosive Confrontation',
    character: 'Renata, 30s — litigator',
    register: 'High volume, aimed fury',
    youtube: '',
    runtime: '1:30',
    script: 'explosive-confrontation-sample',
  },
  {
    title: 'Vulnerable Breakdown',
    character: 'Teo, 20s — line cook',
    register: 'High vulnerability, broken syntax',
    youtube: '',
    runtime: '1:20',
    script: 'vulnerable-breakdown-sample',
  },
];
