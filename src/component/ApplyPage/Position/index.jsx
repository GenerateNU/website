import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import ShadowedButton from "../../ShadowedButton";
import { findPosition } from "../../../services/positionService";
import "./style.css";
import { ToastHeader } from "react-bootstrap";
import { constants } from "../../../services/constants.js";


export default function Position() {
  const { id } = useParams();
  const [position, setPosition] = useState([]);
  const [showText, setShowText] = useState("Share");
  const [lnk, setLnk] = useState('');

  useEffect(() => {
    const getPositions = async () => {
      console.log('jefkcsfbjjh')
      console.log(id);
      const data = await findPosition(id);
      console.log(data.attributes);
      setPosition(data.attributes);
    };
    getPositions();
  }, [id]);

  const parseList = (stringList) => {
    if (stringList) {
      return stringList.split(".");
    } else {
      return [];
    }
  };

  const copyShareLink = () => {
    console.log(window.location.href);
    navigator.clipboard.writeText(window.location.href);
    setShowText("Copied!");
  };

  const handleApply = () =>  {
    console.log('in apply')
    const name = position.positionTitle;
    const key = name.replaceAll(" ", "_");
    const POSITIONS_URL = 'Position_' + key;
    console.log('POSITIONS_URL', POSITIONS_URL)
    console.log('POSITIONS_URL', constants[POSITIONS_URL])
    window.location.assign(constants[POSITIONS_URL]);
  }

  if (position) {
    return (
      <Container fluid className="position-relative p-0">
        <Row className="vh-100 m-0">
          {/* Left */}
          <Col xs={6} className="left-color h-100 p-0 pt-5 px-5">
            <Row className="m-0 h-75">
              <Col>
                <h1 className="position-title">{position.positionTitle}</h1>
                <h1 className="position-title position-type">
                  {position.categoryType}
                </h1>
              </Col>
            </Row>
            <Row className="m-0 h-25 align-items-center justify-content-center">
              <Row className="m-0">
                {(position.active && (
                  <ShadowedButton
                    fillColor="#FFBF3C"
                    text="apply now"
                    xPad="4rem"
                    className="me-5"
                    lnk={position.positionTitle}
                    onClick={handleApply}
                  />
                )) ||
                  (!position.active && (
                    <ShadowedButton
                      fillColor="white"
                      text="notify me"
                      xPad="4rem"
                      className="me-5"
                    />
                  ))}

                <ShadowedButton
                  fillColor="white"
                  text={showText}
                  xPad="1.5rem"
                  className="ms-5"
                  onClick={copyShareLink}
                />
              </Row>
            </Row>
          </Col>

          {/* Right */}
          <Col
            xs={6}
            className="h-100 p-0 py-5 px-5 overflow-auto position-info"
          >
            {/* Link back to list of positions */}
            <a className="blue-text" href="/apply">
              &lt; -- <u> positions</u>
            </a>

            {/* Position summary */}
            <p className="position-summary my-5">{position.description}</p>

            {/* Position responsibilities */}
            {position.responsibilities && (
              <h3 className="py-3 fw-500">What you’ll do</h3>
            )}
            <ul className="pb-0 mb-0">
              {parseList(position.responsibilities).map((info, index) => (
                <li key={index} className="mb-4">
                  {info}
                </li>
              ))}
            </ul>

            {/* Position qualifications */}
            {position.requirements && (
              <h3 className="pt-5 pb-3">Who you are</h3>
            )}
            <ul>
              {parseList(position.requirements).map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>

            {/* Position timeline */}
            <Row className="py-4">
              <Col className="date">
                <h5>Duration</h5>
                <h4>
                  {position.startDate} to {position.endDate}
                </h4>
              </Col>
              <Col className="hours">
                <h5>Weekly commitment</h5>
                {/* NOTE: Field does not yet exist */}
                <h4>Up to 20 hours</h4>
              </Col>
            </Row>

            <div className="pt-4"></div>
            {parseList(position.remarks).map((info, index) => (
              <h4 key={index} className="pb-3">
                {info}
              </h4>
            ))}
            <div className="pt-4"></div>

            {/* Link to information about position type */}
            <a className="blue-text" href="/about">
              <u>learn more</u> -- &gt;
            </a>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return null;
  }
}
