import ProjectsLayout from '@/component/ProjectsPageV5/ProjectsLayout';
import { featuredProjects } from '@/data/projectData';

import StoryRail from './StoryRail';

const basePath = '/projects-v7';

export default function ProjectsPageV7() {
  return (
    <ProjectsLayout basePath={basePath} featured={<StoryRail projects={featuredProjects} basePath={basePath} />} />
  );
}
