import React from "react";
import { Container, Row } from "react-bootstrap";
import "./style.css";
import GenerateLogo from "../../assets/images/landingpage-v2/footerlogo.svg"; //"../../assets/images/landingpage-v2/footerlogo.svg";

import { useNavigate } from "react-router-dom";
import { SocialIcon, socialIcons } from "../SocialIcon";

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
                alt="Logo description"
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
        <div className="social-icons-mobile">
        {socialIcons.map((row, index) => (
            <Row key={index}>
              {row.map((icon, index) => (
                <>
                  <SocialIcon
                    key={index}
                    href={icon.href}
                    imgSrc={icon.imgSrc}
                  />
                </>
              ))}
            </Row>))}
        </div>
      </div>
    </Container>
  );
}

export default HorizontalFooter;
