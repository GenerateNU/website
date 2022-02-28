import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import RightTriangle from '../../RightTriangle/rightTriangle';
import rethinkingTheSherm from '../../assets/images/Rethinking_Sherm.jpg';
import './generateIntro.css';

// ...
export class TheSherm extends Component {
    render() {        
        return (
            <Row className='m-0 px-5 align-items-center justify-content-center'>
                <Col xs={12} sm={6} className='p-0 pe-4 h-100 position-relative overflow-hidden justify-content-center'>
                    <div className='h-100 position-relative'>
                        <Image src={rethinkingTheSherm} className='fit-image' />
                        <RightTriangle height='25%' color='white' orientation='bottom left' className='bottom-0 start-0' />
                        <RightTriangle height='25%' color='white' orientation='top right' className='top-0 end-0' />
                    </div>
                </Col>

                <Col xs={12} sm={6} className='p-0 ps-4 pe-4'>
                    <a href="">
                        <h1 className='text-uppercase subheader-style pb-4'
                            style={{'text-decoration-underline': '#00A7E1'}}>
                            Rethinking the Sherm
                        </h1>
                    </a>
                    <p className='subheader-info-style'>Inclusive Space Research Team joins the Sherman Center this year to identify ways for us to be more inclusive.</p>
                </Col>
            </Row>
        );
    }
}

export default TheSherm;