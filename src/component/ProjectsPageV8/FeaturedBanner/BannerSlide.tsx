import { TabPanel } from '@headlessui/react';

import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import { formatNumber } from './formatNumber';
import PreviewMedia from './PreviewMedia';

type BannerSlideProps = {
  project: Project;
  index: number;
  total: number;
  basePath: string;
  playVideo: boolean;
};

export default function BannerSlide({ project, index, total, basePath, playVideo }: BannerSlideProps) {
  return (
    <TabPanel className="pp8-slide">
      {/* A second, mouse-only way in: people expect the big picture itself to open the project. */}
      <ProjectLink
        basePath={basePath}
        slug={project.slug}
        className="pp8-slide-visual"
        tabIndex={-1}
        aria-hidden="true"
      >
        <PreviewMedia project={project} playing={playVideo} />
      </ProjectLink>
      <div className="pp8-slide-copy">
        <p className="pp8-slide-position">
          Featured · {formatNumber(index)} / {formatNumber(total - 1)}
        </p>
        <div className="pp8-slide-meta">
          {project.teams.map(team => (
            <TeamTag key={team} team={team} />
          ))}
          <span className="pp8-slide-semester">{formatSemester(project.semester)}</span>
        </div>
        <h2 className="pp8-slide-name">{project.name}</h2>
        {project.description && <p className="pp8-slide-desc">{project.description}</p>}
        <ProjectLink basePath={basePath} slug={project.slug} className="pp8-cta">
          See the full project <span aria-hidden="true">→</span>
        </ProjectLink>
      </div>
    </TabPanel>
  );
}
