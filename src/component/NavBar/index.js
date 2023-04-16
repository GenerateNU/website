import React from "react";
import { useState } from "react";
import GenerateLogo from "../../assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png";
import MenuIcon from "@material-ui/icons/Menu";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const navigateApply = () => {
    navigate("/apply");
  };
  const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;

  const nav = isBigScreen ? (
    <>
      {/* Todo : change the logo */}
      <img
        style={{ width: "min(3.5vmin, 40px)", height: "auto" }}
        src={GenerateLogo}
        onClick={navigateHome}
      />
      <span
        className="font-size bg-transparent shadow-none text-black border-0 text-decoration-none text-uppercase cursor-pointer menu-hover align-item-center"
        onClick={navigateApply}
      >
        Apply
      </span>
      <span
        className="d-flex align-items-center"
        onClick={() => setShowMenu(true)}
      >
        <div className="font-size bg-transparent shadow-none text-black border-0 text-decoration-none text-uppercase cursor-pointer menu-hover align-items-center m-1">
          Menu
        </div>
        <MenuIcon style={{ height: "3.5vh", width: "auto" }} />
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

  const MenuItem = ({ href, text }) => {
    return (
      <Row className="m-0 p-0">
        <a className="header-font-style" href={href}>
          {text}
        </a>
      </Row>
    );
  };

  const MenuColumn = ({ items }) => {
    return (
      <Col xs={5} className="m-0 p-0">
        {items.map((item) => (
          <MenuItem key={item.href} href={item.href} text={item.text} />
        ))}
      </Col>
    );
  };

  const FlexItem = () => {
    return <div className="item"></div>;
  };

  const FlexBox = () => {
    return (
      <div className="flexbox">
        <FlexItem />
        <FlexItem />
        <FlexItem />

        <div className="flexbox2">
          <FlexItem />
          <FlexItem />
          <FlexItem />
          <FlexItem />
        </div>
      </div>
    );
  };

  const menuItemsLeft = [
    { href: "/", text: "Generate" },
    { href: "/about", text: "About" },
    { href: "/culture", text: "Culture" },
  ];

  const menuItemsRight = [
    { href: "/teams", text: "Teams" },
    { href: "/apply", text: "Apply" },
    { href: "/projects", text: "Projects" },
  ];

  const LEFT_V_LINE = 5;
  const RIGHT_V_LINE = 95;
  const TOP_H_LINE = 5;
  const BOTTOM_H_LINE = 90;
  const MOBILE_MENU_TEXT_LEFT = 12.5;
  const MOBILE_MENU_TEXT_TOP = 6;
  const YELLOW = "#ffbf3c";

  const modalContents = isBigScreen ? (
    <>
      <Modal.Header closeButton className="m-0" />
      <Modal.Body className="m-0 px-5 overflow-hidden text-black">
        <Row className="m-0 p-0 menu-font-style ps-5 vh-45 text-uppercase">
          Menu
        </Row>
        <Row className="m-0 p-0 vh-40 ps-5">
          <MenuColumn items={menuItemsLeft} />
          <MenuColumn items={menuItemsRight} />
        </Row>
        <Col>
          <div className="v1" />
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
        <FlexBox />
        <div className="rectangleLogo" />
      </Modal.Body>
    </>
  ) : (
    <>
      <div className="h-line" style={{ top: `${TOP_H_LINE}%` }} />
      <div className="v-line" style={{ left: `${LEFT_V_LINE}%` }} />
      <div className="v-line" style={{ left: `${RIGHT_V_LINE}%` }} />
      <div className="h-line" style={{ top: `${BOTTOM_H_LINE}%` }} />
      <Modal.Header closeButton className="close-button" />
      <Modal.Body className="overflow-hidden text-black">
        <div
          className="menu-font-style"
          style={{
            position: "absolute",

            top: `${MOBILE_MENU_TEXT_TOP}%`,
            left: `${MOBILE_MENU_TEXT_LEFT}%`,
          }}
        >
          Menu
        </div>
        {[...menuItemsLeft, ...menuItemsRight].map((item, index) => (
          <a
            href={item.href}
            className="header-font-style"
            style={{
              position: "absolute",
              top: `${MOBILE_MENU_TEXT_TOP + 5 + 5 * (1 + index)}%`,
              left: `${MOBILE_MENU_TEXT_LEFT}%`,
            }}
            key={index}
          >
            {item.text}
          </a>
        ))}
        <div style={{ display: "flex" }}>
          {Array.from({ length: 7 }).map((_, index) => {
            return (
              <div
                key={index}
                style={{
                  top: `${BOTTOM_H_LINE - 5}%`,
                  left: `${
                    ((82.5 - MOBILE_MENU_TEXT_LEFT) / 6) * index +
                    MOBILE_MENU_TEXT_LEFT
                  }%`,
                  position: "absolute",
                  width: "5vw",
                  height: "5vw",
                  backgroundColor: YELLOW,
                  borderRadius: "50%",
                }}
              />
            );
          })}
        </div>
        <div
          style={{
            position: "absolute",
            top: `${BOTTOM_H_LINE + 0.1}%`,
            left: "0%",
            width: `${LEFT_V_LINE}vw`,
            height: `${100 - BOTTOM_H_LINE}vh`,
            border: "1px solid black",
            backgroundColor: YELLOW,
          }}
        />
        {/* TODO: Implement newsletter redirect */}
        <div
          className="newsletter-font"
          style={{
            position: "absolute",
            top: `${BOTTOM_H_LINE + 0.1}%`,
            left: "5%",
            width: "90vw",
            height: "10vh",
            paddingTop: "5%",
            backgroundColor: YELLOW,
            border: "1px solid black",
            textAlign: "center",
          }}
        >
          Newsletter
        </div>
        <div
          style={{
            position: "absolute",
            top: `${BOTTOM_H_LINE + 0.1}%`,
            left: "95%",
            width: `${RIGHT_V_LINE}vw`,
            height: `${100 - BOTTOM_H_LINE}vh`,
            border: "1px solid black",
            backgroundColor: YELLOW,
          }}
        />
      </Modal.Body>
    </>
  );

  return (
    <div className="bg-light p-2 mb-5 d-flex bar-size justify-content-around align-items-center border border-dark h-10 w-10">
      {nav}
      <Modal
        show={showMenu}
        onHide={() => setShowMenu(false)}
        fullscreen={true}
      >
        {modalContents}
      </Modal>
    </div>
  );
};

export default NavBar;
