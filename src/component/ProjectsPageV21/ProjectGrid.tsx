import { Fragment, useRef } from 'react';
import type { KeyboardEvent, ReactNode, RefObject } from 'react';

import { getGridTarget } from '@/component/ProjectsPageV9/gridCursor';
import type { Project } from '@/data/projectData';

import { getRowEnd } from './roster';
import Tile from './Tile';
import useColumnCount from './useColumnCount';

type ProjectGridProps = {
  gridRef: RefObject<HTMLUListElement | null>;
  projects: Project[];
  previewSlug: string | undefined;
  openProject: Project | undefined;
  // Tiles play their preview video while previewing (motion allowed, not paused).
  videosAllowed: boolean;
  onPointerEnter: (slug: string) => void;
  onPointerLeave: (slug: string) => void;
  onFocusTile: (slug: string) => void;
  onBlurTile: (slug: string) => void;
  onPress: (slug: string, viaKeyboard: boolean) => void;
  // The open project's details, given where its tile sits in its row.
  renderPanel: (column: number, columns: number) => ReactNode;
};

// The grid is the navigation. Every tile is its own Tab stop (the arrow keys also move between them),
// and the open project's panel is placed right after the last tile of its row, across the full width,
// so Tab goes tile → panel → next row.
export default function ProjectGrid(props: ProjectGridProps) {
  const { gridRef, projects, previewSlug, openProject, videosAllowed, renderPanel } = props;
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const columns = useColumnCount(gridRef);
  const openIndex = openProject ? projects.indexOf(openProject) : -1;
  const panelAfter = openIndex < 0 ? -1 : getRowEnd(openIndex, columns, projects.length);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number): void => {
    const target = getGridTarget(event.key, { cursor: index, count: projects.length, grid: gridRef.current });

    if (target === undefined) {
      return;
    }

    event.preventDefault();
    tileRefs.current[target]?.focus();
  };

  return (
    <ul ref={gridRef} className="pp21-grid">
      {projects.map((project, index) => (
        // Keyed by the row's last tile, so switching within a row keeps the same panel and only its content changes.
        <Fragment key={project.slug}>
          <li className="pp21-slot">
            <Tile
              project={project}
              previewing={project.slug === previewSlug}
              open={index === openIndex}
              playVideo={videosAllowed && project.slug === previewSlug}
              tileRef={element => {
                tileRefs.current[index] = element;
              }}
              onPointerEnter={() => props.onPointerEnter(project.slug)}
              onPointerLeave={() => props.onPointerLeave(project.slug)}
              onFocus={() => props.onFocusTile(project.slug)}
              onBlur={() => props.onBlurTile(project.slug)}
              // A click with no pointer position (detail 0) came from Enter or Space.
              onPress={event => props.onPress(project.slug, event.detail === 0)}
              onKeyDown={event => handleKeyDown(event, index)}
            />
          </li>
          {index === panelAfter && <li className="pp21-panel-slot">{renderPanel(openIndex % columns, columns)}</li>}
        </Fragment>
      ))}
    </ul>
  );
}
