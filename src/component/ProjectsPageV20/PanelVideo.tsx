import { useEffect, useRef } from 'react';

type PanelVideoProps = {
  src: string;
  poster: string;
  label: string;
  // Motion is allowed and the visitor hasn't pressed Pause.
  playing: boolean;
};

// A project video that starts muted and looping when motion is allowed, and stops with the Pause button.
// The native controls stay, for sound and scrubbing.
export default function PanelVideo({ src, poster, label, playing }: PanelVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (playing) {
      // Browsers may still refuse to play (data saver, low power mode); the poster stays up then.
      void video?.play().catch(() => undefined);
    } else {
      video?.pause();
    }
  }, [playing]);

  return (
    <video
      ref={videoRef}
      className="pp20-video"
      src={src}
      poster={poster}
      aria-label={label}
      controls
      muted
      loop
      playsInline
      preload="metadata"
    >
      <track kind="captions" />
    </video>
  );
}
