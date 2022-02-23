import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './applySectionStyle.css'

// Page-height apply buttons oriented either to the left or right of the page 
// with vertical headers and apply text on the bottom.
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
        <Col xs={3} className='p-0 position-relative'>
            <Row className='w-100 m-0 align-items-center position-relative'>
                {/* Use columns to leave room for button arrow */}
                <Col xs={9} className={`h-100 p-0 position-absolute ${rowSide}-0`} style={{backgroundColor: bgColor}}>
                    <button href='#' className='w-100 h-100 rounded-0 p-0 border-0 position-relative text-center button-overflow' 
                                    style={{backgroundColor: bgColor}}>
                        <h1 className='text-uppercase header-style text-overflow-center w-auto'
                            style={{color: textColor, transform: `rotate(${textRot}deg)`}}>
                                {header}
                        </h1>
                        <p className='text-uppercase apply-style text-black position-absolute apply-position'>Apply</p>
                        {/* TODO: Turn to pointer / be able to click on button only when on visible part of triangle */}
                        <div className={`${orientation}-triangle zindex-dropdown`} 
                            style={{[`border-${orientation}-color`]: bgColor}}>
                        </div>
                    </button>
                </Col>
            </Row>
        </Col>
    );
}