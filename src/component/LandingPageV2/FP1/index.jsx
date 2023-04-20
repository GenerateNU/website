import React from "react";
import "./style.css";
import BottomCorner from "../../../assets/images/landingpage-v2/bottom_corner.png";
import TopCorner from "../../../assets/images/landingpage-v2/top_corner.png";
import useDeviceDetection from "../../DesktopMobileHandler/isMobileDetection.hooks.jsx";
import Projects from "../../../data/featuredProjectData.js";

export default function FP1() {
  const isMobile = useDeviceDetection();
  const Earnz = Projects[0];

  if (window.innerWidth / window.innerHeight <= 0.6 || isMobile) {
    return (
      <div className="parent">
        <div className="column-1">
          <div>
            <h1 style={{ fontSize: "7vh" }} className="earnz-header">
              {Earnz.title}
            </h1>
            <p style={{ fontFamily: "Space Mono", fontSize: "3vh" }}>
              {Earnz.type}
            </p>
          </div>
          <div className="client">
            <p style={{ fontSize: "3vh" }} className="client-text">
              Client
            </p>
            <div className="name-order">
              <p style={{ fontSize: "3vh" }} className="name-text">
                {Earnz.clientName}
              </p>
              <p style={{ fontSize: "2vh" }} className="school">
                {Earnz.clientSchool}
              </p>
            </div>
          </div>
          <div className="client-blurb" id="fp1-client-blurb">
            <p style={{ width: "45vh" }}>{Earnz.description}</p>
            <a href="url">learn more</a>
          </div>
          <div className="bottom-corner">
            <img style={{ height: "25vh" }} src={BottomCorner} alt="" />
          </div>
        </div>
        <div className="column-2">
          <div className="product-img-container" id="fp1-img-container">
            <img className="product-img" src={Earnz.image} alt="" />
          </div>
        </div>
        <div className="column-3" id="fp1-c3">
          <div className="top-corner">
            <img
              style={{ width: "60vh", height: "25vh" }}
              src={TopCorner}
              alt=""
            />
          </div>
          <div className="quote-container" id="fp1-quote-container">
            <blockquote>{Earnz.clientQuote}</blockquote>
          </div>
          <hr id="pageSeparator"></hr>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="column-1">
          <div className="column-1-text">
            <div>
              <h1 style={{ fontSize: "9vh" }}>{Earnz.name}</h1>
              <p style={{ fontFamily: "Space Mono", fontSize: "3vh" }}>
                {Earnz.type}
              </p>
            </div>
            <div className="client">
              <p style={{ fontSize: "3vh" }} className="client-text">
                Client
              </p>
              <div className="name-order">
                <p style={{ fontSize: "3vh" }} className="name-text">
                  {Earnz.clientName}
                </p>
                <p style={{ fontSize: "2vh" }} className="school">
                  {Earnz.clientSchool}
                </p>
              </div>
            </div>
            <div>
              <p style={{ width: "43vh" }} className="client-blurb">
                {Earnz.description}
              </p>
              <a href="url">learn more</a>
            </div>
          </div>
          <div className="bottom-corner">
            <img className="bottom-corner-img" src={BottomCorner} alt="" />
          </div>
        </div>
        <div className="column-2">
          <div className="product-img-container" id="fp1-img-container">
            <img className="product-img" src={Earnz.image} alt="" />
          </div>
        </div>
        <div className="column-3" id="fp1-c3">
          <div className="top-corner">
            <img className="top-corner-img" src={TopCorner} alt="" />
          </div>
          <blockquote className="block_quote">
            <div className="quote-container">{Earnz.clientQuote}</div>
          </blockquote>
        </div>
      </>
    );
  }
}

// https://codesandbox.io/s/ryidb?file=/src/SlideShow.js for making the images a slideshow
