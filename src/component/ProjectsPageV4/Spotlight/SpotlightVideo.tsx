import { useEffect, useRef } from 'react';

import type { ProjectVideo } from '@/data/projectData';

type SpotlightVideoProps = {
  video: ProjectVideo;
};

const PLAY_THRESHOLD = 0.5;

export default function SpotlightVideo({ video }: SpotlightVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // External DOM sync: play only while at least half the clip is on screen.
  useEffect(() => {
    const element = videoRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            void element.play().catch(() => undefined);
          } else {
            element.pause();
          }
        }
      },
      { threshold: PLAY_THRESHOLD }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="pp4-spotlight-video"
      src={video.src}
      poster={video.poster}
      aria-label={video.alt}
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
