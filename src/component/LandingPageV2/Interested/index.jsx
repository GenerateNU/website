import Image from "react-bootstrap/Image";
import ShermLogo from "../../../assets/images/landingpage/affiliateorgintros/Sherman_Center_Logo.png";
import QuestionMark from "../../../assets/images/landingpage-v2/interestedbg.svg";
import NavBar from "../../NavBar";
import "./style.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ShadowedButton from "../../ShadowedButton";
import leftcarrot from "../../LandingPageV2/Interested/chevron.png";

const Interested = () => {
  if (window.innerWidth/window.innerHeight <= 0.6) {
    return (
      <div className="bg-white interestedcontainer">
        <div className="interestedText">Interested</div>
        <div className="interestedflexbox">
          <div className="interestedJoinNowBox">
            <a href="/apply" className="joinCommunitytext">
              join us
            </a>
          </div>
          <span id="join-span">
            <div className="leftcarrot">
              <img id="join-carrot" src={leftcarrot} />
            </div>
            <div className="sentenceText">
              Join a community that shares the same goal - turning ideas into
              reality
            </div>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <>
      <div className="bg-white interestedcontainer">
        <div className="interestedflexbox">
          <div className="interestedText">Interested</div>
          <div className="interestedJoinNowBox">
            <a href="/apply" className="joinCommunitytext">
              join us
            </a>
          </div>
        </div>
      </div>
  
      <div className="bg-white questionMarkContainer">
        <div className="leftcarrot">
          <img style={{ width: "5vh" }} src={leftcarrot} />
        </div>
        <div className="sentenceText">
          Join a community that shares the same goal - turning ideas into reality
        </div>
      </div>
      </>
    );
  }
};

export default Interested;
