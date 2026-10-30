import type { Ref } from 'react';

import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import { formatNumber } from '@/component/ProjectsPageV8/FeaturedBanner/formatNumber';
import PreviewMedia from '@/component/ProjectsPageV8/FeaturedBanner/PreviewMedia';
import { useExperience } from '@/component/ProjectsPageV12/experience/experience';
import useInView from '@/component/ProjectsPageV12/experience/useInView';
import type { Project } from '@/data/projectData';

type StageProps = {
  ref: Ref<HTMLDivElement>;
  projects: Project[];
  active: number;
  basePath: string;
  onPick: (index: number) => void;
};

// The monitor that stays put while the stories scroll past it. It only mirrors the story next to it (so
// it's hidden from screen readers); the buttons under it jump to any project without scrolling by hand.
export default function Stage({ ref, projects, active, basePath, onPick }: StageProps) {
  const { motionAllowed, paused, sfx } = useExperience();
  const { ref: screenRef, inView } = useInView<HTMLDivElement>();
  const project = projects[active];

  if (!project) {
    return null;
  }

  return (
    <div ref={ref} className="pp13-stage">
      <p className="pp13-channel" aria-hidden="true">
        <span className="pp13-channel-number">CH {formatNumber(active)}</span> {project.name}
      </p>
      <div ref={screenRef}>
        {/* A second, mouse-only way in: people expect the big picture itself to open the project. */}
        <ProjectLink
          basePath={basePath}
          slug={project.slug}
          className="pp9-crt pp13-crt"
          tabIndex={-1}
          aria-hidden="true"
          viewTransition
          onClick={() => sfx('start')}
        >
          {/* Keyed so the screen "tunes in" again, and the video starts over, on every change of channel. */}
          <PreviewMedia
            key={project.slug}
            project={project}
            playing={motionAllowed && !paused && inView}
            className="pp9-crt-media"
          />
        </ProjectLink>
      </div>
      <nav className="pp13-rail" aria-label="Featured projects">
        {projects.map((entry, index) => (
          <button
            key={entry.slug}
            type="button"
            className="pp13-rail-button"
            aria-current={index === active ? 'true' : undefined}
            aria-label={`Go to ${entry.name}`}
            data-spark
            onClick={() => onPick(index)}
          >
            <span className="pp13-rail-number">{formatNumber(index)}</span>
            <span className="pp13-rail-name">{entry.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
