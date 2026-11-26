import type { Project } from '@/data/projectData';

type StackStatusProps = {
  project: Project | undefined;
  index: number;
  total: number;
  // Announced only once the visitor turns sheets themselves; automatic turns would just be chatter.
  announce: boolean;
};

// Tells screen reader users which sheet is now on top.
export default function StackStatus({ project, index, total, announce }: StackStatusProps) {
  return (
    <p className="pp17-sr-only" aria-live={announce ? 'polite' : 'off'}>
      {project === undefined ? '' : `Sheet ${index + 1} of ${total}: ${project.name}`}
    </p>
  );
}
