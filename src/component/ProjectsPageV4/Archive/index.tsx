import './style.css';
import { formatSemester, groupProjectsByYear } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type ArchiveProps = {
  projects: Project[];
  onOpen: (slug: string) => void;
};

export default function Archive({ projects, onOpen }: ArchiveProps) {
  const groups = groupProjectsByYear(projects);

  return (
    <section className="pp4-archive" aria-labelledby="pp4-archive-heading">
      <div className="pp4-archive-inner">
        <h2 id="pp4-archive-heading" className="pp4-archive-heading">
          More projects
        </h2>
        {groups.map(group => (
          <div key={group.year} className="pp4-archive-group">
            <h3 className="pp4-archive-year">{group.year}</h3>
            <ul className="pp4-archive-list">
              {group.projects.map(project => (
                <li key={project.slug}>
                  <button type="button" className="pp4-archive-row" onClick={() => onOpen(project.slug)}>
                    <span className={`pp4-archive-thumb pp4-archive-thumb--${project.imageKind}`}>
                      <img src={project.image} alt="" loading="lazy" draggable={false} />
                    </span>
                    <span className="pp4-archive-text">
                      <span className="pp4-archive-name">{project.name}</span>
                      <span className="pp4-archive-meta">
                        {project.teams.map(team => (
                          <span key={team} className={`pp4-archive-swatch pp4-archive-swatch--${team}`}>
                            <span className="pp4-visually-hidden">{team}</span>
                          </span>
                        ))}
                        {formatSemester(project.semester)}
                      </span>
                    </span>
                    <span className="pp4-archive-arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
