import React from "react";
import "./style.css";
import BottomCorner from "../../../assets/images/landingpage-v2/bottom_corner.png";
import EarnzMockUp from "../../../assets/images/landingpage-v2/Earnz_Mock_Up.png";
import TopCorner from "../../../assets/images/landingpage-v2/top_corner.png";

export default function FP1() {
  return (
    <>
      <div className="column-1">
        <div className="column-1-text">
          <div>
            <h1 style={{ fontSize: "9vh" }}>Earnz</h1>
            <p style={{ fontFamily: "Space Mono", fontSize: "3vh" }}>
              software
            </p>
          </div>
          <div className="client">
            <p style={{ fontSize: "3vh" }} className="client-text">Client</p>
            <div className="name-order">
              <p style={{ fontSize: "3vh" }} className="name-text">Max Thalheimer</p>
              <p style={{ fontSize: "2vh" }} className="school">Northeastern Alumnus ‘20</p>
            </div>
          </div>
          <div>
            <p style={{ width: "40vh" }} className="client-blurb">
              A unique, two-sided promotional and loyalty platform built to level
              the playing field for independent bars and restaurants by allowing
              them to utilize an app to acquire and retain customers as easily and
              cost effectively as currently only chains can.
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
          <img className="product-img" src={EarnzMockUp} alt="" />
        </div>
      </div>
      <div className="column-3" id="fp1-c3">
        <div className="top-corner">
          <img className="top-corner-img" src={TopCorner} alt="" />
        </div>
        <blockquote>
          <div className="quote-container">
            Generate was great as a learning experience for me, as someone who
            hadn't built a tech company before. The team of experienced Generate
            engineers knew what it takes to build a product like earnz, how to
            package it all together, and ultimately how to come together as a
            team.
          </div>
        </blockquote>
        <hr id="pageSeparator">
        </hr>
      </div>
    </ >
  );
}

// https://codesandbox.io/s/ryidb?file=/src/SlideShow.js for making the images a slideshow
