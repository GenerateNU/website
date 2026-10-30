import { Link } from 'react-router-dom';

import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import PreviewMedia from '@/component/ProjectsPageV8/FeaturedBanner/PreviewMedia';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';
import { FROM_PROJECT_LIST } from '@/shared/useCameFromProjectList';
import useMediaQuery from '@/shared/useMediaQuery';

type PreviewScreenProps = {
  project: Project;
  basePath: string;
};

// The cabinet's monitor: whatever the cursor is on plays here, with its stats and a start button.
export default function PreviewScreen({ project, basePath }: PreviewScreenProps) {
  const motionAllowed = useMediaQuery('(prefers-reduced-motion: no-preference)');
  const crew = project.members.length;

  return (
    <section className="pp9-monitor" aria-labelledby="pp9-monitor-name">
      <div className="pp9-crt">
        {/* Keyed so the screen "tunes in" again, and the video starts over, each time the cursor moves. */}
        <PreviewMedia key={project.slug} project={project} playing={motionAllowed} className="pp9-crt-media" />
      </div>
      <div className="pp9-monitor-body">
        <p className="pp9-label pp9-label--yellow">{project.featured ? '★ Featured project' : 'Project'}</p>
        <h2 id="pp9-monitor-name" className="pp9-monitor-name">
          {project.name}
        </h2>
        <dl className="pp9-stats">
          <dt>Class</dt>
          <dd className="pp9-stats-tags">
            {project.teams.map(team => (
              <TeamTag key={team} team={team} />
            ))}
          </dd>
          <dt>Season</dt>
          <dd>{formatSemester(project.semester)}</dd>
          <dt>Crew</dt>
          <dd>
            <span className="pp9-meter" style={{ width: `${crew * 0.85}rem` }} aria-hidden="true" />
            {crew} members
          </dd>
        </dl>
        {project.description && <p className="pp9-monitor-desc">{project.description}</p>}
        <Link key={project.slug} to={`${basePath}/${project.slug}`} state={FROM_PROJECT_LIST} className="pp9-start">
          <span aria-hidden="true">▶</span> Start: view project
        </Link>
      </div>
    </section>
  );
}
