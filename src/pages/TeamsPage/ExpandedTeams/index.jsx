import React from 'react'
import './style.css'
import Management from './Management/index'
import Operations from './Operations'
import NavBar from '../../../component/NavBar'
import './style.css'
import MngmtPH from '../../../assets/images/TeamsPageImages/TeamsPagePH1.png'
import TextRow from './CommonTeam/textRow'
import TeamPageFooter from './CommonTeam/TeamPageFooter'

export default class ExpandedTeamsPage extends React.Component {
  render() {
    return (
      <div class='expanded-wrapper'>
        <div className='intro-navbar'>
          <NavBar />
        </div>
        <ExpandedTeamPage />
      </div>
    )
  }
}

function ExpandedTeamPage() {
  const team = window.location.pathname.split('/').pop()
  return (
    <div>
      <ExpandedTeamsHeader team={team} />
      <WhatWeDoHowWeWork team={team} />
      <TeamPageFooter color={'#187DFF'} page={'OPRTNS'} />
    </div>
  )
}

// Navbar
// WhatWeDoHowWeWork Component
// WhatYouLearn Component
// Separate into different Pages for Our roles
// - That contain three different components to choose from (one allows all the way across paragraph // director component // has a lead that goes across and boxes for other roles)

function WhatWeDoHowWeWork() {
  return (
    <>
      <TextRow
        title={'WHAT WE DO'}
        description={
          "Our management team is the driving force behind Generate, empowering each member to grow and build innovative products. They work directly with members and clients to support their growth and the team's vision. They build our professional image and position the organization strategically within the Northeastern ecosystem, bridging our internal operations with the larger community."
        }
        picture={MngmtPH}
        reverse={false}
      />
      <TextRow
        title={'HOW WE WORK'}
        description={
          'Generate is entirely student-led. Our management team offers a unique opportunity for students to gain leadership experience in a fast-paced, innovative culture. The team is united through the yearly vision set by the executive director and builds initiatives around those goals. Each member leaves their own mark on Generate, continuously improving for the future.'
        }
        picture={MngmtPH}
        reverse={true}
      />
    </>
  )
}

function ExpandedTeamsHeader({ team }) {
  return (
    <div className='header-wrapper'>
      <div className='management-header'>
        <div className='header-title'>
          <div className='header-text'>
            <div style={{ marginTop: '-10%', marginBottom: '-10%' }}>
              {team}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExpandedTeamsMobileHeader({ team }) {
  return (
    <div className='mobile-header-wrapper'>
      <div className='mobile-management-header'>
        <div className='mobile-header-title'>
          <div className='mobile-header-text'>
            <div style={{ marginTop: '-10%', marginBottom: '-10%' }}>
              {team}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
