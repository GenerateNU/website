import React from "react";
import NavBar from "../../NavBar";
import "./style.css";

const OurMissionSection = () => {
  return (
    <div className="vw-100 vh-100 py-4 px-5 mission-mobile">
      <NavBar />
      <div className="quote-text w-75 pe-5 d-flex">
        <div className="our-mission-quotation-mark me-2">&#8220;</div>
        <div className="our-mission-quote">
          To educate Northeastern students through hands-on professional
          experiences and to support Northeastern ventures of all backgrounds
          with their development needs.
        </div>
        <div className="our-mission-quotation-mark bottom-quote pt-5">&#8221;</div>
      </div>
      <h1 className="our-mission-header text-no-fill text-uppercase position-relative start-0 bottom-0 ps-5 pb-4">
        Our Mission
      </h1>
    </div>
  );
};

export default OurMissionSection;
