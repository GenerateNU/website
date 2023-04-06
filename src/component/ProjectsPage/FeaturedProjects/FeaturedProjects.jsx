import NavBar from "../../NavBar";
import "./style.css";
import Arrow from "../../../assets/images/projectspage/arrowbutton.svg";
import EarnzMockUp from "../../../assets/images/landingpage-v2/Earnz_Mock_Up.png";

export default function FeaturedProjects() {
  return (
    <div className="projects-page-container">
      <div className="navbar-style" id="projects-navbar">
        <NavBar />
      </div>
      <div className="featured-projects">
        <div className="featured-projects-text">
          <h1 className="projects-title">Featured Projects</h1>
          <p className="projects-text">
            Teams work side-by-side to ensure products and processes are beyond
            expectations
          </p>
          <div className="featured-project-buttons">
            <button
              className="projects-button projects-up"
              onClick={console.log("up")}
            >
              <img src={Arrow}></img>
            </button>
            <button
              className="projects-button projects-down"
              onClick={console.log("down")}
            >
              <img src={Arrow}></img>
            </button>
          </div>
        </div>
        <div className="projects">
          <div className="project">
            <img src={EarnzMockUp}></img>
            <div className="project-text">
              <h1 className="earnz-header">Earnz</h1>
              <h2 className="project-team">software</h2>
              <p>
                A unique, two-sided promotional and loyalty platform built to
                level the playing field for independent bars and restaurants by
                allowing them to utilize an app to acquire and retain customers
                as easily and cost effectively as currently only chains can.
              </p>
              <button className="view-project-button">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
