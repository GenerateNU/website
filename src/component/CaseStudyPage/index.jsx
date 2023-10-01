import React from 'react'
import CaseStudyHeader from './Case-Study-Header'
import NavBar from '../NavBar'
import TeamPageFooter from '../../pages/TeamsPage/ExpandedTeams/CommonTeam/TeamPageFooter'

import './style.css'
export default class CaseStudy extends React.Component {
  render() {
    return (
      <div>
        <div className='teams-navbar'>
          <NavBar />
        </div>
        <CaseStudyHeader />
        <TeamPageFooter color={'#187DFF'} />
      </div>
    )
  }
}
