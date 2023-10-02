import React, { useState } from 'react'
import NavBar from '../../NavBar'
import './style.css'
import Arrow from '../../../assets/images/projectspage/arrowbutton.svg'
import Projects from '../../../data/featuredProjectData.js'

export default function FeaturedProjects() {
  const [currentProject, setCurrentProject] = useState(Projects[0])

  const handleProject = (dir) => {
    const currentIndex = Projects.indexOf(currentProject)
    setCurrentProject(
      Projects[(currentIndex + dir + Projects.length) % Projects.length]
    )
  }

  return (
    <div className='pp-fp-projects-page-container'>
      <div className='pp-fp-navbar-style' id='pp-fp-projects-navbar'>
        <NavBar />
      </div>
      <div className='featured-pp-fp-projects'>
        <div className='featured-pp-fp-projects-text'>
          <div className='pp-fp-projects-bg'>
            <h1 className='pp-fp-projects-title'>Featured Projects</h1>
            <p className='pp-fp-projects-text'>
              Teams work side-by-side to ensure products and processes are
              beyond expectations
            </p>
          </div>

          <div className='featured-pp-fp-project-buttons'>
            <div className='pp-fp-projects-mobile'>
              <h1>{currentProject.name}</h1>
              <h2 className='pp-fp-project-team'>{currentProject.type}</h2>
            </div>
            <div className='pp-fp-projects-buttons'>
              <button
                className='pp-fp-projects-button pp-fp-projects-forward'
                onClick={() => handleProject(1)}
              >
                <img src={Arrow}></img>
              </button>
              <button
                className='pp-fp-projects-button pp-fp-projects-back'
                onClick={() => handleProject(-1)}
              >
                <img src={Arrow}></img>
              </button>
              <div className='view-pp-fp-project-div-2'>
                <a
                  className='view-pp-fp-project-button-2'
                  href={`/case-study/${currentProject.name.toLowerCase()}`}
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='pp-fp-projects'>
          <div className='pp-fp-project'>
            <div className='image-container'>
              <img className='pp-fp-image' src={currentProject.image}></img>
            </div>
            <div className='pp-fp-project-text'>
              <h1 className='pp-fp-projects-desktop'>{currentProject.name}</h1>
              <h2 className='pp-fp-project-team pp-fp-projects-desktop'>
                {currentProject.type}
              </h2>
              <p>{currentProject.description}</p>
              <div className='view-pp-fp-project-div'>
                <a href={`/case-study/${currentProject.name.toLowerCase()}`}>
                  <button className='view-pp-fp-project-button'>View</button>
                </a>
                <button
                  className='pp-fp-projects-button-2 pp-fp-projects-forward'
                  onClick={() => handleProject(1)}
                >
                  <img src={Arrow}></img>
                </button>
                <button
                  className='pp-fp-projects-button-2 pp-fp-projects-back'
                  onClick={() => handleProject(-1)}
                >
                  <img src={Arrow}></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
