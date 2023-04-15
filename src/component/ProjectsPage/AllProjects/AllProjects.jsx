import "./style.css"
import Project from "./Project/Project"
import Alia from "../../../assets/images/projectspage/alia.png";
import Arctic from "../../../assets/images/projectspage/arctic.png";
import Jurni from "../../../assets/images/projectspage/jurni.png";
import ShowNxt from "../../../assets/images/projectspage/shownxt.png";

export default function AllProjects() {
  const projects = [
    {
      name: "Jurni",
      image: Jurni,
      teams: ["software"],
    },
    {
      name: "Alia",
      image: Alia,
      teams: ["software"],
    },
    {
      name: "Arctic Vision",
      image: Arctic,
      teams: ["software", "hardware"],
    },
    {
      name: "ShowNxt",
      image: ShowNxt,
      teams: ["software"],
    },
  ];

  const generateGrid = () => {
    const grid = [];

    for (let i = 0; i < projects.length; i+=2) {
      grid.push(
        <div className="project-col">
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
          ) : (
            <div></div>
          )}
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