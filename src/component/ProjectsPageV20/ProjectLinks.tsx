import { getProjectLinks } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type ProjectLinksProps = {
  project: Project;
};

// Where else the project lives (its GitHub repository, and any site or store page it has).
export default function ProjectLinks({ project }: ProjectLinksProps) {
  return (
    <section className="pp20-section" aria-labelledby="pp20-links-heading">
      <h3 id="pp20-links-heading" className="pp20-label">
        Links
      </h3>
      <ul className="pp20-links">
        {getProjectLinks(project).map(link => (
          <li key={link.url}>
            <a href={link.url} className="pp20-link" target="_blank" rel="noopener noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
              <span className="pp20-sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
