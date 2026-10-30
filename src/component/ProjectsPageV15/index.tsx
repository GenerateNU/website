import ProjectsLayout from '@/component/ProjectsPageV5/ProjectsLayout';
import { featuredProjects } from '@/data/projectData';

import FeatureList from './FeatureList';

const basePath = '/projects-v15';

export default function ProjectsPageV15() {
  return (
    <ProjectsLayout basePath={basePath} featured={<FeatureList projects={featuredProjects} basePath={basePath} />} />
  );
}
