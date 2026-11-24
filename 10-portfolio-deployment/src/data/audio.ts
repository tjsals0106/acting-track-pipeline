export interface AudioTake {
  title: string;
  date: string;
  focus: string;
  src: string;
}

/**
 * Voice and diction takes. `src` is either a direct, publicly playable file URL (mp3, m4a, ogg, wav)
 * or a path under public/, e.g. 'audio/diction-01.mp3'. Empty `src` renders as "link pending".
 */
export const audioTakes: AudioTake[] = [
  {
    title: 'Breath & phonation warmup',
    date: '2026-11-24',
    focus: 'Diaphragm engagement, steady onset',
    src: '',
  },
  {
    title: 'Articulation drill — final t / s clusters',
    date: '2026-11-24',
    focus: 'Crisp consonants at pace',
    src: '',
  },
  {
    title: 'Cold Restraint — vocal run',
    date: '2026-11-24',
    focus: 'Even pace until "the chip", then half speed',
    src: '',
  },
];
