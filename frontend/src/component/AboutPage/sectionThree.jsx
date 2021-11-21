import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
export class sectionThree extends Component {
  render() {
    return (
      <div id="sectionThree">
        <video autoPlay muted loop id="myVideo">
          <source src="../images/testVideo.mp4" type="video/mp4"></source>
          Your browser does not support HTML5 video.
        </video>

        <Container fluid className="sectionThreeContent">
          <Row>
            <h1>CREATE IMPACT</h1>
          </Row>
          <Row>


            {/* <div>
              <Button variant="primary" size="md">
                Large button
              </Button>{' '}
            </div> */}
          </Row>
        </Container>

      </div>
    );
  }
}

export default sectionThree