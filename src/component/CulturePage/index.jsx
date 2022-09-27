import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./style.css";
import IntroSection from "./IntroSection";
import IntroImages from "./IntroImages";

export default class CulturePage extends React.Component {
  render() {
    return (
      <Container fluid className="vh-100 horizontal-scroll bg-black">
        <Row className="flex-nowrap">
          {/* <IntroSection /> */}
          <IntroImages />
        </Row>
      </Container>
    );
  }
}
