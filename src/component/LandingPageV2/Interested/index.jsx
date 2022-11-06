import Image from "react-bootstrap/Image";
import ShermLogo from "../../../assets/images/landingpage/affiliateorgintros/Sherman_Center_Logo.png";
import NavBar from "../../NavBar";
import "./style.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ShadowedButton from "../../ShadowedButton";
import leftcarrot from "../../LandingPageV2/Interested/chevron.png";

const Interested = () => {
  return (
    <div className="background-white">
      <div className="interestedText">Interested</div>

      <div className="blackRectangle">
        <div className="applyNowBox">
          <a href="/apply" className="applyNowText">
            join us
          </a>
        </div>
      </div>
      <div className="leftcarrot">
        <img src={leftcarrot} height="50vh" width="50vw" />
      </div>
      <div className="sentenceText">
        Join a community that shares the same goal - turning ideas into reality
      </div>
    </div>

    // <div className="bg-white vw-100 vh-100 py-4 px-5">
    //   <Row className="vh-33 p-5">
    //     <div className="interested-word text-uppercase">Interested</div>
    //   </Row>

    //   <Row className="vh-23 p-5">
    //     <Col>
    //       <div className="box">join us</div>
    //     </Col>

    //     <Col>
    //       <div className="phrase-text">
    //         Join a community that shares the same goal - turning ideas into
    //         reality
    //       </div>
    //     </Col>
    //   </Row>
    // </div>
  );
};

export default Interested;
