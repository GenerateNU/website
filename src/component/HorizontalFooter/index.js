import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import GenerateLogo from "../../assets/images/landingpage-v2/footerlogo.svg"; //"../../assets/images/landingpage-v2/footerlogo.svg";
import InstaIcon from "../../assets/images/socialMediaIcons/Insta.png";
import LinkedInIcon from "../../assets/images/socialMediaIcons/Linkedin.png";
import FbIcon from "../../assets/images/socialMediaIcons/Facebook.png";
import YoutubeIcon from "../../assets/images/socialMediaIcons/Youtube.png";
import MosaicIcon from "../../assets/images/socialMediaIcons/Mosaic.png";
import NortheasternIcon from "../../assets/images/socialMediaIcons/Northeaster.png";
import Sherm from "../../assets/images/socialMediaIcons/Sherm.png";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Generate", link: "/" },
  { name: "Apply", link: "/apply" },
  { name: "About", link: "/about" },
  { name: "Culture", link: "/culture" },
  { name: "Teams", link: "/teams" },
  // { name: "People", link: "/", disabled: true },
  { name: "Projects", link: "/projects" },
];

const FooterLink = ({ page, currentPage }) => {
  const { name, link, disabled } = page;
  const isCurrentPage = currentPage === link;

  return (
    <div>
      {disabled ? (
        <a className="footer-link-text disabled-footer-text" href={link}>
          {name}
        </a>
      ) : isCurrentPage ? (
        <b>
          <a href={link} className="footer-link-bold">
            {name} {"<"}
          </a>
        </b>
      ) : (
        <a className="footer-link-text" href={link}>
          {name}
        </a>
      )}
    </div>
  );
};

function HorizontalFooter() {
  const navigate = useNavigate();
  const currentPageUrl = window.location.href;
  const handleOnClick = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  return (
    <Container className="footer-container-mobile w-100">
      <div className="d-flex flex-row justify-content-between w-100">
        <div className="left-bar-item">
          <div className="w-100 d-flex flex-column justify-content-between align-items-flex-start">
            <div className="sherm">
              <img
                className="logo-placement"
                src={GenerateLogo}
                onClick={handleOnClick}
                alt="Logo description" // Add alt text to the image for accessibility
              />
            </div>
          </div>
          <span id="footer-links">
            <span id="footer-pages">
              {pages.map((page, index) => (
                <FooterLink
                  key={index}
                  page={page}
                  currentPage={currentPageUrl.substring(
                    currentPageUrl.lastIndexOf("/")
                  )}
                />
              ))}
            </span>
          </span>
        </div>
        <div className="social-icons">
          <Row style={{ paddingBottom: 0 }}>
            <Col className="icon">
              <a href="https://www.google.com/">
                {" "}
                <img src={InstaIcon} height="30vh" width="30vw" alt="" />{" "}
              </a>{" "}
            </Col>{" "}
          </Row>{" "}
          <Row style={{ paddingBottom: 0 }}>
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
          <Row style={{ paddingBottom: 0 }}>
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
          <Row style={{ paddingBottom: 0 }}>
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
