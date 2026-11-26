import { useLayoutEffect, useRef } from 'react';

import type { Project } from '@/data/projectData';

import type { SelectProject } from './roster';
import Thumb from './Thumb';

type ProjectStripProps = {
  projects: Project[];
  current: Project;
  onSelect: SelectProject;
};

// A slim row of every project at the top of the open detail, so the visitor can jump to another one
// without closing. It scrolls sideways and keeps the open project in view.
export default function ProjectStrip({ projects, current, onSelect }: ProjectStripProps) {
  const stripRef = useRef<HTMLUListElement>(null);

  // Scrolls only the strip, never the page, to centre the open project.
  useLayoutEffect(() => {
    const strip = stripRef.current;
    const item = strip?.querySelector<HTMLElement>(`[data-slug="${current.slug}"]`);

    if (strip && item) {
      strip.scrollLeft = item.offsetLeft - (strip.clientWidth - item.offsetWidth) / 2;
    }
  }, [current.slug]);

  return (
    <nav className="pp20-strip-wrap" aria-label="All projects">
      <ul ref={stripRef} className="pp20-strip">
        {projects.map(project => (
          <li key={project.slug}>
            <button
              type="button"
              className="pp20-strip-item"
              data-slug={project.slug}
              aria-current={project === current ? 'true' : undefined}
              // Focus stays in the strip, so keyboard visitors can keep moving along it.
              onClick={() => onSelect(project.slug, false)}
            >
              <Thumb project={project} className="pp20-strip-media" />
              <span className="pp20-strip-name">{project.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
