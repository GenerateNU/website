import type { RefObject } from 'react';

import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

import AdjacentProjects from './AdjacentProjects';
import MediaViewer from './MediaViewer';
import ProjectLinks from './ProjectLinks';
import ProjectStrip from './ProjectStrip';
import { getBand } from './roster';
import type { SelectProject } from './roster';
import TeamRoles from './TeamRoles';

type ProjectDetailProps = {
  project: Project;
  // The projects the strip and Previous / Next walk through: the current filter's order.
  list: Project[];
  headingRef: RefObject<HTMLHeadingElement | null>;
  // The part that cross-fades when the visitor switches project.
  mainRef: RefObject<HTMLDivElement | null>;
  // Only the wide detail has room for the strip of every project.
  withStrip: boolean;
  closeLabel: string;
  paused: boolean;
  onTogglePause: () => void;
  onSelect: SelectProject;
  onClose: () => void;
};

// Everything about one project: the full-width detail on wide screens, the slide-up panel on phones.
export default function ProjectDetail(props: ProjectDetailProps) {
  const { project, list, headingRef, mainRef, withStrip, closeLabel, paused, onTogglePause, onSelect, onClose } = props;

  return (
    <article className="pp20-detail" aria-labelledby="pp20-detail-name">
      <div className="pp20-detail-bar">
        <button type="button" className="pp20-back" onClick={onClose}>
          <span aria-hidden="true">←</span> {closeLabel}
        </button>
      </div>
      {withStrip && <ProjectStrip projects={list} current={project} onSelect={onSelect} />}
      <div ref={mainRef} className="pp20-detail-main">
        <div className="pp20-detail-media">
          {/* Keyed so a different project opens on its own first picture. */}
          <MediaViewer key={project.slug} project={project} paused={paused} onTogglePause={onTogglePause} />
        </div>
        <div className="pp20-detail-info">
          <div className={`pp20-band pp20-band--${getBand(project)}`}>
            <h2 id="pp20-detail-name" ref={headingRef} tabIndex={-1} className="pp20-detail-name">
              {project.name}
            </h2>
          </div>
          <div className="pp20-detail-body">
            <p className="pp20-label">{project.featured ? 'Featured project' : 'Project'}</p>
            <dl className="pp20-facts">
              <div>
                <dt>Discipline</dt>
                <dd className="pp20-facts-tags">
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
            {project.description && <p className="pp20-detail-desc">{project.description}</p>}
            {project.client && (
              <figure className="pp20-quote">
                <blockquote>
                  <p>“{project.client.quote}”</p>
                </blockquote>
                <figcaption>
                  <span className="pp20-quote-name">{project.client.name}</span>
                  <span className="pp20-quote-school">Client · {project.client.school}</span>
                </figcaption>
              </figure>
            )}
            <TeamRoles project={project} />
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
      <div className="pp20-detail-foot">
        <AdjacentProjects project={project} list={list} onSelect={onSelect} />
      </div>
    </article>
  );
}
