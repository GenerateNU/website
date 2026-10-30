import { TabGroup, TabList, TabPanels } from '@headlessui/react';
import { useState } from 'react';
import type { FocusEvent } from 'react';

import type { BannerProps } from '@/component/ProjectsPageV8/FeaturedBanner/types';
import { getPreviewVideo } from '@/data/projectData';
import type { Project } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';

import AttractHeading from './AttractHeading';
import AttractSlide from './AttractSlide';
import AttractTab from './AttractTab';

const hasPreviewVideo = (project: Project | undefined): boolean =>
  project !== undefined && getPreviewVideo(project) !== undefined;

type PauseButtonProps = {
  paused: boolean;
  onToggle: () => void;
};

function PauseButton({ paused, onToggle }: PauseButtonProps) {
  return (
    <button type="button" className="pp11-pause" onClick={onToggle}>
      <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span> {paused ? 'Play' : 'Pause'}
    </button>
  );
}

// V8's billboard on the cabinet's monitor. It cycles through the featured projects only where that is
// tolerable (a mouse that can hover to hold it, motion allowed), shows a countdown bar so the change is never
// a surprise, holds still under the pointer or keyboard focus, and stops for good once a project is picked.
export default function WideAttract({ projects, basePath }: BannerProps) {
  const canRotate = useMediaQuery('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const [activeIndex, setActiveIndex] = useState(0);
  const [picked, setPicked] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const autoRotates = canRotate && !picked && projects.length > 1;
  const running = autoRotates && !paused && !hovered && !focused;
  const hasActiveVideo = motionAllowed && hasPreviewVideo(projects[activeIndex]);
  // One button stops everything that moves on its own: the rotation and the active video.
  const showPause = autoRotates || hasActiveVideo;

  const pick = (index: number): void => {
    setActiveIndex(index);
    setPicked(true);
  };

  // The countdown bar's animation is the timer, so pausing it pauses the countdown exactly where it is.
  const advance = (): void => setActiveIndex((activeIndex + 1) % projects.length);

  const handleBlur = (event: FocusEvent<HTMLElement>): void => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setFocused(false);
    }
  };

  return (
    <section className="pp11-attract" aria-labelledby="pp11-attract-heading">
      <div className="pp11-attract-head">
        <AttractHeading />
        {showPause && <PauseButton paused={paused} onToggle={() => setPaused(!paused)} />}
      </div>
      {/* Only the slide and its tabs hold the rotation, so a pointer resting elsewhere on screen doesn't. */}
      <TabGroup
        selectedIndex={activeIndex}
        onChange={pick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={handleBlur}
      >
        <TabPanels>
          {projects.map((project, index) => (
            <AttractSlide
              key={project.slug}
              project={project}
              index={index}
              total={projects.length}
              basePath={basePath}
              playVideo={motionAllowed && !paused}
            />
          ))}
        </TabPanels>
        <TabList className="pp11-tabs" aria-label="Featured projects">
          {projects.map((project, index) => (
            <AttractTab
              key={project.slug}
              project={project}
              index={index}
              showProgress={autoRotates}
              running={running}
              canPreview={motionAllowed}
              onProgressEnd={advance}
            />
          ))}
        </TabList>
      </TabGroup>
    </section>
  );
}
