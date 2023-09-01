import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import GenerateLogo from "../../assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png";
import InstaIcon from "../../assets/images/socialMediaIcons/Insta.png";
import LinkedInIcon from "../../assets/images/socialMediaIcons/Linkedin.png";
import FbIcon from "../../assets/images/socialMediaIcons/Facebook.png";
import YoutubeIcon from "../../assets/images/socialMediaIcons/Youtube.png";
import MosaicIcon from "../../assets/images/socialMediaIcons/Mosaic.png";
import NortheasternIcon from "../../assets/images/socialMediaIcons/Northeaster.png";
import Sherm from "../../assets/images/socialMediaIcons/Sherm.png";
import { useNavigate } from "react-router-dom";

function HorizontalFooter() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    window.scrollTo(0, 0)
    navigate("/");
  };
  return (
    <Container fluid className="footer-container">
      <Row>
        <div className="w-100">
          <div className="sherm d-flex justify-content-center align">

              <img            
                className="logo-placement"
                src={GenerateLogo}
                onClick={handleOnClick}
                alt="Logo description" // Add alt text to the image for accessibility
              />
          </div>
        </div>
      </Row>
      <div className="d-flex flex-row justify-content-between">
        <div>
          <Row className="footer-text">
            {" "}
            <a href="/about"> About </a>{" "}
          </Row>{" "}
          <Row className="footer-text">
            {" "}
            <a href="/culture"> Culture </a>{" "}
          </Row>{" "}
          <Row className="footer-text">
            {" "}
            <a href="/"> Teams </a>{" "}
          </Row>{" "}
          <Row className="footer-text">
            {" "}
            <a href="/"> People </a>{" "}
          </Row>{" "}
          <Row className="footer-text">
            {" "}
            <a href="/apply"> Apply </a>{" "}
          </Row>{" "}
          <Row className="footer-text">
            {" "}
            <a href="/"> Projects </a>{" "}
          </Row>{" "}
        </div>
        <div className="social-icons">
          <Row>
            <Col className="icon">
              <a href="https://www.google.com/">
                {" "}
                <img src={InstaIcon} height="30vh" width="30vw" alt="" />{" "}
              </a>{" "}
            </Col>{" "}
          </Row>{" "}
          <Row>
            <Col className="icon">
              <a href="https://www.youtube.com/channel/UC2Y_rgZiPKPH0lSU1FyQJFw/featured">
                {" "}
                <img src={YoutubeIcon} height="30vh" width="30vw" alt="" />{" "}
              </a>{" "}
            </Col>{" "}
            <Col className="icon">
              <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
                {" "}
                <img src={NortheasternIcon} height="30vh" width="30vw" alt="" />
              </a>{" "}
            </Col>{" "}
          </Row>{" "}
          <Row>
            <Col className="icon">
              <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
                {" "}
                <img src={LinkedInIcon} height="30vh" width="30vw" alt="" />
              </a>{" "}
            </Col>{" "}
            <Col className="icon">
              <a href="https://www.facebook.com/GenerateNU/">
                {" "}
                <img src={MosaicIcon} height="30vh" width="30vw" alt="" />{" "}
              </a>{" "}
            </Col>{" "}
          </Row>{" "}
          <Row>
            <Col className="icon">
              <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
                {" "}
                <img src={FbIcon} height="30vh" width="30vw" alt="" />
              </a>{" "}
            </Col>{" "}
            <Col className="icon">
              <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
                {" "}
                <img src={Sherm} height="30vh" width="30vw" alt="" />
              </a>{" "}
            </Col>{" "}
          </Row>{" "}
        </div>{" "}
      </div>{" "}
    </Container>
  );
}

export default HorizontalFooter;
