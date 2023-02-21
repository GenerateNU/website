import React from "react";
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
import DesktopMobilfy from "../desktop-mobile";


export default class CulturePage extends React.Component {
  render() {
    return (
      <DesktopMobilfy bgColor={"white"}>
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
        </DesktopMobilfy>
    );
  }
}
