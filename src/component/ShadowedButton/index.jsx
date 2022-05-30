import React from 'react';
import './style.css';

export default function ShadowedButton(props) {
    const ButtonStyle = {
        backgroundColor: props.fillColor,
        padding: `${props.yPad || '1rem'} ${props.xPad}`,
        fontSize: `${props.fontSize || '1.5vw'}`
    };

    return (
        <button className={`button-style fit-content me-5 text-nowrap ${props.className}`}
                style={ButtonStyle}
                onClick={props.onClick}>
            {props.text}
        </button>
    );
}