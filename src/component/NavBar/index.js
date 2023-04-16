import React from "react";
import { useState } from "react";
import GenerateLogo from "../../assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png";
import MenuIcon from "@material-ui/icons/Menu";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/images/projectspage/arrowbutton.svg";

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
      <img
        style={{ width: "min(3.5vmin, 40px)", height: "auto" }}
        src={GenerateLogo}
        onClick={navigateHome}
        alt="Generate Logo"
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
  const DESKTOP_RIGHT_V_LINE = 90;
  const TOP_H_LINE = 5;
  const BOTTOM_H_LINE = 90;
  const MENU_TEXT_LEFT = 12.5;
  const MENU_TEXT_TOP = 6;
  const MOBILE_N_DOTS = 7;
  const DESKTOP_N_DOTS = 4;
  const YELLOW = "#ffbf3c";

  const modalContents = isBigScreen ? (
    <>
      <div
        className="v-line"
        style={{ left: `${LEFT_V_LINE}%`, height: "90%" }}
      />
      <div
        className="v-line"
        style={{
          top: `${BOTTOM_H_LINE}%`,
          left: `${LEFT_V_LINE}%`,
          height: "90%",
        }}
      />
      <div
        className="v-line"
        style={{ left: `${DESKTOP_RIGHT_V_LINE}%`, height: "90%" }}
      />
      <div
        className="v-line"
        style={{
          top: `${BOTTOM_H_LINE}%`,
          left: `${DESKTOP_RIGHT_V_LINE}%`,
          height: "90%",
        }}
      />
      <div
        className="h-line"
        style={{ top: `${TOP_H_LINE}%`, width: "100%" }}
      />
      <div
        className="h-line"
        style={{ top: `${BOTTOM_H_LINE}%`, width: `${DESKTOP_RIGHT_V_LINE}%` }}
      />

      <Modal.Header closeButton className="close-button" />
      <Modal.Body className="overflow-hidden text-black">
        <div
          className="menu-font-style"
          style={{
            position: "absolute",
            top: `${MENU_TEXT_TOP}%`,
            left: `${MENU_TEXT_LEFT}%`,
          }}
        >
          Menu
        </div>
        {menuItemsLeft.map((item, index) => (
          <a
            href={item.href}
            className="header-font-style"
            style={{
              position: "absolute",
              top: `${MENU_TEXT_TOP + 30 + 12 * (1 + index)}%`,
              left: `${MENU_TEXT_LEFT}%`,
            }}
          >
            {item.text}
          </a>
        ))}
        {menuItemsRight.map((item, index) => (
          <a
            href={item.href}
            className="header-font-style"
            style={{
              position: "absolute",
              top: `${MENU_TEXT_TOP + 30 + 12 * (1 + index)}%`,
              left: `${MENU_TEXT_LEFT + 35}%`,
            }}
          >
            {item.text}
          </a>
        ))}
        <div
          style={{
            display: "flex",
          }}
        >
          {Array.from({ length: DESKTOP_N_DOTS }).map((_, index) => {
            return (
              <div
                key={index}
                style={{
                  top: `${BOTTOM_H_LINE + 2.5}%`,
                  left: `${
                    ((40 - MENU_TEXT_LEFT - 5) / (DESKTOP_N_DOTS - 1)) *
                      index +
                    MENU_TEXT_LEFT -
                    5
                  }%`,
                  position: "absolute",
                  width: "5vh",
                  height: "5vh",
                  backgroundColor: YELLOW,
                  borderRadius: "50%",
                }}
              />
            );
          })}
          {Array.from({ length: DESKTOP_N_DOTS }).map((_, index) => {
            return (
              <div
                key={index}
                style={{
                  top: `${BOTTOM_H_LINE + 2.5}%`,
                  left: `${
                    ((40 - MENU_TEXT_LEFT - 5) / (DESKTOP_N_DOTS - 1)) *
                      index +
                    MENU_TEXT_LEFT +
                    47.5
                  }%`,
                  position: "absolute",
                  width: "5vh",
                  height: "5vh",
                  backgroundColor: YELLOW,
                  borderRadius: "50%",
                }}
              />
            );
          })}
        </div>
        {/* TODO: Implement newsletter redirect */}
        <div
          style={{
            position: "absolute",
            top: `${TOP_H_LINE}%`,
            left: `${DESKTOP_RIGHT_V_LINE}%`,
            width: `${100 - DESKTOP_RIGHT_V_LINE}vw`,
            height: `${BOTTOM_H_LINE - TOP_H_LINE + 0.1}vh`,
            backgroundColor: YELLOW,
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div className="newsletter-font">Newsletter</div>
        </div>
        {/* TODO: Implement newsletter redirect */}
        <div
          style={{
            position: "absolute",
            top: `${BOTTOM_H_LINE}%`,
            left: `${DESKTOP_RIGHT_V_LINE}%`,
            width: `${100 - DESKTOP_RIGHT_V_LINE}vw`,
            height: `${100 - BOTTOM_H_LINE}vh`,
            backgroundColor: YELLOW,
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Arrow}
            style={{ transform: "rotate(90deg)" }}
            alt="Arrow"
          ></img>
        </div>
      </Modal.Body>
    </>
  ) : (
    <>
      <div
        className="h-line"
        style={{ top: `${TOP_H_LINE}%`, width: "100%" }}
      />
      <div
        className="v-line"
        style={{ left: `${LEFT_V_LINE}%`, height: "90%" }}
      />
      <div
        className="v-line"
        style={{ left: `${RIGHT_V_LINE}%`, height: "90%" }}
      />
      <div
        className="h-line"
        style={{ top: `${BOTTOM_H_LINE}%`, width: "100%" }}
      />
      <Modal.Header closeButton className="close-button" />
      <Modal.Body className="overflow-hidden text-black">
        <div
          className="menu-font-style"
          style={{
            position: "absolute",
            top: `${MENU_TEXT_TOP}%`,
            left: `${MENU_TEXT_LEFT}%`,
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
              top: `${MENU_TEXT_TOP + 5 + 5 * (1 + index)}%`,
              left: `${MENU_TEXT_LEFT}%`,
            }}
          >
            {item.text}
          </a>
        ))}
        <div style={{ display: "flex" }}>
          {Array.from({ length: MOBILE_N_DOTS }).map((_, index) => {
            return (
              <div
                key={index}
                style={{
                  top: `${BOTTOM_H_LINE - 5}%`,
                  left: `${
                    ((82.5 - MENU_TEXT_LEFT) / (MOBILE_N_DOTS - 1)) *
                      index +
                    MENU_TEXT_LEFT
                  }%`,
                  position: "absolute",
                  width: "4vh",
                  height: "4vh",
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
          style={{
            position: "absolute",
            top: `${BOTTOM_H_LINE + 0.1}%`,
            left: `${LEFT_V_LINE}%`,
            width: `${RIGHT_V_LINE - LEFT_V_LINE}vw`,
            height: `${100 - BOTTOM_H_LINE}vh`,
            backgroundColor: YELLOW,
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div className="newsletter-font">Newsletter</div>
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
