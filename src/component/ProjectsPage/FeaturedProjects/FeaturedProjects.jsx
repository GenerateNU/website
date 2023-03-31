import NavBar from "../../NavBar";
import "./style.css";
import Arrow from "../../../assets/images/projectspage/arrowbutton.svg";

export default function FeaturedProjects() {
  return (
    <div className="projects-page-container">
      <div className="navbar-style">
        <NavBar />
      </div>
      <div className="featured-projects">
        <div className="featured-projects-text">
          <h1 className="projects-title">Featured Projects</h1>
          <p className="projects-text">
            Teams work side-by-side to ensure products and processes are beyond
            expectations
          </p>
        </div>
        <div className="featured-project-buttons">
          <button className="projects-button projects-up" onClick={console.log("up")}>
            <img src={Arrow}></img>
          </button>
          <button className="projects-button projects-down" onClick={console.log("down")}>
            <img src={Arrow}></img>
          </button>
        </div>
      </div>
    </div>
  );
}
