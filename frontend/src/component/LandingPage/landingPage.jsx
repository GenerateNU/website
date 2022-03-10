import React, { Component } from 'react';
import Hero from './Hero/hero';
import GenerateIntro from './GenerateIntroBanner/generateIntroBanner';
import TeamsCarousel from './TeamsCarousel/teamsCarousel';
import ClientsCarousel from './ClientsCarousel/clientsCarousel';
import DirectorsCarousel from './DirectorsCarousel/directorsCarousel';
import ShermanCenterIntro from './AffiliateOrgIntros/shermanCenterIntro';
import MosaicIntro from './AffiliateOrgIntros/mosaicIntro';
import ApplyButtons from './ApplyButtons/applyButtons';

/**
 * Home page users will first land on upon arriving to the website.
 */
export class LandingPage extends Component {
  render() {
    return (
        <div id="abg_aboutPage">
            {/* <Hero />
            <GenerateIntro />
            <TeamsCarousel/> */}
            <ClientsCarousel/>
            {/* <DirectorsCarousel/>
            <ShermanCenterIntro />
            <MosaicIntro />
            <ApplyButtons /> */}
        </div>
    );
  }
}

export default LandingPage;


