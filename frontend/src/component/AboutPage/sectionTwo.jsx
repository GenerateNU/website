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
      <div id="AboutPage_Section2">
        <Container fluid>
          <Row >

            <Col id="About_InfoSection">
              <div className='bottom-container'>

                <Row className="abg_headerRow">
                  <div className='AboutPage_Section2_Top'>
                    <div className="Image-WeAreGenerate">
                      <img src="../images/AboutPageImages/We_Are_Gen.png" className="abg_responsiveImages1" alt="cloud" width="700" height="550"></img>

                    </div>
                    <div className='abg_section_Header1'>
                      <h2 className="AboutPage_Section2Subheader">We are</h2>
                      <h1 className="AboutPage_Section2Header">GENEREATE</h1>


                      <p className="AboutPage_Section2HeaderInfo">In 2015, Bailey Kane and Mina Iskarous found a hole in Northeastern
                        University’s (NEU’s) entrepreneurial ecosystem; they identified a lack of opportunities for student ventures
                        to elicit support from product builders. Generate was their answer. We provide engineering and software
                        product design to Northeastern’s ecosystem. Providing opportunities for ventures to elicit support from
                        student product builders, and for students to gain experince working on real ventures.
                      </p>
                      <div className="AboutPage_Section2Button">
                        {/* <Button variant="primary" size="lg" img="./LearnMoreButton_Yellow.png">
                        
                        Learn More
                      </Button>{' '} */}
                        <a href="https://www.google.com">
                          <img src="../images/AboutPageImages/LearnMoreButton_Yellow.png" alt="YelloButton" />
                        </a>

                      </div>
                    </div>

                  </div>
                </Row>





                <div className='AboutPage_Section2_Middle'>
                  <Row>
                    <Col>
                      <div className="Image-RethinkTheSherm">
                        <img src="../images/AboutPageImages/rethinkingTheSherm.png" className="abg_responsiveImages" alt="cloud" width="600" height="400"></img>
                      </div>
                    </Col>
                    <Col >
                      <div className='abg_section_Header1'>
                        {/* <Row> */}
                        <h1 className="AboutPage_Section2ImageHeader">RETHINKING THE SHERM</h1>
                        {/* </Row>
                      <Row> */}

                        <p className="AboutPage_Section2ImageDescription">Inclusive Space Research Team joins the Sherman Center this year to identify ways for us to be more inclusive.</p>
                        {/* </Row>*/}
                      </div>
                    </Col>
                  </Row>
                </div>



                <div className='AboutPage_Section2_Bottom'>
                  <Row>
                    <Col>
                      <div className='abg_section_Header1'>

                        <h1 className="AboutPage_Section2ImageHeader2">VISIT OUR SHOWCASE</h1>


                        <p className="AboutPage_Section2ImageDescription">Take a look at our showcase videos from previous semesters to see some of Generate's past projects!</p>

                      </div>
                    </Col>
                    <Col>
                      <div className="Image-Showcase">
                        <img src="../images/AboutPageImages/visitOurShowcase.png" className="abg_responsiveImages" alt="cloud" width="600" height="400"></img>
                      </div>
                    </Col>
                  </Row>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default sectionTwo