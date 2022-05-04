import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import RightTriangle from '../../RightTriangle';
import GenerateButton from '../../Buttons';
import './style.css';

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function OrganizationIntroduction(props) {    
    return (
        <Container fluid className='vh-100' style={{backgroundColor: props.bgColor}}>
            {/* Places header in top left corner and rotates the text from that position */}
            <Row className='hm-15 position-relative'>
                <Col xs={2} className='p-0 position-relative'>
                    {/* TODO: Horizontally center header in the left column */}
                    <h1 className='m-0 text-uppercase header-text position-absolute bottom-0 end-50 vertical-text'>
                        {props.header}
                    </h1>
                </Col>
            </Row>

            {/* Main body with the image background */}
            <Row className='main-body-height justify-content-center'>
                <Col xs={8} className='position-relative p-0 h-100 overflow-hidden justify-content-center'>
                    {/* Background image */}
                    <Image src={props.bgImage} className='fit-image tint'></Image>

                    <RightTriangle color={props.bgColor} 
                                    height='25%' 
                                    orientation='bottom left' 
                                    className='start-0 bottom-0' />

                    {/* Overlaying logo and introduction paragraph */}
                    <div className='position-absolute h-100 w-100 start-0 top-0 d-flex align-items-center'>
                        <Row className='mh-50 m-0 px-5 align-items-center justify-content-between'>
                            <Col className='p-0 mh-100 d-flex justify-content-center me-3'>
                                <Image src={props.orgLogo} fluid className='w-auto h-auto mw-100 mh-100'></Image>
                            </Col>
                            <Col xs={7} className='p-0 h-auto align-self-center'>
                                <p className='m-0 intro-paragraph-text text-overflow-center'>{props.intro}</p>
                            </Col>
                        </Row>
                    </div>

                    {/* Learn more button */}
                    <GenerateButton textColor='black' bgColor='#FFC539' text='Learn More' className='position-absolute end-0 bottom-0' />
                </Col>
            </Row>

            {/* Used to vertically center main body row */}
            <Row className='hm-15'></Row>
        </Container>
    );
}