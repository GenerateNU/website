import React from 'react'
import PopupAd from '../PopupAd'
import puzzle from './assets/gen-puzzle.svg'
import './style.css'

/**
 * Member Info Session popup.
 */
export function MemberInfoSession({ rsvpUrl, onClose }) {
  return (
    <PopupAd onClose={onClose} className='mis-popup'>
      <div className='mis-card'>
        <img className='mis-mascot' src={puzzle} alt='' aria-hidden='true' />

        <p className='mis-eyebrow'>MEMBER INFO SESSION</p>

        <h2 className='mis-headline'>
          We want <s className='mis-strike'>Engineers</s>{' '}
          <span className='mis-highlight'>Builders</span>
        </h2>

        <p className='mis-body'>
          Whether you're into hardware engineering, UX Design, marketing, game
          design, finance, data science, or art there's a space for{' '}
          <strong>YOU</strong> in Generate.
        </p>

        <p className='mis-body'>
          Yes, we hire plenty of hardware, software, and data engineers. But we
          build alongside marketers, operations specialists, artists, internal
          systems developers, game designers, and more.
        </p>

        <p className='mis-body'>
          Register for the member information session to learn how you can join
          a team of ambitious leaders and leave your mark.
        </p>

        <a className='mis-cta' target='_blank' href={rsvpUrl}>
          <span className='mis-cta-text'>Register Today!</span>
          <span className='mis-cta-arrow' aria-hidden='true'>
            &rarr;
          </span>
        </a>
      </div>
    </PopupAd>
  )
}

export default MemberInfoSession
