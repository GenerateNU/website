import type { Project, ProjectTeam } from '@/data/projectData';

import FilterBar from './FilterBar';
import PreviewPanel from './PreviewPanel';
import ProjectGrid from './ProjectGrid';

type BrowseViewProps = {
  // Wide screens show the preview panel beside the grid; phones show the grid alone.
  wide: boolean;
  projects: Project[];
  previewed: Project | undefined;
  revealSlug: string | undefined;
  team: ProjectTeam | null;
  countFor: (team: ProjectTeam | null) => number;
  paused: boolean;
  onTeamChange: (team: ProjectTeam | null) => void;
  onPointerEnter: (slug: string) => void;
  onPointerLeave: () => void;
  onFocusTile: (slug: string) => void;
  onOpen: (slug: string) => void;
  onTogglePause: () => void;
};

// The resting layout: the preview panel stays in view on the left while the visitor browses the grid.
export default function BrowseView(props: BrowseViewProps) {
  const { wide, projects, previewed, revealSlug, team, countFor, paused, onTeamChange, onOpen, onTogglePause } = props;

  return (
    <>
      {wide && previewed && (
        <PreviewPanel
          project={previewed}
          paused={paused}
          onTogglePause={onTogglePause}
          onOpen={() => onOpen(previewed.slug)}
        />
      )}
      <section className="pp20-select" aria-labelledby="pp20-select-heading">
        <div className="pp20-select-head">
          <h2 id="pp20-select-heading" className="pp20-label pp20-label--bright">
            Choose a project
          </h2>
          <FilterBar team={team} countFor={countFor} onChange={onTeamChange} />
        </div>
        <p className="pp20-sr-only">Focusing a project previews it; pressing it opens the full project.</p>
        <ProjectGrid
          projects={projects}
          previewed={wide ? previewed : undefined}
          revealSlug={revealSlug}
          onPointerEnter={props.onPointerEnter}
          onPointerLeave={props.onPointerLeave}
          onFocusTile={props.onFocusTile}
          onOpen={onOpen}
        />
      </section>
    </>
  );
}
