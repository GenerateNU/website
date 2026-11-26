import type { KeyboardEvent, MouseEvent } from 'react';

import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import TileMedia from './TileMedia';

type TileProps = {
  project: Project;
  previewing: boolean;
  open: boolean;
  playVideo: boolean;
  tileRef: (element: HTMLButtonElement | null) => void;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
  onPress: (event: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
};

// One project. Resting on it previews it in place (a lift, its video, and a strip with the semester and
// a line of description); pressing it opens its details under its row, like a disclosure button.
export default function Tile(props: TileProps) {
  const { project, previewing, open, playVideo, tileRef } = props;

  return (
    <button
      ref={tileRef}
      type="button"
      className="pp21-tile"
      data-slug={project.slug}
      data-previewing={previewing ? '' : undefined}
      aria-expanded={open}
      aria-controls={open ? 'pp21-panel' : undefined}
      onMouseEnter={props.onPointerEnter}
      onMouseLeave={props.onPointerLeave}
      // Only keyboard focus previews; a tap or click focuses the tile too, but has nothing to preview for.
      onFocus={event => event.currentTarget.matches(':focus-visible') && props.onFocus()}
      onBlur={props.onBlur}
      onClick={props.onPress}
      onKeyDown={props.onKeyDown}
    >
      <span className="pp21-tile-screen">
        <TileMedia project={project} playing={playVideo} />
        {/* The same facts are in the details panel, so the strip stays out of the button's name. */}
        <span className="pp21-tile-strip" aria-hidden="true">
          <span className="pp21-tile-strip-semester">{formatSemester(project.semester)}</span>
          <span className="pp21-tile-strip-desc">{project.description ?? `${project.members.length} people`}</span>
        </span>
      </span>
      <span className="pp21-tile-name">{project.name}</span>
      <span className="pp21-tile-meta">
        {project.teams.map(team => (
          <TeamTag key={team} team={team} />
        ))}
      </span>
    </button>
  );
}
