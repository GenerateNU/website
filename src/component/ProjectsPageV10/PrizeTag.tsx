import { Link } from 'react-router-dom';

import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import PreviewMedia from '@/component/ProjectsPageV8/FeaturedBanner/PreviewMedia';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';
import { FROM_PROJECT_LIST } from '@/shared/useCameFromProjectList';
import useMediaQuery from '@/shared/useMediaQuery';

type PrizeTagProps = {
  project: Project;
  position: number;
  total: number;
  basePath: string;
};

// The card beside the machine describing the prize under the claw, with a plain link for anyone
// who would rather skip the claw.
export default function PrizeTag({ project, position, total, basePath }: PrizeTagProps) {
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');

  return (
    <section className="pp10-tag" aria-labelledby="pp10-tag-name">
      <p className="pp10-tag-label">
        Prize {position} of {total}
        {project.featured && <span className="pp10-tag-featured">★ Featured</span>}
      </p>
      <PreviewMedia key={project.slug} project={project} playing={motionAllowed} className="pp10-tag-media" />
      <h2 id="pp10-tag-name" className="pp10-tag-name">
        {project.name}
      </h2>
      <div className="pp10-tag-meta">
        {project.teams.map(team => (
          <TeamTag key={team} team={team} />
        ))}
        <span className="pp10-tag-semester">{formatSemester(project.semester)}</span>
      </div>
      {project.description && <p className="pp10-tag-desc">{project.description}</p>}
      <Link to={`${basePath}/${project.slug}`} state={FROM_PROJECT_LIST} className="pp10-tag-link">
        Open {project.name} <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
