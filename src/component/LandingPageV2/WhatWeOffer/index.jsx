import React, { useState } from "react";
import "./style.css";
import DotView from "./dotView";

const WhatWeOffer = () => {
  let showSoftware = false;
  let showHardware = false;
  const [showSoftwareInfo, setShowSoftwareInfo] = useState(showSoftware);
  const [showHardwareInfo, setShowHardwareInfo] = useState(showHardware);
  //const [showHighlightSoftware, setHighlightSoftware] = useState(false);
  //const [showHighlightHardware, setHighlightHardware] = useState(false);

  function content(heading, info) {
    this.heading = heading;
    this.info = info;
  }
  const hardwareInfo = [
    new content("Modeling", "Detailed CAD models using industry leading tools"),
    new content(
      "Prototypes",
      "Functional prototypes consisting of custom parts integrated with off-the-shelf components"
    ),
    new content(
      "Analysis",
      "FEA simulations and calculations to validate designs"
    ),
    new content(
      "Handoff",
      "Comprehensive technical documentation on the process and final product"
    ),
    new content("Design", "Detailed product drawings and renderings"),
    new content(
      "Testing",
      "Multiple rounds of functional testing and user testing for design feedback"
    ),
  ];

  const softwareInfo = [
    new content(
      "Web",
      "Website based platforms using HTML, CSS and tools such as React and Heroku"
    ),
    new content(
      "Mobile",
      "Mobile application design and implementation for both iOS and Android"
    ),
    new content(
      "Backend",
      "Systems that combine datastore persistence to power platform-specific tasks"
    ),
    new content(
      "Handoff",
      "Comprehensive technical documentation for seamless handoff and future success"
    ),
    new content(
      "Branding",
      "Brand development and user stories culminating in a brand book with complete guidelines"
    ),
    new content(
      "UI/UX Design",
      "High-fidelity Figma prototypes for apps, websites and other mediums"
    ),
  ];

  const getOppositeColor = (color) => (color === "white" ? "black" : color);

  function rgba(r, g, b, a) {
    return `rgba(${r},${g},${b},${a})`;
  }

  function colorProfile(mainColor, idleButtonColor) {
    this.mainColor = mainColor;
    this.oppositeColor = getOppositeColor(mainColor);
    this.idleButtonColor = idleButtonColor;
  }
  const Inform = ({ info, colorProfile }) => {
    return (
      <div
        className={`vh-60 bg-${colorProfile.mainColor} text-${colorProfile.oppositeColor}`}
      >
        <DotView
          children={info.map((item, index) => {
            return (
              <p
                className={`p-5 text-${colorProfile.oppositeColor}`}
                key={index}
              >
                <strong className="info-heading">{item.heading}</strong>
                <br />
                {item.info}
              </p>
            );
          })}
          numElementsPerPane={2}
          currentButtonColor={colorProfile.oppositeColor}
          idleButtonColor={colorProfile.idleButtonColor}
        />{" "}
      </div>
    );
  };

  return (
    <div className="position-relative">
      {/* Background */}
      <div className="bg-white vh-50 vw-100" />
      <div className="bg-black vh-50 vw-100" />

      {/* Foreground */}
      <div className="position-absolute start-0 top-0 h-100 w-100">
        <div className="vh-20 text-uppercase text-center">
          <div
            className="w-100 text-uppercase software-hardware-style software-color py-3"
            onClick={() => {
            if (showHardware) {
              showHardware = !showHardware;
              setShowHardwareInfo(!showHardwareInfo);
            }
            showSoftware = !showSoftware;
            setShowSoftwareInfo(!showSoftwareInfo);
            }}
          >
            Software
          </div>
        </div>

        {!showSoftware && !showHardware && (
          <div className="text-center">
            <div className="position-relative vh-30">
              <div
                className="position-absolute bottom-0 text-black w-100 text-uppercase what-we-offer-style"
                // onMouseEnter={() => setHighlightSoftware(true)}
                // onMouseLeave={() => setHighlightSoftware(false)}
              >
                What We
              </div>
            </div>
            <div
              className="vh-30 text-white text-uppercase what-we-offer-style"
              // onMouseEnter={() => setHighlightHardware(true)}
              // onMouseLeave={() => setHighlightHardware(false)}
            >
              Offer
            </div>
          </div>
        )}
        {showSoftwareInfo ? (
          <Inform info={softwareInfo} colorProfile={new colorProfile("white", new rgba(0,0,0,0.2))}/>
        ) : showHardwareInfo ? (
          <Inform info={hardwareInfo} colorProfile={new colorProfile("black", new rgba(255,255,255,0.2))} />
        ) : (
          <></>
        )}
        <div className="position-relative vh-20 text-center">
          <div
            className="bg-black position-absolute bottom-0 w-100 text-uppercase software-hardware-style hardware-color py-3"
            onClick={()=>{
              if (showSoftware) {
                showSoftware = !showSoftware;
                setShowSoftwareInfo(!showSoftwareInfo);
              }
              showHardware = !showHardware;
              setShowHardwareInfo(!showHardwareInfo);
              }}
          >
            Hardware
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
