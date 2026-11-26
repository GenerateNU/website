import { useState } from 'react';

import './binder.css';
import projects, { featuredProjects } from '@/data/projectData';
import type { Project, ProjectTeam } from '@/data/projectData';

import BranchLegend from './BranchLegend';
import { pluralizeCards } from './cardFacts';
import TradingCard from './TradingCard';

type BinderProps = {
  // Cards from packs opened this visit, which get a "New" sticker.
  newSlugs: string[];
  onOpen: (slug: string) => void;
};

type Filter = 'all' | ProjectTeam;

type FilterTab = {
  filter: Filter;
  label: string;
};

const filterTabs: FilterTab[] = [
  { filter: 'all', label: 'All' },
  { filter: 'software', label: 'Software' },
  { filter: 'hardware', label: 'Hardware' },
];

// Featured cards fill the first pockets, then everything else in the order the data keeps it.
const binderOrder: Project[] = [...featuredProjects, ...projects.filter(project => project.featured !== true)];

const matches = (project: Project, filter: Filter): boolean => filter === 'all' || project.teams.includes(filter);

const countCards = (filter: Filter): number => binderOrder.filter(project => matches(project, filter)).length;

// Every project as a card in a binder page of clear pockets, all visible from the start (nobody has to
// open a pack to find a project), with index tabs to show one discipline.
export default function Binder({ newSlugs, onOpen }: BinderProps) {
  const [filter, setFilter] = useState<Filter>('all');
  const shown = binderOrder.filter(project => matches(project, filter));

  return (
    <section className="pp19-binder" aria-labelledby="pp19-binder-heading">
      <div className="pp19-binder-head">
        <h2 id="pp19-binder-heading" className="pp19-binder-heading">
          The binder
        </h2>
        <p className="pp19-binder-intro">
          Every project we have built, one card each, no pack needed. Click a card to see the full project.
        </p>
      </div>
      <div className="pp19-binder-bar">
        <fieldset className="pp19-binder-tabs">
          <legend className="pp19-sr-only">Show cards</legend>
          {filterTabs.map(tab => (
            <button
              key={tab.filter}
              type="button"
              className="pp19-binder-tab"
              aria-pressed={filter === tab.filter}
              onClick={() => setFilter(tab.filter)}
            >
              {tab.label} <span className="pp19-binder-tab-count">{countCards(tab.filter)}</span>
            </button>
          ))}
        </fieldset>
        <BranchLegend />
      </div>
      <div className="pp19-binder-page">
        <div className="pp19-binder-rings" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="pp19-sr-only" aria-live="polite">
          Showing {pluralizeCards(shown.length)}
        </p>
        <ul className="pp19-pockets">
          {shown.map(project => (
            // One clear sleeve per card; the whole card opens the project.
            <li key={project.slug} className="pp19-pocket">
              <TradingCard project={project} action="open" onOpen={() => onOpen(project.slug)} />
              {/* On the sleeve, above its glare: this card came from a pack opened this visit. */}
              {newSlugs.includes(project.slug) && <span className="pp19-new">New</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
