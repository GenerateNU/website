import React from "react";
import "./style.css";
import BottomCorner from "../../../assets/images/landingpage-v2/bottom_corner.png";
import SmartyPillMockup from "../../../assets/images/landingpage-v2/SmartyPill Mock Up.png";
import TopCorner from "../../../assets/images/landingpage-v2/top_corner.png";

export default function FP2() {
  return (
    <div className="parent">
      <div className="column-1">
        <div className="heading-container">
          <h1>SmartyPill</h1>
          <p style={{ fontFamily: "Space Mono", fontSize: "1.5em" }}>
            software + hardware
          </p>
        </div>
        <div className="client">
          <p className="client-text">Client</p>
          <div className="name-order">
            <p className="name-text">Matthew Swenson</p>
            <p className="school">Northeastern Alumnus ‘20</p>
          </div>
        </div>
        <div className="client-blurb">
          <p>
            SmartyPill is an automatic pill and water dispenser that ensures
            you’re taking the right pills at the right time. With customizable
            alerts and a connected app, SmartyPill is the perfect in-home
            companion for any medication adherent lifestyle.
          </p>
          <a href="url">learn more</a>
        </div>
        <div className="bottom-corner">
          <img src={BottomCorner} alt="" />
        </div>
      </div>
      <div className="column-2">
        <div className="product-img-container">
          <img className="mockup-img" src={SmartyPillMockup} alt="" />
        </div>
      </div>
      <div className="column-3">
        <div className="top-corner">
          <img src={TopCorner} alt="" />
        </div>
        <div className="quote-container">
          <blockquote>
            The biggest benefit that Generate provided for me was just the
            amount of work that was put into SmartyPill, and the knowledge
            gained from prototyping and writing software for it.
          </blockquote>
        </div>
      </div>
    </div>
  );
}

// https://codesandbox.io/s/ryidb?file=/src/SlideShow.js for making the images a slideshow