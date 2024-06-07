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
  const expand = team.team !== 'Clients' && team.team !== 'Management'
  const viewRoles = 'View Roles'
  const workWithUs = 'Work with Us'
  const meetTheTeam = 'Meet the team'

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
              team.contributorRoles &&
              team.contributorRoles.length > 0 && (
                <RoleCategory
                  roleCategory={{
                    name: 'Individual Contributors',
                    description: team.contributorDescription,
                    roles: team.contributorRoles,
                    color: team.color
                  }}
                />
              )}
            {expanded && team.leadRoles && team.leadRoles.length > 0 && (
              <RoleCategory
                roleCategory={{
                  name: 'Leaders',
                  description: team.leadDescription,
                  roles: team.leadRoles,
                  color: team.color
                }}
              />
            )}
            {expanded && team.chiefRoles && team.chiefRoles.length > 0 && (
              <RoleCategory
                roleCategory={{
                  name: 'Chiefs',
                  description: team.chiefDescription,
                  roles: team.chiefRoles,
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
            <div className='team-subheader'>{team.team === "Clients" ? workWithUs : meetTheTeam}</div>
          </button>
        </a>
      )}
    </div>
  )
}
