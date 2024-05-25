import React from 'react'
import Categories from '../ApplyPage/Categories'
import NavBar from '../NavBar'
import MemberApplicationDropdown from './MemberApplicationDropdown'
import './style.css'

const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches

const header = 'join generate'
const quote =
  "We're always looking for passionate individuals who are ready to learn and grow. We have opportunities that run broad and deep. If you don’t see anything right now drop an email and we’ll let you know when positions open up again."

const desktopContent = () => {
  return (
    <>
      <div className='ap_container'>
        <div className='ap_img' />
        <div className='navbar-style'>
          <NavBar />
        </div>
        <div className='join-header'>{header}</div>
        <div className='join-text'>{quote}</div>
        <MemberApplicationDropdown
          color={'#FFBF3C'}
          team={'Software'}
          tags={['Full Stack', 'UI/UX', 'Branding', 'Mobile/Web Dev']}
          expand={true}
        ></MemberApplicationDropdown>
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
        <div className='ap_text2'>{quote}</div>
        <Categories />
      </div>
    </>
  )
}
export default function ApplyPage() {
  return isBigScreen ? desktopContent() : mobileContent()
}
