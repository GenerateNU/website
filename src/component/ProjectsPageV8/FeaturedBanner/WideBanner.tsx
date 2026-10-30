import { TabGroup, TabList, TabPanels } from '@headlessui/react';
import { useState } from 'react';
import type { FocusEvent } from 'react';

import NavBar from '@/component/NavBar';
import { getPreviewVideo } from '@/data/projectData';
import type { Project } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';

import BannerHeading from './BannerHeading';
import BannerSlide from './BannerSlide';
import BannerTab from './BannerTab';
import type { BannerProps } from './types';

const hasPreviewVideo = (project: Project | undefined): boolean =>
  project !== undefined && getPreviewVideo(project) !== undefined;

type PauseButtonProps = {
  paused: boolean;
  onToggle: () => void;
};

function PauseButton({ paused, onToggle }: PauseButtonProps) {
  return (
    <button type="button" className="pp8-pause" onClick={onToggle}>
      <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span> {paused ? 'Play' : 'Pause'}
    </button>
  );
}

// The wide-screen billboard. It advances on its own only where research says that is tolerable
// (a mouse that can hover to pause it, motion allowed), shows a progress bar so the change is never
// a surprise, holds still under the pointer or keyboard focus, and stops for good once a project is picked.
// The active project's preview video plays on its own; the other projects' play while their tab is pointed at.
export default function WideBanner({ projects, basePath }: BannerProps) {
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

  // The progress bar's animation is the timer, so pausing it pauses the countdown exactly where it is.
  const advance = (): void => setActiveIndex((activeIndex + 1) % projects.length);

  const handleBlur = (event: FocusEvent<HTMLElement>): void => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setFocused(false);
    }
  };

  return (
    <header className="pp5-hero pp8-banner pp8-banner--wide">
      <NavBar />
      <div className="pp8-inner">
        <div className="pp8-topline">
          <BannerHeading />
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
              <BannerSlide
                key={project.slug}
                project={project}
                index={index}
                total={projects.length}
                basePath={basePath}
                playVideo={motionAllowed && !paused}
              />
            ))}
          </TabPanels>
          <TabList className="pp8-tabs" aria-label="Featured projects">
            {projects.map((project, index) => (
              <BannerTab
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
      </div>
    </header>
  );
}
