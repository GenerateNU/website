import React from "react";
import SimpleButton from "./simpleButton";
import RightTriangle from "../RightTriangle/rightTriangle";

/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function GenerateButton(props) {
    /**
     * Should have text color, bgColor, text, flag cutCorners
     */
    const button = <SimpleButton textColor={props.textColor} bgColor={props.bgColor} text={props.text} />

    if (props.cutCorners) {
        return (
            <div className={`bg-danger position-relative d-inline-block ${props.className}`}>
                {button}
                <RightTriangle color={props.cornerColor} height='33%' orientation='top left' className='top-0 start-0' />
                <RightTriangle color={props.cornerColor} height='33%' orientation='bottom right' className='bottom-0 end-0' />
            </div>
        );
    } else {
        return (
            <div className={props.className}>
                {button}
            </div>
        );
    }
}