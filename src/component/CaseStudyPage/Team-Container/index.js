import React from 'react'
import { ReactComponent as Circle } from './Circle.svg'
import { SvgIcon } from '@mui/material'
import './style.css'
import './style-mobile.css'

export default function TeamContainer({ isDesktop, casestudy }) {
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
                            fontSize: isDesktop ? 48 : '20vw',
                            color: tm.color,
                            marginRight: isDesktop ? '1vh' : ''
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
                              fontSize: isDesktop ? 48 : '20vw',
                              color: casestudy.teamMembers.at(index + 1).color,
                              marginRight: isDesktop ? '1vh' : ''
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
            <div style={{ marginLeft: 'auto' }}>
              {isDesktop && (
                <ImageContainer
                  imageWithBGColor={casestudy.teamImage}
                  isOffsetRight={true}
                  isDesktop={isDesktop}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ImageContainer({ imageWithBGColor, isOffsetRight, isDesktop }) {
  const { bgColor, image } = imageWithBGColor
  return (
    <div
      style={{
        width: isDesktop ? '40vw' : '90vw',
        display: 'flex',
        paddingTop: '10vh'
      }}
    >
      <div
        className='selector'
        style={{
          width: isDesktop ? '30vw' : '70vw',
          backgroundColor: bgColor,
          color: bgColor,
          marginTop: 'auto',
          marginLeft: 'auto'
        }}
      >
        <img
          src={image}
          className='selector'
          style={{
            width: isDesktop ? '30vw' : '70vw',
            position: 'relative',
            bottom: '3vw',
            left: isOffsetRight ? '' : '5vw',
            right: isOffsetRight ? '5vw' : ''
          }}
        />
      </div>
    </div>
  )
}
