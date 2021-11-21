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
                {/* <span className="weAreSymbol">
                  WE ARE
                </span> */}
                <span className="generateSymbol">
                  GENERATE
                </span>
              </div>


            </Col>

            <Col id="infoSection">
              <Row className="headerRow">
                <h1>ENIM AD LABORE</h1>
                <h2>POR INDA CDAWD HURFG VBIUB AWD DPPR SIT AMET</h2>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
                  od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm
                  od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco.
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
                    <img src="../images/cloud.jpg" className="responsiveImages" alt="cloud" width="600" height="400"></img>
                  </div>
                </Col>


                <Col >
                  <Row>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                  </Row>
                  <Row>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddidunt ut labore et dolore magna aliqua.</span>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                  </Row>
                  <Row>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ddidunt ut labore et dolore magna aliqua.</span>
                  </Row>
                </Col>
                <Col>
                  <div className="sectionTwoImageContainer">
                    <img src="../images/cloud.jpg" className="responsiveImages" alt="cloud" width="600" height="400"></img>
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