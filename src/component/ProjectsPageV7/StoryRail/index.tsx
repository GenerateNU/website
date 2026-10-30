import './style.css';
import useCarouselDrag from '@/component/ProjectsPageV2/FeaturedCarousel/useCarouselDrag';
import useCarouselScroll from '@/component/ProjectsPageV2/FeaturedCarousel/useCarouselScroll';
import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type StoryRailProps = {
  projects: Project[];
  basePath: string;
};

// Tall story cards in a row the visitor moves through themselves: the next card peeks in from the edge,
// and it never moves on its own. Swipe, trackpad, mouse drag, arrows and Tab all work.
export default function StoryRail({ projects, basePath }: StoryRailProps) {
  const { trackRef, activeIndex, handleScroll, goTo, settleDrag } = useCarouselScroll(projects.length);
  const { isDragging, ...dragHandlers } = useCarouselDrag(trackRef, settleDrag);
  const lastIndex = projects.length - 1;

  return (
    <div className="pp7-rail">
      {/* oxlint-disable-next-line jsx-a11y/no-static-element-interactions -- mouse dragging only; touch, trackpad and keyboard scroll natively. */}
      <div
        ref={trackRef}
        className={`pp7-track ${isDragging ? 'is-dragging' : ''}`}
        onScroll={handleScroll}
        {...dragHandlers}
      >
        {projects.map(project => (
          <div key={project.slug} className="pp7-slide">
            <ProjectLink basePath={basePath} slug={project.slug} className="pp7-card" draggable={false}>
              <span className="pp7-card-body">
                <span className="pp7-card-meta">
                  {project.teams.map(team => (
                    <TeamTag key={team} team={team} />
                  ))}
                  <span className="pp7-card-semester">{formatSemester(project.semester)}</span>
                </span>
                <span className="pp7-card-name">{project.name}</span>
                {project.description && <span className="pp7-card-desc">{project.description}</span>}
                <span className="pp7-card-cta">
                  {/* A non-breaking space keeps the arrow with the words on narrow cards. */}
                  See the full project{'\u00a0'}
                  <span aria-hidden="true">→</span>
                </span>
              </span>
              <ProjectMedia project={project} className="pp7-card-media" />
            </ProjectLink>
          </div>
        ))}
      </div>
      <div className="pp7-controls">
        <p className="pp7-count" aria-live="polite">
          {activeIndex + 1} of {projects.length}
        </p>
        <div className="pp7-arrows">
          <button
            type="button"
            className="pp7-arrow"
            aria-label="Previous project"
            disabled={activeIndex === 0}
            onClick={() => goTo(activeIndex - 1)}
          >
            ←
          </button>
          <button
            type="button"
            className="pp7-arrow"
            aria-label="Next project"
            disabled={activeIndex === lastIndex}
            onClick={() => goTo(activeIndex + 1)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
