import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import GenerateLogo from "../../assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png";
import InstaIcon from "../../assets/images/socialMediaIcons/Instagram-Logo.wine.png";
import LinkedInIcon from "../../assets/images/socialMediaIcons/Linkedin-image.png";
import FbIcon from "../../assets/images/socialMediaIcons/logo-facebook-512.webp";
import YoutubeIcon from "../../assets/images/socialMediaIcons/youtube-512.webp";


function VerticalFooter() {
  return (
    <Container fluid className="footer-container">
      <Row>
        <div className = "rectangleLogo">
          <div className="logo-background sherm">
            <img src={GenerateLogo} height="50vh" width="50vw" />
          </div>
        </div>
      </Row>
      <Row className="footer-text"> <a href="/about">About </a></Row>
      <Row className="footer-text"> <a href="/about">Culture</a></Row>
      <Row className="footer-text"> <a href="/apply">Teams</a></Row>
      <Row className="footer-text"> <a href="/apply">People</a></Row>
      <Row className="footer-text"> <a href="/apply">Apply</a></Row>
      <Row className="footer-text"> <a href="/apply">Projects</a></Row>

      <div className="social-icons">
        <Row>
          <Col className="icon"><a href ='https://www.google.com/'> <img src={InstaIcon} height="30vh" width="50vw" /> </a></Col>
          <Col className="icon"><a href ='https://www.google.com/'> <img src={LinkedInIcon} height="20vh" width="20vw" /> </a></Col>
        </Row>
        <Row>
        <Col className="icon"><a href ='https://www.youtube.com/channel/UC2Y_rgZiPKPH0lSU1FyQJFw/featured'> <img src={YoutubeIcon} height="20vh" width="20vw"/> </a></Col>
        <Col className="icon"><a href ='https://www.linkedin.com/company/generate-product-development/mycompany/'> <img src={LinkedInIcon} height="20vh" width="20vw" /></a></Col>
        </Row>
        <Row>
          <Col className="icon"><a href ='https://www.facebook.com/GenerateNU/'> <img src={FbIcon} height="30vh" width="30vw" /> </a></Col>
          <Col className="icon"><a href ='https://www.linkedin.com/company/generate-product-development/mycompany/'> <img src={LinkedInIcon} height="20vh" width="20vw" /></a></Col>
        </Row>
        <Row>
          <Col className="icon"><a href ='https://www.linkedin.com/company/generate-product-development/mycompany/'> <img src={LinkedInIcon} height="20vh" width="20vw" /></a></Col>
          <Col className="icon"><a href ='https://www.linkedin.com/company/generate-product-development/mycompany/'> <img src={LinkedInIcon} height="20vh" width="20vw" /></a></Col>
        </Row>
        
      </div>


    </Container>

  );
}

export default VerticalFooter;
