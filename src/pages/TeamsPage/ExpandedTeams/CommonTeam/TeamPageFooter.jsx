import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footerStyle.css";
import GenerateLogo from "../../../../assets/images/landingpage-v2/footerlogo.svg";
import { useNavigate } from "react-router-dom";
import useWebsite from "../../../../shared/useMobile";
import SocialIcons from "./SocialIcons";
import ButtonUp from "../../../../assets/images/TeamsPageImages/TeamAssets/ButtonUp.svg";

const pages = [
  { name: "Generate", link: "/" },
  { name: "Apply", link: "/apply" },
  { name: "About", link: "/about" },
  { name: "Culture", link: "/culture" },
  { name: "Teams", link: "/teams" },
  // { name: "People", link: "/", disabled: true },
  { name: "Projects", link: "/projects" },
];
const pages2 = [
  [
    { name: "Generate", link: "/" },
    { name: "Apply", link: "/apply" },
    { name: "About", link: "/about" },
  ],
  [
    { name: "Culture", link: "/culture" },
    { name: "Teams", link: "/teams" },
    // { name: "People", link: "/", disabled: true },
    { name: "Projects", link: "/projects" },
  ],
];

const FooterLink = ({ page, currentPage }) => {
  const { name, link, disabled } = page;
  const isCurrentPage = link.includes("/teams");

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

function FooterLinks() {
  const currentPageUrl = window.location.href;
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;
  const mobile = !isBigScreen || !isWebsite;
  return mobile ? (
    <span className="footer-pages">
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
  ) : (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <span className="footer-pages">
        {pages2[0].map((page, index) => (
          <FooterLink
            key={index}
            page={page}
            currentPage={currentPageUrl.substring(
              currentPageUrl.lastIndexOf("/")
            )}
          />
        ))}
      </span>
      <span className="footer-pages">
        {pages2[1].map((page, index) => (
          <FooterLink
            key={index}
            page={page}
            currentPage={currentPageUrl.substring(
              currentPageUrl.lastIndexOf("/")
            )}
          />
        ))}
      </span>
    </div>
  );
}

function TitleCard({ title, color, mobile }) {
  return (
    <div style={{ marginTop: "6vw" }} className={`${mobile ? "spacing" : ""}`}>
      <div class="title">
        <div style={{ marginTop: "-10%", marginBottom: "-10%" }}>{title}</div>
      </div>
    </div>
  );
}

function TeamPageFooter({ color, page }) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    window.scrollTo(0, 0);
    navigate("/");
  };

  const handleScrollClick = () => {
    window.scrollTo(0, 0);
  };

  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;
  const mobile = !isBigScreen || !isWebsite;

  return (
    <Container className="footer-container">
      <div className={`${mobile ? "divider-col" : "divider-row"}`}>
        <div className={`${mobile ? "top-bar-mobile" : "left-bar"}`}>
          <div
            className={`${
              mobile
                ? "d-flex flex-column flex-direction-start"
                : "w-100 d-flex flex-column justify-content-between"
            }`}
          >
            <div className="sherm">
              <img
                className="logo-placement"
                src={GenerateLogo}
                onClick={handleOnClick}
                alt="Logo description" // Add alt text to the image for accessibility
              />
            </div>
          </div>
          {mobile ? (
            <img
              src={ButtonUp}
              alt=""
              className={`${mobile ? "up-icon-mobile" : "up-icon"}`}
              onClick={handleScrollClick}
            />
          ) : (
            <span className="footer-links">
              <FooterLinks />
            </span>
          )}
        </div>
        <div className={`${mobile ? "bot-box-mobile" : "right-box"}`}>
          {mobile ? (
            <span className="footer-links">
              <FooterLinks />
            </span>
          ) : (
            <SocialIcons mobile={mobile} />
          )}
          {mobile ? (
            <SocialIcons mobile={mobile} />
          ) : (
            <img
              src={ButtonUp}
              alt=""
              className={`${mobile ? "up-icon-mobile" : "up-icon"}`}
              onClick={handleScrollClick}
            />
          )}
        </div>
      </div>
      <TitleCard color={color} title={page} mobile={mobile} />
    </Container>
  );
}

export default TeamPageFooter;
