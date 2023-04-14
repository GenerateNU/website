import "./style.css";

export default function Project({name, image, teams, ...props}) {
    return (
      <div className="project-card">
        <div className="project-info">
          <h2 className="project-name">{name}</h2>
          {/* img */}
        </div>
        <div className="project-teams">
          {/* imgz */}
        </div>
      </div>
    );
}