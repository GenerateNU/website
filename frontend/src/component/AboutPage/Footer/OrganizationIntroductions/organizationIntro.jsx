import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/esm/Button';
import './orgIntroStyle.css';

// Abstract component for organization introductions. Consists of a vertical heading to the left,
// a background center image, and the organization's logo and introduction paragraph in the front.
export default function OrganizationIntroduction(props) {
    const propsBackgroundColor = props.bgColor;
    const backgroundImage = props.bgImage;
    const sideHeaderText = props.header;
    const organizationLogo = props.orgLogo;
    const organizationIntro = props.intro;
    
    return (
        <Container fluid className='vh-100' style={{backgroundColor: propsBackgroundColor}}>
            <Row className='hm-15'></Row>
            <Row className=''>
                <Col xs={2} className='position-relative'>
                    {/* TODO: Figure out how to anchor top of header to top of row */}
                    <h1 className='header-text end-0 position-absolute'>
                        {sideHeaderText}
                    </h1>
                </Col>

                <Col xs={8} className='position-relative h-100'>
                    <Row className='bg-secondary position-relative main-body-height p-0 overflow-hidden justify-content-center'>
                        {/* TODO: Remove horizontal margins around image */}
                        <Image src={backgroundImage} className='h-auto tint m-0'></Image>
                        <div className='position-absolute h-100'>
                            <Row className='hm-25'></Row>
                            <Row className='hm-34 px-10 align-items-center'>
                                <Col className='h-100 align-self-center'>
                                    {/* TODO: Make image never alter aspect ratio */}
                                    <Image src={organizationLogo} fluid className='h-100 img-responsive'></Image>
                                </Col>
                                <Col xs={7} className='h-100 align-self-center'>
                                    {/* TODO: Make text never spill out div */}
                                    <p className='m-0 intro-paragraph-text'>{organizationIntro}</p>
                                </Col>
                            </Row>
                            <Row className='hm-25'></Row>
                        </div>
                        <div className='triangle position-absolute start-0 bottom-0' 
                                style={{background: `linear-gradient(to bottom left, 
                                                    rgba(0, 0, 0, 0) 0%, 
                                                    rgba(0, 0, 0, 0) 50%, 
                                                    ${propsBackgroundColor} 50%, 
                                                    ${propsBackgroundColor} 100%)`}}>
                        </div>
                        <Button href='#' className='position-absolute learn-more-btn-color rounded-0 outline-none w-auto end-0 bottom-0 button-text'>
                            LEARN MORE
                        </Button>
                    </Row>
                </Col>
                <Col xs={2}></Col>
            </Row>
            <Row className='hm-15'></Row>
        </Container>

        // <div className='org-intro-container' style={{backgroundColor: propsBackgroundColor}}>
        //     <div class='horizontal-margin-placeholder'></div>
        //     <Container fluid className='intro-main-body'>
        //         <Row className='h-100'>
        //             <Col xs={2} className='h-100'>
        //                 <h1 className='header-text rotate-counter-clockwise-90'>{sideHeaderText}</h1>
        //             </Col>
        //             <Col className='mx-auto h-100 position-relative image-overflow-cover'>
        //                 <div className='position-relative'>
        //                     <Image src={backgroundImage} fluid className='background-center-image'></Image>
        //                     <div className='overlay'>
        //                         <div className='background-image-overlay center-vertically'>
        //                             <Image src={organizationLogo} className='logo-margin'></Image>
        //                             <p className='intro-paragraph-text-style'>{organizationIntro}</p>
        //                         </div>
        //                         <div className='triangle' 
        //                              style={{background: `linear-gradient(to bottom left, 
        //                                                     rgba(0, 0, 0, 0) 0%, 
        //                                                     rgba(0, 0, 0, 0) 50%, 
        //                                                     ${propsBackgroundColor} 50%, 
        //                                                     ${propsBackgroundColor} 100%)`}}>
        //                         </div>
        //                         <Button href='#' className='rounded-0 learn-more-button button-text-style'>
        //                             LEARN MORE
        //                         </Button>
        //                     </div>
        //                 </div>
        //             </Col>
        //             <Col xs={2}></Col>
        //         </Row>
        //     </Container>
        //     <div class='horizontal-margin-placeholder'></div>
        // </div>
    );
}