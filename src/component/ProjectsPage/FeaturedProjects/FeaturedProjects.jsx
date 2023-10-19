import React, { useState } from 'react'
import NavBar from '../../NavBar'
import './style.css'
import Arrow from '../../../assets/images/projectspage/arrowbutton.svg'
import Projects from '../../../data/featuredProjectData.js'
import useWebsite from '../../../shared/useWebsite'
import ShadowedButton from '../../ShadowedButton'

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

function DesktopFeaturedProjects({ handleProject, currentProject, mobile }) {
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
          <div className='pp-fp-projects-buttons' style={{ marginTop: '10vw' }}>
            <ShadowedButton
              fillColor='white'
              className='pp-fp-projects-forward'
              xPad={mobile ? '15vw' : '2vw'}
              yPad={mobile ? '6vw' : '2vw'}
              textColor='white'
              text={<img width={'40vh'} src={Arrow} />}
              onClick={() => handleProject(1)}
            />
            <ShadowedButton
              fillColor='white'
              className='pp-fp-projects-back'
              xPad={mobile ? '15vw' : '2vw'}
              yPad={mobile ? '6vw' : '2vw'}
              textColor='white'
              text={<img width={'40vh'} src={Arrow} />}
              onClick={() => handleProject(-1)}
            />
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
          <div className='pp-fp-desc'>{currentProject.description}</div>
          <div className='view-pp-fp-project-div' style={{ marginTop: '10vw' }}>
            <ShadowedButton
              fillColor='white'
              xPad={mobile ? '12vw' : '60px'}
              yPad={mobile ? '2vw' : '20px'}
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
    </>
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
          <img className='pp-fp-image' src={currentProject.image}></img>
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
                text={<img width={'40vh'} src={Arrow} />}
                onClick={() => handleProject(1)}
              />
              <ShadowedButton
                fillColor='white'
                className='pp-fp-projects-back'
                xPad={mobile ? '3vw' : '4vw'}
                yPad={mobile ? '3vw' : '4vw'}
                textColor='white'
                text={<img width={'40vh'} src={Arrow} />}
                onClick={() => handleProject(-1)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
