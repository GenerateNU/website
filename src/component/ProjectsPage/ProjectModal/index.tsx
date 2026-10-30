import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

import './style.css';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import ProjectMedia from '../ProjectMedia';
import TeamTag from '../TeamTag';

type ProjectDetailsProps = {
  project: Project;
};

function ProjectTeamList({ project }: ProjectDetailsProps) {
  return (
    <section className="pp-modal-section" aria-labelledby="pp-modal-team-heading">
      <h3 id="pp-modal-team-heading" className="pp-modal-subheading">
        Team <span className="pp-modal-member-count">· {project.members.length}</span>
      </h3>
      <ul className="pp-modal-members">
        {project.members.map(member => (
          <li key={member.name}>
            <span className="pp-modal-member-name">{member.name}</span>
            <span className="pp-modal-member-role">{member.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GitHubLink({ project }: ProjectDetailsProps) {
  return (
    <a className="pp-modal-github" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
      View on GitHub
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}

type ProjectModalProps = {
  project: Project | null;
  open: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, open, onClose }: ProjectModalProps) {
  return (
    <Dialog open={open && project !== null} onClose={onClose} className="pp-modal">
      <DialogBackdrop transition className="pp-modal-backdrop" />
      <div className="pp-modal-viewport">
        <DialogPanel transition className="pp-modal-panel">
          <button type="button" className="pp-modal-close" onClick={onClose}>
            close <span aria-hidden="true">×</span>
          </button>
          {project && (
            <div className="pp-modal-layout">
              <ProjectMedia project={project} className="pp-modal-media" />
              <div className="pp-modal-content">
                <div className="pp-modal-tags">
                  {project.teams.map(team => (
                    <TeamTag key={team} team={team} />
                  ))}
                  <span className="pp-modal-semester">{formatSemester(project.semester)}</span>
                </div>
                <DialogTitle className="pp-modal-title">{project.name}</DialogTitle>
                {project.description && <p className="pp-modal-description">{project.description}</p>}
                {project.client && (
                  <figure className="pp-modal-quote">
                    <blockquote>“{project.client.quote}”</blockquote>
                    <figcaption>
                      <span className="pp-modal-quote-name">{project.client.name}</span>
                      {project.client.school}
                    </figcaption>
                  </figure>
                )}
                <ProjectTeamList project={project} />
                <GitHubLink project={project} />
              </div>
            </div>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
