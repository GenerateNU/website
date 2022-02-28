import React from "react";
import Button from 'react-bootstrap/esm/Button';

// ...
export default function SimpleButton(props) {
    return (
        <Button href='#' className='border-0 text-uppercase rounded-0 outline-none w-auto button-text'
        style={{color: props.textColor, backgroundColor: props.bgColor}}>
            {props.text}
        </Button>
    );
}