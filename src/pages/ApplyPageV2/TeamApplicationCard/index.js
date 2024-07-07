import React, { useState } from 'react'
import RoleCategory from '../RoleCategory'
import Tag from '../Tag'
import { ReactComponent as DownArrow } from '../../../assets/images/applypage-v2/downArrow.svg'
import { ReactComponent as RightArrow } from '../../../assets/images/applypage-v2/RightArrow.svg'
import './style.css'

export default function TeamApplicationCard({ team }) {
  const boxStyle = {
    boxShadow: `-1rem 1rem ${team.color}`
  }
  const [expanded, setExpanded] = useState(false)
  const expand = team.externalLink === undefined
  const viewRoles = 'View Roles'
  const workWithUs = 'Work with Us'
  const meetTheTeam = 'Meet the team'

  const activeContributors =
    team.contributorRoles &&
    team.contributorRoles.filter(
      (role) => role.activeApplication === true && role.applicationLink
    )

  const activeLeads =
    team.leadRoles &&
    team.leadRoles.filter(
      (role) => role.activeApplication === true && role.applicationLink
    )

  const activeChiefs =
    team.chiefRoles &&
    team.chiefRoles.filter(
      (role) => role.activeApplication === true && role.applicationLink
    )

  return (
    <div
      className={`team-card-container ${expanded ? 'expanded' : ''}`}
      style={boxStyle}
    >
      <div className='team-header-container'>
        <div className='team-header' style={{ color: team.color }}>
          {team.team}
        </div>
        <div className='tags-container'>
          {team.tags
            ? team.tags.map((tag) => <Tag key={tag} title={tag} />)
            : null}
        </div>
        <div className='paragraph' style={{ color: 'white' }}>
          {team.teamDescription}
        </div>
      </div>
      {expand ? (
        <div>
          <button
            className='interactive-button'
            onClick={() => setExpanded(!expanded)}
          >
            <DownArrow />
            <div className='team-subheader'>{viewRoles}</div>
          </button>
          <div className={`expanded-container ${expanded ? 'expanded' : ''}`}>
            {expanded &&
              activeContributors &&
              activeContributors.length > 0 && (
                <RoleCategory
                  roleCategory={{
                    name: 'Individual Contributors',
                    description: team.contributorDescription,
                    roles: activeContributors,
                    color: team.color
                  }}
                />
              )}
            {expanded && activeLeads && activeLeads.length > 0 && (
              <RoleCategory
                roleCategory={{
                  name: 'Leaders',
                  description: team.leadDescription,
                  roles: activeLeads,
                  color: team.color
                }}
              />
            )}
            {expanded && activeChiefs && activeChiefs.length > 0 && (
              <RoleCategory
                roleCategory={{
                  name: 'Chiefs',
                  description: team.chiefDescription,
                  roles: activeChiefs,
                  color: team.color
                }}
              />
            )}
          </div>
        </div>
      ) : (
        <a href={team.externalLink} target='_blank' rel='noopener noreferrer'>
          <button className='interactive-button'>
            <RightArrow />
            <div className='team-subheader'>
              {team.team === 'Clients' ? workWithUs : meetTheTeam}
            </div>
          </button>
        </a>
      )}
    </div>
  )
}
