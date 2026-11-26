import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import PreviewMedia from '@/component/ProjectsPageV8/FeaturedBanner/PreviewMedia';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type DockingPanelProps = {
  // The waypoint the ship is docked at, or heading for while in transit.
  project: Project;
  docked: boolean;
  basePath: string;
  playVideo: boolean;
};

function Docked({ project, basePath, playVideo }: Omit<DockingPanelProps, 'docked'>) {
  return (
    <div className="pp18-dock-body">
      {/* A second, mouse-only way in: people expect the big picture itself to open the project. */}
      <ProjectLink basePath={basePath} slug={project.slug} className="pp18-dock-scope" tabIndex={-1} aria-hidden="true">
        <PreviewMedia project={project} playing={playVideo} />
      </ProjectLink>
      <div className="pp18-dock-copy">
        <h3 className="pp18-dock-name">{project.name}</h3>
        <div className="pp18-dock-meta">
          {project.teams.map(team => (
            <TeamTag key={team} team={team} />
          ))}
          <span>{formatSemester(project.semester)}</span>
          <span>{project.members.length} team members</span>
        </div>
        {project.description !== undefined && <p className="pp18-dock-desc">{project.description}</p>}
        <ProjectLink basePath={basePath} slug={project.slug} className="pp18-cta-button">
          See the full project <span aria-hidden="true">→</span>
        </ProjectLink>
      </div>
    </div>
  );
}

function InTransit({ project }: Pick<DockingPanelProps, 'project'>) {
  return (
    <div className="pp18-dock-body pp18-dock-body--transit">
      <div className="pp18-dock-scope" aria-hidden="true">
        <ProjectMedia project={project} />
      </div>
      <div className="pp18-dock-copy">
        <h3 className="pp18-dock-name">In transit to {project.name}</h3>
        <p className="pp18-dock-desc">
          Next waypoint: {formatSemester(project.semester)}. Keep scrolling to dock, or press Next.
        </p>
      </div>
    </div>
  );
}

// Where the waypoint the ship has reached is shown in full: its picture (or preview video), what it is,
// and the way into it. Between waypoints it says where the ship is headed.
export default function DockingPanel({ project, docked, basePath, playVideo }: DockingPanelProps) {
  return (
    <section className="pp18-dock" aria-labelledby="pp18-dock-status">
      <p id="pp18-dock-status" className={`pp18-panel-label${docked ? ' is-docked' : ''}`}>
        <span className="pp18-dock-light" aria-hidden="true" /> {docked ? 'Docked' : 'In transit'}
      </p>
      {docked ? (
        <Docked key={project.slug} project={project} basePath={basePath} playVideo={playVideo} />
      ) : (
        <InTransit key={project.slug} project={project} />
      )}
    </section>
  );
}
