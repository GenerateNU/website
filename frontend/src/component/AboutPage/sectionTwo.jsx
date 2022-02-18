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

            <Col id="abg_infoSection">
              <Row className="abg_headerRow">
                <div className='abg_section_1'>
                  <div className="abg_sectionTwoImageContainer3">
                    <img src="../images/AboutPageImages/We_Are_Gen.png" className="abg_responsiveImages1" alt="cloud" width="550" height="550"></img>

                    {/* <div className='Rectangle'>
                      <p>a</p>
                    </div> */}
                  </div>
                  <div className='abg_section_Header1'>
                    <h2 className="abg_sectionTwoSubheader">WE ARE</h2>
                    <h1 className="abg_sectionTwoHeader">GENEREATE</h1>


                    <p className="abg_sectionTwoHeaderInfo">In 2015, Bailey Kane and Mina Iskarous found a hole in Northeastern
                      University’s (NEU’s) entrepreneurial ecosystem; they identified a lack of opportunities for student ventures
                      to elicit support from product builders. Generate was their answer. We provide engineering and software
                      product design to Northeastern’s ecosystem. Providing opportunities for ventures to elicit support from
                      student product builders, and for students to gain experince working on real ventures.
                    </p>
                    <div className="abg_sectionTwoButton">
                    <img src="./LearnMoreButton_Yellow.png" alt="" />
                      <Button variant="primary" size="lg">
                        
                        Learn More
                      </Button>{' '}
                    </div>
                  </div>

                </div>
              </Row>




              <div className='bottom-container'>
                <div className='abg_section_2'>
                  <Row>
                    <Col>
                      <div className="abg_sectionTwoImageContainer">
                        <img src="../images/AboutPageImages/rethinkingTheSherm.png" className="abg_responsiveImages" alt="cloud" width="600" height="400"></img>
                      </div>
                    </Col>
                    <Col >
                      <div className='abg_section_Header1'>
                        {/* <Row> */}
                        <h1 className="abg_sectionTwoImageHeader">RETHINKING THE SHERM</h1>
                        {/* </Row>
                      <Row> */}

                        <p className="abg_sectionTwoImageDescription">Inclusive Space Research Team joins the Sherman Center this year to identify ways for us to be more inclusive.</p>
                        {/* </Row>*/}
                      </div>
                    </Col>
                  </Row>
                </div>



                <div className='abg_section_3'>
                  <Row>
                    <Col>
                      <div className='abg_section_Header1'>

                        <h1 className="abg_sectionTwoImageHeader2">VISIT OUR SHOWCASE</h1>


                        <p className="abg_sectionTwoImageDescription">Take a look at our showcase videos from previous semesters to see some of Generate's past projects!</p>

                      </div>
                    </Col>
                    <Col>
                      <div className="abg_sectionTwoImageContainer">
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