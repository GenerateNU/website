import type { RefObject } from 'react';

import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import MediaViewer from './MediaViewer';
import ProjectLinks from './ProjectLinks';
import { getBand } from './roster';
import TeamRoles from './TeamRoles';

type DetailPanelProps = {
  project: Project;
  // Where the opened tile sits in its row, so the notch can point at it.
  column: number;
  columns: number;
  headingRef: RefObject<HTMLHeadingElement | null>;
  bodyRef: RefObject<HTMLDivElement | null>;
  paused: boolean;
  onTogglePause: () => void;
  onClose: () => void;
};

// The centre of column `column` across the panel, which spans the whole grid (gaps included).
const getNotchLeft = (column: number, columns: number): string =>
  `calc((100% - ${columns - 1} * var(--pp21-gap)) / ${columns} * ${column + 0.5} + ${column} * var(--pp21-gap))`;

// The open project, spread across the full width right under its row. The grid around it is the
// navigation: there is no Back button and no Previous / Next, just Close.
export default function DetailPanel(props: DetailPanelProps) {
  const { project, column, columns, headingRef, bodyRef, paused, onTogglePause, onClose } = props;

  return (
    <section id="pp21-panel" className="pp21-panel" aria-labelledby="pp21-panel-name">
      <span className="pp21-notch" style={{ left: getNotchLeft(column, columns) }} aria-hidden="true" />
      {/* The clip is what grows open; the body inside keeps its full height, so it can be measured. */}
      <div className="pp21-panel-clip">
        <div ref={bodyRef} className="pp21-panel-body">
          <button type="button" className="pp21-close" onClick={onClose}>
            <span aria-hidden="true">×</span> Close
          </button>
          <div className="pp21-panel-media">
            {/* Keyed so a different project opens on its own first picture. */}
            <MediaViewer key={project.slug} project={project} paused={paused} onTogglePause={onTogglePause} />
          </div>
          <div className="pp21-panel-info">
            <div className={`pp21-band pp21-band--${getBand(project)}`}>
              <h3 id="pp21-panel-name" ref={headingRef} tabIndex={-1} className="pp21-panel-name">
                {project.name}
              </h3>
            </div>
            <div className="pp21-panel-text">
              {project.featured && <p className="pp21-label">Featured project</p>}
              <dl className="pp21-facts">
                <div>
                  <dt>Discipline</dt>
                  <dd className="pp21-facts-tags">
                    {project.teams.map(team => (
                      <TeamTag key={team} team={team} />
                    ))}
                  </dd>
                </div>
                <div>
                  <dt>Semester</dt>
                  <dd>{formatSemester(project.semester)}</dd>
                </div>
                <div>
                  <dt>Team size</dt>
                  <dd>{project.members.length} people</dd>
                </div>
              </dl>
              {project.description && <p className="pp21-desc">{project.description}</p>}
              {project.client && (
                <figure className="pp21-quote">
                  <blockquote>
                    <p>“{project.client.quote}”</p>
                  </blockquote>
                  <figcaption>
                    <span className="pp21-quote-name">{project.client.name}</span>
                    <span className="pp21-quote-school">Client · {project.client.school}</span>
                  </figcaption>
                </figure>
              )}
              <TeamRoles project={project} />
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
