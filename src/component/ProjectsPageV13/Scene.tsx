import type { Ref } from 'react';

import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import { formatNumber } from '@/component/ProjectsPageV8/FeaturedBanner/formatNumber';
import ProjectStats from '@/component/ProjectsPageV11/ProjectStats';
import { useExperience } from '@/component/ProjectsPageV12/experience/experience';
import type { Project } from '@/data/projectData';

type SceneProps = {
  ref: Ref<HTMLLIElement>;
  project: Project;
  index: number;
  total: number;
  basePath: string;
};

// One project's story: ordinary page content in ordinary scrolling, so it reads the same with a keyboard,
// a screen reader or no animation at all. Only the monitor beside it reacts to where it is.
export default function Scene({ ref, project, index, total, basePath }: SceneProps) {
  const { sfx, idle } = useExperience();
  const first = index === 0;

  return (
    <li ref={ref} className="pp13-scene">
      {/* The first story is on screen from the start, so it never shows half-faded or half-typed. */}
      <div className={`pp13-scene-copy${first ? '' : ' pp12-spawn'}`}>
        <p className="pp9-label pp9-label--yellow">
          ★ Featured {formatNumber(index)} / {formatNumber(total - 1)}
        </p>
        <h3 className={`pp9-monitor-name pp13-scene-name${first ? '' : ' pp12-type'}`}>{project.name}</h3>
        <ProjectStats project={project} />
        {project.description && <p className="pp13-scene-desc">{project.description}</p>}
        <ProjectLink
          basePath={basePath}
          slug={project.slug}
          className="pp9-start"
          viewTransition
          onClick={() => sfx('start')}
        >
          <span aria-hidden="true">▶</span> Start: view project
        </ProjectLink>
        {/* Plain words, for anyone who doesn't expect more below; it bobs again if they sit still. */}
        {first && (
          <p className={`pp13-hint${idle ? ' pp13-hint--nudge' : ''}`}>
            <span className="pp13-hint-arrow" aria-hidden="true">
              ▼
            </span>{' '}
            Scroll for the next project
          </p>
        )}
      </div>
    </li>
  );
}
