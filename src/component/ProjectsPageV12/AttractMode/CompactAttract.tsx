import { useState } from 'react';

import useCarouselScroll from '@/component/ProjectsPageV2/FeaturedCarousel/useCarouselScroll';
import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatNumber } from '@/component/ProjectsPageV8/FeaturedBanner/formatNumber';
import type { BannerProps } from '@/component/ProjectsPageV8/FeaturedBanner/types';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import { useExperience } from '../experience/experience';
import AttractHeading from './AttractHeading';
import CabinetControls from './CabinetControls';

type CompactCardProps = {
  project: Project;
  basePath: string;
};

// The whole card is one big tap target; the start-button label just makes that obvious.
function CompactCard({ project, basePath }: CompactCardProps) {
  const { sfx } = useExperience();

  return (
    <ProjectLink
      basePath={basePath}
      slug={project.slug}
      className="pp12-card"
      viewTransition
      onClick={() => sfx('start')}
    >
      <span className="pp9-crt">
        <ProjectMedia project={project} />
      </span>
      <span className="pp12-card-body">
        <span className="pp12-card-meta">
          {project.teams.map(team => (
            <TeamTag key={team} team={team} />
          ))}
          <span className="pp12-card-semester">{formatSemester(project.semester)}</span>
        </span>
        <span className="pp9-monitor-name pp12-card-name">{project.name}</span>
        {project.description && <span className="pp12-card-desc">{project.description}</span>}
        <span className="pp9-start pp12-card-start">
          <span aria-hidden="true">▶</span> Start: view project
        </span>
      </span>
    </ProjectLink>
  );
}

// Touch screens swipe through full cards (the next one peeks in from the edge), and the buttons right below
// jump straight to any of them. Nothing moves unless the visitor moves it, with one exception: if they sit
// on the first card without touching anything, the cards nudge sideways once to show they can be swiped.
export default function CompactAttract({ projects, basePath }: BannerProps) {
  const { canDemo, idle, sfx } = useExperience();
  const { trackRef, activeIndex, handleScroll, goTo } = useCarouselScroll(projects.length);
  const [hinted, setHinted] = useState(false);
  const hinting = idle && !hinted && activeIndex === 0 && projects.length > 1;

  const show = (index: number): void => {
    sfx('select');
    goTo(index);
  };

  return (
    <section className="pp12-attract" aria-labelledby="pp12-attract-heading">
      <div className="pp12-attract-head">
        <AttractHeading />
        <CabinetControls showPause={canDemo} />
      </div>
      <div
        ref={trackRef}
        className={`pp12-track${hinting ? ' pp12-track--hint' : ''}`}
        onScroll={handleScroll}
        // Other animations inside the cards (the start button's blink) bubble up here too.
        onAnimationEnd={event => {
          if (event.animationName === 'pp12-nudge') {
            setHinted(true);
          }
        }}
      >
        {projects.map(project => (
          <div key={project.slug} className="pp12-track-slide">
            <CompactCard project={project} basePath={basePath} />
          </div>
        ))}
      </div>
      {/* Phones: a slim row of pixel blocks keeps the whole card on one screen. */}
      <nav className="pp12-dots" aria-label="Featured projects">
        <span className="pp12-dots-count" aria-hidden="true">
          {formatNumber(activeIndex)}/{formatNumber(projects.length - 1)}
        </span>
        {projects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            className="pp12-dot"
            aria-current={index === activeIndex ? 'true' : undefined}
            aria-label={`Show ${project.name}`}
            data-spark
            onClick={() => show(index)}
          />
        ))}
      </nav>
      {/* Wider touch screens have room for named buttons, in one row. */}
      <nav className="pp12-picker" aria-label="Featured projects">
        {projects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            className="pp12-tab"
            data-selected={index === activeIndex ? '' : undefined}
            aria-current={index === activeIndex ? 'true' : undefined}
            aria-label={`${project.name}, ${project.teams.join(' and ')}`}
            data-spark
            onClick={() => show(index)}
          >
            <span className="pp12-tab-text">
              <span className="pp12-tab-number">{formatNumber(index)}</span>
              <span className="pp12-tab-name">{project.name}</span>
            </span>
          </button>
        ))}
      </nav>
    </section>
  );
}
