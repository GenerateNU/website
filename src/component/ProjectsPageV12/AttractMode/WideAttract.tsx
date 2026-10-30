import { TabGroup, TabList, TabPanels } from '@headlessui/react';
import { useState } from 'react';
import type { FocusEvent } from 'react';

import type { BannerProps } from '@/component/ProjectsPageV8/FeaturedBanner/types';
import { getPreviewVideo } from '@/data/projectData';
import type { Project } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';

import { useExperience } from '../experience/experience';
import useInView from '../experience/useInView';
import AttractHeading from './AttractHeading';
import AttractSlide from './AttractSlide';
import AttractTab from './AttractTab';
import CabinetControls from './CabinetControls';

const hasPreviewVideo = (project: Project | undefined): boolean =>
  project !== undefined && getPreviewVideo(project) !== undefined;

// V8's billboard on the cabinet's monitor. It cycles through the featured projects only where that is
// tolerable (a mouse that can hover to hold it, motion allowed), shows a countdown bar so the change is never
// a surprise, holds still under the pointer or keyboard focus and while scrolled out of sight, and stops for
// good once a project is picked.
export default function WideAttract({ projects, basePath }: BannerProps) {
  const { motionAllowed, canDemo, paused, sfx } = useExperience();
  const canRotate = useMediaQuery('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  const { ref, inView } = useInView<HTMLElement>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [picked, setPicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const autoRotates = canRotate && !picked && projects.length > 1;
  const running = autoRotates && !paused && !hovered && !focused && inView;
  const hasActiveVideo = motionAllowed && hasPreviewVideo(projects[activeIndex]);

  const pick = (index: number): void => {
    sfx('select');
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
    <section ref={ref} className="pp12-attract" aria-labelledby="pp12-attract-heading">
      <div className="pp12-attract-head">
        <AttractHeading />
        {/* One Pause stops everything that moves on its own: the rotation, the videos, the idle demo. */}
        <CabinetControls showPause={autoRotates || hasActiveVideo || canDemo} />
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
              playVideo={motionAllowed && !paused && inView}
            />
          ))}
        </TabPanels>
        <TabList className="pp12-tabs" aria-label="Featured projects">
          {projects.map((project, index) => (
            <AttractTab
              key={project.slug}
              project={project}
              index={index}
              showProgress={autoRotates}
              running={running}
              canPreview={motionAllowed && !paused}
              onProgressEnd={advance}
            />
          ))}
        </TabList>
      </TabGroup>
    </section>
  );
}
