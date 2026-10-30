import './style.css';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import ProjectMedia from '../ProjectMedia';
import TeamTag from '../TeamTag';

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

const STAGGER_MS = 60;

const MAX_STAGGER_STEPS = 8;

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <article className="pp-card" style={{ animationDelay: `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms` }}>
      <div className="pp-card-media">
        <ProjectMedia project={project} />
        {project.featured && <span className="pp-card-badge">Featured</span>}
      </div>
      <div className="pp-card-body">
        <p className="pp-card-semester">{formatSemester(project.semester)}</p>
        <h2 className="pp-card-title">
          {/* Stretched over the whole card, so the entire card is one click/tap target. */}
          <button type="button" className="pp-card-button" onClick={() => onOpen(project)}>
            {project.name}
          </button>
        </h2>
        <div className="pp-card-tags">
          {project.teams.map(team => (
            <TeamTag key={team} team={team} />
          ))}
        </div>
        {project.description && <p className="pp-card-description">{project.description}</p>}
        <span className="pp-card-cta" aria-hidden="true">
          View project <span className="pp-card-cta-arrow">→</span>
        </span>
      </div>
    </article>
  );
}
