import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import OurMissionSection from "./OurMissionSection";
import WeAreSection from "./WeAreSection";
import Leadership from "./Leadership";
import History from "./History";
import AboutHistory from "./AboutHistory";
import Timeline from "./Timeline";
import WhyGenerateCarousel from "./WhyGenerateCarousel";
import GrowthMantra from "./GrowthMantra";
import Footer from "../VerticalFooter";
import './style.css';
import Stats from "./Stats";
import ProductDevelopment from "../LandingPageV2/ProductDevLifecycle/ProductDevelopment";
import FooterTwo from "../VerticalFooterTeams";

export default class AboutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
    this.forceUpdate();
  };


  render() {
    const width = this.state.width;
    const isMobile = width <= 650;
    return (
     <div class={`${isMobile ? "vw-100 vertical-scroll" : "vh-100 horizontal-scroll"} bg-black container-fluid`} tab-index="0">
          <Row className="flex-nowrap">
            <OurMissionSection />
            <WeAreSection />
            {!isMobile && <>
              <Leadership />
              <History />
              <Timeline />
              <Stats/>
              <WhyGenerateCarousel />
              <GrowthMantra/>
              <Footer />
              <FooterTwo />
              </>
            }
          </Row>
      </div>

    
    );
  }
}
