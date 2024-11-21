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
      key={team.team}
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
              (activeContributors ?? []).length === 0 &&
              (activeLeads ?? []).length === 0 &&
              (activeChiefs ?? []).length === 0 && (
                <RoleCategory
                  roleCategory={{
                    description: (
                      <>
                        There are not currently any open roles in this branch.
                        New openings are typically posted before each semester.
                        Please check back later, or follow{' '}
                        <a
                          style={{
                            textDecoration: 'underline',
                            color: '#55c9ef'
                          }}
                          href='https://instagram.com/generatenu'
                        >
                          @generatenu
                        </a>{' '}
                        on Instagram to be alerted of new openings.
                      </>
                    )
                  }}
                />
              )}
            {expanded &&
              activeContributors &&
              activeContributors.length > 0 && (
                <RoleCategory
                  roleCategory={{
                    name:
                      team.team === 'Engagement'
                        ? 'Content'
                        : team.team === 'Operations'
                          ? 'Finance'
                          : 'Individual Contributors',
                    description: team.contributorDescription,
                    roles: activeContributors,
                    color: team.color
                  }}
                />
              )}
            {expanded && activeLeads && activeLeads.length > 0 && (
              <RoleCategory
                roleCategory={{
                  name:
                    team.team === 'Engagement'
                      ? 'Events'
                      : team.team === 'Operations'
                        ? 'Information'
                        : 'Leaders',
                  description: team.leadDescription,
                  roles: activeLeads,
                  color: team.color
                }}
              />
            )}
            {expanded && activeChiefs && activeChiefs.length > 0 && (
              <RoleCategory
                roleCategory={{
                  name:
                    team.team === 'Engagement'
                      ? 'Community'
                      : team.team === 'Operations'
                        ? 'Strategy'
                        : 'Chiefs',
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
