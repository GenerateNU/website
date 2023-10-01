import ClientProjectsJSON from '../client-projects-json'
import clsx from 'clsx'
import './style.css'
import './style-mobile.css'
import useWebsite from '../../../shared/useWebsite'
import React from 'react'

export default function CaseStudyHeader() {
  const casestudy = ClientProjectsJSON.projects.find(
    (cs) => cs.title === 'SmartyPill'
  )

  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const isDesktop = isBigScreen && isWebsite

  return isDesktop ? (
    <Header casestudy={casestudy} />
  ) : (
    <MobileHeader casestudy={casestudy} />
  )
}

function Header({ casestudy }) {
  return (
    <div className='cs-flex-container'>
      <div className='cs-title-container'>
        <div className='cs-title-style'>{casestudy.title}</div>
        <div className='cs-teams-container'>
          {casestudy.teams.map((team, index) => (
            <img
              key={index}
              className={clsx(
                'cs-team-sizing',
                index == 0 ? '' : 'cs-team-spacing'
              )}
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
            <div className='cs-client-name-style'>{casestudy.client.name}</div>
            <div className='cs-client-title-style'>
              {casestudy.client.title}
            </div>
          </div>
        </div>
      </div>
      <img className='cs-image' alt={'matt was here'} src={casestudy.image} />
    </div>
  )
}

function MobileHeader({ casestudy }) {
  return (
    <div className='csm-mobile-flex-container'>
      <div>
        <div className='csm-title-style'>{casestudy.title}</div>
        <div className='cs-teams-container'>
          {casestudy.teams.map((team, index) => (
            <img
              key={index}
              className={clsx(
                'csm-team-sizing',
                index == 0 ? '' : 'cs-team-spacing'
              )}
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
        <div className=''>
          <div className=''>Client</div>
          <div className=''>
            <div className=''>{casestudy.client.name}</div>
            <div className=''>{casestudy.client.title}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
