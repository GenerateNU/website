import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ApplyButton from './applyButton';
import './applySectionStyle.css'

// Apply page displaying two buttons for students and clients to be led to their
// respective form pages for applying.
export class ApplySection extends Component {
    render() {        
        return (
            <Container fluid className='vh-100'>
                <Row className='h-100'>
                    {/* Student apply button */}
                    <Col xs={3} className='p-0 position-relative'>
                        <ApplyButton header='Student' bgColor='#00A7E1' textColor='white' orientation='left' />
                    </Col>

                    {/* I AM A center column */}
                    <Col xs={6} className='h-auto text-center my-auto'>
                        <span className='text-uppercase i-am-a-style'>
                            I <br/> am <br/> a
                        </span>
                    </Col>
                    
                    {/* Client apply button */}
                    <Col xs={3} className='p-0 position-relative'>
                        <ApplyButton header='Client' bgColor='#FFC539' textColor='black' orientation='right' />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ApplySection;