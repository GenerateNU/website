import React from "react";
import OurMissionSection from "./OurMissionSection";
import WeAreSection from "./WeAreSection";
import Leadership from "./Leadership";
import History from "./History";
import Timeline from "./Timeline";
import Stats from "./Stats";
import WhyGenerateCarousel from "./WhyGenerateCarousel";
import GrowthMantra from "./GrowthMantra";
import Interested from "../LandingPageV2/Interested";
import Footer from "../VerticalFooter";
import NextPage from "../NextPage";
import "./style.css";
import DesktopMobileScrollAndBackgroundHandler from "../DesktopMobileHandler";

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
      <Interested/>,
      <Footer />,
      <NextPage pageName="culture" url="/culture" />,
    ];
    return (
      <DesktopMobileScrollAndBackgroundHandler
        children={children}
        desktopBGColor={"black"}
        mobileBGColor={"black"}
        className={"about-page"}
      />
    );
  }
}
