import React, { useState } from 'react'
import RoleCategory from '../RoleCategory'
import Tag from '../Tag'
import { ReactComponent as DownArrow } from '../../../assets/images/applypage-v2/downArrow.svg'
import { ReactComponent as RightArrow } from '../../../assets/images/applypage-v2/RightArrow.svg'
import { useSanity } from '../../../services/useSanity'
import './style.css'

export default function TeamApplicationCard({
  team: {
    name = '',
    color = '',
    tags = [],
    teamDescription = '',
    contributorRoles = [],
    contributorDescription = '',
    leadRoles = [],
    leadDescription = '',
    chiefRoles = [],
    chiefDescription = '',
    expand = true,
    externalLink = ''
  } = {}
}) {
  const [expanded, setExpanded] = useState(false)

  const boxStyle = {
    boxShadow: `-1rem 1rem ${color}`
  }
  
  const viewRoles = 'View Roles'
  const partnerWithGenerate = 'Partner with Generate'

  return (
    <div
      className={`card-container ${expanded ? 'expanded' : ''}`}
      style={boxStyle}
    >
      <div className='header-container'>
        <div className='header' style={{ color: color }}>
          {name}
        </div>
        <div className='tags-container'>
          {tags.map((tag) => (
            <Tag title={tag}></Tag>
          ))}
        </div>
        {expanded && (
          <div className='paragraph' style={{ color: 'white' }}>
            <p>{teamDescription}</p>
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
              {contributorRoles.length > 0 && (
                <RoleCategory
                  roleCategory={{
                    name: 'Individual Contributors',
                    description: contributorDescription,
                    roles: contributorRoles,
                    color: color
                  }}
                />
              )}
              {leadRoles.length > 0 && (
                <RoleCategory
                  roleCategory={{
                    name: 'Leaders',
                    description: leadDescription,
                    roles: leadRoles,
                    color: color
                  }}
                />
              )}
              {chiefRoles.length > 0 && (
                <RoleCategory
                  roleCategory={{
                    name: 'Chiefs',
                    description: chiefDescription,
                    roles: chiefRoles,
                    color: color
                  }}
                />
              )}
            </div>
          )}
        </div>
      ) : (
        <a href={externalLink} target='_blank' rel='noopener noreferrer'>
          <button className='interactive-button'>
            <RightArrow />
            <div className='subheader'>{partnerWithGenerate}</div>
          </button>
        </a>
      )}
    </div>
  )
}
