import React from "react";
import { useState } from "react";
import GenerateLogo from "../../assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png";
import MenuIcon from "@material-ui/icons/Menu";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/images/projectspage/arrowbutton.svg";

const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;

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

const dotter = (n_dots, top, spread, start, length, dimensions) => {
  return Array.from({ length: n_dots }).map((_, index) => {
    return (
      <div
        style={{
          top: `${top}%`,
          left: `${((length - spread) / (n_dots - 1)) * index + start}%`,
          position: "absolute",
          width: `max(${dimensions}vh, ${dimensions}vw)`,
          height: `max(${dimensions}vh, ${dimensions}vw)`,
          backgroundColor: YELLOW,
          borderRadius: "50%",
        }}
      />
    );
  });
};

const MOBILE_LEFT_V_LINE = 10;
const MOBILE_RIGHT_V_LINE = 90;
const DESKTOP_LEFT_V_LINE = 5;
const DESKTOP_RIGHT_V_LINE = 90;
const TOP_H_LINE = 5;
const BOTTOM_H_LINE = 90;
const MOBILE_MENU_TEXT_LEFT = 17.5;
const DESKTOP_MENU_TEXT_LEFT = 12.5;
const MENU_TEXT_TOP = 6;
const MOBILE_N_DOTS = 7;
const DESKTOP_N_DOTS = 4;
const YELLOW = "#ffbf3c";

const menuItemsMapper = (menuItems, top, left) => {
  return menuItems.map((item, index) => (
    <a
      href={item.href}
      className="header-font-style"
      style={{
        position: "absolute",
        top: `${top(index)}%`,
        left: `${left}%`,
      }}
    >
      {item.text}
    </a>
  ));
};

const newsletterify = (top, left, width, height) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
        width: `${width}vw`,
        height: `${height}vh`,
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
  );
};

const yellowrectify = (top, left, width, height, contents = <></>) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
        width: `${width}vw`,
        height: `${height}vh`,
        backgroundColor: YELLOW,
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {contents}
    </div>
  );
};

const mobileModalContents = (
  <>
    <div className="h-line" style={{ top: `${TOP_H_LINE}%`, width: "100%" }} />
    <div
      className="v-line"
      style={{ left: `${MOBILE_LEFT_V_LINE}%`, height: "90%" }}
    />
    <div
      className="v-line"
      style={{ left: `${MOBILE_RIGHT_V_LINE}%`, height: "90%" }}
    />
    <div
      className="h-line"
      style={{ top: `${BOTTOM_H_LINE}%`, width: "100%" }}
    />
    <Modal.Header
      closeButton
      style={{
        fontSize: "max(1.25vh,1.25vw)",
        position: "absolute",
        top: `${TOP_H_LINE / 2 - 1.75}%`,
        left: `${
          MOBILE_RIGHT_V_LINE + (100 - MOBILE_RIGHT_V_LINE) / 2 - 1.75
        }%`,
        zIndex: 100,
      }}
    />

    <Modal.Body className="overflow-hidden text-black">
      <div
        className="menu-font-style"
        style={{
          position: "absolute",
          top: `${MENU_TEXT_TOP}%`,
          left: `${MOBILE_MENU_TEXT_LEFT}%`,
        }}
      >
        Menu
      </div>
      {menuItemsMapper(
        [...menuItemsLeft, ...menuItemsRight],
        (index) => MENU_TEXT_TOP + 5 + 7.5 * (1 + index),
        MOBILE_MENU_TEXT_LEFT
      )}
      <div style={{ display: "flex" }}>
        {dotter(
          MOBILE_N_DOTS,
          BOTTOM_H_LINE - 5,
          MOBILE_MENU_TEXT_LEFT + 5,
          MOBILE_MENU_TEXT_LEFT - 2.5,
          82.5,
          4
        )}
      </div>
      {yellowrectify(
        BOTTOM_H_LINE + 0.1,
        0,
        MOBILE_LEFT_V_LINE,
        100 - BOTTOM_H_LINE
      )}
      {/* TODO: Implement newsletter redirect */}
      {newsletterify(
        BOTTOM_H_LINE + 0.1,
        MOBILE_LEFT_V_LINE,
        MOBILE_RIGHT_V_LINE - MOBILE_LEFT_V_LINE,
        100 - BOTTOM_H_LINE
      )}
      {yellowrectify(
        BOTTOM_H_LINE + 0.1,
        MOBILE_RIGHT_V_LINE,
        MOBILE_RIGHT_V_LINE,
        100 - BOTTOM_H_LINE
      )}
    </Modal.Body>
  </>
);

