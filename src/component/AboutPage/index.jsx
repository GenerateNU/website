import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Column from "react-bootstrap/esm/Col";
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
    //element of all components on the About page
    const aboutBody = (<>
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
            }</>);

    return (
      //render with vertical scroll on mobile and horizontal on desktop
      <div class={`${isMobile ? "vw-100 vertical-scroll mobile" : "vh-100 horizontal-scroll"} bg-black container-fluid`} tab-index="0">
        
        {isMobile ? //render as column on mobile, or row on desktop
          <Column className="flex-nowrap"> {aboutBody}</Column> :
          <Row className="flex-nowrap"> {aboutBody}</Row>
        }
      </div>

    
    );
  }
}
