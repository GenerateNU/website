import React from "react";
import "./style.css";
import BottomCorner from "../../../assets/images/landingpage-v2/bottom_corner.png";
import TopCorner from "../../../assets/images/landingpage-v2/top_corner.png";
import useDeviceDetection from "../../DesktopMobileHandler/isMobileDetection.hooks.jsx";
import Projects from "../../../data/featuredProjectData.js";

export default function FP2() {
  const isMobile = useDeviceDetection();
  const SmartyPill = Projects[1];

  if (window.innerWidth / window.innerHeight <= 0.6 || isMobile) {
    return (
      <div className="parent">
        <div className="column-1">
          <div className="heading-container">
            <h1 id="fp2-header">{SmartyPill.title}</h1>
            <p id="fp2-teams">{SmartyPill.type}</p>
          </div>
          <div className="client">
            <p className="client-text">Client</p>
            <div className="name-order">
              <p style={{ fontSize: "3vh" }} className="name-text">
                {SmartyPill.clientName}
              </p>
              <p style={{ fontSize: "2vh" }} className="school">
                {SmartyPill.clientSchool}
              </p>
            </div>
          </div>
          <div className="client-blurb" id="fp2-client-blurb">
            <p style={{ width: "40vh" }}>{SmartyPill.description}</p>
            <a href="url">learn more</a>
          </div>
          <div className="bottom-corner">
            <img style={{ height: "25vh" }} src={BottomCorner} alt="" />
          </div>
        </div>
        <div className="column-2">
          <div className="product-img-container">
            <img className="mockup-img" src={SmartyPill.image} alt="" />
          </div>
        </div>
        <div className="column-3">
          <div className="top-corner">
            <img
              style={{ height: "25vh" }}
              src={TopCorner}
              alt="Smarty_Pill"
              width="45%"
            />
          </div>
          <div className="quote-container">
            <blockquote>{SmartyPill.clientQuote}</blockquote>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="column-1">
          <div className="column-1-text">
            <div>
              <h1 style={{ fontSize: "9vh" }}>{SmartyPill.name}</h1>
              <p style={{ fontFamily: "Space Mono", fontSize: "3vh" }}>
                {SmartyPill.type}
              </p>
            </div>
            <div className="client">
              <p className="client-text">Client</p>
              <div className="name-order">
                <p style={{ fontSize: "3vh" }} className="name-text">
                  {SmartyPill.clientName}
                </p>
                <p style={{ fontSize: "2vh" }} className="school">
                  {SmartyPill.clientSchool}
                </p>
              </div>
            </div>
            <div>
              <p style={{ width: "40vh" }} className="client-blurb">
                {SmartyPill.description}
              </p>
              <a href="url">learn more</a>
            </div>
          </div>
          <div className="bottom-corner">
            <img className="bottom-corner-img" src={BottomCorner} alt="" />
          </div>
        </div>
        <div className="column-2">
          <div className="product-img-container">
            <img className="mockup-img" src={SmartyPill.image} alt="" />
          </div>
        </div>
        <div className="column-3">
          <div className="top-corner">
            <img
              className="top-corner-img"
              src={TopCorner}
              alt="Smarty_Pill"
              width="45%"
            />
          </div>
          <blockquote className="block_quote">
            <div className="quote-container">{SmartyPill.clientQuote}</div>
          </blockquote>
        </div>
      </>
    );
  }
}

// https://codesandbox.io/s/ryidb?file=/src/SlideShow.js for making the images a slideshow
