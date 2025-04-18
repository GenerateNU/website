import React from "react";
import Button from 'react-bootstrap/Button';
import './style.css';

// ...
export default function SimpleButton(props) {
    return (
        <Button className='border-0 px-4 py-2 text-uppercase rounded-0 shadow-none w-auto button-text button-text-size'
                style={{color: props.textColor, backgroundColor: props.bgColor}}>
            {props.text}
        </Button>
    );
}