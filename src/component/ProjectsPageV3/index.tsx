import { useState } from 'react';

import './style.css';
import NavBar from '@/component/NavBar';
import projects from '@/data/projectData';
import type { Project, ProjectTeam } from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';

import ApplyBanner from './ApplyBanner';
import ProjectGrid from './ProjectGrid';
import TeamFilter from './TeamFilter';

const countTeam = (team: ProjectTeam | null): number =>
  team === null ? projects.length : projects.filter(project => project.teams.includes(team)).length;

const matchesTeam = (project: Project, team: ProjectTeam | null): boolean =>
  team === null || project.teams.includes(team);

export default function ProjectsPageV3() {
  const [activeTeam, setActiveTeam] = useState<ProjectTeam | null>(null);
  const visibleProjects = projects.filter(project => matchesTeam(project, activeTeam));

  return (
    <div className="pp3-page">
      <title>Projects · Generate</title>
      <header className="pp3-hero pp3-hero--index">
        <NavBar />
        <div className="pp3-hero-inner">
          <p className="pp3-eyebrow">Built at Generate</p>
          <h1 className="pp3-title">Projects</h1>
          <p className="pp3-intro">
            Products our student teams designed and built for real clients. Choose one to see the full story.
          </p>
        </div>
      </header>
      <main className="pp3-main">
        <TeamFilter activeTeam={activeTeam} countTeam={countTeam} onChange={setActiveTeam} />
        <ProjectGrid projects={visibleProjects} />
      </main>
      <ApplyBanner />
      <Footer />
    </div>
  );
}
