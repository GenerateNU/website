import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApplyButton from './applyButton';
import './style.css'

/**
 * Apply page displaying two buttons for students and clients to be led to their
 * respective form pages for applying.
 */
export default class ApplyButtons extends Component {
    render() {        
        return (
            <Container fluid className='vh-100'>
                <Row className='h-100'>
                    <Col xs={6} sm={3} className='p-0 position-relative'>
                        <ApplyButton header='Student' bgColor='#00A7E1' textColor='white' orientation='left' />
                    </Col>

                    {/* I AM A center column */}
                    <Col xs={0} sm={6} className='d-none d-sm-block h-auto text-center my-auto'>
                        <span className='text-uppercase i-am-a-style i-am-a-size'>
                            I <br/> am <br/> a
                        </span>
                    </Col>
                    
                    <Col xs={6} sm={3} className='p-0 position-relative'>
                        <ApplyButton header='Client' bgColor='#FFC539' textColor='black' orientation='right' />
                    </Col>
                </Row>
            </Container>
        );
    }
}