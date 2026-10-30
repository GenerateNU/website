import { TabPanel } from '@headlessui/react';

import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import { formatNumber } from '@/component/ProjectsPageV8/FeaturedBanner/formatNumber';
import PreviewMedia from '@/component/ProjectsPageV8/FeaturedBanner/PreviewMedia';
import type { Project } from '@/data/projectData';

import ProjectStats from '../ProjectStats';

type AttractSlideProps = {
  project: Project;
  index: number;
  total: number;
  basePath: string;
  playVideo: boolean;
};

// Hidden panels unmount, so the monitor "tunes in" again, and the video starts over, on every change.
export default function AttractSlide({ project, index, total, basePath, playVideo }: AttractSlideProps) {
  return (
    <TabPanel className="pp11-slide">
      {/* A second, mouse-only way in: people expect the big picture itself to open the project. */}
      <ProjectLink
        basePath={basePath}
        slug={project.slug}
        className="pp9-crt pp11-slide-crt"
        tabIndex={-1}
        aria-hidden="true"
      >
        <PreviewMedia project={project} playing={playVideo} className="pp9-crt-media" />
      </ProjectLink>
      <div className="pp11-slide-copy">
        <p className="pp9-label pp9-label--yellow">
          ★ Featured {formatNumber(index)} / {formatNumber(total - 1)}
        </p>
        <h3 className="pp9-monitor-name pp11-slide-name">{project.name}</h3>
        <ProjectStats project={project} />
        {project.description && <p className="pp9-monitor-desc">{project.description}</p>}
        <ProjectLink basePath={basePath} slug={project.slug} className="pp9-start">
          <span aria-hidden="true">▶</span> Start: view project
        </ProjectLink>
      </div>
    </TabPanel>
  );
}
