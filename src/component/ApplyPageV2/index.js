import React from 'react'
import NavBar from '../NavBar'
import TeamApplicationCard from './TeamApplicationCard'
import useWebsite from '../../shared/useWebsite'
import { useSanity } from '../../services/useSanity'
import './style.css'

const header = 'join generate'
const quote =
  "We're always looking for passionate individuals who are ready to learn and grow. We have opportunities that run broad and deep. If you don’t see anything right now drop an email and we’ll let you know when positions open up again."

const desktopContent = (firstColumn, secondColumn) => {
  return (
    <>
      <div className='ap_container'>
        <div className='ap_img' />
        <div className='navbar-style'>
          <NavBar />
        </div>
        <div className='join-header'>{header}</div>
        <div className='join-text'>{quote}</div>
        <div className='column-container'>
          <div className='left-team-column'>
            {firstColumn.map((team) => (
              <TeamApplicationCard team={team} />
            ))}
          </div>
          <div className='right-team-column'>
            {secondColumn.map((team) => (
              <TeamApplicationCard team={team} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

// TODO: fix this formatting
const mobileContent = (teams) => {
  return (
    <>
      <div className='ap_mobile'>
        <div className='ap_img' />
        <div className='navbar-style'>
          <NavBar />
        </div>
        <div className='join-header'>{header}</div>
        <div className='join-text'>{quote}</div>
        <div className='column-container'>
          {teams.map((team) => (
            <TeamApplicationCard team={team} />
          ))}
        </div>
      </div>
    </>
  )
}

export default function ApplyPage() {
  const query = `*[_type == "team"] {
    ...,
    "contributorRoles": contributorRoles[]-> {
      role,
      applicationLink},
    "leadRoles": leadRoles[]-> {
      role,
      applicationLink  },
    "chiefRoles": chiefRoles[]-> {
      role,
      applicationLink  }
  }| order(zIndex desc)`
  const teams = useSanity(query, {}, (data) =>
    data
      ? data.map((team) => ({
          ...team,
          color: team.color.hex
        }))
      : []
  )

  const halfLength = Math.ceil(teams.length / 2)
  const leftCol = teams.slice(0, halfLength)
  const rightCol = teams.slice(halfLength)

  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  return !mobile ? desktopContent(leftCol, rightCol) : mobileContent(teams)
}
