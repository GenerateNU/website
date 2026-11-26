import { useEffect, useRef } from 'react';
import type { KeyboardEvent } from 'react';

import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { getGridTarget } from '@/component/ProjectsPageV9/gridCursor';
import type { Project } from '@/data/projectData';

import Thumb from './Thumb';

type ProjectGridProps = {
  projects: Project[];
  // The project the preview panel shows; its tile gets a light highlight.
  previewed: Project | undefined;
  // The project to bring on screen when the page opens on it (a shared link, or Back from elsewhere).
  revealSlug: string | undefined;
  onPointerEnter: (slug: string) => void;
  onPointerLeave: () => void;
  onFocusTile: (slug: string) => void;
  onOpen: (slug: string) => void;
};

// Every tile is an ordinary button and its own Tab stop; the arrow keys also move between tiles.
// Pointing previews a tile once the pointer settles; focusing previews it at once; pressing opens it.
export default function ProjectGrid(props: ProjectGridProps) {
  const { projects, previewed, revealSlug, onPointerEnter, onPointerLeave, onFocusTile, onOpen } = props;
  const gridRef = useRef<HTMLUListElement>(null);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reveal = useRef(revealSlug);

  // Only on load: later the visitor is already looking at the tile they used.
  useEffect(() => {
    if (reveal.current !== undefined) {
      gridRef.current?.querySelector(`[data-slug="${reveal.current}"]`)?.scrollIntoView({ block: 'nearest' });
    }
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number): void => {
    const target = getGridTarget(event.key, { cursor: index, count: projects.length, grid: gridRef.current });

    if (target === undefined) {
      return;
    }

    event.preventDefault();
    tileRefs.current[target]?.focus();
  };

  return (
    <ul ref={gridRef} className="pp20-grid">
      {projects.map((project, index) => (
        <li key={project.slug} className="pp20-slot">
          <button
            ref={element => {
              tileRefs.current[index] = element;
            }}
            type="button"
            className="pp20-tile"
            data-slug={project.slug}
            data-previewed={project === previewed ? '' : undefined}
            onMouseEnter={() => onPointerEnter(project.slug)}
            onMouseLeave={onPointerLeave}
            onFocus={() => onFocusTile(project.slug)}
            onClick={() => onOpen(project.slug)}
            onKeyDown={event => handleKeyDown(event, index)}
          >
            <Thumb project={project} className="pp20-tile-media" />
            <span className="pp20-tile-name">{project.name}</span>
            <span className="pp20-tile-meta">
              {project.teams.map(team => (
                <TeamTag key={team} team={team} />
              ))}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
