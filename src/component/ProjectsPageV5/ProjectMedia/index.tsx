import './style.css';
import type { Project } from '@/data/projectData';

type ProjectMediaProps = {
  project: Project;
  className?: string;
};

export default function ProjectMedia({ project, className = '' }: ProjectMediaProps) {
  return (
    <div className={`pp5-media pp5-media--${project.imageKind} ${className}`}>
      {/* The project name is always rendered next to the image, so the image itself is decorative. */}
      <img src={project.image} alt="" loading="lazy" draggable={false} />
    </div>
  );
}
