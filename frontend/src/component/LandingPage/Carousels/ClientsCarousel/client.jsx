import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhotoCutOff from '../../../PhotoCutOff';
import RootedLiving from '../../../assets/images/Client_RootedLiving.jpg';
import './clientsCarousel.css';

/**
 * Abstract component for organization introductions. Consists of a vertical heading to the left,
 * a background center image, and the organization's logo and introduction paragraph in the front.
 * Leads user to more information about the organization via the learn more button.
 * @param {*} props 
 * @returns 
 */
export default function Client(props) {    
    return (
        <Row className='m-0 h-100'>
            <Col xs={9} className='p-0 pe-3 h-100 d-flex justify-content-center'>
                <PhotoCutOff image={props.image} direction='back' cutOffBgColor='#FFF9EB' />
                <Row className='m-0 p-4 position-absolute text-box-style end-0 top-50 align-items-center'>
                    {/* TODO: Figure out how to center Rooted Living in left column */}
                    <Col xs={5} className='p-0 d-flex justify-content-center'> 
                        <h1 className='m-0 text-uppercase client-name'>{props.clientProject}</h1>
                    </Col>
                    <Col xs={7} className='p-0 ps-4 d-flex justify-content-center client-text'>
                        {props.text}
                    </Col>
                </Row>
            </Col>  
        </Row>
    );
}