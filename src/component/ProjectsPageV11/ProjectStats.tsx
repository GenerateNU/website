import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

type ProjectStatsProps = {
  project: Project;
};

// The project's "character stats": discipline, semester and a crew meter with one block per member.
export default function ProjectStats({ project }: ProjectStatsProps) {
  const crew = project.members.length;

  return (
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
  );
}
