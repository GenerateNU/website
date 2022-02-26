import React from "react";
import './rightTriangle.css';

// A right triangle. Takes in the triangle's height, color,
// and orientation (top left, top right, bottom left, bottom right).
export default function RightTriangle(props) {
    const propsBackgroundColor = props.bgColor;

    return (
        <div className={`same-w-h position-absolute ${props.className}`}
             style={{height: props.height,
                    background: `linear-gradient(to ${props.orientation}, 
                                 rgba(0, 0, 0, 0) 0%, 
                                 rgba(0, 0, 0, 0) 50%, 
                                 ${propsBackgroundColor} 50%, 
                                 ${propsBackgroundColor} 100%)`,
                    }}>
        </div>
    );
}