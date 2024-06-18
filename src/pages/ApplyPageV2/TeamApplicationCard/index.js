import React, { useState } from 'react'
import RoleCategory from '../RoleCategory'
import Tag from '../Tag'
import { ReactComponent as WhiteDownArrow } from '../../../assets/images/applypage-v2/WhiteDownArrow.svg'
import { ReactComponent as WhiteUpArrow } from '../../../assets/images/applypage-v2/WhiteUpArrow.svg'
import RightArrow from '../../../assets/images/applypage-v2/RightArrow.js'
import './style.css'

export default function TeamApplicationCard({ team }) {
  const [expanded, setExpanded] = useState(false)
  const expand = team.externalLink === undefined
  const clientCard = team.team === 'Clients'
  const viewRoles = 'View Roles'
  const workWithUs = 'Work with Us'
  const meetTheTeam = 'Meet the team'

  return (
    <div
      className={`team-card-container ${expanded ? 'expanded' : ''} ${clientCard ? 'client-border' : ''}`}
      style={{ boxShadow: clientCard ? `-1rem 1rem ${team.color}` : '' }}
    >
      <div
        className={`team-header-container ${clientCard ? 'client-header' : ''}`}
        style={{ background: team.color }}
      >
        <div
          className='team-header'
          style={{ color: clientCard ? team.color : '' }}
        >
          {team.team}
        </div>
        <div className='tags-container'>
          {team.tags
            ? team.tags.map((tag) => <Tag key={tag} title={tag} />)
            : null}
        </div>
        <div className='paragraph' style={{ color: clientCard ? 'white' : '' }}>
          {team.teamDescription}
        </div>
      </div>
      {expand ? (
        <div>
          <button
            className='interactive-button'
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <WhiteUpArrow /> : <WhiteDownArrow />}
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
          <button
            className='interactive-button'
            style={{ backgroundColor: clientCard ? 'white' : 'black' }}
          >
            <RightArrow color={clientCard ? 'black' : 'white'} />
            <div
              className='team-subheader'
              style={{ color: clientCard ? 'black' : 'white' }}
            >
              {clientCard ? workWithUs : meetTheTeam}
            </div>
          </button>
        </a>
      )}
    </div>
  )
}
