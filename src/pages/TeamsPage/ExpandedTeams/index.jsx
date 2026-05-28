import React from 'react'
import './style.css'
import NavBar from '../../../component/NavBar'
import TextRow from './CommonTeam/textRow'
import FeatureTextRow from './CommonTeam/featureTextRow'
import TeamPageFooter from './CommonTeam/TeamPageFooter'
import { ExpandedTeamsJSON } from './CommonTeam/JSONFiles/ExpandedTeamsJSON'
import { Routes, Route } from 'react-router-dom'
import useWebsite from '../../../shared/useWebsite'
import OperationsContainer from './Operations'
import ManagementContainer from './Management'
import SoftwareContainer from './Software'
import EngagementContainer from './Engagement'
import HardwareContainer from './Hardware'

export default function ExpandedTeamsPage() {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite
  const team = window.location.pathname.split('/').pop()
  return (
    <div class='expanded-wrapper'>
      <div className='intro-navbar'>
        <NavBar />
      </div>
      <div>
        {!mobile ? (
          <ExpandedTeamsHeader team={team} />
        ) : (
          <ExpandedTeamsMobileHeader team={team} />
        )}
        <div className='expanded-team-page-margins'>
          <WhatWeDoHowWeWork team={team} />
          <Routes>
            <Route path='/management' element={<ManagementContainer />} />
            <Route path='/operations' element={<OperationsContainer />} />
            <Route path='/software' element={<SoftwareContainer />} />
            <Route path='/hardware' element={<HardwareContainer />} />
            <Route path='/engagement' element={<EngagementContainer />} />
          </Routes>
        </div>
        <TeamPageFooter
          color={ExpandedTeamsJSON[team].color}
          page={ExpandedTeamsJSON[team].abbv}
        />
      </div>
    </div>
  )
}

function WhatWeDoHowWeWork({ team }) {
  const teamTopSection = ExpandedTeamsJSON[team]

  return (
    <>
      {teamTopSection.about.map((section, index) => (
        <TextRow
          key={index}
          title={section.header}
          description={section.body}
          picture={section.image}
          reverse={section.invert}
        />
      ))}
    </>
  )
}

function ExpandedTeamsHeader({ team }) {
  const teamTopSection = ExpandedTeamsJSON[team]

  return (
    <div className='header-wrapper'>
      <div
        className='management-header'
        style={{ backgroundColor: teamTopSection.color }}
      >
        <div className='header-title'>
          <div className='header-text' style={{ color: teamTopSection.color }}>
            <div style={{ marginTop: '-10%', marginBottom: '-10%' }}>
              {teamTopSection.abbv}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExpandedTeamsMobileHeader({ team }) {
  const teamTopSection = ExpandedTeamsJSON[team]
  return (
    <div className='mobile-header-wrapper'>
      <div
        className='mobile-management-header'
        style={{ backgroundColor: teamTopSection.color }}
      >
        <div className='mobile-header-title'>
          <div
            className='mobile-header-text'
            style={{ color: teamTopSection.color }}
          >
            <div style={{ marginTop: '-10%', marginBottom: '-10%' }}>
              {teamTopSection.abbv}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Featured({ team }) {
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite
  return (
    <>
      <div className={mobile ? 'paragraph-title-mobile' : 'paragraph-title'}>
        {ExpandedTeamsJSON[team].featured.header}
      </div>
      {ExpandedTeamsJSON[team].featured.items.map((value, index) => (
        <div
          className={`role-desc ${
            mobile ? 'paragraph-text-mobile' : 'paragraph-text'
          }`}
          style={{ marginBottom: '4vh' }}
        >
          <FeatureTextRow
            key={index}
            description={value.description}
            picture={value.image}
            reverse={value.invert}
            button={value.button}
          />
        </div>
      ))}
    </>
  )
}
