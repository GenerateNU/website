import React, { useState } from "react";
import NavBar from "../../NavBar";
import "./style.css";
import Arrow from "../../../assets/images/projectspage/arrowbutton.svg";
import Projects from "../../../data/featuredProjectData.js";

export default function FeaturedProjects() {
  const [currentProject, setCurrentProject] = useState(Projects[0]);

  const handleProject = (dir) => {
    const currentIndex = Projects.indexOf(currentProject);
    setCurrentProject(Projects[(currentIndex + dir + Projects.length) % Projects.length]) 
  }
  const maxImage = Projects.map(project => project.image).reduce((max, image) => {
    const imgObj = new Image();
    imgObj.src = image;
    if (imgObj.naturalWidth > max.width && imgObj.naturalHeight > max.height) {
      return { width: imgObj.naturalWidth, height: imgObj.naturalHeight };
    }
    return max;
  }, { width: 0, height: 0 });


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
              <h1>{currentProject.name}</h1>
              <h2 className="project-team">{currentProject.type}</h2>
            </div>
            <div className="projects-buttons">
              <button
                className="projects-button projects-forward"
                onClick={() => handleProject(1)}
              >
                <img src={Arrow}></img>
              </button>
              <button
                className="projects-button projects-back"
                onClick={() => handleProject(-1)}
              >
                <img src={Arrow}></img>
              </button>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project">
            <div className="image-container" style={{width:maxImage.width, height:maxImage.height}}>
              <img src={currentProject.image}></img>
            </div>
            <div className="project-text">
              <h1 className="projects-desktop">{currentProject.name}</h1>
              <h2 className="project-team projects-desktop">
                {currentProject.type}
              </h2>
              <p>{currentProject.description}</p>
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
