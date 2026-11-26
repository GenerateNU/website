import { useEffect, useState } from 'react';

import type { Project, ProjectTeam } from '@/data/projectData';
import useMediaQuery from '@/shared/useMediaQuery';
import useProjectOverlay from '@/shared/useProjectOverlay';

import BrowseView from './BrowseView';
import PhonePanel from './PhonePanel';
import ProjectDetail from './ProjectDetail';
import { getOpenList, matchesTeam, roster } from './roster';
import type { SelectProject } from './roster';
import useDetailSync from './useDetailSync';
import useEscape from './useEscape';
import useHoverIntent from './useHoverIntent';
import useLayoutTransition from './useLayoutTransition';

// How long the pointer rests on a tile before the preview follows it, so a quick sweep doesn't flicker.
const HOVER_INTENT_MS = 120;

// The project to preview: the one asked for, or the first shown when the filter hides it.
const findOr = (list: Project[], slug: string | undefined): Project | undefined =>
  list.find(entry => entry.slug === slug) ?? list[0];

const countFor = (team: ProjectTeam | null): number => roster.filter(entry => matchesTeam(entry, team)).length;

// Browse by pointing, dive in at full width. On wide screens the preview panel follows the pointer;
// opening a project grows that panel into the full detail while the grid fades away. On phones a tap
// slides the project up over the grid. The open project lives in the URL (?project=slug): opening
// pushes it, so Back closes; switching inside the detail replaces it.
export default function Console() {
  const { project, openProject, closeProject, switchProject } = useProjectOverlay();
  const wide = useMediaQuery('(min-width: 900px)');
  const [team, setTeam] = useState<ProjectTeam | null>(null);
  const [previewSlug, setPreviewSlug] = useState(roster[0]?.slug);
  const [paused, setPaused] = useState(false);
  const hover = useHoverIntent(HOVER_INTENT_MS, setPreviewSlug);
  const openSlug = project?.slug;
  const { stageRef, sheetRef, headingRef, mainRef, beforeOpen, focusHeadingNext } = useDetailSync(openSlug, wide);
  const runTransition = useLayoutTransition(openSlug);

  const visible = roster.filter(entry => matchesTeam(entry, team));
  const previewed = findOr(visible, previewSlug);
  const list = getOpenList(visible, project);

  const open = (slug: string): void => {
    hover.cancel();
    beforeOpen();
    runTransition(() => {
      setPreviewSlug(slug);
      openProject(slug);
    });
  };

  const select: SelectProject = (slug, viaKeyboard) => {
    if (viaKeyboard) {
      focusHeadingNext();
    }

    setPreviewSlug(slug);
    switchProject(slug);
  };

  const close = (): void => {
    // Clear a filter that would hide the project's tile, so focus has somewhere to return to.
    setTeam(list === visible ? team : null);
    runTransition(closeProject);
  };

  // Closing puts the page back where the visitor left it, so the browser's own restoring on Back
  // (which can land on a stale position from an earlier visit to the same URL) is switched off here.
  useEffect(() => {
    const previous = history.scrollRestoration;

    history.scrollRestoration = 'manual';

    return (): void => {
      history.scrollRestoration = previous;
    };
  }, []);

  // The phone panel is a dialog, which handles Esc itself.
  useEscape(wide && project !== undefined, close);

  const detail = {
    list,
    headingRef,
    mainRef,
    paused,
    onTogglePause: () => setPaused(!paused),
    onSelect: select,
  };

  return (
    <div ref={stageRef} className={wide && project ? 'pp20-stage pp20-stage--open' : 'pp20-stage'}>
      {wide && project ? (
        <ProjectDetail project={project} withStrip closeLabel="Back to projects" onClose={close} {...detail} />
      ) : (
        <BrowseView
          wide={wide}
          projects={visible}
          previewed={previewed}
          revealSlug={openSlug}
          team={team}
          countFor={countFor}
          paused={paused}
          onTeamChange={setTeam}
          onPointerEnter={hover.start}
          onPointerLeave={hover.cancel}
          onFocusTile={slug => {
            hover.cancel();
            setPreviewSlug(slug);
          }}
          onOpen={open}
          onTogglePause={detail.onTogglePause}
        />
      )}
      {!wide && <PhonePanel project={project} sheetRef={sheetRef} onClose={close} {...detail} />}
    </div>
  );
}
