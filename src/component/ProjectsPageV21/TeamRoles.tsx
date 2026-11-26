import type { Project } from '@/data/projectData';

import { countRoles } from './roster';

type TeamRolesProps = {
  project: Project;
};

// Who built it, by role. The member names in the data are placeholders, so they aren't shown.
export default function TeamRoles({ project }: TeamRolesProps) {
  return (
    <section className="pp21-section" aria-labelledby="pp21-team-heading">
      <h4 id="pp21-team-heading" className="pp21-label">
        Team · {project.members.length} people
      </h4>
      <ul className="pp21-roles">
        {countRoles(project).map(({ role, count }) => (
          <li key={role} className="pp21-role">
            <span>{role}</span>
            {count > 1 && <span className="pp21-role-count">× {count}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
