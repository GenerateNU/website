import './style.css';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import ProjectLink from '../ProjectLink';
import ProjectMedia from '../ProjectMedia';
import TeamTag from '../TeamTag';

type ProjectGridProps = {
  projects: Project[];
  basePath: string;
};

// Everything is visible up front (image, name, summary, labels), so nothing depends on hovering.
export default function ProjectGrid({ projects, basePath }: ProjectGridProps) {
  return (
    <ul className="pp5-grid">
      {projects.map(project => (
        <li key={project.slug} className="pp5-tile-item">
          <ProjectLink basePath={basePath} slug={project.slug} className="pp5-tile">
            <ProjectMedia project={project} className="pp5-tile-media" />
            <span className="pp5-tile-body">
              <span className="pp5-tile-meta">
                {project.teams.map(team => (
                  <TeamTag key={team} team={team} />
                ))}
                <span className="pp5-tile-semester">{formatSemester(project.semester)}</span>
              </span>
              <span className="pp5-tile-name">{project.name}</span>
              {project.description && <span className="pp5-tile-desc">{project.description}</span>}
              <span className="pp5-tile-cta">
                See the full project <span aria-hidden="true">→</span>
              </span>
            </span>
          </ProjectLink>
        </li>
      ))}
    </ul>
  );
}
