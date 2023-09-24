import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";
import GenerateLogo from "../../assets/images/landingpage-v2/footerlogo.svg";
import { useNavigate } from "react-router-dom";
import HorizontalFooter from "../HorizontalFooter";
import { SocialIcon, socialIcons } from "../SocialIcon";
import useWebsite from "../../shared/useWebsite";

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
      {" "}
      {disabled ? (
        <a className="footer-link-text disabled-footer-text" href={link}>
          {" "}
          {name}{" "}
        </a>
      ) : isCurrentPage ? (
        <b>
          <a href={link} className="footer-link-bold">
            {" "}
            {name} {"<"}{" "}
          </a>{" "}
        </b>
      ) : (
        <a className="footer-link-text" href={link}>
          {" "}
          {name}{" "}
        </a>
      )}{" "}
    </div>
  );
};

function VerticalFooter() {
  const currentPageUrl = window.location.href;
  const navigate = useNavigate();
  const handleOnClick = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  const website = useWebsite();
  const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;

  return isBigScreen && website ? (
    <Col fluid className="top-level-contaner">
      <div className="sherm-placement">
        <img
          className="logo-alignment"
          src={GenerateLogo}
          onClick={handleOnClick}
          alt="Logo description" // Add alt text to the image for accessibility
        />
      </div>{" "}
      <span id="footer-links">
        <span id="footer-pages">
          {" "}
          {pages.map((page, index) => (
            <FooterLink
              key={index}
              page={page}
              currentPage={currentPageUrl.substring(
                currentPageUrl.lastIndexOf("/"),
              )}
            />
          ))}{" "}
        </span>{" "}
        <div className="social-icons">
          {" "}
          {socialIcons.map((row, index) => (
            <Row key={index}>
              {" "}
              {row.map((icon, index) => (
                <>
                  <SocialIcon
                    key={index}
                    href={icon.href}
                    imgSrc={icon.imgSrc}
                  />
                  {icon.href.includes("instagram") && <div></div>}
                </>
              ))}{" "}
            </Row>
          ))}{" "}
        </div>{" "}
      </span>{" "}
    </Col>
  ) : (
    <HorizontalFooter />
  );
}

export default VerticalFooter;
