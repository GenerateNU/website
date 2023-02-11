import React, { useState } from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";

const WhatWeOffer = () => {
  const [showSoftwareInfo, setShowSoftwareInfo] = useState(false);
  const [showHardwareInfo, setShowHardwareInfo] = useState(false);
  //const [showHighlightSoftware, setHighlightSoftware] = useState(false);
  //const [showHighlightHardware, setHighlightHardware] = useState(false);

  return (
    <div className="position-relative vh-100 vw-100 overflow-hidden nospacing">
      {/* Background */}
      <div className="bg-white vh-50 vw-100" />
      <div className="bg-black vh-50 vw-100" />

      {/* Foreground */}
      <div className="position-absolute start-0 top-0 h-100 w-100">
        <div className="vh-20 text-uppercase text-center">
          <div
            className="w-100 text-uppercase software-hardware-style software-color py-3"
            onClick={() => {setShowSoftwareInfo(!showSoftwareInfo)
                            setShowHardwareInfo(false)}} 
            /*onMouseEnter={() => setShowSoftwareInfo(true)}
            onMouseLeave={() => setShowSoftwareInfo(false)}*/
          >
            Software
          </div>
        </div>

        {!showSoftwareInfo && !showHardwareInfo && (
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
        {showSoftwareInfo && (
          <div className="vh-60 bg-white">
            <Row className="h-50 p-5">
              <Col xs={4} className="p-6">
                <p className="p-5">
                  <strong className="info-heading">Web</strong>
                  <br />
                  Website based platforms using HTML, CSS and tools 
                  such as React and Heroku
                </p>
              </Col>
              <Col xs={4} className="p-6">
                <p className="p-5">
                  <strong className="info-heading">Mobile</strong>
                  <br />
                  Mobile application design and implementation for both iOS and
                  Android.
                </p>
              </Col>
              <Col xs={4} className="p-6">
                <p className="p-5">
                  <strong className="info-heading">Backend</strong>
                  <br />
                  Systems that combine datastore persistence to power platform-specific tasks
                </p>
              </Col>
            </Row>
            <Row className="h-50 p-6 pt-0">
              <Col xs={4} className="p-5 pt-0">
                <p className="p-5">
                  <strong className="info-heading">Backend</strong>
                  <br />
                  Comprehensive technical documentation for seamless handoff and
                  future success.
                </p>
              </Col>
              <Col xs={4} className="p-6 pt-0">
                <p className="p-5">
                  <strong className="info-heading">Branding</strong>
                  <br />
                  Brand development and user stories culminating in a brand book
                  with complete guidelines.
                </p>
              </Col>
              <Col xs={4} className="p-6 pt-0">
                <p className="p-5">
                  <strong className="info-heading">UI/UX Design</strong>
                  <br />
                  High-fidelity Figma prototypes for apps, websites and other
                  mediums.
                </p>
              </Col>
            </Row>
          </div>
        )}
        {showHardwareInfo && (
          <div className="vh-60 bg-black text-white">
            <Row className="h-50 p-5">
              <Col xs={4} className="p-6">
                <p className="p-5 text-white">
                  <strong className="info-heading">Modeling</strong>
                  <br />
                  Detailed CAD models using industry leading tools
                </p>
              </Col>
              <Col xs={4} className="p-6">
                <p className="p-5 text-white">
                  <strong className="info-heading">Prototypes</strong>
                  <br />
                  Functional prototypes consisting of custom parts 
                  integrated with off-the-shelf components
                </p>
              </Col>
              <Col xs={4} className="p-6">
                <p className="p-5 text-white">
                  <strong className="info-heading">Analysis</strong>
                  <br />
                  FEA simulations and calculations to validate designs.
                </p>
              </Col>
            </Row>
            <Row className="h-50 p-6 pt-0">
              <Col xs={4} className="p-5 pt-0">
                <p className="p-5 text-white">
                  <strong className="info-heading">Handoff</strong>
                  <br />
                  Comprehensive technical documentation 
                  on the process and final product.
                </p>
              </Col>
              <Col xs={4} className="p-6 pt-0">
                <p className="p-5 text-white">
                  <strong className="info-heading">Design</strong>
                  <br />
                  Detailed product drawings and renderings.
                </p>
              </Col>
              <Col xs={4} className="p-6 pt-0">
                <p className="p-5 text-white">
                  <strong className="info-heading">Testing</strong>
                  <br />
                  Multiple rounds of functional testing and user testing for design feedback.
                </p>
              </Col>
            </Row>
          </div>
        )}
        {/* {showHighlightSoftware && (
          <div className="vh-20 text-uppercase text-center">
            <div className="position-relative w-100 h-25 text-uppercase software-hardware-style-new-new software-color py-3">
              Software x
            </div>
          </div>
        )}
        {showHighlightHardware && (
          <div className="vh-20 text-center">
            <div className="position-absolute bottom-0 w-100 text-uppercase software-hardware-style-new hardware-color py-3">
              Hardware
            </div>
          </div>
        )} */}

        <div className="position-relative vh-20 text-center">
          <div
            className="bg-black position-absolute bottom-0 w-100 text-uppercase software-hardware-style hardware-color py-3"
            onClick={() => {setShowHardwareInfo(!showHardwareInfo)
                            setShowSoftwareInfo(false)}}      
            /*onMouseEnter={() => setShowHardwareInfo(true)}
            onMouseLeave={() => setShowHardwareInfo(false)}*/
          >
            Hardware
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
