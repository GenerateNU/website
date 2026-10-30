import './style.css';
import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type FeatureListProps = {
  projects: Project[];
  basePath: string;
};

const formatPosition = (index: number): string => String(index + 1).padStart(2, '0');

// Every featured project, one after another, each with a large picture and its whole story. There are no
// tabs, arrows or timers: scrolling is the only thing a visitor has to do to see all of them.
export default function FeatureList({ projects, basePath }: FeatureListProps) {
  return (
    <ol className="pp15-list">
      {projects.map((project, index) => (
        <li key={project.slug} className="pp15-feature">
          {/* A second, mouse-only way in: people expect the big picture itself to open the project. */}
          <ProjectLink
            basePath={basePath}
            slug={project.slug}
            className="pp15-feature-visual"
            tabIndex={-1}
            aria-hidden="true"
          >
            <ProjectMedia project={project} className="pp15-feature-media" />
          </ProjectLink>
          <div className="pp15-feature-body">
            <span className="pp15-feature-position" aria-hidden="true">
              {formatPosition(index)}
            </span>
            <div className="pp15-feature-meta">
              {project.teams.map(team => (
                <TeamTag key={team} team={team} />
              ))}
              <span className="pp15-feature-semester">{formatSemester(project.semester)}</span>
            </div>
            <h3 className="pp15-feature-name">{project.name}</h3>
            {project.description && <p className="pp15-feature-desc">{project.description}</p>}
            {project.client && (
              <figure className="pp15-feature-quote">
                <blockquote>“{project.client.quote}”</blockquote>
                <figcaption>
                  {project.client.name}, {project.client.school}
                </figcaption>
              </figure>
            )}
            <ProjectLink basePath={basePath} slug={project.slug} className="pp15-feature-cta">
              See the full project <span aria-hidden="true">→</span>
            </ProjectLink>
          </div>
        </li>
      ))}
    </ol>
  );
}
