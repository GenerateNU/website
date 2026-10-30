import { useEffect, useRef } from 'react';

import './PreviewMedia.css';

import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import { getPreviewVideo } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type PreviewMediaProps = {
  project: Project;
  playing: boolean;
  className?: string;
};

// The project picture, or its preview video when it has one. The poster is the project image,
// so a video that isn't playing looks exactly like the picture it replaces.
export default function PreviewMedia({ project, playing, className = '' }: PreviewMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideo = getPreviewVideo(project);

  useEffect(() => {
    const video = videoRef.current;

    if (playing) {
      // Browsers may still refuse to play (data saver, low power mode); the poster stays up then.
      void video?.play().catch(() => undefined);
    } else {
      video?.pause();
    }
  }, [playing]);

  if (previewVideo === undefined) {
    return <ProjectMedia project={project} className={className} />;
  }

  return (
    <span className={`pp5-media pp5-media--${project.imageKind} pp8-video-media ${className}`}>
      {/* The project name is always rendered next to the video, so the video itself is decorative. */}
      <video
        ref={videoRef}
        src={previewVideo.src}
        poster={previewVideo.poster}
        aria-hidden="true"
        muted
        loop
        playsInline
        preload="none"
      />
    </span>
  );
}
