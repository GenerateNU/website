import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
export class sectionFour extends Component {
  render() {
    return (
      <div id="sectionFour">
        <Container>
          <Row>
            <Col ></Col>
            <Col md="auto">Variable width content</Col>
          </Row>
          <Row>
            <Col ></Col>
            <Col md="auto">Variable width content</Col>
          </Row>
          <Row>
            <Col ></Col>
            <Col md="auto">Variable width content</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default sectionFour