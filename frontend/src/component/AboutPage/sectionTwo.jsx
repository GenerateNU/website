import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
/**
 * This component if section two of website which consist of sideway GENERATE and some images and text about Generate.
 */
export class sectionTwo extends Component {
  render() {
    return (
      <div id="abg_sectionTwo">
        <Container fluid>
          <Row >
            <Col md="auto">
              <div>
                <span className="abg_generateSymbol">
                  GENERATE
                </span>
              </div>


            </Col>

            <Col id="abg_infoSection">
              <Row className="abg_headerRow">
                <h2 className="abg_sectionTwoSubheader">WE ARE</h2>
                <h1 className="abg_sectionTwoHeader">GENEREATE</h1>
                <h4 className="abg_sectionTwoHeaderInfo">In 2015, Bailey Kane and Mina Iskarous found a hole in Northeastern 
                University’s (NEU’s) entrepreneurial ecosystem; they identified a lack of opportunities for student ventures 
                to elicit support from product builders. Generate was their answer. We provide engineering and software 
                product design to Northeastern’s ecosystem. Providing opportunities for ventures to elicit support from 
                student product builders, and for students to gain experince working on real ventures.
                </h4>
                <div className="abg_sectionTwoButton">
                  <Button variant="primary" size="lg">
                  Learn More
                  </Button>{' '}
                </div>

              </Row>
              <Row>
                <Col>
                  <div className="abg_sectionTwoImageContainer">
                    <img src="../images/AboutPageImages/rethinkingTheSherm.png" className="abg_responsiveImages" alt="cloud" width="600" height="400"></img>
                  </div>
                </Col>
                <Col >
                  <Row>
                    <h1 className="abg_sectionTwoImageHeader">RETHINKING THE SHERM</h1>
                  </Row>
                  <Row>
                    <span className="abg_sectionTwoImageDescription">Inclusive Space Research Team joins the Sherman Center this year to identify ways for 
                    us to be more incluseive.</span>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <h1 className="abg_sectionTwoImageHeader">VISIT OUR SHOWCASE</h1>
                  </Row>
                  <Row>
                    <span className="abg_sectionTwoImageDescription">Take a look at our showcase videos from previous semesters to see some of Generate's past projects!</span>
                  </Row>
                </Col>
                <Col>
                  <div className="abg_sectionTwoImageContainer">
                    <img src="../images/AboutPageImages/visitOurShowcase.png" className="abg_responsiveImages" alt="cloud" width="600" height="400"></img>
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