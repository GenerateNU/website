import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhotoCutOff from '../../../PhotoCutOff';

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function Client(props) {    
    const data = props.data;

    return (
        <Row className='m-0 h-100'>
            <Col xs={9} className='p-0 pe-3 h-100 d-flex justify-content-center'>
                <PhotoCutOff image={data.image} direction='back' cutOffBgColor='#FFF9EB' />
                <Row className='m-0 p-4 position-absolute client-box-style end-0 top-50 align-items-center'>
                    {/* TODO: Figure out how to center Rooted Living in left column */}
                    <Col xs={5} className='p-0 d-flex justify-content-center'> 
                        <h1 className='m-0 text-uppercase client-name'>{data.name}</h1>
                    </Col>
                    <Col xs={7} className='p-0 ps-4 d-flex justify-content-center client-text'>
                        {data.text}
                    </Col>
                </Row>
            </Col>  
        </Row>
    );
}