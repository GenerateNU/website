import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";
import useWebsite from "../../shared/useWebsite";
import GenerateLogo from "../../assets/images/landingpage-v2/footerlogo.svg";
import InstaIcon from "../../assets/images/socialMediaIcons/Insta.svg";
import LinkedInIcon from "../../assets/images/socialMediaIcons/Linkedin.svg";
import FbIcon from "../../assets/images/socialMediaIcons/Facebook.svg";
import YoutubeIcon from "../../assets/images/socialMediaIcons/Youtube.svg";
import MosaicIcon from "../../assets/images/socialMediaIcons/Mosaic.svg";
import NortheasternIcon from "../../assets/images/socialMediaIcons/Northeaster.svg";
import Sherm from "../../assets/images/socialMediaIcons/Sherm.svg";
import { useNavigate } from "react-router-dom";
import HorizontalFooter from "../HorizontalFooter";

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

const socialIcons = [
  [
    {
      href: "https://www.instagram.com/generatenu/",
      imgSrc: InstaIcon,
    },
  ],
  [
    {
      href: "https://www.youtube.com/channel/UC2Y_rgZiPKPH0lSU1FyQJFw/featured",
      imgSrc: YoutubeIcon,
    },
    {
      href: "https://coe.northeastern.edu/orgs/generate/",
      imgSrc: NortheasternIcon,
    },
  ],
  [
    {
      href: "https://www.linkedin.com/company/generate-product-development/mycompany/",
      imgSrc: LinkedInIcon,
    },
    {
      href: "https://entrepreneurship.northeastern.edu/mosaic/",
      imgSrc: MosaicIcon,
    },
  ],
  [
    {
      href: "https://www.facebook.com/GenerateNU/",
      imgSrc: FbIcon,
    },
    {
      href: "https://sherman.center.northeastern.edu/",
      imgSrc: Sherm,
    },
  ],
];

function SocialIcon({ href, imgSrc }) {
  return (
    <Col className="icon">
      <a href={href}>
        <img className={"social-media"} src={imgSrc} alt="" />
      </a>{" "}
    </Col>
  );
}

function VerticalFooter() {
  const currentPageUrl = window.location.href;
  const navigate = useNavigate();
  const handleOnClick = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;
  const mobile = !isBigScreen || !isWebsite;

  return !mobile ? (
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
                currentPageUrl.lastIndexOf("/")
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
                  {icon.href.includes("instagram") && (
                    <div></div>
                  )}
                </>
              ))}{" "}
            </Row>
          ))}{" "}
        </div>{" "}
      </span>{" "}
    </Col>
  ) : (<HorizontalFooter/>);
}

export default VerticalFooter;
