import React from "react";
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
import Intro from "./Introduction";
import WhoWeAre from "./WhoWeAre";
import WhoWeAreResponse from "./WhoWeAreResponse";
import "./style.css";
import Management from "./Management";
import Footer from "../VerticalFooter";
import NextPage from "../NextPage";
import DesktopMobileScrollAndBackgroundHandler from "../DesktopMobileHandler";

export default class LandingPageV2 extends React.Component {
  render() {
    const children = [
      <Intro />,
      <WhoWeAre />,
      <WhoWeAreResponse />,
      <WhatWeOffer />,
      <ProductDevelopment />,
      <Ideation />,
      <Prototype />,
      <Production />,
      <Management />,
      <FeaturedProjects />,
      <FP1 />,
      <FP2 />,
      <PreviousProjects />,
      <Interested />,
      <Footer />,
      <NextPage pageName="about" url="/about" />,
    ];
    return (
      <DesktopMobileScrollAndBackgroundHandler
        children={children}
        desktopBGColor={"white"}
        mobileBGColor={"black"}
      />
    );
  }
}
