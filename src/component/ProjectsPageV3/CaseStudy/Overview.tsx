import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type OverviewProps = {
  project: Project;
};

export default function Overview({ project }: OverviewProps) {
  const { client } = project;

  return (
    <div className="pp3-overview">
      <div>
        {project.description ? (
          <section className="pp3-section" aria-labelledby="pp3-overview-heading">
            <h2 id="pp3-overview-heading" className="pp3-section-title">
              Overview
            </h2>
            <p className="pp3-prose">{project.description}</p>
          </section>
        ) : null}
        {client ? (
          <figure className="pp3-quote">
            <blockquote>
              <p>“{client.quote}”</p>
            </blockquote>
            <figcaption>
              {client.name}, {client.school}
            </figcaption>
          </figure>
        ) : null}
      </div>
      <aside className="pp3-facts" aria-label="Project facts">
        <dl>
          {client ? (
            <div>
              <dt>Client</dt>
              <dd>
                {client.name}
                <br />
                {client.school}
              </dd>
            </div>
          ) : null}
          <div>
            <dt>Semester</dt>
            <dd>{formatSemester(project.semester)}</dd>
          </div>
          <div>
            <dt>Disciplines</dt>
            <dd className="pp3-capitalize">{project.teams.join(', ')}</dd>
          </div>
          <div>
            <dt>Team size</dt>
            <dd>{project.members.length} members</dd>
          </div>
        </dl>
      </aside>
    </div>
  );
}
