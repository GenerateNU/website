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
            <div className="projects-mobile">
              <h1>Earnz</h1>
              <h2>software</h2>
            </div>
            <div className="projects-buttons">
              <button className="projects-button projects-forward">
                <img src={Arrow}></img>
              </button>
              <button className="projects-button projects-back">
                <img src={Arrow}></img>
              </button>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project">
            <img src={EarnzMockUp}></img>
            <div className="project-text">
              <h1 className="earnz-header projects-desktop">Earnz</h1>
              <h2 className="project-team projects-desktop">software</h2>
              <p>
                A unique, two-sided promotional and loyalty platform built to
                level the playing field for independent bars and restaurants by
                allowing them to utilize an app to acquire and retain customers
                as easily and cost effectively as currently only chains can.
              </p>
              <div className="view-project-div">
                <button className="view-project-button">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
