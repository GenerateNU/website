import React from "react";
//import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Column from "react-bootstrap/esm/Col";
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
//import NavBar from "../NavBar";
//import { Navbar } from "react-bootstrap";
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
    ];
    return (
      <><>
        <div
          class="vh-100 horizontal-scroll bg-white container-fluid"
          tab-index="0"
        >
          <Row className="flex-nowrap">
            <Intro />
            <WhoWeAre />
            <WhoWeAreResponse />
            <WhatWeOffer />
            <ProductDevelopment />
            <Ideation />
            <Prototype />
            <Production />
            <Management />
            <FeaturedProjects />
            <FP1 />
            <FP2 />
            <PreviousProjects />
            <Interested />
            <Footer />
          </Row>
        </div>
        <div
          class="vw-100 mobile vertical-scroll bg-black container-fluid"
          tab-index="0"
        >
          <Column className="flex-nowrap" id="mobile-page-container">
            <Intro />
            <WhoWeAre />
            <WhoWeAreResponse />
            <WhatWeOffer />
            <ProductDevelopment />
            <Ideation />
            <Prototype />
            <Production />
            <Management />
            <FeaturedProjects />
            <FP1 />
            <FP2 />
            <PreviousProjects />
            <Interested />
            <Footer />
          </Column>
        </div>
      </><DesktopMobileScrollAndBackgroundHandler
          children={children}
          desktopBGColor={"white"}
          mobileBGColor={"black"} /></>
    );
  }
};
/*
export default class LandingPageV2 extends React.Component {
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
  
    if (isMobile) {
      return (
        <div
          class="vw-100 vertical-scroll bg-white container-fluid"
          tab-index="0"
        >
          <Column className="flex-nowrap">
            <Intro />
            <WhoWeAre />
            <WhoWeAreResponse />
            <WhatWeOffer />
            <ProductDevelopment />
            <Ideation />
            <Prototype />
            <Production />
            <Management />
            <FeaturedProjects />
            <FP1 />
            <FP2 />
            <PreviousProjects />
            <Interested />
            <Footer />
          </Column>
        </div>
      ); } else {
        return (
          <div
            class="vh-100 horizontal-scroll bg-white container-fluid"
            tab-index="0"
          >
            <Row className="flex-nowrap">
              <Intro />
              <WhoWeAre />
              <WhoWeAreResponse />
              <WhatWeOffer />
              <ProductDevelopment />
              <Ideation />
              <Prototype />
              <Production />
              <Management />
              <FeaturedProjects />
              <FP1 />
              <FP2 />
              <PreviousProjects />
              <Interested />
              <Footer />
            </Row>
          </div>
      )
    };
  }
}

/*
export default class LandingPageV2 extends React.Component {
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
  
    if (isMobile) {
      return (
        <div
          class="vw-100 vertical-scroll bg-white container-fluid"
          tab-index="0"
        >
          <Column className="flex-nowrap">
            <Intro />
            <WhoWeAre />
            <WhoWeAreResponse />
            <WhatWeOffer />
            <ProductDevelopment />
            <Ideation />
            <Prototype />
            <Production />
            <Management />
            <FeaturedProjects />
            <FP1 />
            <FP2 />
            <PreviousProjects />
            <Interested />
            <Footer />
          </Column>
        </div>
      ); } else {
        return (
          <div
            class="vh-100 horizontal-scroll bg-white container-fluid"
            tab-index="0"
          >
            <Row className="flex-nowrap">
              <Intro />
              <WhoWeAre />
              <WhoWeAreResponse />
              <WhatWeOffer />
              <ProductDevelopment />
              <Ideation />
              <Prototype />
              <Production />
              <Management />
              <FeaturedProjects />
              <FP1 />
              <FP2 />
              <PreviousProjects />
              <Interested />
              <Footer />
            </Row>
          </div>
      )
    };
  }
}
*/
