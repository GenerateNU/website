import React from "react";
import "./style.css";
import BottomCorner from "../../../assets/images/landingpage-v2/bottom_corner.png";
import SmartyPillMockup from "../../../assets/images/landingpage-v2/SmartyPill Mock Up.png";
import TopCorner from "../../../assets/images/landingpage-v2/top_corner.png";

export default function FP2() {
  if (window.innerWidth/window.innerHeight <= 0.6) {
    return (
      <div className="parent">
        <div className="column-1">
          <div className="heading-container">
            <h1 id="fp2-header">SmartyPill</h1>
            <p id="fp2-teams">
              software + hardware
            </p>
          </div>
          <div className="client">
            <p className="client-text">Client</p>
            <div className="name-order">
              <p style={{fontSize: "3vh"}} className="name-text">Matthew Swenson</p>
              <p style={{fontSize: "2vh"}} className="school">Northeastern Alumnus ‘20</p>
            </div>
          </div>
          <div className="client-blurb" id="fp2-client-blurb">
            <p style={{width: "40vh"}}>
              SmartyPill is an automatic pill and water dispenser that ensures
              you’re taking the right pills at the right time. With customizable
              alerts and a connected app, SmartyPill is the perfect in-home
              companion for any medication adherent lifestyle.
            </p>
            <a href="url">learn more</a>
          </div>
          <div className="bottom-corner">
            <img style={{height: "25vh"}} src={BottomCorner} alt="" />
          </div>
        </div>
        <div className="column-2">
          <div className="product-img-container">
            <img className="mockup-img" src={SmartyPillMockup} alt="" />
          </div>
        </div>
        <div className="column-3">
          <div className="top-corner">
            <img style={{height: "25vh"}} src={TopCorner} alt="Smarty_Pill"  width="45%"/>
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
  } else {
    return (
      <>
        <div className="column-1">
          <div className="column-1-text">
            <div>
              <h1 style={{ fontSize: "9vh" }}>SmartyPill</h1>
              <p style={{ fontFamily: "Space Mono", fontSize: "3vh" }}>
                software + hardware
              </p>
            </div>
            <div className="client">
              <p className="client-text">Client</p>
              <div className="name-order">
                <p style={{ fontSize: "3vh" }} className="name-text">Matthew Swenson</p>
                <p style={{ fontSize: "2vh" }} className="school">Northeastern Alumnus ‘20</p>
              </div>
            </div>
            <div>
              <p style={{ width: "40vh" }} className="client-blurb">
                SmartyPill is an automatic pill and water dispenser that ensures
                you’re taking the right pills at the right time. With customizable
                alerts and a connected app, SmartyPill is the perfect in-home
                companion for any medication adherent lifestyle.
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
            <img className="mockup-img" src={SmartyPillMockup} alt="" />
          </div>
        </div>
        <div className="column-3">
          <div className="top-corner">
            <img className="top-corner-img" src={TopCorner} alt="Smarty_Pill" width="45%" />
          </div>
          <blockquote className="block_quote">
            <div className="quote-container">
              The biggest benefit that Generate provided for me was just the
              amount of work that was put into SmartyPill, and the knowledge
              gained from prototyping and writing software for it.
            </div>
          </blockquote>
        </div>
      </ >
    );
  }
}

// https://codesandbox.io/s/ryidb?file=/src/SlideShow.js for making the images a slideshow
