import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import FeaturedProjects from "./FeaturedProjects";
import FP1 from "./FeaturedProjects";
import "./style.css";

export default class AboutPage extends React.Component {
  render() {
    return (
      <Container fluid className="vh-100 horizontal-scroll bg-light">
        <Row className="flex-nowrap">
          <FeaturedProjects />
          <FP1 />
        </Row>
      </Container>
    );
  }
}
