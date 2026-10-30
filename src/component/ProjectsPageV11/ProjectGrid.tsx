import { useRef, useState } from 'react';
import type { FocusEvent, KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';

import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import PreviewMedia from '@/component/ProjectsPageV8/FeaturedBanner/PreviewMedia';
import { getGridTarget } from '@/component/ProjectsPageV9/gridCursor';
import type { Project } from '@/data/projectData';
import { FROM_PROJECT_LIST } from '@/shared/useCameFromProjectList';
import useMediaQuery from '@/shared/useMediaQuery';

type ProjectGridProps = {
  projects: Project[];
  cursor: number;
  basePath: string;
  onCursorChange: (index: number) => void;
};

// V9's select grid, without the monitor beside it: each tile carries its own picture and blurb, and the
// tile under the cursor plays its preview video while the visitor is pointing at or tabbing through the grid.
// The grid is one Tab stop; inside it the arrow keys move the cursor.
export default function ProjectGrid({ projects, cursor, basePath, onCursorChange }: ProjectGridProps) {
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const [engaged, setEngaged] = useState(false);
  const gridRef = useRef<HTMLUListElement>(null);
  const tileRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const moveTo = (index: number): void => {
    onCursorChange(index);
    setEngaged(true);
  };

  // Tabbing from one tile to the next keeps the preview going; leaving the grid stops it.
  const handleBlur = (event: FocusEvent<HTMLAnchorElement>): void => {
    if (!gridRef.current?.contains(event.relatedTarget)) {
      setEngaged(false);
    }
  };

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
    <ul ref={gridRef} className="pp9-grid pp11-grid">
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
              onMouseEnter={() => moveTo(index)}
              onMouseLeave={() => setEngaged(false)}
              onFocus={() => moveTo(index)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            >
              {selected && (
                <span className="pp9-cursor" aria-hidden="true">
                  P1 ▼
                </span>
              )}
              <PreviewMedia
                project={project}
                playing={motionAllowed && engaged && selected}
                className="pp9-tile-media"
              />
              {project.featured && (
                <span className="pp9-tile-badge">
                  <span aria-hidden="true">★</span>
                  <span className="pp9-sr-only">Featured</span>
                </span>
              )}
              <span className="pp9-tile-name">{project.name}</span>
              {project.description && <span className="pp11-tile-desc">{project.description}</span>}
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
