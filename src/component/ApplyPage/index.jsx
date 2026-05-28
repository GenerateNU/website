import React from 'react'
import Categories from './Categories'
import NavBar from '../NavBar'

const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches

const quote =
  'We’re always looking for passionate individuals who are ready to learn and grow. We have opportunities that run broad and deep. If you don’t see anything right now drop an email and we’ll let you know when positions open up again.'

const vibeQuote = ['WE VIBE HARD AND', 'MAKE THINGS']
const desktopContent = () => {
  return (
    <>
      <div className='ap_container'>
        <div className='ap_img' />
        <div className='navbar-style'>
          <NavBar />
        </div>
        <div className='ap_text'>{vibeQuote[0]}</div>
        <div className='ap_text'>{vibeQuote[1]}</div>
        <div className='ap_text2'>{quote}</div>
        <Categories />
      </div>
    </>
  )
}
const mobileContent = () => {
  return (
    <>
      <div className='ap_mobile'>
        <div className='ap_img' />
        <div className='navbar-style'>
          <NavBar />
        </div>
        <div className='ap_text'>{vibeQuote[0]}</div>
        <div className='ap_text'>{vibeQuote[1]}</div>
        <div className='ap_text2'>{quote}</div>
        <Categories />
      </div>
    </>
  )
}
export default function ApplyPage() {
  return isBigScreen ? desktopContent() : mobileContent()
}
