import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/esm/Button';
import './orgIntroStyle.css';

export default function OrganizationIntroduction(props) {
    const propsBackgroundColor = props.bgColor;
    const backgroundImage = props.bgImage;
    const sideHeaderText = props.header;
    const organizationLogo = props.orgLogo;
    const organizationIntro = props.intro;
    
    return (
        <div id='landing-page-footer' style={{backgroundColor: propsBackgroundColor}}>
            <div class='footer-horizontal-margin'></div>
            <Container fluid className='footer-main-body'>
                <Row className='h-100'>
                    <Col xs={2} className='h-100'>
                        <h1 className='vertical-header-style rotate-counter-clockwise-90'>{sideHeaderText}</h1>
                    </Col>
                    <Col className='mx-auto h-100 position-relative image-wrapper-col'>
                        <div className='image-text-overlay'>
                            <Image src={backgroundImage} fluid className='footer-center-image'></Image>
                            <div className='overlay'>
                                <div className='overlay-main-body center-vertically'>
                                    <Image src={organizationLogo} className='logo-img-margin'></Image>
                                    <p className='footer-info-text-style'>{organizationIntro}</p>
                                </div>
                                <div className='triangle' style={{background: `linear-gradient(to bottom left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, ${propsBackgroundColor} 50%, ${propsBackgroundColor} 100%)`}}></div>
                                <Button href='#' className='rounded-0 learn-more-button footer-button-text-style'>
                                    LEARN MORE
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
            </Container>
            <div class='footer-horizontal-margin'></div>
        </div>
    );
}