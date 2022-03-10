import React, { Component } from 'react';
import Hero from './Hero/hero';
import GenerateIntro from './GenerateIntroBanner/generateIntroBanner';
import TeamsCarousel from './Carousels/TeamsCarousel/teamsCarousel';
import ClientsCarousel from './Carousels/ClientsCarousel/clientsCarousel';
import DirectorsCarousel from './Carousels/DirectorsCarousel/directorsCarousel';
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


