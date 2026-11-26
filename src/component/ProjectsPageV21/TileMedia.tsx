import { useEffect, useRef } from 'react';

import { getPreviewVideo } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type TileMediaProps = {
  project: Project;
  // The tile is previewing itself and motion is allowed.
  playing: boolean;
};

// The tile's picture as phrasing content (it sits inside a button). Mockups are transparent PNGs on the
// site's pale blueprint grid; logos are full-bleed art. A project with a preview video plays it over the
// picture while the tile previews; the poster is the same picture, so nothing jumps when it starts.
export default function TileMedia({ project, playing }: TileMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideo = getPreviewVideo(project);

  useEffect(() => {
    const video = videoRef.current;

    if (playing) {
      // Browsers may still refuse to play (data saver, low power mode); the picture stays up then.
      void video?.play().catch(() => undefined);
    } else {
      video?.pause();
    }
  }, [playing]);

  return (
    <span className={`pp21-media pp21-media--${project.imageKind}`}>
      {/* The project name is always next to the picture, so the picture itself is decorative. */}
      <img src={project.image} alt="" loading="lazy" draggable={false} />
      {previewVideo && (
        <video
          ref={videoRef}
          className="pp21-media-video"
          src={previewVideo.src}
          poster={previewVideo.poster}
          aria-hidden="true"
          muted
          loop
          playsInline
          preload="none"
        />
      )}
    </span>
  );
}
