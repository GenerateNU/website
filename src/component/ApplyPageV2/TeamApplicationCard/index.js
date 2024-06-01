import React, { useState } from 'react'
import RoleCategory from '../RoleCategory'
import Tag from '../Tag'
import { ReactComponent as DownArrow } from '../../../assets/images/applypage-v2/DownArrow.svg'
import { ReactComponent as RightArrow } from '../../../assets/images/applypage-v2/RightArrow.svg'
import './style.css'

export default function TeamApplicationCard({ team }) {
  const [expanded, setExpanded] = useState(false)
  const expand = team.externalLink === ''

  const boxStyle = {
    boxShadow: `-1rem 1rem ${team.color}`
  }

  const viewRoles = 'View Roles'
  const workWithUs = 'Work with Us'

  return (
    <div
      className={`card-container ${expanded ? 'expanded' : ''}`}
      style={boxStyle}
    >
      <div className='header-container'>
        <div className='header' style={{ color: team.color }}>
          {team.name}
        </div>
        <div className='tags-container'>
          {team.tags.map((tag) => (
            <Tag title={tag}></Tag>
          ))}
        </div>
        {expanded && (
          <div className='paragraph' style={{ color: 'white' }}>
            {team.teamDescription}
          </div>
        )}
      </div>
      {expand ? (
        <div>
          <button
            className='interactive-button'
            onClick={() => setExpanded(!expanded)}
          >
            <DownArrow />
            <div className='subheader'>{viewRoles}</div>
          </button>
          {expanded && (
            <div className='expanded-container'>
              {team.contributorRoles.length > 0 && (
                <RoleCategory
                  roleCategory={{
                    name: 'Individual Contributors',
                    description: team.contributorDescription,
                    roles: team.contributorRoles,
                    color: team.color
                  }}
                />
              )}
              {team.leadRoles.length > 0 && (
                <RoleCategory
                  roleCategory={{
                    name: 'Leaders',
                    description: team.leadDescription,
                    roles: team.leadRoles,
                    color: team.color
                  }}
                />
              )}
              {team.chiefRoles.length > 0 && (
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
          )}
        </div>
      ) : (
        <a href={team.externalLink} target='_blank' rel='noopener noreferrer'>
          <button className='interactive-button'>
            <RightArrow />
            <div className='subheader'>{workWithUs}</div>
          </button>
        </a>
      )}
    </div>
  )
}
