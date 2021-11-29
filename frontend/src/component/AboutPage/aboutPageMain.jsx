import React, { Component } from 'react'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'
import SectionFour from './sectionFour'
import SectionFive from './sectionFive'

export class aboutPageMain extends Component {
  render() {
    return (
      <div id="aboutPage">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </div>
    );
  }
}

export default aboutPageMain