import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import GenerateLogo from "../../assets/images/landingpage-v2/footerlogo.svg";
import InstaIcon from "../../assets/images/socialMediaIcons/Insta.png";
import LinkedInIcon from "../../assets/images/socialMediaIcons/Linkedin.png";
import FbIcon from "../../assets/images/socialMediaIcons/Facebook.png";
import YoutubeIcon from "../../assets/images/socialMediaIcons/Youtube.png";
import MosaicIcon from "../../assets/images/socialMediaIcons/Mosaic.png";
import NortheasternIcon from "../../assets/images/socialMediaIcons/Northeaster.png";
import Sherm from "../../assets/images/socialMediaIcons/Sherm.png";

function VerticalFooter() {
  const currentPageUrl = window.location.href;
  const currentPage = currentPageUrl.substring(currentPageUrl.lastIndexOf("/"));
  return (
    <Container fluid className="footer-container">
      <Row>
        <div>
          <div className="sherm">
            <a href="https://generatenu.com/">
              <img
                className="logo-placement"
                src={GenerateLogo}
                height="80%"
                width="60%"
                alt="Logo description" // Add alt text to the image for accessibility
              />
            </a>
          </div>
        </div>
      </Row>
      <span id="footer-links">
        <span id="footer-pages">
          <Row className="footer-text">
            {" "}
            {currentPage === "/" ? (
              <b>
                <a href={"/"}>Generate {"<"}</a>
              </b>
            ) : (
              <a href={"/"}>Generate</a>
            )}
          </Row>
          <Row className="footer-text">
            {" "}
            {currentPage === "/about" ? (
              <b>
                <a href={"/about"}>About {"<"}</a>
              </b>
            ) : (
              <a href={"/about"}>About</a>
            )}
          </Row>
          <Row className="footer-text">
            {" "}
            {currentPage === "/culture" ? (
              <b>
                <a href={"/culture"}>Culture {"<"}</a>
              </b>
            ) : (
              <a href={"/culture"}>Culture</a>
            )}
          </Row>
          <Row className="footer-text">
            {" "}
            {currentPage === "/teams" ? (
              <b>
                <a href={"/teams"}>Teams {"<"}</a>
              </b>
            ) : (
              <a href={"/teams"}>Teams</a>
            )}
          </Row>
          <Row className="footer-text">
            {" "}
            <a class="disabled-footer-text" href="/">
              People
            </a>
          </Row>
          <Row className="footer-text">
            {" "}
            {currentPage === "/apply" ? (
              <b>
                <a href={"/apply"}>Apply {"<"}</a>
              </b>
            ) : (
              <a href={"/apply"}>Apply</a>
            )}
          </Row>
          <Row className="footer-text">
            {" "}
            <a class="disabled-footer-text" href="/">
              Projects
            </a>
          </Row>
        </span>
        <div className="social-icons">
          <Row>
            <Col className="icon" id="ig">
              <a href="https://www.instagram.com/generatenu/">
                {" "}
                <img className="social-media" src={InstaIcon}/>{" "}
              </a>
            </Col>
            <Col className="spacer"></Col>
          </Row>
          <Row>
            <Col className="icon" id="youtube">
              <a href="https://www.youtube.com/channel/UC2Y_rgZiPKPH0lSU1FyQJFw/featured">
                {" "}
                <img className="social-media" src={YoutubeIcon}/>{" "}
              </a>
            </Col>
            <Col className="icon" id="neu">
              <a href="https://coe.northeastern.edu/orgs/generate/">
                {" "}
                <img className="social-media" src={NortheasternIcon}/>
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="icon" id="linkedin">
              <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
                {" "}
                <img className="social-media" src={LinkedInIcon}/>
              </a>
            </Col>
            <Col className="icon" id="mosaic">
              <a href="https://entrepreneurship.northeastern.edu/mosaic/">
                {" "}
                <img className="social-media" src={MosaicIcon}/>{" "}
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="icon" id="fb">
              <a href="https://www.facebook.com/GenerateNU/">
                {" "}
                <img className="social-media" src={FbIcon}/>
              </a>
            </Col>
            <Col className="icon" id="sherm">
              <a href="https://sherman.center.northeastern.edu/">
                {" "}
                <img className="social-media" src={Sherm}/>
              </a>
            </Col>
          </Row>
        </div>
      </span>
    </Container>
  );
}

export default VerticalFooter;
