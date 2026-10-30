import { getProjectLinks } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type TeamAndLinksProps = {
  project: Project;
};

export default function TeamAndLinks({ project }: TeamAndLinksProps) {
  return (
    <>
      <section className="pp3-section" aria-labelledby="pp3-team-heading">
        <h2 id="pp3-team-heading" className="pp3-section-title">
          Team
        </h2>
        <ul className="pp3-members">
          {project.members.map(member => (
            <li key={`${member.name}-${member.role}`} className="pp3-member">
              <span className="pp3-member-name">{member.name}</span>
              <span className="pp3-member-role">{member.role}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="pp3-section" aria-labelledby="pp3-links-heading">
        <h2 id="pp3-links-heading" className="pp3-section-title">
          Links
        </h2>
        <ul className="pp3-links">
          {getProjectLinks(project).map(link => (
            <li key={link.url}>
              <a href={link.url} className="pp3-button" target="_blank" rel="noopener noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
                <span className="pp3-sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
