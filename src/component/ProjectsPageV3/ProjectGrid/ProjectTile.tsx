import { Link } from 'react-router-dom';

import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import ProjectMedia from '../ProjectMedia';
import TeamTag from '../TeamTag';

type ProjectTileProps = {
  project: Project;
};

// Everything is visible up front (image, name, summary, labels), so nothing depends on hovering.
export default function ProjectTile({ project }: ProjectTileProps) {
  return (
    <li className="pp3-tile-item">
      <Link to={`/projects-v3/${project.slug}`} className="pp3-tile">
        <ProjectMedia project={project} className="pp3-tile-media" />
        <span className="pp3-tile-body">
          <span className="pp3-tile-meta">
            {project.teams.map(team => (
              <TeamTag key={team} team={team} />
            ))}
            <span className="pp3-tile-semester">{formatSemester(project.semester)}</span>
          </span>
          <span className="pp3-tile-name">{project.name}</span>
          {project.description && <span className="pp3-tile-desc">{project.description}</span>}
          <span className="pp3-tile-cta">
            See the full project <span aria-hidden="true">→</span>
          </span>
        </span>
      </Link>
    </li>
  );
}
