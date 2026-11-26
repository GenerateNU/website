import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import { planetSurface } from './route';

type PlanetProps = {
  project: Project;
  index: number;
  basePath: string;
  // Where it sits along the panorama, in percent of the window's width.
  left: number;
};

// One waypoint in the flight window: a planet (featured) or a small moon, with the project's picture
// docked in front of it as a station, and its name underneath. The planets are the window's scenery,
// a mouse-only way in; keyboard and screen-reader visitors use the docking panel and the catalogue.
export default function Planet({ project, index, basePath, left }: PlanetProps) {
  const featured = project.featured === true;

  return (
    <ProjectLink
      basePath={basePath}
      slug={project.slug}
      className={`pp18-site${featured ? ' pp18-site--featured' : ''}`}
      style={{ left: `${left}%` }}
      tabIndex={-1}
      aria-hidden="true"
      draggable={false}
    >
      <span className="pp18-planet" style={{ backgroundImage: planetSurface(project, index) }}>
        <span className="pp18-planet-bands" />
      </span>
      {featured && <span className="pp18-planet-ring" />}
      <div className="pp18-station">
        <ProjectMedia project={project} />
      </div>
      <span className="pp18-site-name">
        {project.name} <span className="pp18-site-semester">· {formatSemester(project.semester)}</span>
      </span>
    </ProjectLink>
  );
}
