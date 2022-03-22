import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhotoCutOff from '../../../PhotoCutOff';

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function Director(props) {    
    const data = props.data;

    return (
        <Row className={`position-relative m-0 h-100 ${data.team}`}>
            <Col xs={9} className='p-0 h-100 d-flex'>
                <PhotoCutOff image={data.image} direction='back' cutOffBgColor='#E5F6FD' className='w-100 mirror' />
            </Col>
            <Col xs={3} className='position-relative p-0'>
                <div className='px-4 pb-2 position-absolute bottom-0 h-33'>
                    <div className='title-style pb-3'>
                        {data.title}
                    </div>
                    <div className='email-style'>
                        {data.emailUsername} @ northeastern.edu
                    </div>
                </div>
            </Col>
            <div className='m-0 py-4 px-5 position-absolute director-box-style end-0 top-50 fit-content d-flex justify-content-center'>
                <h1 className='m-0 text-uppercase director-name'>
                    {data.name}
                </h1>
            </div>
        </Row>
    );
}