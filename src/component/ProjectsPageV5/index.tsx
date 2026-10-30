import { featuredProjects } from '@/data/projectData';

import FeaturedBento from './FeaturedBento';
import ProjectsLayout from './ProjectsLayout';

const basePath = '/projects-v5';

export default function ProjectsPageV5() {
  return (
    <ProjectsLayout basePath={basePath} featured={<FeaturedBento projects={featuredProjects} basePath={basePath} />} />
  );
}
