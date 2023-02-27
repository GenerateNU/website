import React from "react";
import OurMissionSection from "./OurMissionSection";
import WeAreSection from "./WeAreSection";
import Leadership from "./Leadership";
import History from "./History";
import Timeline from "./Timeline";
import WhyGenerateCarousel from "./WhyGenerateCarousel";
import GrowthMantra from "./GrowthMantra";
import Footer from "../VerticalFooter";
import "./style.css";
import Stats from "./Stats";
import FooterTwo from "../VerticalFooterTeams";
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
      <Footer />,
      <FooterTwo />,
    ];
    return (
      <DesktopMobileScrollAndBackgroundHandler
        children={children}
        desktopBGColor={"black"}
        mobileBGColor={"black"}
      />
    );
  }
}