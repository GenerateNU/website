import React from "react";
import './style.css';

// A right triangle. Takes in the triangle's height, color,
// and orientation (top left, top right, bottom left, bottom right).
export default function RightTriangle(props) {
    return (
        <div className={`same-w-h position-absolute ${props.className}`}
             style={{height: props.height,
                    background: `linear-gradient(to ${props.orientation}, 
                                 rgba(0, 0, 0, 0) 0%, 
                                 rgba(0, 0, 0, 0) 50%, 
                                 ${props.color} 50%, 
                                 ${props.color} 100%)`,
                    }}>
        </div>
    );
}