const desktopModalContents = (
  <>
    <div
      className="v-line"
      style={{ left: `${DESKTOP_LEFT_V_LINE}%`, height: "90%" }}
    />
    <div
      className="v-line"
      style={{
        top: `${BOTTOM_H_LINE}%`,
        left: `${DESKTOP_LEFT_V_LINE}%`,
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
    <div className="h-line" style={{ top: `${TOP_H_LINE}%`, width: "100%" }} />
    <div
      className="h-line"
      style={{ top: `${BOTTOM_H_LINE}%`, width: `${DESKTOP_RIGHT_V_LINE}%` }}
    />

    <Modal.Header
      closeButton
      style={{
        fontSize: "max(1.25vh,1.25vw)",
        position: "absolute",
        top: `${TOP_H_LINE / 2 - 1.25}%`,
        left: `${
          DESKTOP_RIGHT_V_LINE + (100 - DESKTOP_RIGHT_V_LINE) / 2 - 1.25
        }%`,
        zIndex: 100,
      }}
    />
    <Modal.Body className="overflow-hidden text-black">
      <div
        className="menu-font-style"
        style={{
          position: "absolute",
          top: `${MENU_TEXT_TOP}%`,
          left: `${DESKTOP_MENU_TEXT_LEFT}%`,
        }}
      >
        Menu
      </div>
      {menuItemsMapper(
        menuItemsLeft,
        (index) => MENU_TEXT_TOP + 25 + 12.5 * (1 + index),
        DESKTOP_MENU_TEXT_LEFT
      )}
      {menuItemsMapper(
        menuItemsRight,
        (index) => MENU_TEXT_TOP + 25 + 12.5 * (1 + index),
        DESKTOP_MENU_TEXT_LEFT + 35
      )}
      <div
        style={{
          display: "flex",
        }}
      >
        {dotter(
          DESKTOP_N_DOTS,
          BOTTOM_H_LINE + 2.5,
          DESKTOP_MENU_TEXT_LEFT + 10,
          DESKTOP_MENU_TEXT_LEFT - 5,
          40,
          3
        )}
        {dotter(
          DESKTOP_N_DOTS,
          BOTTOM_H_LINE + 2.5,
          DESKTOP_MENU_TEXT_LEFT + 10,
          DESKTOP_MENU_TEXT_LEFT + 53.75,
          40,
          3
        )}
      </div>
      {/* TODO: Implement newsletter redirect */}
      {newsletterify(
        TOP_H_LINE,
        DESKTOP_RIGHT_V_LINE,
        100 - DESKTOP_RIGHT_V_LINE,
        BOTTOM_H_LINE - TOP_H_LINE + 0.2
      )}
      {/* TODO: Implement newsletter redirect */}
      {yellowrectify(
        BOTTOM_H_LINE,
        DESKTOP_RIGHT_V_LINE,
        100 - DESKTOP_RIGHT_V_LINE,
        100 - BOTTOM_H_LINE,
        <img src={Arrow} style={{ transform: "rotate(90deg)" }} alt="Arrow" />
      )}
    </Modal.Body>
  </>
);

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  const navigateApply = () => {
    navigate("/apply");
  };

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

  return (
    <div className="bg-light p-2 mb-5 d-flex bar-size justify-content-around align-items-center border border-dark h-10 w-10">
      {nav}
      <Modal
        show={showMenu}
        onHide={() => setShowMenu(false)}
        fullscreen={true}
      >
        {isBigScreen ? desktopModalContents : mobileModalContents}
      </Modal>
    </div>
  );
};

export default NavBar;
