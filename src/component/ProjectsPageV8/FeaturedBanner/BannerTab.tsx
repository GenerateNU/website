import { Tab } from '@headlessui/react';
import { useState } from 'react';

import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import type { Project } from '@/data/projectData';

import { formatNumber } from './formatNumber';
import PreviewMedia from './PreviewMedia';

type BannerTabProps = {
  project: Project;
  index: number;
  // Whether the selected tab shows the countdown bar, and whether that bar is moving.
  showProgress: boolean;
  running: boolean;
  // Whether the thumbnail may play its preview video while the tab is pointed at.
  canPreview: boolean;
  onProgressEnd: () => void;
};

export default function BannerTab({
  project,
  index,
  showProgress,
  running,
  canPreview,
  onProgressEnd,
}: BannerTabProps) {
  const [previewing, setPreviewing] = useState(false);

  return (
    <Tab className="pp8-tab" onMouseEnter={() => setPreviewing(true)} onMouseLeave={() => setPreviewing(false)}>
      {({ selected }) => (
        <>
          {selected && showProgress && (
            <span
              className={`pp8-tab-progress${running ? ' is-running' : ''}`}
              aria-hidden="true"
              onAnimationEnd={onProgressEnd}
            />
          )}
          <PreviewMedia project={project} playing={canPreview && previewing} className="pp8-tab-media" />
          <span className="pp8-tab-text">
            <span className="pp8-tab-number">{formatNumber(index)}</span>
            <span className="pp8-tab-name">{project.name}</span>
            <span className="pp8-tab-tags">
              {project.teams.map(team => (
                <TeamTag key={team} team={team} />
              ))}
            </span>
          </span>
        </>
      )}
    </Tab>
  );
}
