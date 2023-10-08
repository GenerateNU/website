import React from 'react'
import CaseStudyHeader from './Case-Study-Header'
import NavBar from '../NavBar'

import './style.css'
export default class CaseStudy extends React.Component {
  render() {
    return (
      <div>
        <div className='intro-navbar'>
          <NavBar />
        </div>
        <CaseStudyHeader />
      </div>
    )
  }
}
