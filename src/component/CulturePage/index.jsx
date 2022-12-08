import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CollageSection from "./Collage"
import Events from "./Events";
import Events2 from "./Events2";
import Events3 from "./Events3";
import IntroSection from "./IntroSection";
import IntroImages from "./IntroImages";
import BelongHere from "./BelongHere";
import Inclusion from "./Inclusion";
import Equity from "./Equity";
import Diversity from "./Diversity";
import VerticalFooter from "../VerticalFooter";
import Showcase from "./Showcase";
import "./style.css";

export default class CulturePage extends React.Component {
  render() {
    return (
      <div class="vh-100 horizontal-scroll bg-white container-fluid" tab-index="0">
      <Row className="flex-nowrap">
          {/* Add components of culture page here  */}
          <IntroSection />
          <IntroImages/>
          <BelongHere/>
          <Diversity/>
          <Inclusion/>
          <Equity/>
          <Events />
          <Events2 />
          <Events3 />
          <Showcase/>
          <CollageSection />
          <VerticalFooter/>
        </Row>
      </div>
    );
  }
}
