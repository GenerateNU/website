import React from "react";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/esm/Image";

export default function DirectorIcon(props) {
    return (
        <Col xs={6} className='p-0'>
            <Button value={props.title} 
                className='bg-transparent mx-3 fit-content p-0 border-0 rounded-0 shadow-none'
                onClick={props.changeSlide}>
                <Image className='team-icon' src={props.inactiveIcon} />
                {/* <Image className='team-icon' src={props.activeIcon} /> */}
            </Button>
        </Col>
    );
}