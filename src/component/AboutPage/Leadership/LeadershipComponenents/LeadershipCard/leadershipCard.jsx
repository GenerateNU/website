import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import ShadowedButton from '../../../../ShadowedButton'
import './style.css'

export default function LeadershipCard({
  director: {
    title = '',
    team = '',
    color = '',
    activeIcon = null,
    inactiveIcon = null,
    name = '',
    image = null,
    bio = '',
    emailUsername = '',
    zIndex = 0
  } = {}
}) {
  const [flipped, setFlipped] = useState(false)
  const isDesktop = !window.matchMedia('(max-device-width: 650px)').matches

  const yPad = isDesktop ? '.5vh' : '.5vw'
  const xPad = isDesktop ? '1.5vh' : '1.5vw'
  const buttonFontSize = isDesktop ? '2.66vh' : '4vw'
  const cardZIndex = isDesktop ? zIndex : '0'

  return (
    <ReactCardFlip
      isFlipped={flipped}
      flipDirection='vertical'
      cardZIndex={cardZIndex}
    >
      {/* Front of the card */}
      <div
        className='card card-back rounded-0'
        style={{ backgroundColor: color }}
      >
        <div className='card-team'>{team}</div>
        <img className='card-image' src={image} alt='Dave was here'></img>
        <div className='card-person-role'>
          <div className='card-person'>{name}</div>
          <div className='card-role'>{title}</div>
        </div>
        <div className='card-button'>
          <ShadowedButton
            fillColor='white'
            yPad={yPad}
            xPad={xPad}
            fontSize={buttonFontSize}
            text='bio'
            onClick={() => setFlipped((prev) => !prev)}
          />
        </div>
      </div>
      {/* Back of the card */}
      <div
        className='card card-front rounded-0'
        style={{ backgroundColor: color }}
      >
        <div className='card-team'>{team}</div>
        <div className='card-description'>{bio}</div>
        <div className='card-button'>
          <ShadowedButton
            fillColor='white'
            yPad={yPad}
            xPad={xPad}
            fontSize={buttonFontSize}
            text='back'
            onClick={() => setFlipped((prev) => !prev)}
          />
        </div>
      </div>
    </ReactCardFlip>
  )
}
