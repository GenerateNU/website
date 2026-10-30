import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { getProjectBySlug } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type ProjectOverlay = {
  project: Project | undefined;
  openProject: (slug: string) => void;
  closeProject: () => void;
  switchProject: (slug: string) => void;
};

// Stored on the history entry an in-app open pushes, so closing knows it can pop that entry.
// Unlike a ref, it survives remounts and back/forward navigation.
const OPENED_IN_APP = 'project-overlay';

export default function useProjectOverlay(): ProjectOverlay {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const project = getProjectBySlug(searchParams.get('project'));
  const openedInApp = location.state === OPENED_IN_APP;

  const setProject = (slug: string, replace: boolean): void => {
    setSearchParams(
      prev => {
        const next = new URLSearchParams(prev);

        next.set('project', slug);

        return next;
      },
      // Switching replaces the entry, so it carries the flag over from the entry it replaces.
      { replace, state: !replace || openedInApp ? OPENED_IN_APP : undefined, preventScrollReset: true }
    );
  };

  const openProject = (slug: string): void => setProject(slug, false);

  const closeProject = (): void => {
    if (openedInApp) {
      void navigate(-1);

      return;
    }

    setSearchParams(
      prev => {
        const next = new URLSearchParams(prev);

        next.delete('project');

        return next;
      },
      { replace: true, preventScrollReset: true }
    );
  };

  const switchProject = (slug: string): void => setProject(slug, true);

  return { project, openProject, closeProject, switchProject };
}
