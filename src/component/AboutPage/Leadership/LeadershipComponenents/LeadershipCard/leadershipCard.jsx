import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import ShadowedButton from "../../../../ShadowedButton";
import "./style.css";

export default function LeadershipCard({
  director: {
    title = "",
    team = "",
    color = "",
    activeIcon = null,
    inactiveIcon = null,
    name = "",
    image = null,
    bio = "",
    emailUsername = "",
    zIndex=0,
  } = {},
}) {
  const [flipped, setFlipped] = useState(false);
  const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;

  const yPad = isBigScreen ? ".5vh" : ".5vw";
  const xPad = isBigScreen ? "1.5vh" : "1.5vw";
  const buttonFontSize = isBigScreen ? "2.66vh" : "4vw";
  const cardZIndex = isBigScreen ? zIndex : "0";

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="vertical" cardZIndex={cardZIndex}>
      {/* Front of the card */}
      <div className="card card-back rounded-0" style={{ backgroundColor: color }}>
        <div className="card-team">{team}</div>
          <img className="card-image" src={image} alt="Dave was here"></img>
        <div className="card-person-role">
          <div className="card-person">
            {name}
          </div>
          <div className="card-role">
            {title}
          </div>
        </div>
        <div className="card-button">
            <ShadowedButton
              fillColor="white"
              yPad={yPad}
              xPad={xPad}
              fontSize={buttonFontSize}
              text="bio"
              onClick={() => setFlipped((prev) => !prev)}
            />
          </div>
      </div>
      {/* Back of the card */}
      <div className="card card-front rounded-0" style={{ backgroundColor: color }}>
        <div className="card-team">{team}</div>
        <div className="card-description">
          {bio}
        </div>
        <div className="card-button">
            <ShadowedButton
              fillColor="white"
              yPad={yPad}
              xPad={xPad}
              fontSize={buttonFontSize}
              text="back"
              onClick={() => setFlipped((prev) => !prev)}
            />
          </div>
      </div>
      {/* <div
        className="card card-back rounded-0"
        style={{ backgroundColor: color }}
      >
        <Row className="py-4 ps-5 pe-2 h-100 w-100">
          <Col
            xs={2}
            className="p-0 position-relative mx-auto text-center"
            style={{ width: !isBigScreen ? "max(4vw,4vh)" : "" }}
          >
            <h1
              className={`m-0 gen-card-header position-absolute top-0 ${
                isBigScreen ? "end-50" : ""
              }`}
              style={boldHeaderStyle}
            >
              {team}
            </h1>
          </Col>
          <Col xs={10} className="p-0 h-100">
            <Row className="m-0 gen-card-body">
              <Image src={image} className="fit-image p-0" />
            </Row>
            <Row
              className={`m-0 h-15 w-100 pt-2 flex-nowrap justify-content-${detailsRowJustify}`}
            >
              {title && (
                <div className="p-0 position-details w-auto h-100">
                  <strong>{name}</strong>
                  <br />
                  {title}
                </div>
              )}
              <div className="p-0 w-auto h-100">
                <ShadowedButton
                  fillColor="white"
                  yPad="0rem"
                  xPad=".5rem"
                  fontSize="1.2vw"
                  text="read bio"
                  onClick={() => setFlipped((prev) => !prev)}
                  className="no-right-margin dsktop"
                />
              </div>
              <div className="p-0 w-auto h-100 d-flex">
                <ShadowedButton
                  fillColor="white"
                  yPad="0rem"
                  xPad="4rem"
                  fontSize="3vw"
                  text="bio"
                  onClick={() => setFlipped((prev) => !prev)}
                  className="mob s-butt-mob no-right-margin"
                />
              </div>
            </Row>
          </Col>
        </Row>
      </div> */}
      {/* <div
        className="card card-front rounded-0"
        style={{ backgroundColor: color }}
      >
        <Row className="py-4 ps-5 pe-2 h-100 w-100">
          <Col xs={2} className="p-0 position-relative">
            <h1
              className="m-0 gen-card-header position-absolute top-0"
              style={boldHeaderStyle}
            >
              {team}
            </h1>
          </Col>
          <Col xs={10} className="p-0 h-100">
            <Row className="m-0 gen-card-body">{bio}</Row>
            <Row
              className={`m-0 h-15 w-100 pt-2 flex-nowrap justify-content-${detailsRowJustify}`}
            >
              <div className="p-0 w-auto h-100">
                <ShadowedButton
                  fillColor="white"
                  yPad="0rem"
                  xPad=".5rem"
                  fontSize="1.2vw"
                  text="back"
                  onClick={() => setFlipped((prev) => !prev)}
                  className="no-right-margin"
                />
              </div>
            </Row>
          </Col>
        </Row>
      </div> */}
    </ReactCardFlip>
  );
}
