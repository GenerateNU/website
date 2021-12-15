import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
export class sectionTwo extends Component {
  render() {
    return (
      <div id="sectionTwo">
        <Container fluid>
          <Row >
            <Col md="auto">
              <div>
                <span className="generateSymbol">
                  GENERATE
                </span>
              </div>


            </Col>

            <Col id="infoSection">
              <Row className="headerRow">
                <h2 className="sectionTwoSubheader">WE ARE</h2>
                <h1 className="sectionTwoHeader">GENEREATE</h1>
                <h4 className="sectionTwoHeaderInfo">We provide leading engineering and software product design to Northeastern’s entrepreneurial
                  ecosystem. Providing opportunities for ventures to elicit support from student product builders,
                  and students to gain experinceing working on real ventures.
                </h4>
                <div className="sectionTwoButton">
                  <Button variant="primary" size="lg">
                    Large button
                  </Button>{' '}
                </div>

              </Row>
              <Row>
                <Col>
                  <div className="sectionTwoImageContainer">
                    <img src="../images/AboutPageImages/rethinkingTheSherm.png" className="responsiveImages" alt="cloud" width="600" height="400"></img>
                  </div>
                </Col>
                <Col >
                  <Row>
                    <h1 className="sectionTwoImageHeader">RETHINKING THE SHERM</h1>
                  </Row>
                  <Row>
                    <span className="sectionTwoImageDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum condimentum gravida.</span>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <h1 className="sectionTwoImageHeader">VISIT OUR SHOWCASE</h1>
                  </Row>
                  <Row>
                    <span className="sectionTwoImageDescription">Take a look at our showcase videos from previous semesters to see some of Generate's past projects!</span>
                  </Row>
                </Col>
                <Col>
                  <div className="sectionTwoImageContainer">
                    <img src="../images/AboutPageImages/visitOurShowcase.png" className="responsiveImages" alt="cloud" width="600" height="400"></img>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default sectionTwo