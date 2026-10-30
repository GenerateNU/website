import { useRef } from 'react';

import './style.css';
import { formatSemester, getPreviewVideo } from '@/data/projectData';
import type { Project } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';

import ProjectMedia from '../ProjectMedia';
import TeamTag from '../TeamTag';

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (slug: string) => void;
};

const STAGGER_MS = 40;

const MAX_STAGGER_STEPS = 6;

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const previewVideo = getPreviewVideo(project);
  const showHoverVideo = previewVideo !== undefined && canHover && !reducedMotion;

  const startPreview = (): void => {
    const video = videoRef.current;

    if (video) {
      void video.play().catch(() => undefined);
    }
  };

  const stopPreview = (): void => {
    const video = videoRef.current;

    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <article
      className={`pp2-card ${showHoverVideo ? 'pp2-card--video' : ''}`}
      style={{ animationDelay: `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms` }}
    >
      <div className="pp2-card-media">
        <ProjectMedia project={project} />
        {showHoverVideo && (
          <video
            ref={videoRef}
            className="pp2-card-video"
            src={previewVideo.src}
            poster={previewVideo.poster}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            tabIndex={-1}
          />
        )}
        {project.featured && <span className="pp2-card-badge">Featured</span>}
        {previewVideo && (
          <span className="pp2-card-video-badge">
            <span aria-hidden="true">▶ </span>Video
          </span>
        )}
      </div>
      <div className="pp2-card-body">
        <p className="pp2-card-semester">{formatSemester(project.semester)}</p>
        <h3 className="pp2-card-title">
          {/* Stretched over the whole card, so the entire card is one click/tap target. */}
          <button
            type="button"
            className="pp2-card-button"
            onClick={() => onOpen(project.slug)}
            onPointerEnter={startPreview}
            onPointerLeave={stopPreview}
            onFocus={startPreview}
            onBlur={stopPreview}
          >
            {project.name}
          </button>
        </h3>
        <div className="pp2-card-tags">
          {project.teams.map(team => (
            <TeamTag key={team} team={team} />
          ))}
        </div>
        {project.description && <p className="pp2-card-description">{project.description}</p>}
        <span className="pp2-card-cta" aria-hidden="true">
          View project <span className="pp2-card-cta-arrow">→</span>
        </span>
      </div>
    </article>
  );
}
