import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
export class sectionThree extends Component {
  render() {
    return (
      <div id="sectionThree">
        {/* <video autoPlay muted loop id="myVideo">
          <source src="../images/testVideo.mp4" type="video/mp4"></source>
          Your browser does not support HTML5 video.
        </video> */}

        <Container fluid className="sectionThreeContent">


          <div >
            <h1>CREATE IMPACT</h1>
          </div>

          <div className="sectionThreeButtonDiv">
            <Button variant="primary" size="md" >
              Join Us
            </Button>{' '}
          </div>

        </Container>

      </div>
    );
  }
}

export default sectionThree