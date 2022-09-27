import React from "react";
import "./style.css";

const IntroSection = () => {
  return (
    <div className="position-relative vw-100 vh-100 py-4 px-5">
      <div className="bg-light p-3 mb-5 d-flex fit-content">
        <span>gen logo</span>
        ahhhh it's a nav bar help
      </div>
      <div className="w-50 pe-5 d-flex">
        <div className="culture-quote-positioning">
          <div className="our-culture-quote">
            We make wicked projects and plan wicked events.
          </div>
        </div>
      </div>
      <h1 className="our-mission-header text-no-fill text-uppercase position-absolute start-0 bottom-0 ps-5 pb-4">
        Our Culture
      </h1>
    </div>
  );
};

export default IntroSection;
