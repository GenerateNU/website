import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import './style.css';
import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type ShowcaseProps = {
  projects: Project[];
  basePath: string;
};

const formatPosition = (index: number, total: number): string =>
  `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;

// Every featured project stays visible as a large thumbnail; choosing one shows its story on the stage
// right below it. Nothing changes until the visitor picks, so there is nothing to pause or chase.
export default function Showcase({ projects, basePath }: ShowcaseProps) {
  return (
    <TabGroup className="pp6-showcase">
      <p className="pp6-hint" id="pp6-hint">
        Choose a project to see it below.
      </p>
      <TabList className="pp6-thumbs" aria-describedby="pp6-hint">
        {projects.map(project => (
          <Tab key={project.slug} className="pp6-thumb">
            {({ selected }) => (
              <>
                <ProjectMedia project={project} className="pp6-thumb-media" />
                <span className="pp6-thumb-body">
                  <span className="pp6-thumb-name">{project.name}</span>
                  <span className="pp6-thumb-state">{selected ? 'Now showing' : 'Show this project'}</span>
                </span>
              </>
            )}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {projects.map((project, index) => (
          <TabPanel key={project.slug} className="pp6-stage">
            {/* A second, mouse-only way in: people expect the big picture itself to open the project. */}
            <ProjectLink
              basePath={basePath}
              slug={project.slug}
              className="pp6-stage-visual"
              tabIndex={-1}
              aria-hidden="true"
            >
              <ProjectMedia project={project} className="pp6-stage-media" />
            </ProjectLink>
            <div className="pp6-stage-body">
              <span className="pp6-stage-position">{formatPosition(index, projects.length)}</span>
              <div className="pp6-stage-meta">
                {project.teams.map(team => (
                  <TeamTag key={team} team={team} />
                ))}
                <span className="pp6-stage-semester">{formatSemester(project.semester)}</span>
              </div>
              <h3 className="pp6-stage-name">{project.name}</h3>
              {project.description && <p className="pp6-stage-desc">{project.description}</p>}
              {project.client && (
                <figure className="pp6-stage-quote">
                  <blockquote>“{project.client.quote}”</blockquote>
                  <figcaption>
                    {project.client.name}, {project.client.school}
                  </figcaption>
                </figure>
              )}
              <ProjectLink basePath={basePath} slug={project.slug} className="pp6-stage-cta">
                See the full project <span aria-hidden="true">→</span>
              </ProjectLink>
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
