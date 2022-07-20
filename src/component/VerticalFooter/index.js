import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import GenerateLogo from "../../assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png";
import InstaIcon from "../../assets/images/socialMediaIcons/Instagram-Logo.wine.png";
import LinkedInIcon from "../../assets/images/socialMediaIcons/Linkedin-image.png";
import FbIcon from "../../assets/images/socialMediaIcons/logo-facebook-512.webp";
import TwitterIcon from "../../assets/images/socialMediaIcons/twitter.download.png";


function VerticalFooter() {
  return (
    <Container fluid className="footer-container">
      <Row>
        <div className="logo-background sherm">
          <img src={GenerateLogo} height="50vh" width="50vw" />
        </div>
      </Row>
      <Row className="footer-text"> <a href="/about">Generate</a></Row>
      <Row className="footer-text"> <a href="/about">About</a></Row>
      <Row className="footer-text"> <a href="/apply">Apply</a></Row>

      <div className="social-icons">
        {/* <Row>
          <Col className="icon"><a href ='https://www.google.com/'> <img src={InstaIcon} height="30vh" width="50vw" /> </a></Col>
          <Col className="icon"><a href ='https://www.google.com/'> <img src={LinkedInIcon} height="20vh" width="20vw" /> </a></Col>
        </Row> */}
        <Row>
        <Col className="icon"><a href ='https://www.google.com/'> <img src={InstaIcon} height="30vh" width="50vw" /> </a></Col>
          <Col className="icon"><a href ='https://www.google.com/'> <img src={LinkedInIcon} height="20vh" width="20vw" /> </a></Col>
          <Col className="icon"><a href ='https://www.google.com/'> <img src={TwitterIcon} height="20vh" width="20vw" /> </a></Col>
          <Col className="icon"><a href ='https://www.google.com/'> <img src={FbIcon} height="30vh" width="30vw" /> </a></Col>
        </Row>
       
      </div>
    </Container>
  );
}

export default VerticalFooter;
