import NavBar from '@/component/NavBar';
import useCarouselScroll from '@/component/ProjectsPageV2/FeaturedCarousel/useCarouselScroll';
import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import BannerHeading from './BannerHeading';
import { formatNumber } from './formatNumber';
import type { BannerProps } from './types';

type CompactCardProps = {
  project: Project;
  basePath: string;
};

// The whole card is one big tap target; the button-styled label just makes that obvious.
function CompactCard({ project, basePath }: CompactCardProps) {
  return (
    <ProjectLink basePath={basePath} slug={project.slug} className="pp8-card">
      <ProjectMedia project={project} className="pp8-card-media" />
      <span className="pp8-card-body">
        <span className="pp8-slide-meta">
          {project.teams.map(team => (
            <TeamTag key={team} team={team} />
          ))}
          <span className="pp8-slide-semester">{formatSemester(project.semester)}</span>
        </span>
        <span className="pp8-card-name">{project.name}</span>
        {project.description && <span className="pp8-card-desc">{project.description}</span>}
        <span className="pp8-cta pp8-card-cta">
          See the full project <span aria-hidden="true">→</span>
        </span>
      </span>
    </ProjectLink>
  );
}

// Touch screens swipe through full cards (the next one peeks in from the edge), and a grid of
// project buttons right below jumps straight to any of them. Nothing moves unless the visitor moves it.
export default function CompactBanner({ projects, basePath }: BannerProps) {
  const { trackRef, activeIndex, handleScroll, goTo } = useCarouselScroll(projects.length);

  return (
    <header className="pp5-hero pp8-banner pp8-banner--compact">
      <NavBar />
      <div className="pp8-inner">
        <div className="pp8-topline">
          <BannerHeading />
        </div>
        <div ref={trackRef} className="pp8-track" onScroll={handleScroll}>
          {projects.map(project => (
            <div key={project.slug} className="pp8-track-slide">
              <CompactCard project={project} basePath={basePath} />
            </div>
          ))}
        </div>
        {/* Phones: a slim position bar keeps the whole banner on one screen; each card shows its own pills. */}
        <nav className="pp8-dots" aria-label="Featured projects">
          <span className="pp8-dots-count" aria-hidden="true">
            {activeIndex + 1} of {projects.length}
          </span>
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              className="pp8-dot"
              aria-current={index === activeIndex ? 'true' : undefined}
              aria-label={`Show ${project.name}`}
              onClick={() => goTo(index)}
            />
          ))}
        </nav>
        {/* Wider touch screens have room for named buttons with their pills, in one row. */}
        <nav className="pp8-picker" aria-label="Featured projects">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              className="pp8-tab"
              data-selected={index === activeIndex ? '' : undefined}
              aria-current={index === activeIndex ? 'true' : undefined}
              aria-label={`${project.name}, ${project.teams.join(' and ')}`}
              onClick={() => goTo(index)}
            >
              <span className="pp8-tab-text">
                <span className="pp8-tab-number">{formatNumber(index)}</span>
                <span className="pp8-tab-name">{project.name}</span>
                <span className="pp8-tab-tags">
                  {project.teams.map(team => (
                    <TeamTag key={team} team={team} />
                  ))}
                </span>
              </span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
