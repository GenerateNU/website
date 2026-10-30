import './style.css';
import type { Project } from '@/data/projectData';

import ProjectTile from './ProjectTile';

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <ul className="pp3-grid">
      {projects.map(project => (
        <ProjectTile key={project.slug} project={project} />
      ))}
    </ul>
  );
}
