import React from "react";
import SimpleButton from "./simpleButton";
import RightTriangle from "../RightTriangle";


/**
 * 
 * @param {*} props 
 * @returns 
 */
export default function GenerateButton(props) {
    /**
     * Should have text color, bgColor, text, flag cutOff
     */
    const button = <SimpleButton textColor={props.textColor} bgColor={props.bgColor} text={props.text} />

    if (props.cutOff) {
        return (
            <div className={`position-relative d-inline-block ${props.className}`}>
                {button}
                <RightTriangle color={props.cutOffBgColor} height='33%' orientation='top left' className='top-0 start-0' />
                <RightTriangle color={props.cutOffBgColor} height='33%' orientation='bottom right' className='bottom-0 end-0' />
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