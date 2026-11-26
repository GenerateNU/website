import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatNumber } from '@/component/ProjectsPageV8/FeaturedBanner/formatNumber';
import PreviewMedia from '@/component/ProjectsPageV8/FeaturedBanner/PreviewMedia';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type PayloadStageProps = {
  project: Project;
  index: number;
  total: number;
  basePath: string;
  playVideo: boolean;
  // Plays the "payload deploys" entrance; off for the first project and wherever motion is unwelcome.
  deploying: boolean;
};

// The payload stage: the project that last launched, shown big with its story and the way in.
export default function PayloadStage({ project, index, total, basePath, playVideo, deploying }: PayloadStageProps) {
  return (
    <section className={`pp16-stage${deploying ? ' is-deploying' : ''}`} aria-labelledby="pp16-stage-name">
      {/* A second, mouse-only way in: people expect the big picture itself to open the project. */}
      <ProjectLink
        basePath={basePath}
        slug={project.slug}
        className="pp16-stage-visual"
        tabIndex={-1}
        aria-hidden="true"
      >
        <PreviewMedia project={project} playing={playVideo} className="pp16-stage-media" />
      </ProjectLink>
      <div className="pp16-stage-copy">
        <p className="pp16-stage-label">
          Payload {formatNumber(index)} / {formatNumber(total - 1)}
        </p>
        <h2 id="pp16-stage-name" className="pp16-stage-name">
          {project.name}
        </h2>
        <div className="pp16-stage-meta">
          <span className="pp16-stage-semester">{formatSemester(project.semester)}</span>
          {project.teams.map(team => (
            <TeamTag key={team} team={team} />
          ))}
        </div>
        {project.description && <p className="pp16-stage-desc">{project.description}</p>}
        <ProjectLink basePath={basePath} slug={project.slug} className="pp16-button">
          See the full project <span aria-hidden="true">→</span>
        </ProjectLink>
      </div>
    </section>
  );
}
