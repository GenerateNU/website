import type { Project } from '@/data/projectData';

import { countRoles } from './roster';

type TeamRolesProps = {
  project: Project;
};

// Who built it, by role. The member names in the data are placeholders, so they aren't shown.
export default function TeamRoles({ project }: TeamRolesProps) {
  return (
    <section className="pp20-section" aria-labelledby="pp20-team-heading">
      <h3 id="pp20-team-heading" className="pp20-label">
        Team · {project.members.length} people
      </h3>
      <ul className="pp20-roles">
        {countRoles(project).map(({ role, count }) => (
          <li key={role} className="pp20-role">
            <span>{role}</span>
            {count > 1 && <span className="pp20-role-count">× {count}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
