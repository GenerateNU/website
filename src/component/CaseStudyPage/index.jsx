import React from 'react'
import CaseStudyHeader from './Case-Study-Header'
import TeamContainer from './Team-Container'
import useWebsite from '../../shared/useWebsite'
import NavBar from '../NavBar'

import './style.css'
export default function CaseStudy() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const isDesktop = isBigScreen && isWebsite

  return (
    <div>
      <div className='intro-navbar'>
        <NavBar />
      </div>
      <CaseStudyHeader isDesktop={isDesktop} />
      <TeamContainer isDesktop={isDesktop} />
    </div>
  )
}
