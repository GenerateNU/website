import './style.css';
import { teamImages } from './teamImages';

export type ProjectTeam = 'hardware' | 'software';

type ProjectProps = {
  name: string;
  image: string;
  teams: ProjectTeam[];
  onSelect?: () => void;
};

export default function Project({ name, image, teams, onSelect }: ProjectProps) {
  return (
    <div className="project-card">
      <h2 className="project-name">{name}</h2>
      <div className="project-images">
        <button type="button" className="project-link" disabled={!onSelect} onClick={onSelect}>
          <img alt={name} src={image}></img>
        </button>
        <div className="project-teams">
          {teams.map(team => {
            return <img key={team} alt={team} src={teamImages[team]}></img>;
          })}
        </div>
      </div>
    </div>
  );
}
