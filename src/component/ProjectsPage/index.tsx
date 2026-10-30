import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css';
import NavBar from '@/component/NavBar';
import projects, { formatSemester } from '@/data/projectData';
import type { Project, ProjectTeam } from '@/data/projectData';
import Footer from '@/pages/LandingPageV3/Footer';
import useWebsite from '@/shared/useWebsite';

import ProjectCard from './ProjectCard';
import ProjectFilters from './ProjectFilters';
import ProjectModal from './ProjectModal';

const MOBILE_BATCH_SIZE = 4;

const countTeam = (team: ProjectTeam): number => projects.filter(project => project.teams.includes(team)).length;

const teamCounts = {
  software: countTeam('software'),
  hardware: countTeam('hardware'),
} satisfies Record<ProjectTeam, number>;

const matchesFilters = (project: Project, team: ProjectTeam | null, query: string): boolean => {
  const needle = query.trim().toLowerCase();
  const matchesTeam = team === null || project.teams.includes(team);

  const searchableText = [
    project.name,
    project.description ?? '',
    formatSemester(project.semester),
    ...project.members.map(member => member.name),
  ].join(' ');

  const matchesQuery = searchableText.toLowerCase().includes(needle);

  return matchesTeam && matchesQuery;
};

const pluralize = (count: number): string => `${count} project${count === 1 ? '' : 's'}`;

function ProjectsHero() {
  return (
    <header className="pp-hero">
      <NavBar />
      <div className="pp-hero-inner">
        <p className="pp-eyebrow">Built at Generate</p>
        <h1 className="pp-title">Projects</h1>
        <p className="pp-intro">Teams work side-by-side to ensure products and processes are beyond expectations.</p>
      </div>
    </header>
  );
}

function ApplyBanner() {
  return (
    <section className="pp-apply" aria-labelledby="pp-apply-heading">
      <div className="pp-apply-inner">
        <h2 id="pp-apply-heading" className="pp-apply-heading">
          Want to build the next one?
        </h2>
        <Link to="/apply" className="pp-apply-link">
          Apply <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const isWebsite = useWebsite();
  const [activeTeam, setActiveTeam] = useState<ProjectTeam | null>(null);
  const [query, setQuery] = useState('');
  const [mobileLimit, setMobileLimit] = useState(MOBILE_BATCH_SIZE);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const matchingProjects = projects.filter(project => matchesFilters(project, activeTeam, query));
  const visibleProjects = isWebsite ? matchingProjects : matchingProjects.slice(0, mobileLimit);
  const hiddenCount = matchingProjects.length - visibleProjects.length;

  const handleTeamChange = (team: ProjectTeam | null) => {
    setActiveTeam(team);
    setMobileLimit(MOBILE_BATCH_SIZE);
  };

  const handleQueryChange = (nextQuery: string) => {
    setQuery(nextQuery);
    setMobileLimit(MOBILE_BATCH_SIZE);
  };

  const clearFilters = () => {
    handleTeamChange(null);
    setQuery('');
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="pp-page">
      <ProjectsHero />
      <main className="pp-main">
        <ProjectFilters
          activeTeam={activeTeam}
          teamCounts={teamCounts}
          totalCount={projects.length}
          query={query}
          onTeamChange={handleTeamChange}
          onQueryChange={handleQueryChange}
        />
        <p className="pp-results" aria-live="polite">
          {hiddenCount > 0
            ? `Showing ${visibleProjects.length} of ${pluralize(matchingProjects.length)}`
            : pluralize(matchingProjects.length)}
        </p>
        {visibleProjects.length > 0 ? (
          <ul className="pp-grid">
            {visibleProjects.map((project, index) => (
              <li key={project.name}>
                <ProjectCard project={project} index={index} onOpen={openProject} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="pp-empty">
            <p>No projects match your filters.</p>
            <button type="button" className="pp-button" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        )}
        {hiddenCount > 0 && (
          <button
            type="button"
            className="pp-button pp-show-more"
            onClick={() => setMobileLimit(mobileLimit + MOBILE_BATCH_SIZE)}
          >
            Show more ({hiddenCount})
          </button>
        )}
      </main>
      <ApplyBanner />
      <Footer />
      <ProjectModal project={selectedProject} open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
