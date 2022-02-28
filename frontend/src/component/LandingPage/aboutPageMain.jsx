import React, { Component } from 'react'
import Hero from './Hero/hero'
import GenerateIntro from './GenerateIntroBanner/generateIntroBanner'
import DirectorsCarousel from './directorsCarousel'
import ShermanCenterIntro from './AffiliateOrgIntros/shermanCenterIntro'
import MosaicIntro from './AffiliateOrgIntros/mosaicIntro'
import ApplySection from './ApplySection/applySection'
import TeamsCarousel from './teamsCarousel'
import ClientCarousel from './clientCarousel'

//  * This is the main page for about page consisting of all components for the pages. 
//  * They are divided into sections for each of the sections on the ui/ux design.
//  * 
//  * Note: Bootstrap is used in component pages used for dividing pages up to row and columns.
//  */
export class aboutPageMain extends Component {
  render() {
    return (
        <div id="abg_aboutPage">
            <Hero />
            <GenerateIntro />
            <TeamsCarousel/>
            <ClientCarousel/>
            <DirectorsCarousel/>
            <ShermanCenterIntro />
            <MosaicIntro />
            <ApplySection />
        </div>
    );
  }
}

export default aboutPageMain;


