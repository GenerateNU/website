import { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import NavBar from '@/component/NavBar';
import projects from '@/data/projectData';
import type { ProjectTeam } from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';
import useProjectOverlay from '@/shared/useProjectOverlay';

import FeaturedCarousel from './FeaturedCarousel';
import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import ProjectSheet from './ProjectSheet';

const countTeam = (team: ProjectTeam): number => projects.filter(project => project.teams.includes(team)).length;

const teamCounts = {
  software: countTeam('software'),
  hardware: countTeam('hardware'),
} satisfies Record<ProjectTeam, number>;

const pluralize = (count: number): string => `${count} project${count === 1 ? '' : 's'}`;

function ProjectsHero() {
  return (
    <header className="pp2-hero">
      <NavBar />
      <div className="pp2-hero-inner">
        <p className="pp2-eyebrow">Built at Generate</p>
        <h1 className="pp2-title">Projects</h1>
        <p className="pp2-intro">Teams work side-by-side to ensure products and processes are beyond expectations.</p>
      </div>
    </header>
  );
}

function ApplyBanner() {
  return (
    <section className="pp2-apply" aria-labelledby="pp2-apply-heading">
      <div className="pp2-apply-inner">
        <h2 id="pp2-apply-heading" className="pp2-apply-heading">
          Want to build the next one?
        </h2>
        <Link to="/apply" className="pp2-apply-link">
          Apply <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function ProjectsPageV2() {
  const [activeTeam, setActiveTeam] = useState<ProjectTeam | null>(null);
  const { project, openProject, closeProject } = useProjectOverlay();

  const matchingProjects = projects.filter(entry => activeTeam === null || entry.teams.includes(activeTeam));

  return (
    <div className="pp2-page">
      <ProjectsHero />
      <main className="pp2-main">
        <FeaturedCarousel onOpen={openProject} suspended={project !== undefined} />
        <section className="pp2-all" aria-labelledby="pp2-all-heading">
          <h2 id="pp2-all-heading" className="pp2-all-heading">
            All projects
          </h2>
          <ProjectFilters
            activeTeam={activeTeam}
            teamCounts={teamCounts}
            totalCount={projects.length}
            onTeamChange={setActiveTeam}
          />
          <p className="pp2-results" aria-live="polite">
            {pluralize(matchingProjects.length)}
          </p>
          <ul className="pp2-grid">
            {matchingProjects.map((entry, index) => (
              <li key={entry.slug}>
                <ProjectCard project={entry} index={index} onOpen={openProject} />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <ApplyBanner />
      <Footer />
      <ProjectSheet project={project} onClose={closeProject} />
    </div>
  );
}
