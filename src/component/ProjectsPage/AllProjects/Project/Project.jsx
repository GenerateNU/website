import "./style.css";
import Hardware from "../../../../assets/images/projectspage/hardware.svg";
import Software from "../../../../assets/images/projectspage/software.svg";

export default function Project({ name, image, teams, ...props }) {
  const teamImages = {
    hardware: Hardware,
    software: Software,
  };

  return (
    <div className="project-card">
      <h2 className="project-name">{name}</h2>
      <div className="project-images">
        {/* disabled links until page for individual projects is built*/}
        <a
          style={{ pointerEvents: "none" }}
          className="project-link"
          href="/projects"
        >
          <img alt={name} src={image}></img>
        </a>
        <div className="project-teams">
          {teams.map((team) => {
            return <img alt={team} src={teamImages[team]}></img>;
          })}
        </div>
      </div>
    </div>
  );
}
