import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ApplyButton from './applyButton';
import './applySectionStyle.css'

export class ApplySection extends Component {
    render() {        
        return (
            <Container fluid className='vh-100'>
                <Row className='h-100'>
                    <Col xs={3} className='p-0 position-relative'>
                        <ApplyButton header='STUDENT' bgColor='#00A7E1' textColor='white' orientation='left' />
                    </Col>
                    <Col xs={6} className='h-auto text-center my-auto'>
                        <span className='i-am-a-style'>
                            I <br/> AM <br/> A
                        </span>
                    </Col>
                    <Col xs={3} className='p-0 position-relative'>
                        <ApplyButton header='CLIENT' bgColor='#FFC539' textColor='black' orientation='right' />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ApplySection;