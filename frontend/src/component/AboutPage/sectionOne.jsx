import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

/**
 * This component is the first section which consist the main title and the main image.
 */
export class sectionOne extends Component {
  render() {
    return (
      <div id="abg_sectionOne">
        <Container>
          <Row className="abg_et_pb_row_0">
            <Col>
              <div className="abg_et_pb_section_0">
                <img src="../assets/images/aboutPageMain.png" className="et_parallax_bg abg_sectionMainImage abg_responsiveImages" alt="cloud" width="800" height="300"></img>
                <h1 className="abg_sectionOneTitle" >ABOUT US</h1>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default sectionOne