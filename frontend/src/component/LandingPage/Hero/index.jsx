import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import videoBg from '../../assets/videos/videoplayback.mp4';
import './style.css';

/**
 * Hero section containing a looping video background.
 */
export class Hero extends Component {
    render() {
        return (
            <Container fluid className="vh-100 h-100 w-100 d-flex align-items-center text-center">
                <video className='position-absolute top-0 start-0 w-100 h-100 video tint' loop autoPlay muted>
                    <source src={videoBg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <h1 className='header-style header-size'>CREATE IMPACT</h1>
            </Container>
        );
    }
}

export default Hero;