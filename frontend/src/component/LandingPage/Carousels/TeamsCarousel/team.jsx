import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhotoCutOff from '../../../PhotoCutOff';

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function Team({data}) {
    return (
        <Row className={`m-0 h-100 ${data.team}`}>
            <Col xs={9} className='p-0 pe-3 h-100 d-flex justify-content-center'>
                <PhotoCutOff image={data.image} direction='back' cutOffBgColor='#E5F6FD' />
                <div className='m-0 py-3 px-5 h-auto position-absolute team-box-style team-text bottom-neg-10 align-items-center'>
                    {data.text}
                </div>
            </Col>  
        </Row>
    );
}