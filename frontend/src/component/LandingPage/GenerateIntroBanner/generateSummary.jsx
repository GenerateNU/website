import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import weAreGenerate from '../../assets/images/We_Are_Gen.png'
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
            <Row className='vh-90 m-0 p-0 h-auto align-items-center justify-content-between'>
                <Col xs={12} md={6} className='p-0 pe-4 h-100 position-relative overflow-hidden justify-content-center'>
                    <div className='position-relative h-100'>
                        <Image src={weAreGenerate} className='fit-image' />
                        <RightTriangle height='20%' color='white' orientation='bottom right' className='bottom-0 end-0' />
                    </div>
                </Col>

                <Col xs={12} md={6} className='p-0 ps-4'>
                    <h2 className="m-0 mb-2 we-are-style">We are</h2>
                    <h1 className="m-0 mb-3 text-uppercase generate-text-header-style">Generate</h1>
                    <p className="m-0 mb-4 generate-info-style ">
                        In 2015, Bailey Kane and Mina Iskarous found a hole in Northeastern University’s (NEU’s) entrepreneurial ecosystem; they identified a lack of opportunities for student ventures to elicit support from product builders. Generate was their answer. We provide engineering and software product design to Northeastern’s ecosystem. Providing opportunities for ventures to elicit support from student product builders, and for students to gain experince working on real ventures.
                    </p>
                    <GenerateButton textColor='black' bgColor='#FFC539' text='Learn More' cutOff cutOffBgColor='white' />
                </Col>
            </Row>
        );
    }
}

export default GenerateSummary;