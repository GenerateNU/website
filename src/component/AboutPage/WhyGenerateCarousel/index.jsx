import React, {useState} from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from 'react-bootstrap/esm/Image';
import MissionCarouselImg from '../../../assets/images/aboutpage/generate_mission.png';
import whyGenerateData from "../../../data/whyGenerateData";
import './style.css';

export default function WhyGenerateCarousel() {
    const [currentSection, setCurrentSection] = useState(0);

    return (
        <>
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
                            <Image src={whyGenerateData[currentSection].image} className='why-gen-fit-image'/>
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
                                                        <span
                                                            className={currentSection !== index ? 'd-none' : 'd-inline me-4'}>
                                                            &gt;
                                                        </span>
                                            <span
                                                className={`text-nowrap ${currentSection !== index ? 'ms-5 ps-2' : ''}`}>
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
            <div className='mobile vh-100 vw-100 py-4 d-flex justify-content-center'>
                <div className='why-gen-row-width-mobile h-100'>
                    <div className=" mb-5">
                        <h5 className="why-gen-goodies-mobile w-auto h-auto text-end">
                            more goodies
                        </h5>
                        <h1 className="why-gen-why-generate-mobile text-uppercase fit-content">
                            Why Generate?
                        </h1>
                    </div>
                    <div className="h-100">
                        <div>
                            <Image src={whyGenerateData[currentSection].image} className='why-gen-fit-image'/>
                            <p className="why-gen-text-mobile">
                                {whyGenerateData[currentSection].text}
                            </p>
                        </div>
                        <div>
                            <div className='row mb-5'>
                                <div className='col'
                                     onMouseOver={() => setCurrentSection(0)}>
                                    <h3 className="m-0 p-0 fit-content why-gen-section"
                                        style={{color: currentSection === 0 ? whyGenerateData[0].color : 'white',
                                        textDecoration: currentSection === 0 ? 'underline' : 'none'}}>
                                        <span
                                            className={`text-nowrap`}>
                                                            {whyGenerateData[0].section}
                                                        </span>
                                    </h3>
                                </div>
                                <div className='col'
                                     onMouseOver={() => setCurrentSection(3)}>
                                    <h3 className="m-0 p-0 fit-content why-gen-section"
                                        style={{color: currentSection === 3 ? whyGenerateData[3].color : 'white',
                                            textDecoration: currentSection === 3 ? 'underline' : 'none'}}>
                                        <span
                                            className={`text-nowrap`}>
                                                            {whyGenerateData[3].section}
                                                        </span>
                                    </h3>
                                </div>
                            </div>
                            <div className='row mb-5'>
                                <div className='col'
                                     onMouseOver={() => setCurrentSection(1)}>
                                    <h3 className="m-0 p-0 fit-content why-gen-section"
                                        style={{color: currentSection === 1 ? whyGenerateData[1].color : 'white',
                                            textDecoration: currentSection === 1 ? 'underline' : 'none'}}>
                                        <span
                                            className={`text-nowrap`}>
                                                            {whyGenerateData[1].section}
                                                        </span>
                                    </h3>
                                </div>
                                <div className='col'
                                     onMouseOver={() => setCurrentSection(4)}>
                                    <h3 className="m-0 p-0 fit-content why-gen-section"
                                        style={{color: currentSection === 4 ? whyGenerateData[4].color : 'white',
                                            textDecoration: currentSection === 4 ? 'underline' : 'none'}}>
                                        <span
                                            className={`text-nowrap`}>
                                                            {whyGenerateData[4].section}
                                                        </span>
                                    </h3>
                                </div>
                            </div>
                            <div className='row mb-5'>
                                <div className='col'
                                     onMouseOver={() => setCurrentSection(2)}>
                                    <h3 className="m-0 p-0 fit-content why-gen-section"
                                        style={{color: currentSection === 2 ? whyGenerateData[2].color : 'white',
                                            textDecoration: currentSection === 2 ? 'underline' : 'none'}}>
                                        <span
                                            className={`text-nowrap`}>
                                                            {whyGenerateData[2].section}
                                                        </span>
                                    </h3>
                                </div>
                                <div className='col'
                                     onMouseOver={() => setCurrentSection(5)}>
                                    <h3 className="m-0 p-0 fit-content why-gen-section"
                                        style={{color: currentSection === 5 ? whyGenerateData[5].color : 'white',
                                            textDecoration: currentSection === 5 ? 'underline' : 'none'}}>
                                        <span className={`text-nowrap`}>{whyGenerateData[5].section}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}