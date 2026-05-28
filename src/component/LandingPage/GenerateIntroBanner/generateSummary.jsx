import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import weAreGenerate from '../../../assets/images/landingpage/introbanner/We_Are_Gen.png'
import GenerateButton from '../../Buttons';
import RightTriangle from '../../RightTriangle';
import './style.css';

/**
 * Component explaining the conception of Generate, as well as the organization's goals 
 * and purposes.
 */
export class GenerateSummary extends Component {
    render() {        
        return (
            <Row className='we-are-block-height m-0 p-0 align-items-center justify-content-between'>
                <Col xs={12} md={6} className='p-0 pe-md-4 we-are-image-size overflow-hidden'>
                    <div className='position-relative h-100'>
                        <Image src={weAreGenerate} className='fit-image' />
                        <RightTriangle height='15%' color='white' orientation='bottom right' className='bottom-0 end-0' />
                    </div>
                </Col>

                <Col xs={12} md={6} className='px-3 py-2 p-sm-0 ps-md-5 pt-sm-0 pt-md-3 pt-md-0'>
                    <h2 className="m-0 mb-sm-2 we-are-style">We are</h2>
                    <h1 className="m-0 mb-sm-3 text-uppercase generate-header-style generate-header-size">Generate</h1>
                    <p className="m-0 mb-3 mb-sm-4 generate-info-style generate-info-size">
                        In 2015, Bailey Kane and Mina Iskarous found a hole in Northeastern University’s (NEU’s) entrepreneurial ecosystem; they identified a lack of opportunities for student ventures to elicit support from product builders. Generate was their answer. We provide engineering and software product design to Northeastern’s ecosystem. Providing opportunities for ventures to elicit support from student product builders, and for students to gain experince working on real ventures.
                    </p>
                    <GenerateButton textColor='black' bgColor='#FFC539' text='Learn More' cutOff cutOffBgColor='white' />
                </Col>
            </Row>
        );
    }
}

export default GenerateSummary;