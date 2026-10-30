import { useLocation } from 'react-router-dom';

// Set on the history entry a project list pushes when it opens a project page, so that page's
// "All projects" link can step back to the list (and its scroll position) instead of reloading it.
export const FROM_PROJECT_LIST = 'from-project-list';

export default function useCameFromProjectList(): boolean {
  return useLocation().state === FROM_PROJECT_LIST;
}
