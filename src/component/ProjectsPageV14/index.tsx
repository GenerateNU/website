import '@/component/ProjectsPageV5/style.css';
import './style.css';
import NavBar from '@/component/NavBar';
import ApplyBanner from '@/component/ProjectsPageV5/ApplyBanner';
import ProjectGrid from '@/component/ProjectsPageV5/ProjectGrid';
import projects, { groupProjectsByYear } from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';

const basePath = '/projects-v14';

const yearGroups = groupProjectsByYear(projects);

const countLabel = (count: number): string => `${count} ${count === 1 ? 'project' : 'projects'}`;

// The projects as a yearbook: every class of projects under its year, newest first, so the page shows
// that a new set ships every year. There is nothing to switch or filter; a list of years jumps ahead.
export default function ProjectsPageV14() {
  return (
    <div className="pp5-page">
      <title>Projects · Generate</title>
      <header className="pp5-hero">
        <NavBar />
        <div className="pp5-hero-inner">
          <p className="pp5-eyebrow">Built at Generate</p>
          <h1 className="pp5-title">Projects</h1>
          <p className="pp5-intro">
            Every year, new student teams design and build products for real clients. Here is each year’s class, newest
            first.
          </p>
        </div>
      </header>
      <nav className="pp14-years" aria-label="Jump to a year">
        <ul className="pp14-years-list">
          {yearGroups.map(group => (
            <li key={group.year}>
              <a href={`#pp14-${group.year}`} className="pp14-year-link">
                {group.year}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="pp5-main">
        {yearGroups.map(group => (
          <section
            key={group.year}
            id={`pp14-${group.year}`}
            className="pp14-class"
            aria-labelledby={`pp14-${group.year}-heading`}
          >
            <header className="pp14-class-header">
              <h2 id={`pp14-${group.year}-heading`} className="pp14-class-year">
                {group.year}
              </h2>
              <p className="pp14-class-count">{countLabel(group.projects.length)}</p>
            </header>
            <ProjectGrid projects={group.projects} basePath={basePath} />
          </section>
        ))}
      </main>
      <ApplyBanner />
      <Footer />
    </div>
  );
}
