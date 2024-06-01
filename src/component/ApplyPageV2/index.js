import React from 'react'
import Categories from '../ApplyPage/Categories'
import NavBar from '../NavBar'
import TeamApplicationCard from './TeamApplicationCard'
import { useSanity } from '../../services/useSanity'
import './style.css'

const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches

const header = 'join generate'
const quote =
  "We're always looking for passionate individuals who are ready to learn and grow. We have opportunities that run broad and deep. If you don’t see anything right now drop an email and we’ll let you know when positions open up again."

const teams_ex = [
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
      'Establish standards across Generates Software team blah blah blah blah.',
    chiefRoles: ['Role 1', 'Role 2', 'Role 3']
  }
]

const teams = `*[_type == "teams"] | order(zIndex desc)`



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
        <div>
          <div>
            {firstColumn.map((role) => (
              <TeamApplicationCard
                role={{
                  name: role.name,
                  color: role.color,
                  tags: role.tags,
                  description: role.description,
                  contributorRoles: role.contributorRoles,
                  leadRoles: role.leadRoles,
                  chiefRoles: role.chiefRoles,
                  expand: role.expand
                }}
              />
            ))}
          </div>
          <div>
            {secondColumn.map((role) => (
              <TeamApplicationCard
                role={{
                  name: role.name,
                  color: role.color,
                  tags: role.tags,
                  description: role.description,
                  contributorRoles: role.contributorRoles,
                  leadRoles: role.leadRoles,
                  chiefRoles: role.chiefRoles,
                  expand: role.expand
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

const roles = useSanity(teams, {}, (data) => data ? data.map((teams) => ({
    ...teams,
    color: teams.color.hex,
  })) : []);

const halfLength = Math.ceil(roles.length / 2)
const firstColumn = roles.slice(0, halfLength)
const secondColumn = roles.slice(halfLength)

  return isBigScreen ? desktopContent(firstColumn, secondColumn) : mobileContent(firstColumn, secondColumn)
}
