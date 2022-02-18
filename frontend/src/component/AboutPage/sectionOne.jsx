import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import videoCover from './videoplayback.mp4'
// import videoCover from './src/component/assets/videos/videoplayback.mp4'
// import videoCover from '/public/images/AboutPageImages/videoplayback.mp4'

/**
 * This component is the first section which consist the main title and the main image.
 */
export class sectionOne extends Component {
  render() {
    return (


      <div id="abg_sectionOne">
        <Container fluid className="abg_sectionOneContent">
          <video className='video' loop autoPlay muted><source src={videoCover} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <h1>CREATE IMPACT</h1>
          </div>
        </Container>
      </div>


    );
  }
}

export default sectionOne