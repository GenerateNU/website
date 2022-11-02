import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import WhatWeOffer from "./WhatWeOffer";
import Interested from "./Interested";
import FeaturedProjects from "./FeaturedProjects";
import FP1 from "./FP1";
import PreviousProjects from "./PreviousProjects";
import FP2 from "./FP2";
import ProductDevelopment from "./ProductDevLifecycle/ProductDevelopment";
import Ideation from "./ProductDevLifecycle/Ideation";
import Prototype from "./ProductDevLifecycle/Prototype";
import Production from "./ProductDevLifecycle/Production";
import './style.css';
import Management from "./Management"

export default class LandingPageV2 extends React.Component {
    render() {
        return (
            <Container fluid className='vh-100 horizontal-scroll'>
                <Row className='flex-nowrap'>
                   <WhatWeOffer/>
                   <FeaturedProjects />
                   <FP1 />
                   <FP2 />
                   <PreviousProjects />
                   <ProductDevelopment />
                   <Ideation />
                   <Prototype/>
                   <Production/>
                   {/* <Interested/>   */}
                    
                    <Management />
                  
                   
                </Row>
            </Container>
        );
    }
}
