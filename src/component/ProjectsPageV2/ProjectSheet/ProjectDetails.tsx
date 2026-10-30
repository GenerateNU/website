import { DialogTitle } from '@headlessui/react';
import { Link } from 'react-router-dom';

import { formatSemester, getProjectLinks } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import TeamTag from '../TeamTag';

type ProjectDetailsProps = {
  project: Project;
};

function ProjectTeamList({ project }: ProjectDetailsProps) {
  return (
    <section className="pp2-sheet-section" aria-labelledby="pp2-sheet-team-heading">
      <h3 id="pp2-sheet-team-heading" className="pp2-sheet-subheading">
        Team <span className="pp2-sheet-member-count">· {project.members.length}</span>
      </h3>
      <ul className="pp2-sheet-members">
        {project.members.map(member => (
          <li key={member.name}>
            <span className="pp2-sheet-member-name">{member.name}</span>
            <span className="pp2-sheet-member-role">{member.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectLinkList({ project }: ProjectDetailsProps) {
  return (
    <section className="pp2-sheet-section" aria-labelledby="pp2-sheet-links-heading">
      <h3 id="pp2-sheet-links-heading" className="pp2-sheet-subheading">
        Links
      </h3>
      <ul className="pp2-sheet-links">
        {getProjectLinks(project).map(link => (
          <li key={link.url}>
            <a className="pp2-sheet-link" href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="pp2-sheet-content">
      <div className="pp2-sheet-tags">
        {project.teams.map(team => (
          <TeamTag key={team} team={team} />
        ))}
        <span className="pp2-sheet-semester">{formatSemester(project.semester)}</span>
      </div>
      <DialogTitle className="pp2-sheet-title">{project.name}</DialogTitle>
      {project.description && <p className="pp2-sheet-description">{project.description}</p>}
      {project.client && (
        <figure className="pp2-sheet-quote">
          <blockquote>“{project.client.quote}”</blockquote>
          <figcaption>
            <span className="pp2-sheet-quote-name">{project.client.name}</span>
            {project.client.school}
          </figcaption>
        </figure>
      )}
      <ProjectTeamList project={project} />
      <ProjectLinkList project={project} />
      <Link to="/apply" className="pp2-sheet-apply">
        Apply to build the next one <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
