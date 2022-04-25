import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ShermLogo from '../../../assets/images/landingpage/affiliateorgintros/Sherman_Center_Logo.png';
import MosaicLogo from '../../../assets/images/landingpage/affiliateorgintros/Mosaic_Logo.png';

export default class History extends React.Component {
    render() {
        return (
            <Row className='vh-100 vw-100'>
                <Col className='bg-black text-white left-text-style h-100 p-5'>
                    <Row className='vh-50 text-right pb-5'>
                        <h3 className='text-uppercase parent-orgs-style'>
                            Our parent orgs
                        </h3>
                    </Row>
                    <Row className='vh-30'>
                        <Row className='p-0 m-0 justify-content-end'>
                            <Col>
                                <h5>The Sherm</h5>
                            </Col>
                            <Col xs={3}>
                                <Image src={ShermLogo} fluid className='logo float-right' />
                            </Col>
                        </Row>
                        <Row className='m-0 p-0 pt-5'>
                            <Col>
                                <h5>Mosaic</h5>
                            </Col>
                            <Col xs={3}>
                                <Image src={MosaicLogo} fluid className='logo' />
                            </Col>
                        </Row>
                    </Row>
                </Col>
                <Col className='bg-white h-100 p-5 pt-4'>
                    <h2 className='text-uppercase text-black our-history-style pb-5'>Our History</h2>
                    <p className='pt-5 pe-5'>
                        There was a hole in Northeastern University’s entrepreneurial ecosystem. There was a lack of opportunities for student ventures to elicit support from product builders, so…
                    </p>
                </Col>
            </Row>
        );
    }
}