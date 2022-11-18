import React from "react";
import "./style.css";
import NavBar from "../../NavBar";
import ScrollButton from "../../../assets/images/landingpage-v2/scroll button.png";

export default function Introduction() {
  return (
    <div className="introductionContainer">
      <div className="shermancenter">
        <div className="intro-navbar">
          <NavBar />{" "}
        </div>

        <p className="wearetext">WE ARE</p>
        <p className="generatetext">GENERATE</p>
        {/* <div className="whitebox">
                 <div className="scrollarrow" ></div>
                 <p className="scrolltext">scroll</p>  
                 </div> */}
        <div className="scroll-container">
          <div className="scroll">
            <img className="scrollimg" src={ScrollButton} alt="sroll left" />
          </div>
          <p className="s-text">scroll</p>
        </div>

        <div></div>
      </div>
    </div>
  );
}
