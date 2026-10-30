import { Tab } from '@headlessui/react';
import { useState } from 'react';

import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatNumber } from '@/component/ProjectsPageV8/FeaturedBanner/formatNumber';
import PreviewMedia from '@/component/ProjectsPageV8/FeaturedBanner/PreviewMedia';
import type { Project } from '@/data/projectData';

type AttractTabProps = {
  project: Project;
  index: number;
  // Whether the selected tab shows the countdown bar, and whether that bar is moving.
  showProgress: boolean;
  running: boolean;
  // Whether the thumbnail may play its preview video while the tab is pointed at.
  canPreview: boolean;
  onProgressEnd: () => void;
};

export default function AttractTab({
  project,
  index,
  showProgress,
  running,
  canPreview,
  onProgressEnd,
}: AttractTabProps) {
  const [previewing, setPreviewing] = useState(false);

  return (
    <Tab
      className="pp12-tab"
      data-spark
      onMouseEnter={() => setPreviewing(true)}
      onMouseLeave={() => setPreviewing(false)}
    >
      {({ selected }) => (
        <>
          <PreviewMedia project={project} playing={canPreview && previewing} className="pp12-tab-media" />
          <span className="pp12-tab-text">
            <span className="pp12-tab-number">{formatNumber(index)}</span>
            <span className="pp12-tab-name">{project.name}</span>
            <span className="pp9-tile-tags">
              {project.teams.map(team => (
                <TeamTag key={team} team={team} />
              ))}
            </span>
          </span>
          {selected && showProgress && (
            <span
              className={`pp12-tab-progress${running ? ' is-running' : ''}`}
              aria-hidden="true"
              onAnimationEnd={onProgressEnd}
            />
          )}
        </>
      )}
    </Tab>
  );
}
