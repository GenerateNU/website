import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightTriangle from '../../RightTriangle';
import rethinkingTheSherm from '../../../assets/images/landingpage/introbanner/Rethinking_Sherm.jpg';
import './style.css';

// ...
export class TheSherm extends Component {
    render() {        
        return (
            <Row className='m-0 px-md-5 align-items-center justify-content-center'>
                <Col xs={12} sm={6} className='p-0 pe-md-4 h-100 position-relative overflow-hidden justify-content-center'>
                    <div className='h-100 position-relative'>
                        <Image src={rethinkingTheSherm} className='fit-image' />
                        <RightTriangle height='25%' color='white' orientation='bottom left' className='bottom-0 start-0' />
                        <RightTriangle height='25%' color='white' orientation='top right' className='top-0 end-0' />
                    </div>
                </Col>

                <Col xs={12} sm={6} className='p-0 pt-3 pt-sm-0 ps-sm-4 pe-md-4'>
                    <h1 className='text-uppercase subheader-style subheader-size pb-sm-4'
                        style={{'text-decoration-underline': '#00A7E1'}}>
                        Rethinking the Sherm
                    </h1>
                    <p className='subheader-info-style subheader-info-size'>
                        Inclusive Space Research Team joins the Sherman Center this year to identify ways for us to be more inclusive.
                    </p>
                </Col>
            </Row>
        );
    }
}

export default TheSherm;