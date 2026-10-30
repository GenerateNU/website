import { useRef, useState } from 'react';
import type { FocusEvent, KeyboardEvent, Ref } from 'react';
import { Link } from 'react-router-dom';

import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import PreviewMedia from '@/component/ProjectsPageV8/FeaturedBanner/PreviewMedia';
import { getGridTarget } from '@/component/ProjectsPageV9/gridCursor';
import type { Project } from '@/data/projectData';
import { FROM_PROJECT_LIST } from '@/shared/useCameFromProjectList';

import { useExperience } from './experience/experience';
import useDemoCursor from './experience/useDemoCursor';
import useInView from './experience/useInView';

type ProjectGridProps = {
  projects: Project[];
  cursor: number;
  basePath: string;
  onCursorChange: (index: number) => void;
};

type TileProps = {
  ref: Ref<HTMLAnchorElement>;
  project: Project;
  basePath: string;
  // Under the cursor (the visitor's or the demo's).
  lit: boolean;
  // The one tile in the grid's Tab order.
  tabStop: boolean;
  label: string;
  playing: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onBlur: (event: FocusEvent<HTMLAnchorElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLAnchorElement>) => void;
};

function Tile({
  ref,
  project,
  basePath,
  lit,
  tabStop,
  label,
  playing,
  onEnter,
  onLeave,
  onBlur,
  onKeyDown,
}: TileProps) {
  const { sfx } = useExperience();

  return (
    <Link
      ref={ref}
      to={`${basePath}/${project.slug}`}
      state={FROM_PROJECT_LIST}
      viewTransition
      className="pp9-tile"
      data-selected={lit ? '' : undefined}
      tabIndex={tabStop ? 0 : -1}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onClick={() => sfx('start')}
    >
      {lit && (
        <span className="pp9-cursor" aria-hidden="true">
          {label}
        </span>
      )}
      <PreviewMedia project={project} playing={playing} className="pp9-tile-media" />
      {project.featured && (
        <span className="pp9-tile-badge">
          <span aria-hidden="true">★</span>
          <span className="pp9-sr-only">Featured</span>
        </span>
      )}
      <span className="pp9-tile-name">{project.name}</span>
      {project.description && <span className="pp12-tile-desc">{project.description}</span>}
      <span className="pp9-tile-tags">
        {project.teams.map(team => (
          <TeamTag key={team} team={team} />
        ))}
      </span>
    </Link>
  );
}

// V11's select grid. The tile under the cursor plays its preview while the visitor points at or tabs
// through the grid, and when nobody has touched anything for a while (on a computer, with the grid on
// screen) the cursor starts walking the tiles by itself, like an arcade demo. The demo only moves the
// highlight: keyboard focus, the page's scroll and the visitor's own cursor all stay where they were.
// The grid is one Tab stop; inside it the arrow keys move the cursor.
export default function ProjectGrid({ projects, cursor, basePath, onCursorChange }: ProjectGridProps) {
  const { motionAllowed, canDemo, paused, idle, sfx } = useExperience();
  const { ref: gridRef, inView } = useInView<HTMLUListElement>();
  const [engaged, setEngaged] = useState(false);
  const tileRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const demo = useDemoCursor(canDemo && idle && inView, cursor, projects.length);
  const lit = demo ?? cursor;
  const previewing = motionAllowed && !paused && (engaged || demo !== null);

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

    if (target !== cursor) {
      sfx('move');
    }

    // Focusing the tile moves the cursor, through its focus handler.
    tileRefs.current[target]?.focus();
  };

  return (
    <ul ref={gridRef} className="pp9-grid pp12-grid">
      {projects.map((project, index) => (
        <li key={project.slug} className="pp9-slot pp12-spawn">
          <Tile
            ref={element => {
              tileRefs.current[index] = element;
            }}
            project={project}
            basePath={basePath}
            lit={index === lit}
            tabStop={index === cursor}
            label={demo === null ? 'P1 ▼' : 'Demo ▼'}
            playing={previewing && index === lit}
            onEnter={() => moveTo(index)}
            onLeave={() => setEngaged(false)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        </li>
      ))}
    </ul>
  );
}
