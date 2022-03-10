import React from "react";
import Image from "react-bootstrap/Image";
import RightTriangle from "../RightTriangle";
import './style.css';

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function PhotoCutOff(props) {
    const leftCutOffOrientation = props.direction === 'back' ? 'top' : 'bottom';
    const rightCutOffOrientation = props.direction === 'back' ? 'bottom' : 'top';

    return (
        <div className={`bg-danger position-relative h-100 d-inline-block ${props.className}`}>
            <Image src={props.image} className='fit-image' />
            <RightTriangle color={props.cutOffBgColor} height='20%' orientation={`${leftCutOffOrientation} left`} className={`${leftCutOffOrientation}-0 start-0`} />
            <RightTriangle color={props.cutOffBgColor} height='20%' orientation={`${rightCutOffOrientation} right`} className={`${rightCutOffOrientation}-0 end-0`} />
        </div>
    );
}