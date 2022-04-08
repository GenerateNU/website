import React from 'react';
import './style.css';

export default function ShadowedButton(props) {
    return (
        <button className={`button-style fit-content me-5 ${props.className}`}
                style={{backgroundColor: props.fillColor,
                        padding: `1rem ${props.xPad}`}}
                onClick={props.onClick}>
            {props.text}
        </button>
    );
}