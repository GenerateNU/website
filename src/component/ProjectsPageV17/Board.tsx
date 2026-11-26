import ProjectLink from '@/component/ProjectsPageV5/ProjectLink';
import ProjectMedia from '@/component/ProjectsPageV5/ProjectMedia';
import TeamTag from '@/component/ProjectsPageV5/TeamTag';
import { formatNumber } from '@/component/ProjectsPageV8/FeaturedBanner/formatNumber';
import projects, { featuredProjects, formatSemester } from '@/data/projectData';
import type { Project } from '@/data/projectData';

// Featured work first, then everything else in the data's own order.
const boardProjects: Project[] = [...featuredProjects, ...projects.filter(project => project.featured !== true)];

type BoardCardProps = {
  project: Project;
  index: number;
  basePath: string;
};

// A print taped to the board, a little crooked; pointing at it or focusing it straightens and lifts it.
function BoardCard({ project, index, basePath }: BoardCardProps) {
  return (
    <li className="pp17-pin">
      <ProjectLink basePath={basePath} slug={project.slug} className="pp17-card">
        <ProjectMedia project={project} className="pp17-card-media" />
        <span className="pp17-card-number">No. {formatNumber(index)}</span>
        <h3 className="pp17-card-name">{project.name}</h3>
        <span className="pp17-card-semester">{formatSemester(project.semester)}</span>
        <span className="pp17-card-tags">
          {project.teams.map(team => (
            <TeamTag key={team} team={team} />
          ))}
        </span>
      </ProjectLink>
    </li>
  );
}

type BoardProps = {
  basePath: string;
};

// "On the board": every project pinned up, so nothing is only reachable through the stack.
export default function Board({ basePath }: BoardProps) {
  return (
    <section className="pp17-board" aria-labelledby="pp17-board-heading">
      <div className="pp17-board-head">
        <h2 id="pp17-board-heading" className="pp17-board-title">
          On the board
        </h2>
        <p className="pp17-board-caption">All {boardProjects.length} projects, featured ones first.</p>
      </div>
      <ul className="pp17-pins">
        {boardProjects.map((project, index) => (
          <BoardCard key={project.slug} project={project} index={index} basePath={basePath} />
        ))}
      </ul>
    </section>
  );
}
