import React from "react";
import NavBar from "../../NavBar";
import logo from "../IntroSection/GeneratePeaceLogo.png";
import "./style.css";

export default function IntroSection() {
  return (
    <div className="position-relative intro-container">
      <div className="intro-navbar">
        <NavBar />
      </div>

      <div className="d-flex">
        <div className="generateMascotContainer">
          <img className="generateMascot" src={logo} alt="Generate Mascot" />
        </div>
        <div className="our-culture-quote-positioning p-3">
          <div className="our-culture-quote">
            We make wicked projects &amp; plan wicked events
          </div>
        </div>
        <div className="our-culture-big-positioning">
          <div className="our-culture-big text-no-fill text-uppercase position-relative start-0 bottom-0 p-5">
            Our Culture
          </div>
        </div>
      </div>
    </div>
  );
}
