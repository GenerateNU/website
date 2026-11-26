import type { Project } from '@/data/projectData';

import Sheet from './Sheet';
import type { SheetProps } from './Sheet';

// Everything the stack decides about the top sheet: its drag handlers, timer, video and state classes.
export type TopSheetProps = Omit<SheetProps, 'project' | 'index' | 'total' | 'basePath'>;

type SheetLayersProps = {
  projects: Project[];
  basePath: string;
  topIndex: number;
  // The sheet drawn underneath the top one, if any.
  underIndex?: number;
  top: TopSheetProps;
};

// The sheets themselves, in one keyed list, so the sheet underneath stays mounted (its lines already
// drawn) as it comes to the top. The two edges behind are blank paper.
export default function SheetLayers({ projects, basePath, topIndex, underIndex, top }: SheetLayersProps) {
  const layers = underIndex === undefined || underIndex === topIndex ? [topIndex] : [underIndex, topIndex];

  return (
    <div className="pp17-stack">
      <span className="pp17-edge pp17-edge--far" aria-hidden="true" />
      <span className="pp17-edge pp17-edge--near" aria-hidden="true" />
      {layers.map(index => {
        const project = projects[index];

        if (project === undefined) {
          return null;
        }

        const shared = { project, index, total: projects.length, basePath };

        // The sheet underneath is revealed as the top one moves away; not reachable until it is on top.
        return index === topIndex ? (
          <Sheet key={project.slug} {...shared} {...top} />
        ) : (
          <Sheet key={project.slug} {...shared} playing={false} className="is-under" aria-hidden="true" inert />
        );
      })}
    </div>
  );
}
