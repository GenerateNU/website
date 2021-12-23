import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
/**
 * This component is for section three of the page which is just the huge image background and a text and button.
 */
export class sectionThree extends Component {
  render() {
    return (
      <div id="abg_sectionThree">
        <Container fluid className="abg_sectionThreeContent">
          <div >
            <h1>CREATE IMPACT</h1>
          </div>

          <div className="abg_sectionThreeButtonDiv">
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