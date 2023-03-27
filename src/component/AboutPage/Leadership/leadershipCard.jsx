import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import ShadowedButton from "../../ShadowedButton";
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
  } = {},
}) {
  const [flipped, setFlipped] = useState(false);
  const boldHeaderStyle = {
    fontFamily: "Space Mono 700",
  };

  const detailsRowJustify = title ? "between" : "end";

  return (
    <ReactCardFlip
      isFlipped={flipped}
      flipDirection="vertical"
      className="dsktop"
    >
      <div
        className="card card-back rounded-0"
        style={{ backgroundColor: color }}
      >
        <Row className="py-4 ps-5 pe-2 h-100 w-100">
          <Col xs={2} className="p-0 position-relative">
            <h1
              className="m-0 gen-card-header position-absolute top-0 end-50"
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
                  className="no-right-margin"
                />
              </div>
            </Row>
          </Col>
        </Row>
      </div>
      <div
        className="card card-front rounded-0"
        style={{ backgroundColor: color }}
      >
        <Row className="py-4 ps-5 pe-2 h-100 w-100">
          <Col xs={2} className="p-0 position-relative">
            <h1
              className="m-0 gen-card-header position-absolute top-0 end-50"
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
      </div>
    </ReactCardFlip>
  );
}
