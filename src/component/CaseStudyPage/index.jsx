import React from 'react'
import CaseStudyHeader from './Case-Study-Header'
import TeamContainer from './Team-Container'
import CompanyLogo from './CompanyLogo'
import Highlight from './Highlight'
import BrandIdentity from './BrandIdentity'
import UpNext from './UpNext'
import Quote from './Quote'
import ClientProjectsJSON from './client-projects-json'
import useWebsite from '../../shared/useWebsite'
import NavBar from '../NavBar'
import './style.css'
import TeamPageFooter from '../../pages/TeamsPage/ExpandedTeams/CommonTeam/TeamPageFooter'
import NextPage from '../NextPage'

export default function CaseStudy() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const isDesktop = isBigScreen && isWebsite

  const casestudy =
    ClientProjectsJSON[window.location.pathname.split('/').pop()]

  return (
    <div>
      <div className='intro-navbar'>
        <NavBar />
      </div>
      <CaseStudyHeader isDesktop={isDesktop} casestudy={casestudy} />
      <TeamContainer isDesktop={isDesktop} casestudy={casestudy} />
      <CompanyLogo isDesktop={isDesktop} casestudy={casestudy} />
      <BrandIdentity isDesktop={isDesktop} casestudy={casestudy} />
      <Highlight isDesktop={isDesktop} casestudy={casestudy} />
      <Quote isDesktop={isDesktop} casestudy={casestudy} />
      <UpNext isDesktop={isDesktop} casestudy={casestudy} />
      <TeamPageFooter />
      <NextPage pageName='Apply' url='/apply' />
    </div>
  )
}
