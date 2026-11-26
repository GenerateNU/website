import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import PreviewMedia from '@/component/ProjectsPageV8/FeaturedBanner/PreviewMedia';
import { formatSemester, getPreviewVideo } from '@/data/projectData';
import type { Project } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';

import PauseButton from './PauseButton';
import { getBand } from './roster';

type PreviewPanelProps = {
  project: Project;
  paused: boolean;
  onTogglePause: () => void;
  onOpen: () => void;
};

// The preview beside the grid: whatever the visitor points at shows here big, its video playing.
// The whole panel opens the project, through the name's button stretched across it.
export default function PreviewPanel({ project, paused, onTogglePause, onOpen }: PreviewPanelProps) {
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const hasVideo = motionAllowed && getPreviewVideo(project) !== undefined;

  return (
    <section className="pp20-preview" aria-labelledby="pp20-preview-name">
      <div className="pp20-preview-screen">
        {/* Keyed so each newly previewed project's video starts from the beginning. */}
        <PreviewMedia key={project.slug} project={project} playing={motionAllowed && !paused} />
        {hasVideo && <PauseButton paused={paused} onToggle={onTogglePause} />}
      </div>
      <div className={`pp20-band pp20-band--${getBand(project)}`}>
        <h2 id="pp20-preview-name" className="pp20-preview-name">
          <button type="button" className="pp20-preview-open" onClick={onOpen}>
            {project.name}
            <span className="pp20-sr-only">: open the project</span>
          </button>
        </h2>
      </div>
      <div className="pp20-preview-body">
        <p className="pp20-label">{project.featured ? 'Featured project' : 'Project'}</p>
        <p className="pp20-meta">
          {project.teams.map(team => (
            <TeamTag key={team} team={team} />
          ))}
          <span>{formatSemester(project.semester)}</span>
          <span>{project.members.length} people</span>
        </p>
        {project.description && <p className="pp20-preview-desc">{project.description}</p>}
        <p className="pp20-preview-hint">
          <span aria-hidden="true">→</span> Click a project to open it
        </p>
      </div>
    </section>
  );
}
