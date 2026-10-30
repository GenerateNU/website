import { useRef } from 'react';

import { formatSemester, getPreviewVideo } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import ProjectLink from '../ProjectLink';
import ProjectMedia from '../ProjectMedia';
import TeamTag from '../TeamTag';

export type FeaturedVariant = 'hero' | 'wide' | 'standard';

type FeaturedTileProps = {
  project: Project;
  variant: FeaturedVariant;
  canPreview: boolean;
  basePath: string;
};

export default function FeaturedTile({ project, variant, canPreview, basePath }: FeaturedTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideo = canPreview ? getPreviewVideo(project) : undefined;
  // Only the full-width tiles have room for the client quote.
  const client = variant === 'standard' ? undefined : project.client;

  const playPreview = (): void => {
    void videoRef.current?.play().catch(() => undefined);
  };

  const stopPreview = (): void => {
    videoRef.current?.pause();
  };

  return (
    <li className={`pp5-feature pp5-feature--${variant}`}>
      <ProjectLink
        basePath={basePath}
        slug={project.slug}
        className="pp5-feature-card"
        onMouseEnter={playPreview}
        onMouseLeave={stopPreview}
        onFocus={playPreview}
        onBlur={stopPreview}
      >
        <span className="pp5-feature-visual">
          {previewVideo ? (
            <span className={`pp5-media pp5-media--${project.imageKind} pp5-feature-media`}>
              {/* The poster is the project image, so the tile looks the same until it is hovered. */}
              <video
                ref={videoRef}
                className="pp5-feature-video"
                src={previewVideo.src}
                poster={previewVideo.poster}
                aria-hidden="true"
                muted
                loop
                playsInline
                preload="none"
              />
            </span>
          ) : (
            <ProjectMedia project={project} className="pp5-feature-media" />
          )}
          {variant === 'hero' && <span className="pp5-feature-badge">Featured</span>}
        </span>
        <span className="pp5-feature-body">
          <span className="pp5-feature-meta">
            {project.teams.map(team => (
              <TeamTag key={team} team={team} />
            ))}
            <span className="pp5-feature-semester">{formatSemester(project.semester)}</span>
          </span>
          <span className="pp5-feature-name">{project.name}</span>
          {project.description && <span className="pp5-feature-desc">{project.description}</span>}
          {client && (
            <span className="pp5-feature-quote">
              <span className="pp5-feature-quote-text">“{client.quote}”</span>
              <span className="pp5-feature-quote-name">
                {client.name}, {client.school}
              </span>
            </span>
          )}
          <span className="pp5-feature-cta">
            See the full project <span aria-hidden="true">→</span>
          </span>
        </span>
      </ProjectLink>
    </li>
  );
}
