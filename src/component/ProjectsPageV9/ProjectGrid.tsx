import { useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';

import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import type { Project } from '@/data/projectData';
import { FROM_PROJECT_LIST } from '@/shared/useCameFromProjectList';

import { getGridTarget } from './gridCursor';

type ProjectGridProps = {
  projects: Project[];
  cursor: number;
  basePath: string;
  onCursorChange: (index: number) => void;
};

// The grid is one Tab stop; inside it the arrow keys move the cursor.
export default function ProjectGrid({ projects, cursor, basePath, onCursorChange }: ProjectGridProps) {
  const gridRef = useRef<HTMLUListElement>(null);
  const tileRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleKeyDown = (event: KeyboardEvent<HTMLAnchorElement>): void => {
    // Space is the other "A button"; a link otherwise only opens on Enter.
    if (event.key === ' ') {
      event.preventDefault();
      event.currentTarget.click();

      return;
    }

    const target = getGridTarget(event.key, { cursor, count: projects.length, grid: gridRef.current });

    if (target === undefined) {
      return;
    }

    event.preventDefault();
    // Focusing the tile moves the cursor, through its focus handler.
    tileRefs.current[target]?.focus();
  };

  return (
    <ul ref={gridRef} className="pp9-grid">
      {projects.map((project, index) => {
        const selected = index === cursor;

        return (
          <li key={project.slug} className="pp9-slot">
            <Link
              ref={element => {
                tileRefs.current[index] = element;
              }}
              to={`${basePath}/${project.slug}`}
              state={FROM_PROJECT_LIST}
              className="pp9-tile"
              data-selected={selected ? '' : undefined}
              tabIndex={selected ? 0 : -1}
              onMouseEnter={() => onCursorChange(index)}
              onFocus={() => onCursorChange(index)}
              onKeyDown={handleKeyDown}
            >
              {selected && (
                <span className="pp9-cursor" aria-hidden="true">
                  P1 ▼
                </span>
              )}
              <ProjectMedia project={project} className="pp9-tile-media" />
              {project.featured && (
                <span className="pp9-tile-badge">
                  <span aria-hidden="true">★</span>
                  <span className="pp9-sr-only">Featured</span>
                </span>
              )}
              <span className="pp9-tile-name">{project.name}</span>
              <span className="pp9-tile-tags">
                {project.teams.map(team => (
                  <TeamTag key={team} team={team} />
                ))}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
