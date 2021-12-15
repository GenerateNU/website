import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
export class sectionOne extends Component {
  render() {
    ;
    return (
      <div id="sectionOne">
        <Container>
          <Row className="et_pb_row_0">
          
            <Col>
              <div className="et_pb_section_0">
                <img src="../images/AboutPageImages/aboutPageMain.png" className="et_parallax_bg sectionMainImage responsiveImages" alt="cloud" width="800" height="300"></img>
                <h1 className="sectionOneTitle" >ABOUT US</h1>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default sectionOne