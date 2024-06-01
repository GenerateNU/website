import React from 'react'
import Categories from '../ApplyPage/Categories'
import NavBar from '../NavBar'
import TeamApplicationCard from './TeamApplicationCard'
import './style.css'

const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches

const header = 'join generate'
const quote =
  "We're always looking for passionate individuals who are ready to learn and grow. We have opportunities that run broad and deep. If you don’t see anything right now drop an email and we’ll let you know when positions open up again."

const teams = [
  {
    name: 'Client',
    color: '#A1A1A1',
    tags: ['Entrpreneurship', 'Boop'],
    teamDescription: 'Pitch your idea blah blah blah blah.',
    externalLink: 'https://www.google.com'
  },
  {
    name: 'Software',
    color: '#FFBF3C',
    tags: ['Full Stack', 'UI/UX', 'Branding', 'Mobile/Web Dev'],
    teamDescription: 'Blah blah software description',
    contributorDescription: 'Become an IC to hone your technical skills.',
    contributorRoles: ['Role 1', 'Role 2', 'Role 3'],
    leadDescription:
      'Take on a leadership role blah blah blah blah. Work directly with clients and blah blah blah.',
    leadRoles: ['Role 1', 'Role 2', 'Role 3'],
    chiefDescription:
      'Establish standards across Generate’s Software team blah blah blah blah.',
    chiefRoles: ['Role 1', 'Role 2', 'Role 3']
  }
]
const halfLength = Math.ceil(teams.length / 2)
const firstColumn = teams.slice(0, halfLength)
const secondColumn = teams.slice(halfLength)

const desktopContent = () => {
  return (
    <>
      <div className='ap_container'>
        <div className='ap_img' />
        <div className='navbar-style'>
          <NavBar />
        </div>
        <div className='join-header'>{header}</div>
        <div className='join-text'>{quote}</div>
        <div>
          <div>
            {firstColumn.map((team) => (
              <TeamApplicationCard
                team={{
                  name: team.name,
                  color: team.color,
                  tags: team.tags,
                  teamDescription: team.teamDescription,
                  contributorRoles: team.contributorRoles,
                  leadRoles: team.leadRoles,
                  chiefRoles: team.chiefRoles,
                  externalLink: team.externalLink
                }}
              />
            ))}
          </div>
          <div>
            {secondColumn.map((team) => (
              <TeamApplicationCard
                team={{
                  name: team.name,
                  color: team.color,
                  tags: team.tags,
                  teamDescription: team.teamDescription,
                  contributorRoles: team.contributorRoles,
                  leadRoles: team.leadRoles,
                  chiefRoles: team.chiefRoles,
                  externalLink: team.externalLink
                }}
              />
            ))}
          </div>
        </div>
        <Categories />
      </div>
    </>
  )
}
const mobileContent = () => {
  return (
    <>
      <div className='ap_mobile'>
        <div className='ap_img' />
        <div className='navbar-style'>
          <NavBar />
        </div>
        <div className='ap_text2'>{quote}</div>
        <Categories />
      </div>
    </>
  )
}
export default function ApplyPage() {
  return isBigScreen ? desktopContent() : mobileContent()
}
