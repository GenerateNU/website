import React from "react";
import NavBar from "../../NavBar";
import "./style.css";

export default function IntroSection() {
  return (
    <div className="position-relative vw-100 vh-100 py-4 px-5">
      <NavBar/>
       
      <div className="w-50 pe-5 d-flex">
        <div className="culture-quote-positioning p-3">
          <div className="our-culture-quote">
            We make wicked projects and plan wicked events.
          </div>
        </div>
      </div>
      <h1 className="our-mission-header text-no-fill text-uppercase position-absolute start-0 bottom-0 fi">
        Our Culture
      </h1>
    </div>
  );
}