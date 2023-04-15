import React, { useState } from "react";
import GenerateLogo from "../../assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png";
import MenuIcon from "@material-ui/icons/Menu";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MenuItem = ({ text, href }) => (
  <Row className="m-0 p-0">
    <a
      className="header-font-style fit-content text-decoration-none text-black"
      href={href}
    >
      {text}
    </a>
  </Row>
);

const menuItems = [
  { text: "Generate", href: "/" },
  { text: "About", href: "/about" },
  { text: "Culture", href: "/culture" },
  { text: "Teams", href: "/teams" },
  { text: "Apply", href: "/apply" },
  { text: "Projects", href: "/projects" },
];

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;

  const nav = isBigScreen ? (
    <>
      <a href="/">
        <img style={{ width: "5vh", height: "5vh" }} src={GenerateLogo} />
      </a>
      <span className="p-3">
        <a
          className="bg-transparent shadow-none text-black border-0 text-decoration-none cursor-pointer menu-hover"
          href="/apply"
        >
          Apply
        </a>
      </span>
      <span className="p-3" onClick={() => setShowMenu(true)}>
        <div className="bg-transparent shadow-none text-black border-0 text-decoration-none cursor-pointer menu-hover">
          Menu <MenuIcon />
        </div>
      </span>
    </>
  ) : (
    <>
      <div
        className="bg-transparent shadow-none text-black border-0 text-decoration-none cursor-pointer menu-hover"
        onClick={() => setShowMenu(true)}
      >
        <MenuIcon className="hamburger-mobile" />
      </div>
    </>
  );

  return (
    <div
      className={
        isBigScreen
          ? "bg-light p-3 mb-5 d-flex border border-dark h-10 w-10 "
          : "wrapper-nav"
      }
    >
      {/* Todo : change the logo */}
      {nav}
      <Modal
        show={showMenu}
        onHide={() => setShowMenu(false)}
        fullscreen={true}
      >
        <Modal.Header closeButton className="m-0"></Modal.Header>
        <Modal.Body className="m-0 px-5 overflow-hidden text-black">
          <Row className="m-0 p-0 menu-font-style ps-5 vh-45 text-uppercase">
            Menu
          </Row>
          <Row className="m-0 p-0 vh-40 ps-5">
            <Col xs={5} className="m-0 p-0 text-uppercase">
              {menuItems.slice(0, 3).map((item) => (
                <MenuItem key={item.href} text={item.text} href={item.href} />
              ))}
            </Col>
            <Col xs={5} className="m-0 p-0 text-uppercase">
              {menuItems.slice(3).map((item) => (
                <MenuItem key={item.href} text={item.text} href={item.href} />
              ))}
            </Col>
          </Row>
          <Col>
            <div className="v1"></div>
          </Col>
          <hr
            style={{
              background: "black",
              color: "black",
              borderColor: "black",
              height: "2px",
              marginRight: "15px",
              width: "px",
            }}
          />
          <div class="flexbox">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="flexbox2">
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
          </div>
          <div className="rectangleLogo"></div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavBar;
