import type { Project } from '@/data/projectData';

import { getNeighbour } from './roster';
import type { SelectProject } from './roster';

type AdjacentProjectsProps = {
  project: Project;
  list: Project[];
  onSelect: SelectProject;
};

// Previous / Next at the foot of a project, walking the current filter's order and wrapping at the ends.
export default function AdjacentProjects({ project, list, onSelect }: AdjacentProjectsProps) {
  if (list.length < 2) {
    return null;
  }

  const previous = getNeighbour(list, project, -1);
  const next = getNeighbour(list, project, 1);

  return (
    <nav className="pp20-adjacent" aria-label="More projects">
      {/* A click with no pointer position (detail 0) came from Enter or Space. */}
      <button
        type="button"
        className="pp20-adjacent-link"
        onClick={event => onSelect(previous.slug, event.detail === 0)}
      >
        <span className="pp20-label">← Previous project</span>
        <span className="pp20-adjacent-name">{previous.name}</span>
      </button>
      <button
        type="button"
        className="pp20-adjacent-link pp20-adjacent-link--next"
        onClick={event => onSelect(next.slug, event.detail === 0)}
      >
        <span className="pp20-label">Next project →</span>
        <span className="pp20-adjacent-name">{next.name}</span>
      </button>
    </nav>
  );
}
