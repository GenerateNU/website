import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

// The countdown before the stack turns to the next sheet. Its CSS animation is the timer itself,
// so pausing the animation pauses the countdown exactly where it is.
export type SheetTimer = {
  running: boolean;
  onEnd: () => void;
};

type TitleBlockProps = {
  project: Project;
  index: number;
  total: number;
  basePath: string;
  timer?: SheetTimer;
};

// The title block in the sheet's corner, laid out like the one on an engineering drawing.
export default function TitleBlock({ project, index, total, basePath, timer }: TitleBlockProps) {
  return (
    <div className="pp17-title-block">
      <div className="pp17-cell pp17-cell--name">
        <span className="pp17-cell-label">Project</span>
        <h2 className="pp17-sheet-name">{project.name}</h2>
      </div>
      {project.description !== undefined && (
        <div className="pp17-cell pp17-cell--notes">
          <span className="pp17-cell-label">General notes</span>
          <p className="pp17-notes">{project.description}</p>
        </div>
      )}
      <div className="pp17-cell pp17-cell--meta">
        <p className="pp17-meta-line">
          <span className="pp17-cell-label">Sheet</span> {index + 1} of {total}
        </p>
        <p className="pp17-meta-line">
          <span className="pp17-cell-label">Drawn</span> {formatSemester(project.semester)}
        </p>
        <ProjectLink basePath={basePath} slug={project.slug} className="pp17-button pp17-button--primary">
          See the full project <span aria-hidden="true">→</span>
        </ProjectLink>
      </div>
      {timer !== undefined && (
        <span
          className={`pp17-timer${timer.running ? ' is-running' : ''}`}
          aria-hidden="true"
          onAnimationEnd={timer.onEnd}
        />
      )}
    </div>
  );
}
