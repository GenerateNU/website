import ClientProjectsJSON from '../client-projects-json'
import './style.css'
import './style-mobile.css'
import React from 'react'

export default function CaseStudyHeader({ isDesktop, casestudy }) {
  return isDesktop ? (
    <Header casestudy={casestudy} />
  ) : (
    <MobileHeader casestudy={casestudy} />
  )
}

function Header({ casestudy }) {
  return (
    <div>
      <div className='cs-back'>
        {`< --`}
        <a href='/projects'>
          <button className='cs-back-button-style'>{`projects`}</button>
        </a>
      </div>
      <div className='cs-flex-container'>
        <div className='cs-title-container'>
          <div className='cs-title-style'>{casestudy.title}</div>
          <div className='cs-teams-container'>
            {casestudy.teams.map((team, index) => (
              <img
                key={index}
                className={
                  index == 0
                    ? 'cs-team-sizing'
                    : 'cs-team-sizing cs-team-spacing'
                }
                alt={'matt was here'}
                src={team}
              />
            ))}
          </div>
          <div className='cs-company-description'>
            {casestudy.companyDescription}
          </div>
          <div className='cs-client-container'>
            <div className='cs-client-style'>Client</div>
            <div className='cs-client-name-container'>
              <div className='cs-client-name-style'>
                {casestudy.client.name}
              </div>
              <div className='cs-client-title-style'>
                {casestudy.client.title}
              </div>
            </div>
          </div>
        </div>
        <img className='cs-image' alt={'matt was here'} src={casestudy.image} />
      </div>
    </div>
  )
}

function MobileHeader({ casestudy }) {
  return (
    <div className='csm-header-container'>
      <div className='csm-back'>
        {`< --`}
        <a href='/projects'>
          <button className='csm-back-button-style'>{`projects`}</button>
        </a>
      </div>

      <div className='csm-mobile-flex-container'>
        <div>
          <div className='csm-title-style'>{casestudy.title}</div>
          <div className='cs-teams-container'>
            {casestudy.teams.map((team, index) => (
              <img
                key={index}
                className={
                  index == 0
                    ? 'csm-team-sizing'
                    : 'csm-team-sizing csm-team-spacing'
                }
                alt={'matt was here'}
                src={team}
              />
            ))}
          </div>
          <img
            className='csm-image'
            alt={'matt was here'}
            src={casestudy.image}
          />
          <div className='csm-description-style'>
            {casestudy.companyDescription}
          </div>
          <div className='csm-client-container'>
            <div className='csm-client-style'>Client</div>
            <div className=''>
              <div className='csm-client-name-style'>
                {casestudy.client.name}
              </div>
              <div className='csm-client-title-style'>
                {casestudy.client.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
