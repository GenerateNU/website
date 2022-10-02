import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import CollageSection from "./Collage"
import Events from "./Events";
import Events2 from "./Events2";
import Events3 from "./Events3";

import "./style.css";

export default class CulturePage extends React.Component {
  render() {
    return (
      <Container fluid className="vh-100 horizontal-scroll">
        <Row className="flex-nowrap">
          {/* Add components of culture page here  */}
          <Events />
          <Events2 />
          <Events3 />
          <CollageSection />
        </Row>
      </Container>
    );
  }
}
