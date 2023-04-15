import "./style.css";

export default function Project({name, image, teams, ...props}) {
    return (
      <div className="project-card">
        <div className="project-info">
          <h2 className="project-name">{name}</h2>
          <a className="project-link" href="/projects">
            {/* placeholder */}
            <svg width="100%" height="100%">
              <rect width="100%" height="100%" fill="red"></rect>
            </svg>
          </a>
        </div>
        <div className="project-teams">
          {/* imgz */}
        </div>
      </div>
    );
}