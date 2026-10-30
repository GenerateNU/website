import projects, { getAdjacentProjects } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type DrawerHeaderProps = {
  project: Project;
  onClose: () => void;
  onSwitch: (slug: string) => void;
};

export default function DrawerHeader({ project, onClose, onSwitch }: DrawerHeaderProps) {
  const { previous, next } = getAdjacentProjects(project);
  const position = projects.indexOf(project) + 1;

  return (
    <div className="pp4-drawer-header">
      <button type="button" className="pp4-drawer-close" onClick={onClose} data-autofocus>
        close <span aria-hidden="true">×</span>
      </button>
      <span className="pp4-drawer-position" aria-live="polite">
        {position} / {projects.length}
      </span>
      <div className="pp4-drawer-nav">
        <button type="button" className="pp4-drawer-step" onClick={() => onSwitch(previous.slug)}>
          <span aria-hidden="true">←</span> Prev
          <span className="pp4-visually-hidden">: {previous.name}</span>
        </button>
        <button type="button" className="pp4-drawer-step" onClick={() => onSwitch(next.slug)}>
          Next <span aria-hidden="true">→</span>
          <span className="pp4-visually-hidden">: {next.name}</span>
        </button>
      </div>
    </div>
  );
}
