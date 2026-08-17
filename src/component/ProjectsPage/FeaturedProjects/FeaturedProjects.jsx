import React, { useState, useRef, useEffect } from 'react'
import NavBar from '../../NavBar'
import './style.css'
import Arrow from '../../../assets/images/projectspage/arrowbutton.svg'
import Projects from '../../../data/featuredProjectData.js'
import useWebsite from '../../../shared/useWebsite'
import ShadowedButton from '../../ShadowedButton'
import FeaturedProjectCard from '../FeaturedProjectCard/FeaturedProjectCard.jsx'

const SLIDE_GAP_PX = 20 // must match the gap set in .pp-fp-carousel-track CSS

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  const handleProject = (dir) => {
    setCurrentIndex((prev) => (prev + dir + Projects.length) % Projects.length)
  }

  const currentProject = Projects[currentIndex]

  return (
    <div className='pp-fp-projects-page-container'>
      <div className='pp-fp-navbar-style' id='pp-fp-projects-navbar'>
        <NavBar />
      </div>
      <div className='featured-pp-fp-projects'>
        {!mobile ? (
          <DesktopFeaturedProjects
            handleProject={handleProject}
            currentIndex={currentIndex}
            currentProject={currentProject}
            mobile={mobile}
          />
        ) : (
          <MobileFeaturedProjects
            handleProject={handleProject}
            currentProject={currentProject}
            mobile={mobile}
          />
        )}
      </div>
    </div>
  )
}

function DesktopFeaturedProjects({ handleProject, currentIndex, mobile }) {
  return (
    <div className='w-full'>
      <div className='featured-pp-fp-projects-text'>
        <div className='pp-fp-projects-bg'>
          <h1 className='pp-fp-projects-title'>PROJECTS</h1>
          <p className='pp-fp-projects-text'>
            Teams work side-by-side to ensure products and processes are beyond
            expectations
          </p>
          <h2 className='pp-fp-projects-header'>FEATURED PROJECTS</h2>
        </div>
        <div className='pp-fp-carousel'>
          <div className='pp-fp-carousel-viewport'>
            <div
              className='pp-fp-carousel-track'
              style={{ '--index': currentIndex }}
            >
              {Projects.map((project, i) => (
                <div className='pp-fp-carousel-slide' key={project.name ?? i}>
                  <FeaturedProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
          <div className='featured-pp-fp-project-buttons'>
            <div
              className='pp-fp-projects-buttons'
              style={{ marginTop: '10vw' }}
            >
              <button
                className='pp-fp-projects-back'
                onClick={() => handleProject(-1)}
              >
                <img width='40vh' src={Arrow} alt='arrow icon' />
              </button>
              <button
                className='pp-fp-projects-forward'
                onClick={() => handleProject(1)}
              >
                <img width='40vh' src={Arrow} alt='arrow icon' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileFeaturedProjects({ handleProject, currentProject, mobile }) {
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
            <h1 className='pp-fp-project-name'>{currentProject.name}</h1>
            <h2 className='pp-fp-project-team'>{currentProject.type}</h2>
          </div>
          <div className='mobile-view-pt'>
            <ShadowedButton
              fillColor='white'
              xPad={mobile ? '12vw' : '4vw'}
              yPad={mobile ? '2vw' : '4vw'}
              textColor='black'
              fontSize='2vh'
              text='view'
              onClick={() =>
                (window.location.href = `/case-study/${currentProject.name.toLowerCase()}`)
              }
            />
          </div>
        </div>
      </div>
      <div className='pp-fp-project'>
        <div className='image-container'>
          <img
            className='pp-fp-image'
            src={currentProject.image}
            alt='arrow icon'
          />
        </div>
        <div className='pp-fp-project-text'>
          <p>{currentProject.description}</p>
          <div className='view-pp-fp-project-div-2'>
            <div className='pp-fp-projects-buttons'>
              <ShadowedButton
                fillColor='white'
                className='pp-fp-projects-forward'
                xPad={mobile ? '3vw' : '4vw'}
                yPad={mobile ? '3vw' : '4vw'}
                textColor='white'
                text={<img width={'40vh'} src={Arrow} alt='arrow icon' />}
                onClick={() => handleProject(1)}
              />
              <ShadowedButton
                fillColor='white'
                className='pp-fp-projects-back'
                xPad={mobile ? '3vw' : '4vw'}
                yPad={mobile ? '3vw' : '4vw'}
                textColor='white'
                text={<img width={'40vh'} src={Arrow} alt='arrow icon' />}
                onClick={() => handleProject(-1)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
