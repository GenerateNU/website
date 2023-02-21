import React from "react";
import Row from "react-bootstrap/esm/Row";
import Column from "react-bootstrap/esm/Col";
import "./style.css";

export default function DesktopMobilfy({ desktopChildren, mobileChildren, desktopBGColor, mobileBGColor }) {
  return (
    <>
      <div
        class={`vh-100 horizontal-scroll bg-${desktopBGColor} container-fluid`}
        tab-index="0"
      >
        <Row className="flex-nowrap">{desktopChildren}</Row>
      </div>
      <div
        class={`vw-100 mobile vertical-scroll bg-${mobileBGColor} container-fluid`}
        tab-index="0"
      >
        <Column className="flex-nowrap" id="mobile-page-container">
          {mobileChildren}
        </Column>
      </div>
    </>
  );
}