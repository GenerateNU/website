import React from 'react'
import Categories from './Categories'
import Search from './Search'
import NavBar from '../NavBar'

const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches

const quote =
  'We’re always looking for passionate individuals who are ready to learn and grow. We have opportunities that run broad and deep. If you don’t see anything right now drop an email and we’ll let you know when positions open up again.'

const vibeQuote = ['WE VIBE HARD AND', 'MAKE THINGS']
const desktopContent = (team) => {
  return (
    <>
      <div className='ap_container'>
        <div className='ap_img' />
        <div className='navbar-style'>
          <NavBar />
        </div>
        <div className='ap_text'>{vibeQuote.join(' ')}</div>
        <div className='d-flex'>
          <div className='ap_text2 col-6 me-5 pe-5'>
            <div>{quote}</div>
          </div>
        </div>
        <Categories disp='desktop' />
      </div>
    </>
  )
}
const mobileContent = (team) => {
  return (
    <>
      <div className='ap_mobile'>
        <div className='ap_img' />
        <div className='navbar-style'>
          <NavBar />
        </div>
        <p className='ap_text_mobile'>{vibeQuote[0]}</p>
        <p className='ap_text_mobile'>{vibeQuote[1]}</p>

        <div className='ap_text2_mobile'>
          <div>{quote}</div>
        </div>
        <Categories disp='mobile' />
      </div>
    </>
  )
}
export default function ApplyPage() {
  return isBigScreen ? desktopContent() : mobileContent()
}
