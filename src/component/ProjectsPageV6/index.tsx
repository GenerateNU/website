import ProjectsLayout from '@/component/ProjectsPageV5/ProjectsLayout';
import { featuredProjects } from '@/data/projectData';

import Showcase from './Showcase';

const basePath = '/projects-v6';

export default function ProjectsPageV6() {
  return <ProjectsLayout basePath={basePath} featured={<Showcase projects={featuredProjects} basePath={basePath} />} />;
}
