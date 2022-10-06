import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import OurMissionSection from "./OurMissionSection";
import WeAreSection from "./WeAreSection";
import Leadership from "./Leadership";
import History from "./History";
import AboutHistory from './AboutHistory'
import Timeline from './Timeline'
import WhyGenerateCarousel from "./WhyGenerateCarousel";
import Footer from "../VerticalFooter";
import FooterTwo from "../VerticalFooterTeams";
import GrowthMantra from "./GrowthMantra";
import './style.css';

export default class AboutPage extends React.Component {
    render() {
        return (
            <Container fluid className='vh-100 horizontal-scroll bg-black'>
                <Row className='flex-nowrap'>
                    
                    <OurMissionSection />
                    <WeAreSection />
                    <Leadership />
                   
                    {/* <AboutHistory /> */}
                    <History />
                    <Timeline />
                    {/* <Members/> */}

                    <WhyGenerateCarousel />
                    <GrowthMantra/>
                    <Footer/>
                    <FooterTwo/>
                   
                </Row>
            </Container>
        );
    }
}
