import React, { Component } from 'react';
import WhatWeOffer from "./AmySummer22/WhatWeOffer";
import ProductDevCycle from './AmySummer22/ProductDevCycle';
import TeamsCarousel from './AmySummer22/TeamsCarousel';

/**
 * Home page users will first land on upon arriving to the website.
 */
export class LandingPage extends Component {
    render() {
        return (
            <>
                {/* <WhatWeOffer /> */}
                {/* <ProductDevCycle /> */}
                <TeamsCarousel />
            </>
        );
    }
}

export default LandingPage;


