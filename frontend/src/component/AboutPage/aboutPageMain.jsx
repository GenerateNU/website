import React, { Component } from 'react'
import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'
import SectionFour from './sectionFour'
import SectionFive from './sectionFive'
import ShermanCenterIntro from './Footer/OrganizationIntroductions/shermanCenterIntro'
import MosaicIntro from './Footer/OrganizationIntroductions/mosaicIntro'
/**
 * This is the main page for about page consisting of all components for the pages. 
 * They are divided into sections for each of the sections on the ui/ux design.
 * 
 * Note: Bootstrap is used in component pages used for dividing pages up to row and columns.
 */
export class aboutPageMain extends Component {
  render() {
    return (
      <div id="abg_aboutPage">
        {/* <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive /> */}
        <ShermanCenterIntro />
        {/* <MosaicIntro /> */}
      </div>
    );
  }
}

export default aboutPageMain