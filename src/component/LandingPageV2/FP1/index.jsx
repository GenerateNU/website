import React from "react";
import "./style.css";
import BottomCorner from "../../../assets/images/landingpage-v2/bottom_corner.png";
import EarnzMockUp from "../../../assets/images/landingpage-v2/Earnz_Mock_Up.png";
import TopCorner from "../../../assets/images/landingpage-v2/top_corner.png";

export default function FP1() {
  return (
    <div className="parent">
      <div className="column-1">
        <div className="heading-container">
          <h1>Earnz</h1>
          <p style={{ fontFamily: "Space Mono", fontSize: "1.5em" }}>
            software
          </p>
        </div>
        <div className="client">
          <p
            style={{
              fontFamily: "Outfit 500",
              fontSize: "1.5em",
            }}
          >
            Client
          </p>
          <p>Max Thalheimer</p>
          <p>Northeastern Alumnus ‘20</p>
        </div>
        <div className="client-blurb">
          <p>
            A unique, two-sided promotional and loyalty platform built to level
            the playing field for independent bars and restaurants by allowing
            them to utilize an app to acquire and retain customers as easily and
            cost effectively as currently only chains can.
          </p>
          <a href="url">learn more</a>
        </div>
        <div className="bottom-corner">
          <img src={BottomCorner} alt="" />
        </div>
      </div>
      <div className="column-2">
        <img src={EarnzMockUp} alt="" />
      </div>
      <div className="column-3">
        <div className="top-corner">
          <img src={TopCorner} alt="" />
        </div>
        <div className="quote-container">
          <p>
            Generate was great as a learning experience for me, as someone who
            hadn’t built a tech company before. The team of experienced Generate
            engineers knew what it takes to build a product like earnz, how to
            package it all together, and ultimately how to come together as a
            team.
          </p>
        </div>
      </div>
    </div>
  );
}
