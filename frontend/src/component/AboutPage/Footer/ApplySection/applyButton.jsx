import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import './applySectionStyle.css'

// Abstract component for organization introductions. Consists of a vertical heading to the left,
// a background center image, and the organization's logo and introduction paragraph in the front.
export default function ApplyButton(props) {
    const header = props.header;
    const bgColor = props.bgColor;
    const textColor = props.textColor;
    const orientation = props.orientation;
    let textRot = '';
    let rowSide = ''

    if (orientation === 'left') {
        textRot = '270';
        rowSide = 'start';
    } else {
        textRot = '90';
        rowSide = 'end';
    }
    
    return (
        <Row className='w-100 m-0 align-items-center position-relative overflow-y-hidden'>
            <Col xs={9} className={`h-100 p-0 position-absolute ${rowSide}-0`} style={{backgroundColor: bgColor}}>
                <button href='#' className='w-100 h-100 rounded-0 p-0 border-0 position-relative text-center' 
                                 style={{backgroundColor: bgColor}}>
                    <h1 className='header-style text-overflow-center w-auto'
                        style={{color: textColor, transform: `rotate(${textRot}deg)`}}>
                            {header}
                    </h1>
                    <p className='apply-style text-black position-absolute apply-position'>APPLY</p>
                    <div className={`${orientation}-triangle`} style={{[`border-${orientation}-color`]: bgColor}}></div>
                </button>
            </Col>
        </Row>
    );
}