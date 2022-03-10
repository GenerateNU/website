import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import RightTriangle from '../../RightTriangle';
import visitShowcase from '../../assets/images/Visit_Showcase.jpg';
import './generateIntro.css';

// ...
export class GenerateShowcase extends Component {
    render() {        
        return (
            <Row className='m-0 px-5 align-items-center justify-content-center'>
                <Col xs={12} sm={6} className='position-relative p-0 pe-5'>
                    <a href="">
                        <h1 className='text-uppercase subheader-style pb-4'
                            style={{'text-decoration-color': '#FFC539'}}>
                            Visit Our Showcase
                        </h1>
                    </a>
                    <p className='subheader-info-style'>
                        Take a look at our showcase videos from previous semesters to see some of Generate's past projects!
                    </p>
                </Col>

                <Col xs={12} sm={6} className='p-0 ps-4 h-100 position-relative overflow-hidden justify-content-center'>
                    <div className='h-100 position-relative'>
                        <Image src={visitShowcase} className='fit-image' />
                        <RightTriangle height='25%' color='white' orientation='top left' className='top-0 start-0' />
                        <RightTriangle height='25%' color='white' orientation='bottom right' className='bottom-0 end-0' />
                    </div>
                </Col>
            </Row>
        );
    }
}

export default GenerateShowcase;