import { useState } from 'react';

import './flightlog.css';
import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import { firstDirection, sortMissions } from './sortMissions';
import type { SortKey, SortOrder } from './sortMissions';

type FlightLogProps = {
  projects: Project[];
  basePath: string;
};

type SortHeaderProps = {
  label: string;
  sortKey: SortKey;
  order: SortOrder | undefined;
  onSort: (key: SortKey) => void;
};

const sortedLabels: Record<SortKey, Record<SortOrder['direction'], string>> = {
  mission: { ascending: 'mission name, A to Z', descending: 'mission name, Z to A' },
  launched: { ascending: 'launch date, oldest first', descending: 'launch date, newest first' },
  crew: { ascending: 'crew size, smallest first', descending: 'crew size, largest first' },
};

// A column header that sorts the log; aria-sort tells screen readers which column leads and which way.
function SortHeader({ label, sortKey, order, onSort }: SortHeaderProps) {
  const direction = order?.key === sortKey ? order.direction : undefined;
  const arrow = { ascending: '↑', descending: '↓' }[direction ?? 'ascending'];

  return (
    <th scope="col" aria-sort={direction} className={`pp16-log-${sortKey}`}>
      <button type="button" className="pp16-sort" onClick={() => onSort(sortKey)}>
        {label}
        <span className={`pp16-sort-arrow${direction ? ' is-on' : ''}`} aria-hidden="true">
          {direction ? arrow : '↕'}
        </span>
      </button>
    </th>
  );
}

// Every project as a mission log: a real table, featured missions first, sortable by its headers.
// On phones each row folds into a labelled card, so nothing scrolls sideways.
export default function FlightLog({ projects, basePath }: FlightLogProps) {
  const [order, setOrder] = useState<SortOrder | undefined>(undefined);
  const rows = sortMissions(projects, order);

  // The first click on a column uses its natural direction; clicking it again flips it.
  const sortBy = (key: SortKey): void => {
    if (order?.key === key) {
      setOrder({ key, direction: order.direction === 'ascending' ? 'descending' : 'ascending' });
    } else {
      setOrder({ key, direction: firstDirection[key] });
    }
  };

  return (
    <section className="pp16-log" aria-labelledby="pp16-log-heading">
      <div className="pp16-log-inner">
        <p className="pp16-eyebrow">All missions</p>
        <h2 id="pp16-log-heading" className="pp16-log-heading">
          Flight log
        </h2>
        <p className="pp16-log-intro">
          Every project Generate has launched, {projects.length} in all. Use the column buttons to sort.
        </p>
        <table className="pp16-log-table">
          <caption className="pp16-sr-only">
            Flight log, sorted by {order === undefined ? 'featured first' : sortedLabels[order.key][order.direction]}
          </caption>
          <thead>
            <tr>
              <SortHeader label="Mission" sortKey="mission" order={order} onSort={sortBy} />
              <SortHeader label="Launched" sortKey="launched" order={order} onSort={sortBy} />
              <th scope="col" className="pp16-log-discipline">
                Discipline
              </th>
              <SortHeader label="Crew" sortKey="crew" order={order} onSort={sortBy} />
            </tr>
          </thead>
          <tbody>
            {rows.map(project => (
              <tr key={project.slug}>
                <th scope="row" className="pp16-log-mission">
                  <div className="pp16-log-mission-cell">
                    <ProjectMedia project={project} className="pp16-log-thumb" />
                    <span className="pp16-log-name">
                      <ProjectLink basePath={basePath} slug={project.slug} className="pp16-log-link">
                        {project.name}
                      </ProjectLink>
                      {project.featured === true && <span className="pp16-log-featured">Featured</span>}
                    </span>
                  </div>
                </th>
                <td data-label="Launched">{formatSemester(project.semester)}</td>
                <td data-label="Discipline">
                  <span className="pp16-log-tags">
                    {project.teams.map(team => (
                      <TeamTag key={team} team={team} />
                    ))}
                  </span>
                </td>
                <td data-label="Crew">{project.members.length} people</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
