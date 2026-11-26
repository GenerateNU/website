import { useRef, useState } from 'react';

import type { ProjectTeam } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';
import useProjectOverlay from '@/shared/useProjectOverlay';

import DetailPanel from './DetailPanel';
import FilterBar from './FilterBar';
import ProjectGrid from './ProjectGrid';
import { matchesTeam, roster } from './roster';
import useAnnouncement from './useAnnouncement';
import useEscape from './useEscape';
import useHoverIntent from './useHoverIntent';
import usePanelScroll from './usePanelScroll';

// How long the pointer rests on a tile before it previews itself, so a quick sweep triggers nothing.
const HOVER_INTENT_MS = 120;

const countFor = (team: ProjectTeam | null): number => roster.filter(entry => matchesTeam(entry, team)).length;

// Everything happens where the visitor is looking: resting on a tile previews it in place, and pressing
// it opens its details right under its row. The open project lives in the URL (?project=slug): opening
// pushes it, so Back closes; switching to another tile replaces it.
export default function Browser() {
  const { project, openProject, closeProject, switchProject } = useProjectOverlay();
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const [team, setTeam] = useState<ProjectTeam | null>(null);
  const [previewSlug, setPreviewSlug] = useState<string | undefined>(undefined);
  const [paused, setPaused] = useState(false);
  const gridRef = useRef<HTMLUListElement>(null);
  const hover = useHoverIntent(HOVER_INTENT_MS, setPreviewSlug);
  const { headingRef, bodyRef, holdTile, focusHeadingNext } = usePanelScroll(gridRef, project?.slug);
  const announcement = useAnnouncement(project);

  const visible = roster.filter(entry => matchesTeam(entry, team));

  const press = (slug: string, viaKeyboard: boolean): void => {
    if (project?.slug === slug) {
      closeProject();

      return;
    }

    holdTile(slug);

    if (viaKeyboard) {
      focusHeadingNext();
    }

    (project ? switchProject : openProject)(slug);
  };

  // A different filter rearranges the rows, so any open panel closes first.
  const changeTeam = (next: ProjectTeam | null): void => {
    if (project) {
      closeProject();
    }

    setTeam(next);
  };

  const clearPreview = (slug: string): void => {
    hover.cancel();
    setPreviewSlug(current => (current === slug ? undefined : current));
  };

  useEscape(project !== undefined, closeProject);

  return (
    <section className="pp21-browse" aria-labelledby="pp21-browse-heading">
      <div className="pp21-browse-head">
        <h2 id="pp21-browse-heading" className="pp21-label pp21-label--bright">
          Choose a project
        </h2>
        <FilterBar team={team} countFor={countFor} onChange={changeTeam} />
      </div>
      <p className="pp21-sr-only">Each project opens its details right below its row.</p>
      <p className="pp21-sr-only" aria-live="polite">
        {announcement}
      </p>
      <ProjectGrid
        gridRef={gridRef}
        projects={visible}
        previewSlug={previewSlug}
        openProject={project}
        videosAllowed={motionAllowed && !paused}
        onPointerEnter={slug => canHover && hover.start(slug)}
        onPointerLeave={clearPreview}
        onFocusTile={slug => {
          hover.cancel();
          setPreviewSlug(slug);
        }}
        onBlurTile={clearPreview}
        onPress={press}
        renderPanel={(column, columns) =>
          project && (
            <DetailPanel
              project={project}
              column={column}
              columns={columns}
              headingRef={headingRef}
              bodyRef={bodyRef}
              paused={paused}
              onTogglePause={() => setPaused(!paused)}
              onClose={closeProject}
            />
          )
        }
      />
    </section>
  );
}
