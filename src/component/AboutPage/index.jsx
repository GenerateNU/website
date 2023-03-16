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
import NextPage from "../NextPage";

export default class AboutPage extends React.Component {
  render() {
    return (
     <div class="vh-100 horizontal-scroll bg-black container-fluid" tab-index="0">
          <Row className="flex-nowrap">
          <OurMissionSection />
          <WeAreSection />
          <Leadership />

          <History />
          <Timeline />
          <Stats/>
          <WhyGenerateCarousel />
          <GrowthMantra/>
          <Footer />
          <NextPage pageName='culture' url='/culture' />
          
          </Row>
      </div>

    
    );
  }
};

/*
export default class AboutPage extends React.Component {
  render() {
    const children = [
      <OurMissionSection />,
      <WeAreSection />,
      <Leadership />,
      <History />,
      <Timeline />,
      <Stats />,
      <WhyGenerateCarousel />,
      <GrowthMantra />,
      <Footer />,
      <FooterTwo />,
    ];
    return (
      <>
      <DesktopMobileScrollAndBackgroundHandler
        children={children}
        desktopBGColor={"black"}
        mobileBGColor={"black"}
      />
      </>
    );
  }
}


export default class AboutPage extends React.Component {
  
  render() {
    return (
     <div class="vh-100 horizontal-scroll bg-black container-fluid" tab-index="0">
          <Row className="flex-nowrap">
          <OurMissionSection />
          <WeAreSection />
          <Leadership />

          <History />
          <Timeline />
          <Stats/>
          <WhyGenerateCarousel />
          <GrowthMantra/>
          <Footer />
          <FooterTwo />
          
          </Row>
      </div>
    );
  }
}
*/