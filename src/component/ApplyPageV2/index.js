import React from 'react'
import Categories from '../ApplyPage/Categories'
import NavBar from '../NavBar'
import TeamApplicationCard from './TeamApplicationCard'
import useWebsite from '../../shared/useWebsite'
import './style.css'

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
    chiefRoles: ['Role 1', 'Role 2', 'Role 3'],
    externalLink: ''
  },
  {
    name: 'Hardware',
    color: '#FF6660',
    tags: ['Full Stack', 'UI/UX', 'Branding', 'Mobile/Web Dev'],
    teamDescription: 'Blah blah hardware description',
    contributorDescription: 'Become an IC to hone your technical skills.',
    contributorRoles: ['Role 1', 'Role 2', 'Role 3'],
    leadDescription:
      'Take on a leadership role blah blah blah blah. Work directly with clients and blah blah blah.',
    leadRoles: ['Role 1', 'Role 2', 'Role 3'],
    chiefDescription:
      'Establish standards across Generate’s Hardware team blah blah blah blah.',
    chiefRoles: ['Role 1', 'Role 2', 'Role 3'],
    externalLink: ''
  },
  {
    name: 'Engagement',
    color: '#A559EC',
    tags: ['Vibes'],
    teamDescription: 'Blah blah hardware description',
    contributorDescription: 'Become an IC to hone your technical skills.',
    contributorRoles: ['Role 1', 'Role 2', 'Role 3'],
    leadDescription:
      'Take on a leadership role blah blah blah blah. Work directly with clients and blah blah blah.',
    leadRoles: ['Role 1', 'Role 2', 'Role 3'],
    chiefDescription:
      'Establish standards across Generate’s Hardware team blah blah blah blah.',
    chiefRoles: ['Role 1', 'Role 2', 'Role 3'],
    externalLink: ''
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
  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  return !mobile ? desktopContent() : mobileContent()
}
