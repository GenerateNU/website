import { getProjectLinks } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type ProjectLinksProps = {
  project: Project;
};

// Where else the project lives (its GitHub repository, and any site or store page it has).
export default function ProjectLinks({ project }: ProjectLinksProps) {
  return (
    <section className="pp21-section" aria-labelledby="pp21-links-heading">
      <h4 id="pp21-links-heading" className="pp21-label">
        Links
      </h4>
      <ul className="pp21-links">
        {getProjectLinks(project).map(link => (
          <li key={link.url}>
            <a href={link.url} className="pp21-link" target="_blank" rel="noopener noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
              <span className="pp21-sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
