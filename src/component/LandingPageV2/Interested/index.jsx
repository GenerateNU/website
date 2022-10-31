import Image from "react-bootstrap/Image";
import ShermLogo from "../../../assets/images/landingpage/affiliateorgintros/Sherman_Center_Logo.png";
import NavBar from "../../NavBar";
import "./style.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ShadowedButton from "../../ShadowedButton";

const Interested = () => {
  return (
    <div className="bg-white vw-100 vh-100 py-4 px-5">
      {/* <div className="w-75 pe-5 d-flex">
        <div className="interested-word text-uppercase">Interested</div>
      </div> */}

      <Row className="vh-33 p-5">
        <div className="interested-word text-uppercase">Interested</div>
      </Row>

      <Row className="vh-23 p-5">
        <Col>
          <div className="box">join us</div>
        </Col>

        <Col>
          <div className="phrase-text">
            Join a community that shares the same goal - turning ideas into
            reality
          </div>
        </Col>
      </Row>

      {/* <div className="w-75 pe-5 d-flex">
        <div className="interested-text text-uppercase">Interested</div>
      </div>
      <div className="our-mission-header text-no-fill text-uppercase position-relative start-0 bottom-0 ps-5 pb-4">
        Our Mission
      </div> */}
    </div>
  );
};

export default Interested;
