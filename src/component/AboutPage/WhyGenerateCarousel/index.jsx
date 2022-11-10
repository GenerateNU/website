import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from 'react-bootstrap/esm/Image';
import MissionCarouselImg from '../../../assets/images/aboutpage/generate_mission.png';
import whyGenerateData from "../../../data/whyGenerateData";
import './style.css';

export default function WhyGenerateCarousel() {
    const [currentSection, setCurrentSection] = useState(0);

    return (
        <div className='vh-100 vw-100 py-4 d-flex justify-content-center'>
            <div className='why-gen-row-width h-100'>
                <div className="fit-content mb-5">
                    <h5 className="mb-0 why-gen-goodies w-auto h-auto text-end">
                        more goodies
                    </h5>
                    <h1 className="why-gen-why-generate text-uppercase fit-content">
                        Why Generate?
                    </h1>
                </div>
                <Row className="h-100">
                    <Col xs={6} className='pe-3 h-100'>
                        <Image src={whyGenerateData[currentSection].image} className='why-gen-fit-image' />
                        <p className="why-gen-text">
                            {whyGenerateData[currentSection].text}
                        </p>
                    </Col>
                    <Col xs={6} className='ps-5'>
                        {
                            whyGenerateData.map((d, index) => 
                                                <div className='mb-5'
                                                    onMouseOver={() => setCurrentSection(index)}> 
                                                    <h3 className="m-0 p-0 fit-content why-gen-section" 
                                                        style={{color: currentSection === index ? d.color : 'white'}}>
                                                        <span className={currentSection !== index ? 'd-none' : 'd-inline me-4'}>
                                                            &gt;
                                                        </span>
                                                        <span className={`text-nowrap ${currentSection !== index ? 'ms-5 ps-2'  : ''}`}>
                                                            {d.section}
                                                        </span>
                                                    </h3>
                                                </div>
                            )
                        }
                    </Col>
                </Row>
            </div>
        </div>
    );
}