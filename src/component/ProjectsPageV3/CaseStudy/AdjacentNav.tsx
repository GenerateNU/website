import { Link } from 'react-router-dom';

import { getAdjacentProjects } from '@/data/projectData';
import type { Project } from '@/data/projectData';
import useCameFromProjectList, { FROM_PROJECT_LIST } from '@/shared/useCameFromProjectList';

type AdjacentNavProps = {
  project: Project;
  basePath: string;
};

export default function AdjacentNav({ project, basePath }: AdjacentNavProps) {
  const { previous, next } = getAdjacentProjects(project);
  // Paging between projects replaces the entry and keeps its flag, so Back still lands on the list it was opened from.
  const cameFromList = useCameFromProjectList();
  const state = cameFromList ? FROM_PROJECT_LIST : undefined;

  return (
    <nav className="pp3-adjacent" aria-label="More projects">
      <Link to={`${basePath}/${previous.slug}`} replace={cameFromList} state={state} className="pp3-adjacent-link">
        <span className="pp3-adjacent-label">← Previous</span>
        <span className="pp3-adjacent-name">{previous.name}</span>
      </Link>
      <Link
        to={`${basePath}/${next.slug}`}
        replace={cameFromList}
        state={state}
        className="pp3-adjacent-link pp3-adjacent-link--next"
      >
        <span className="pp3-adjacent-label">Next →</span>
        <span className="pp3-adjacent-name">{next.name}</span>
      </Link>
    </nav>
  );
}
