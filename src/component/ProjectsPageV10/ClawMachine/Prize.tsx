import type { KeyboardEvent, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import type { Project } from '@/data/projectData';
import { FROM_PROJECT_LIST } from '@/shared/useCameFromProjectList';

type PrizeProps = {
  project: Project;
  basePath: string;
  selected: boolean;
  grabbed: boolean;
  linkRef: (element: HTMLAnchorElement | null) => void;
  onSelect: () => void;
  onClick: (event: MouseEvent<HTMLAnchorElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLAnchorElement>) => void;
};

// A real link to the project, so it still opens in a new tab or without the claw.
export default function Prize({
  project,
  basePath,
  selected,
  grabbed,
  linkRef,
  onSelect,
  onClick,
  onKeyDown,
}: PrizeProps) {
  return (
    <li className="pp10-slot">
      <Link
        ref={linkRef}
        to={`${basePath}/${project.slug}`}
        state={FROM_PROJECT_LIST}
        className="pp10-prize"
        data-selected={selected ? '' : undefined}
        data-grabbed={grabbed ? '' : undefined}
        tabIndex={selected ? 0 : -1}
        onMouseEnter={onSelect}
        onFocus={onSelect}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        <span className="pp10-prize-box">
          <ProjectMedia project={project} className="pp10-prize-media" />
        </span>
        <span className="pp10-prize-name">{project.name}</span>
      </Link>
    </li>
  );
}
