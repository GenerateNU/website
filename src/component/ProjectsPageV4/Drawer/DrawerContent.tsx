import { DialogTitle } from '@headlessui/react';
import { Link } from 'react-router-dom';

import { formatSemester, getProjectLinks, getProjectMedia } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import TeamTag from '../TeamTag';
import Gallery from './Gallery';

type DrawerContentProps = {
  project: Project;
};

function MemberList({ project }: DrawerContentProps) {
  return (
    <section className="pp4-drawer-section" aria-labelledby="pp4-drawer-team-heading">
      <h3 id="pp4-drawer-team-heading" className="pp4-drawer-subheading">
        Team <span className="pp4-drawer-count">· {project.members.length}</span>
      </h3>
      <ul className="pp4-drawer-members">
        {project.members.map(member => (
          <li key={member.name}>
            <span className="pp4-drawer-member-name">{member.name}</span>
            <span className="pp4-drawer-member-role">{member.role}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function LinkList({ project }: DrawerContentProps) {
  return (
    <ul className="pp4-drawer-links">
      {getProjectLinks(project).map(link => (
        <li key={`${link.kind}-${link.url}`}>
          <a className="pp4-drawer-link" href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
            <span className="pp4-visually-hidden"> (opens in a new tab)</span>
            <span aria-hidden="true"> ↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function DrawerContent({ project }: DrawerContentProps) {
  return (
    <div className="pp4-drawer-content">
      <Gallery key={project.slug} items={getProjectMedia(project)} />
      <div className="pp4-drawer-tags">
        {project.teams.map(team => (
          <TeamTag key={team} team={team} />
        ))}
        <span className="pp4-drawer-semester">{formatSemester(project.semester)}</span>
      </div>
      <DialogTitle className="pp4-drawer-title">{project.name}</DialogTitle>
      {project.description && <p className="pp4-drawer-description">{project.description}</p>}
      {project.client && (
        <figure className="pp4-drawer-quote">
          <blockquote>“{project.client.quote}”</blockquote>
          <figcaption>
            <span className="pp4-drawer-quote-name">{project.client.name}</span>
            {project.client.school}
          </figcaption>
        </figure>
      )}
      <MemberList project={project} />
      <LinkList project={project} />
      <Link to="/apply" className="pp4-drawer-apply">
        Apply to build the next one <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
