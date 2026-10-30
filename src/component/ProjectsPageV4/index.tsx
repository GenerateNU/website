import { Link } from 'react-router-dom';

import './style.css';
import NavBar from '@/component/NavBar';
import projects, { featuredProjects, projectTeams } from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';
import useProjectOverlay from '@/shared/useProjectOverlay';

import Archive from './Archive';
import ProjectDrawer from './Drawer';
import Spotlight from './Spotlight';

const archivedProjects = projects.filter(project => project.featured !== true);

const years = projects.map(project => project.semester.year);

const statsLine = `${projects.length} products · ${projectTeams.length} disciplines · ${Math.min(...years)}–${Math.max(...years)}`;

function ProjectsHero() {
  return (
    <header className="pp4-hero">
      <NavBar />
      <div className="pp4-hero-inner">
        <p className="pp4-eyebrow">Built at Generate</p>
        <h1 className="pp4-title">Projects</h1>
        <p className="pp4-intro">Teams work side-by-side to ensure products and processes are beyond expectations.</p>
        <p className="pp4-stats">{statsLine}</p>
      </div>
    </header>
  );
}

function ApplyBanner() {
  return (
    <section className="pp4-apply" aria-labelledby="pp4-apply-heading">
      <div className="pp4-apply-inner">
        <h2 id="pp4-apply-heading" className="pp4-apply-heading">
          Want to build the next one?
        </h2>
        <Link to="/apply" className="pp4-apply-link">
          Apply <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function ProjectsPageV4() {
  const { project, openProject, closeProject, switchProject } = useProjectOverlay();

  return (
    <div className="pp4-page">
      <ProjectsHero />
      <main>
        {featuredProjects.map((featured, index) => (
          <Spotlight key={featured.slug} project={featured} index={index} onOpen={openProject} />
        ))}
        <Archive projects={archivedProjects} onOpen={openProject} />
      </main>
      <ApplyBanner />
      <Footer />
      <ProjectDrawer project={project} onClose={closeProject} onSwitch={switchProject} />
    </div>
  );
}
