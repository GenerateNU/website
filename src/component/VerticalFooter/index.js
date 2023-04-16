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

const pages = [
  { name: "Generate", link: "/" },
  { name: "About", link: "/about" },
  { name: "Culture", link: "/culture" },
  { name: "Teams", link: "/teams" },
  { name: "People", link: "/", disabled: true },
  { name: "Apply", link: "/apply" },
  { name: "Projects", link: "/projects" },
];

const FooterLink = ({ page, currentPage}) => {
  const { name, link, disabled } = page;
  const isCurrentPage = currentPage === link;

  return (
    <Row className="footer-text">
      {disabled ? (
        <a className="disabled-footer-text" href={link}>
          {name}
        </a>
      ) : isCurrentPage ? (
        <b>
          <a href={link}>
            {name} {"<"}
          </a>
        </b>
      ) : (
        <a href={link}>{name}</a>
      )}
    </Row>
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
        <img className={"social-media"} src={imgSrc}/>
      </a>
    </Col>
  );
}

function VerticalFooter() {
  const currentPageUrl = window.location.href;
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
        <div className="social-icons">
          {socialIcons.map((row, index) => (
            <Row key={index}>
              {row.map((icon, index) => (
                <>
                  <SocialIcon
                    key={index}
                    href={icon.href}
                    imgSrc={icon.imgSrc}
                  />
                  {icon.href.includes("instagram") && (
                    <Col className={"spacer"}></Col>
                  )}
                </>
              ))}
            </Row>
          ))}
        </div>
      </span>
    </Container>
  );
}

export default VerticalFooter;
