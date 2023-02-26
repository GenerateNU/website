import React from "react";
import NavBar from "../../NavBar";
import logo from "../IntroSection/GeneratePeaceLogo.png";
import "./style.css";

export default function IntroSection() {
  return (
    <div className="position-relative w-80 vh-100">
      <div className="intro-navbar"><NavBar /> </div>
       
      <div className="w-50 pe-5 d-flex">
      <div className= "generateLogo">
        <img src ={logo} />
      </div>
        <div className="culture-quote-positioning p-3">
          <div className="our-culture-quote">
            <div className="culture">
            We make wicked projects and plan wicked events.
            </div>
          </div>
        </div>
      </div>
      <h1 className="our-mission-header text-no-fill text-uppercase position-absolute start-0 bottom-0 p-5 fi" id="our-culture-header">
        Our Culture
      </h1>
    </div>
  );
}
