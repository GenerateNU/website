import React from "react";
import Row from "react-bootstrap/esm/Row";
import Column from "react-bootstrap/esm/Col";
import "./style.css";

export default function DesktopMobilfy({ children, bgColor }) {
  return (
    <>
      <div
        class={`vh-100 horizontal-scroll bg-${bgColor} container-fluid`}
        tab-index="0"
      >
        <Row className="flex-nowrap">{children}</Row>
      </div>
      <div
        class={`vw-100 mobile vertical-scroll bg-${bgColor} container-fluid`}
        tab-index="0"
      >
        <Column className="flex-nowrap" id="mobile-page-container">
          {children}
        </Column>
      </div>
    </>
  );
}