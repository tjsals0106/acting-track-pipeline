const ID = /^[A-Za-z0-9_-]{11}$/;

export function youtubeId(input: string | undefined): string | null {
  if (!input) return null;
  const value = input.trim();
  if (ID.test(value)) return value;
  try {
    const u = new URL(value);
    const host = u.hostname.replace(/^www\.|^m\./, '');
    if (host === 'youtu.be') return match(u.pathname.slice(1));
    if (host === 'youtube.com' || host === 'youtube-nocookie.com' || host === 'music.youtube.com') {
      const v = u.searchParams.get('v');
      if (v) return match(v);
      const [, kind, id] = u.pathname.split('/');
      if (['embed', 'shorts', 'live', 'v'].includes(kind ?? '')) return match(id);
    }
  } catch {
    return null;
  }
  return null;
}

function match(id: string | undefined): string | null {
  return id && ID.test(id) ? id : null;
}
