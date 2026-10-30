import { useState } from 'react';

type YouTubeFacadeProps = {
  id: string;
  title: string;
  poster?: string;
};

// The iframe is only mounted after a click, so no third-party request happens on page load.
export default function YouTubeFacade({ id, title, poster }: YouTubeFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      // The YouTube player needs both scripts and same-origin to run; the embed is a third-party origin.
      <iframe
        className="pp3-youtube"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        // oxlint-disable-next-line react/iframe-missing-sandbox -- YouTube's player needs both scripts and its own origin; it only loads after an explicit click.
        sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
      />
    );
  }

  return (
    <button
      type="button"
      className="pp3-youtube pp3-youtube-facade"
      style={poster ? { backgroundImage: `url(${poster})` } : undefined}
      onClick={() => setIsPlaying(true)}
    >
      <span className="pp3-youtube-play" aria-hidden="true">
        ▶
      </span>
      <span className="pp3-sr-only">Play video: {title}</span>
    </button>
  );
}
