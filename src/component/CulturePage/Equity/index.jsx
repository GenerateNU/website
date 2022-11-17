import React from "react";
import "./style.css";

export default function Equity() {
  return (
    <div className="container">
      <div className="vertical-div">
        <span className="outline-equity">USION</span>
        <span style={{ color: "#FFBF3C" }} className="vertical">
          INCLUSION
        </span>
        <span className="outline-equity">INCLUSION</span>
      </div>

      <div className="text-div-equity">
        <h2>3.0</h2>
        <div className="culture-text-box">
          <p className="cultureThree-text">
            Inclusion is a key part of what Generate stands for. We recognize that its a continuous process to improve our organization and are committed to making a positive impact. Through work with OPEN, OUEC, and other Northeastern offices, we strive to provide a physically, emotionally, and intellectually inclusive community. Our practices consistently change as we stove to improve the experience for each of our members and anyone who interacts with our community.  
          </p>
        </div>
      </div>
    </div>
  );
}
