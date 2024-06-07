import React from 'react'
import NavBar from '../../component/NavBar'
import TeamApplicationCard from './TeamApplicationCard'
import { useSanity } from '../../services/useSanity'
import './style.css'

const header = 'join generate'
const quote =
  "We're always looking for passionate individuals who are ready to learn and grow. We have opportunities that run across interests and experience levels. If the position you're hoping for isn't available right now, we re-open applications prior to each semester so check back soon!"

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
          <div className='left-column'>
            {firstColumn.map((team) => (
              <TeamApplicationCard team={team} />
            ))}
          </div>
          <div className='right-column'>
            {secondColumn.map((team) => (
              <TeamApplicationCard team={team} />
            ))}
          </div>
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
      applicationLink,
      activeApplication
    },
    "leadRoles": leadRoles[]-> {
      role,
      applicationLink,
      activeApplication
    },
    "chiefRoles": chiefRoles[]-> {
      role,
      applicationLink,
      activeApplication
    }
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

  return desktopContent(leftCol, rightCol)
}
