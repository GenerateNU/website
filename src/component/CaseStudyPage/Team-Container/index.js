import ClientProjectsJSON from '../client-projects-json'
import './style.css'
import './style-mobile.css'
import useWebsite from '../../../shared/useWebsite'
import React from 'react'
import { ReactComponent as Circle } from './Circle.svg'
import { ReactComponent as Rectangle } from './Rectangle.svg'
import { SvgIcon } from '@mui/material'

export default function TeamContainer({ isDesktop }) {
  const casestudy =
    ClientProjectsJSON[window.location.pathname.split('/').pop()]
  return (
    <div style={{ paddingBottom: '10vh' }}>
      <div className='cs-title-container'>
        <div className='cs-team-container'>
          <div className='cs-team-style'>Team</div>
          <div className='cs-team-with-image-container'>
            <div className='cs-team-layout-container'>
              {casestudy.teamMembers.map((tm, index) =>
                index % 2 == 0 ? (
                  <div className='cs-team-layout-beside'>
                    <div>
                      <div className='cs-team-inner-name-container'>
                        <SvgIcon
                          component={Circle}
                          inheritViewBox
                          sx={{
                            fontSize: 48,
                            color: tm.color,
                            marginRight: '1vh',
                            '&:hover': { color: 'black' }
                          }}
                        />
                        <div>
                          <div className='cs-team-name-style'>{tm.name}</div>
                          <div className='cs-team-title-style'>{tm.title}</div>
                        </div>
                      </div>
                    </div>
                    {index + 1 < casestudy.teamMembers.length && (
                      <div className='cs-team-name-container'>
                        <div className='cs-team-inner-name-container'>
                          <SvgIcon
                            component={Circle}
                            inheritViewBox
                            sx={{
                              fontSize: 48,
                              color: casestudy.teamMembers.at(index + 1).color,
                              marginRight: '1vh'
                            }}
                          />
                          <div>
                            <div className='cs-team-name-style'>
                              {casestudy.teamMembers.at(index + 1).name}
                            </div>
                            <div className='cs-team-title-style'>
                              {casestudy.teamMembers.at(index + 1).title}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <></>
                )
              )}
            </div>
            {isDesktop && <TeamImageContainer casestudy={casestudy} />}
          </div>
        </div>
      </div>
    </div>
  )
}

function TeamImageContainer({ casestudy }) {
  return (
    <div style={{ marginLeft: 'auto' }}>
      <div
        style={{
          position: 'relative',
          width: '40vw',
          height: '20vw',
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <SvgIcon
          component={Rectangle}
          inheritViewBox
          sx={{
            fontSize: '30vw',
            marginLeft: '5vw',
            color: casestudy.teamImage.bgColor,
            position: 'absolute'
          }}
        />
        <img
          src={casestudy.teamImage.image}
          style={{
            marginLeft: 'auto',
            width: '30vw',
            marginBottom: '10vw',
            position: 'absolute'
          }}
        />
      </div>
    </div>
  )
}
