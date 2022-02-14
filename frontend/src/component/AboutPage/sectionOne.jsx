import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import videoCover from './videoplayback.mp4'
// import videoCover from '/public/images/AboutPageImages/videoplayback.mp4'

/**
 * This component is the first section which consist the main title and the main image.
 */
export class sectionOne extends Component {
  render() {
    return (
      // <div id="abg_sectionOne">
      //   <Container>
      //     <Row className="abg_et_pb_row_0">
      //       <Col>
      //         <div className="abg_et_pb_section_0">
      //           <img src="../images/AboutPageImages/aboutPageMain.png" className="et_parallax_bg abg_sectionMainImage abg_responsiveImages" alt="cloud" width="800" height="300"></img>
      //           <h1 className="abg_sectionOneTitle" >ABOUT US</h1>
      //         </div>
      //       </Col>
      //     </Row>
      //   </Container>

      // </div>

      // <div id="abg_sectionThree">
      //         <Container fluid className="abg_sectionThreeContent">
      //           {/* <video  loop autoPlay><source src='../../../public/images/AboutPageImages/videoplayback.mp4' type='video/mp4'/></video> */}
      //           <video className='video' loop autoPlay muted><source src={videoCover}type="video/mp4"/>
      //           Your browser does not support the video tag.
      //           </video>
      //           <div>
      //             <h1>CREATE IMPACT</h1>
      //           </div>
      //           {/* <div className="abg_sectionThreeButtonDiv">
      //             <Button variant="primary" size="md" >
      //               Join Us
      //             </Button>{' '}
      //           </div> */}
      //         </Container>
      // </div>


      <div id="abg_sectionOne">
        <Container fluid className="abg_sectionOneContent">
                {/* <video  loop autoPlay><source src='../../../public/images/AboutPageImages/videoplayback.mp4' type='video/mp4'/></video> */}
                <video className='video' loop autoPlay muted><source src={videoCover}type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
                <div>
                  <h1>CREATE IMPACT</h1>
                </div>
                {/* <div className="abg_sectionThreeButtonDiv">
                  <Button variant="primary" size="md" >
                    Join Us
                  </Button>{' '}
                </div> */}
              </Container>
      </div>


    );
  }
}

export default sectionOne