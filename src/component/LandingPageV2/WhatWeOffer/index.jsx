import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";
import SwipeableCarousel from "../../SwipeableCarousel/SwipeableCarousel";

const WhatWeOffer = () => {
  const [showSoftwareInfo, setShowSoftwareInfo] = useState(false);
  const [showHardwareInfo, setShowHardwareInfo] = useState(false);

  const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;

  function content(heading, info) {
    this.heading = heading;
    this.info = info;
  }
  const hardwareRawContent = [
    new content("Modeling", "Detailed CAD models using industry leading tools"),
    new content(
      "Handoff",
      "Comprehensive technical documentation on the process and final product"
    ),
    new content(
      "Prototypes",
      "Functional prototypes consisting of custom parts integrated with off-the-shelf components"
    ),
    new content("Design", "Detailed product drawings and renderings"),
    new content(
      "Analysis",
      "FEA simulations and calculations to validate designs"
    ),
    new content(
      "Testing",
      "Multiple rounds of functional testing and user testing for design feedback"
    ),
  ];

  const softwareRawContent = [
    new content(
      "Web",
      "Website based platforms using HTML, CSS and tools such as React and Heroku"
    ),
    new content(
      "Handoff",
      "Comprehensive technical documentation for seamless handoff and future success"
    ),
    new content(
      "Mobile",
      "Mobile application design and implementation for both iOS and Android"
    ),
    new content(
      "Branding",
      "Brand development and user stories culminating in a brand book with complete guidelines"
    ),
    new content(
      "Backend",
      "Systems that combine datastore persistence to power platform-specific tasks"
    ),
    new content(
      "UI/UX Design",
      "High-fidelity Figma prototypes for apps, websites and other mediums"
    ),
  ];

  function PBlockify({ info, pclsname = "", headingclsname = "info-heading" }) {
    return (
      <p className={pclsname}>
        <strong className={headingclsname}>{info.heading}</strong>
        <br />
        {info.info}
      </p>
    );
  }

  function Inform({ infos, bgcolor, txtcolor }) {
    const firstRow = infos.slice(0, 3);
    const secondRow = infos.slice(3, 6);
    return (
      <div className={`vh-60 bg-${bgcolor}`}>
        <Row className="h-50 p-6 pt-0">
          {firstRow.map((info, i) => (
            <Col key={i} xs={4} className="p-6 pt-0">
              <PBlockify info={info} pclsname={`p-5 info-text text-${txtcolor}`} />
            </Col>
          ))}
        </Row>
        <Row className="h-50 p-6 pt-0">
          {secondRow.map((info, i) => (
            <Col key={i} xs={4} className="p-6 pt-0">
              <PBlockify info={info} pclsname={`p-5 info-text text-${txtcolor}`} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  const softwareInfo = (
    <Inform infos={softwareRawContent} bgcolor={"white"} txtcolor={"black"} />
  );
  const hardwareInfo = (
    <Inform infos={hardwareRawContent} bgcolor={"black"} txtcolor={"white"} />
  );

  return (
    <div className="position-relative vh-100 vw-100 overflow-hidden nospacing">
      <div className="bg-white vh-50 vw-100" />
      <div className="bg-black vh-50 vw-100" />

      <div className="position-absolute start-0 top-0 h-100 w-100">
        <div className="vh-20 text-uppercase text-center">
          <div
            className="w-100 text-uppercase software-hardware-style software-color py-3"
            onClick={() => {
              setShowSoftwareInfo(!showSoftwareInfo);
              setShowHardwareInfo(false);
            }}
          >
            Software
          </div>
        </div>

        {!showSoftwareInfo && !showHardwareInfo && (
          <div className="text-center">
            <div className="position-relative vh-30">
              <div className="position-absolute bottom-0 p-1 text-black w-100 text-uppercase what-we-offer-style">
                What We
              </div>
            </div>
            <div className="vh-30 text-white text-uppercase what-we-offer-style">
              Offer
            </div>
          </div>
        )}
        {showSoftwareInfo &&
          (isBigScreen ? (
            softwareInfo
          ) : (
            <div className="vh-60 bg-white position-relative">
              <SwipeableCarousel
                children={softwareRawContent.map((content, i) => (
                  <PBlockify
                    info={content}
                    pclsname="text-black info-text-mobile"
                    headingclsname="info-heading-mobile"
                    key={i}
                  />
                ))}
                perPage={2}
                currentButtonColor={"rgb(0, 0, 0)"}
              />
            </div>
          ))}
        {showHardwareInfo &&
          (isBigScreen ? (
            hardwareInfo
          ) : (
            <div className="vh-60 bg-black position-relative">
              <SwipeableCarousel
                children={hardwareRawContent.map((content, i) => (
                  <PBlockify
                    info={content}
                    pclsname="text-white info-text-mobile"
                    headingclsname="info-heading-mobile"
                    key={i}
                  />
                ))}
                perPage={2}
                currentButtonColor={"rgba(255, 255, 255, 1)"}
              />
            </div>
          ))}

        <div className="position-relative vh-20 text-center">
          <div
            className="bg-black position-absolute bottom-0 w-100 text-uppercase software-hardware-style hardware-color py-3"
            onClick={() => {
              setShowHardwareInfo(!showHardwareInfo);
              setShowSoftwareInfo(false);
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
