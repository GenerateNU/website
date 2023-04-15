import "./style.css"
import Project from "./Project/Project"

export default function AllProjects() {
  const projects = [
    {
      name: "Earnz",
      image: "",
      teams: "",
    },
    {
      name: "SmartyPill",
      image: "",
      teams: "",
    },
    {
      name: "SmartyPill",
      image: "",
      teams: "",
    },
  ];

  const generateGrid = () => {
    const grid = [];

    for (let i = 0; i < projects.length; i+=2) {
      grid.push(
        <div className="project-row">
          <Project
            name={projects[i].name}
            image={projects[i].image}
            teams={projects[i].teams}
          />
          {i + 1 < projects.length ? (
            <Project
              name={projects[i + 1].name}
              image={projects[i + 1].image}
              teams={projects[i + 1].teams}
            />
          ) : <div></div>}
        </div>
      );
    }

    return grid;
  }

  return (
    <div className="all-projects-container">
      <div className="all-projects-header">
        <h1 className="projects-title">All Projects</h1>
      </div>
      <div className="all-projects">
          {generateGrid()}
      </div>
    </div>
  );
}