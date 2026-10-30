import useCarouselScroll from '@/component/ProjectsPageV2/FeaturedCarousel/useCarouselScroll';
import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatNumber } from '@/component/ProjectsPageV8/FeaturedBanner/formatNumber';
import type { BannerProps } from '@/component/ProjectsPageV8/FeaturedBanner/types';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import AttractHeading from './AttractHeading';

type CompactCardProps = {
  project: Project;
  basePath: string;
};

// The whole card is one big tap target; the start-button label just makes that obvious.
function CompactCard({ project, basePath }: CompactCardProps) {
  return (
    <ProjectLink basePath={basePath} slug={project.slug} className="pp11-card">
      <span className="pp9-crt">
        <ProjectMedia project={project} />
      </span>
      <span className="pp11-card-body">
        <span className="pp11-card-meta">
          {project.teams.map(team => (
            <TeamTag key={team} team={team} />
          ))}
          <span className="pp11-card-semester">{formatSemester(project.semester)}</span>
        </span>
        <span className="pp9-monitor-name pp11-card-name">{project.name}</span>
        {project.description && <span className="pp11-card-desc">{project.description}</span>}
        <span className="pp9-start pp11-card-start">
          <span aria-hidden="true">▶</span> Start: view project
        </span>
      </span>
    </ProjectLink>
  );
}

// Touch screens swipe through full cards (the next one peeks in from the edge), and the buttons right below
// jump straight to any of them. Nothing moves unless the visitor moves it.
export default function CompactAttract({ projects, basePath }: BannerProps) {
  const { trackRef, activeIndex, handleScroll, goTo } = useCarouselScroll(projects.length);

  return (
    <section className="pp11-attract" aria-labelledby="pp11-attract-heading">
      <div className="pp11-attract-head">
        <AttractHeading />
      </div>
      <div ref={trackRef} className="pp11-track" onScroll={handleScroll}>
        {projects.map(project => (
          <div key={project.slug} className="pp11-track-slide">
            <CompactCard project={project} basePath={basePath} />
          </div>
        ))}
      </div>
      {/* Phones: a slim row of pixel blocks keeps the whole card on one screen. */}
      <nav className="pp11-dots" aria-label="Featured projects">
        <span className="pp11-dots-count" aria-hidden="true">
          {formatNumber(activeIndex)}/{formatNumber(projects.length - 1)}
        </span>
        {projects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            className="pp11-dot"
            aria-current={index === activeIndex ? 'true' : undefined}
            aria-label={`Show ${project.name}`}
            onClick={() => goTo(index)}
          />
        ))}
      </nav>
      {/* Wider touch screens have room for named buttons, in one row. */}
      <nav className="pp11-picker" aria-label="Featured projects">
        {projects.map((project, index) => (
          <button
            key={project.slug}
            type="button"
            className="pp11-tab"
            data-selected={index === activeIndex ? '' : undefined}
            aria-current={index === activeIndex ? 'true' : undefined}
            aria-label={`${project.name}, ${project.teams.join(' and ')}`}
            onClick={() => goTo(index)}
          >
            <span className="pp11-tab-text">
              <span className="pp11-tab-number">{formatNumber(index)}</span>
              <span className="pp11-tab-name">{project.name}</span>
            </span>
          </button>
        ))}
      </nav>
    </section>
  );
}
