import type { ComponentPropsWithRef } from 'react';

import PreviewMedia from '@/component/ProjectsPageV8/FeaturedBanner/PreviewMedia';
import type { Project } from '@/data/projectData';

import { getCallouts } from './calloutData';
import Callouts, { FrameMarkers } from './Callouts';
import TitleBlock from './TitleBlock';
import type { SheetTimer } from './TitleBlock';

export type SheetProps = Omit<ComponentPropsWithRef<'article'>, 'children'> & {
  project: Project;
  index: number;
  total: number;
  basePath: string;
  playing: boolean;
  timer?: SheetTimer;
};

// One drawing sheet: the project's picture drawn large in a frame, real facts called out around it,
// and the title block in the corner. The stack passes drag handlers and state classes straight through.
export default function Sheet({
  project,
  index,
  total,
  basePath,
  playing,
  timer,
  className = '',
  ...rest
}: SheetProps) {
  const callouts = getCallouts(project);

  return (
    <article
      className={`pp17-sheet ${className}`}
      aria-label={`${project.name}, sheet ${index + 1} of ${total}`}
      {...rest}
    >
      <div className="pp17-drawing">
        <div className="pp17-frame">
          <PreviewMedia project={project} playing={playing} className="pp17-frame-media" />
          <FrameMarkers count={callouts.length} />
        </div>
        <Callouts callouts={callouts} />
      </div>
      <div className="pp17-sheet-foot">
        <p className="pp17-drag-note">
          <span className="pp17-cell-label">Note</span> Drag or swipe this sheet aside to see the next one.
        </p>
        <TitleBlock project={project} index={index} total={total} basePath={basePath} timer={timer} />
      </div>
    </article>
  );
}
