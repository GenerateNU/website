import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import videoCover from '../videoplayback.mp4';
import './hero.css';

/**
 * Hero section containing a looping video background.
 */
export class Hero extends Component {
    render() {
        return (
            <Container fluid className="vh-100 h-100 w-100 d-flex align-items-center text-center">
                <video className='position-absolute top-0 start-0 w-100 h-100 video' loop autoPlay muted>
                    <source src={videoCover} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <h1 className='header-style header-size'>CREATE IMPACT</h1>
            </Container>
        );
    }
}

export default Hero;