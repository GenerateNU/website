import React, { Component } from 'react';
import Hero from './Hero';
import GenerateIntro from './GenerateIntroBanner';
import TeamsCarousel from './Carousels/TeamsCarousel/';
import ClientsCarousel from './Carousels/ClientsCarousel/';
import DirectorsCarousel from './Carousels/DirectorsCarousel/';
import ShermanCenterIntro from './AffiliateOrgIntros/shermanCenterIntro';
import MosaicIntro from './AffiliateOrgIntros/mosaicIntro';
import ApplyButtons from './ApplyButtons';
import LumaPopup from './LumaPopup';

/**
 * Home page users will first land on upon arriving to the website.
 */
export class LandingPage extends Component {
    render() {
        return (
            <>
                <Hero />
                <GenerateIntro />
                <TeamsCarousel />
                <ClientsCarousel />
                <DirectorsCarousel />
                <ShermanCenterIntro />
                <MosaicIntro />
                <ApplyButtons />
                <LumaPopup />
            </>
        );
    }
}

export default LandingPage;


