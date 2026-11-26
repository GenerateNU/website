import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatNumber } from '@/component/ProjectsPageV8/FeaturedBanner/formatNumber';
import { formatSemester } from '@/data/projectData';

import { waypoints } from './route';

type CatalogueProps = {
  basePath: string;
};

// The plain list under the chart: every project as a card, newest first, for anyone who'd rather browse.
export default function Catalogue({ basePath }: CatalogueProps) {
  return (
    <section className="pp18-catalogue" aria-labelledby="pp18-catalogue-heading">
      <div className="pp18-section-head">
        <h2 id="pp18-catalogue-heading" className="pp18-section-title">
          Catalogue
        </h2>
        <p className="pp18-section-intro">All {waypoints.length} projects, newest first.</p>
      </div>
      <ul className="pp18-cards">
        {waypoints.map((project, index) => (
          <li key={project.slug}>
            <ProjectLink basePath={basePath} slug={project.slug} className="pp18-card">
              <ProjectMedia project={project} className="pp18-card-media" />
              <span className="pp18-card-body">
                <span className="pp18-card-number">Waypoint {formatNumber(index)}</span>
                <h3 className="pp18-card-name">{project.name}</h3>
                <span className="pp18-card-meta">
                  {project.teams.map(team => (
                    <TeamTag key={team} team={team} />
                  ))}
                  <span>{formatSemester(project.semester)}</span>
                </span>
              </span>
            </ProjectLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
