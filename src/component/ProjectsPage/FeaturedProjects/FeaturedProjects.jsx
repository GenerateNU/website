import React, { useState } from 'react'
import NavBar from '../../NavBar'
import './style.css'
import Arrow from '../../../assets/images/projectspage/arrowbutton.svg'
import Projects from '../../../data/featuredProjectData.js'
import useWebsite from '../../../shared/useWebsite'

export default function FeaturedProjects() {
  const [currentProject, setCurrentProject] = useState(Projects[0])
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

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
        {!mobile ? (
          <DesktopFeaturedProjects
            handleProject={handleProject}
            currentProject={currentProject}
          />
        ) : (
          <MobileFeaturedProjects
            handleProject={handleProject}
            currentProject={currentProject}
          />
        )}
      </div>
    </div>
  )
}

function DesktopFeaturedProjects({ handleProject, currentProject }) {
  return (
    <>
      <div className='featured-pp-fp-projects-text'>
        <div className='pp-fp-projects-bg'>
          <h1 className='pp-fp-projects-title'>Featured Projects</h1>
          <p className='pp-fp-projects-text'>
            Teams work side-by-side to ensure products and processes are beyond
            expectations
          </p>
        </div>
        <div className='featured-pp-fp-project-buttons'>
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
          </div>
        </div>
      </div>
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
          </div>
        </div>
      </div>
    </>
  )
}

function MobileFeaturedProjects({ handleProject, currentProject }) {
  return (
    <>
      <div className='featured-pp-fp-projects-text'>
        <div className='pp-fp-projects-bg'>
          <h1 className='pp-fp-projects-title'>Featured Projects</h1>
          <p className='pp-fp-projects-text'>
            Teams work side-by-side to ensure products and processes are beyond
            expectations
          </p>
        </div>
        <div className='featured-pp-fp-project-buttons'>
          <div className='pp-fp-projects-mobile'>
            <h1>{currentProject.name}</h1>
            <h2 className='pp-fp-project-team'>{currentProject.type}</h2>
          </div>
          <div className='mobile-view-pt'>
            <a href={`/case-study/${currentProject.name.toLowerCase()}`}>
              <button className='view-pp-fp-project-button-2'>View</button>
            </a>
          </div>
        </div>
      </div>
      <div className='pp-fp-project'>
        <div className='image-container'>
          <img className='pp-fp-image' src={currentProject.image}></img>
        </div>
        <div className='pp-fp-project-text'>
          <p>{currentProject.description}</p>
          <div className='view-pp-fp-project-div-2'>
            <div className='pp-fp-projects-buttons'>
              <button
                className='pp-fp-projects-button-2 pp-fp-projects-forward'
                onClick={() => handleProject(1)}
              >
                <img width={40} src={Arrow}></img>
              </button>
              <button
                className='pp-fp-projects-button-2 pp-fp-projects-back'
                onClick={() => handleProject(-1)}
              >
                <img width={40} src={Arrow}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
