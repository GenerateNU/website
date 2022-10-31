import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import WhatWeOffer from "./WhatWeOffer";
import Interested from "./Interested";
import FeaturedProjects from "./FeaturedProjects";
import FP1 from "./FP1";
import PreviousProjects from "./PreviousProjects";
import FP2 from "./FP2";
import './style.css';

export default class LandingPageV2 extends React.Component {
    render() {
        return (
            <Container fluid className='vh-100 horizontal-scroll bg-black'>
                <Row className='flex-nowrap'>
                   <WhatWeOffer/>
                   <FeaturedProjects />
                   <FP1 />
                   <FP2 />
                   <PreviousProjects />
                   <Interested/>  
                </Row>
            </Container>
        );
    }
}
