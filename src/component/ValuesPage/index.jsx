import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Diversity from "./Diversity";
import './style.css';

export default class ValuesPage extends React.Component {
    render() {
        return (

            <Container fluid className="vh-100 horizontal-scroll bg-light">
        <Row className="flex-nowrap">
          <Diversity />
        </Row>
      </Container>
        );
    }
}
