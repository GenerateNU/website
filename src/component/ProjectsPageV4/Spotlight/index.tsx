import './style.css';
import { formatSemester, getPreviewVideo } from '@/data/projectData';
import type { Project } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';

import ProjectMedia from '../ProjectMedia';
import TeamTag from '../TeamTag';
import SpotlightVideo from './SpotlightVideo';

type SpotlightProps = {
  project: Project;
  index: number;
  onOpen: (slug: string) => void;
};

const formatIndex = (index: number): string => String(index + 1).padStart(2, '0');

export default function Spotlight({ project, index, onOpen }: SpotlightProps) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const previewVideo = getPreviewVideo(project);
  const headingId = `pp4-spotlight-${project.slug}`;
  const isFlipped = index % 2 === 1;

  return (
    <section className={`pp4-spotlight${isFlipped ? ' pp4-spotlight--flipped' : ''}`} aria-labelledby={headingId}>
      <div className="pp4-spotlight-inner">
        <div className="pp4-spotlight-frame">
          <div className={`pp4-spotlight-visual pp4-spotlight-visual--${project.imageKind}`}>
            {previewVideo && !reducedMotion ? (
              <SpotlightVideo video={previewVideo} />
            ) : (
              <ProjectMedia project={project} className="pp4-spotlight-cover" />
            )}
          </div>
        </div>
        <div className="pp4-spotlight-copy">
          <span className="pp4-spotlight-index" aria-hidden="true">
            {formatIndex(index)}
          </span>
          <div className="pp4-spotlight-tags">
            {project.teams.map(team => (
              <TeamTag key={team} team={team} />
            ))}
            <span className="pp4-spotlight-semester">{formatSemester(project.semester)}</span>
          </div>
          <h2 id={headingId} className="pp4-spotlight-name">
            {project.name}
          </h2>
          {project.description && <p className="pp4-spotlight-description">{project.description}</p>}
          {project.client && (
            <figure className="pp4-spotlight-quote">
              <blockquote>“{project.client.quote}”</blockquote>
              <figcaption>
                <span className="pp4-spotlight-quote-name">{project.client.name}</span>
                {project.client.school}
              </figcaption>
            </figure>
          )}
          <button type="button" className="pp4-button" onClick={() => onOpen(project.slug)}>
            Read the case study <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
