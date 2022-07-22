import React from 'react';
import './style.css';
import { constants } from "../../assets/constants.js";

export default function ShadowedButton(props) {

    const ButtonStyle = {
        backgroundColor: props.fillColor,
        padding: `${props.yPad || '1rem'} ${props.xPad}`,
        fontSize: `${props.fontSize || '1.5vw'}`
    };

    const handleOnClick=() => {

       console.log("cfvgbhjnmk");
       console.log(props.lnk);
       const name = props.lnk;
       const key = name.replace(" ", "_");
       console.log(name.replace(" ", "_"));
       const POSITIONS_URL = 'Position_' + key;
       console.log("POSITIONS_API", POSITIONS_URL);
       console.log(constants[POSITIONS_URL]);
     window.location.assign(constants[POSITIONS_URL]);
    }

    return (
        <button className={`button-style fit-content me-5 text-nowrap ${props.className}`}
                style={ButtonStyle}
                onClick={handleOnClick}>
            {props.text}
        </button>
    );
}