import "./style.css"
import Project from "./Project/Project"
import Alia from "../../../assets/images/projectspage/alia.svg";
import Arctic from "../../../assets/images/projectspage/arctic.svg";
import Jurni from "../../../assets/images/projectspage/jurni.svg";
import ShowNxt from "../../../assets/images/projectspage/shownxt.svg";
import HotDate from "../../../assets/images/projectspage/hotdate.svg";
import AutoPasser from "../../../assets/images/projectspage/autopasser.svg";

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
    {
      name: "Hot Date",
      image: HotDate,
      teams: ["hardware"],
    },
    {
      name: "Autopasser",
      image: AutoPasser,
      teams: ["hardware"],
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
    <div className="all-projects-container" style={
      {width: Math.ceil(projects.length / 2) * 500 + 200}
    }>
      <div className="all-projects-header">
        <h1 className="projects-title">All Projects</h1>
      </div>
      <div className="all-projects">
          {generateGrid()}
      </div>
    </div>
  );
}