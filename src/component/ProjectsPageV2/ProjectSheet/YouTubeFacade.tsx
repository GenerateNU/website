import { useState } from 'react';

type YouTubeFacadeProps = {
  id: string;
  title: string;
  poster?: string;
};

export default function YouTubeFacade({ id, title, poster }: YouTubeFacadeProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      // oxlint-disable-next-line react/iframe-missing-sandbox -- YouTube's player needs both scripts and its own origin; it only loads after an explicit click.
      <iframe
        className="pp2-sheet-embed"
        src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button type="button" className="pp2-sheet-facade" onClick={() => setLoaded(true)}>
      {poster && <img src={poster} alt="" />}
      <span className="pp2-sheet-play" aria-hidden="true">
        ▶
      </span>
      <span className="visually-hidden">Play video: {title}</span>
    </button>
  );
}
