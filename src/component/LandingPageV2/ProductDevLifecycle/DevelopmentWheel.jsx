import React from "react"
import "./style.css"

const DevelopmentWheel = ({img}) => {
    return (
        <div className="background-black-wheel">
            <div className="DevelopmentWheel">
                <img className="wheel-img" src={img} />
            </div>
        </div>
    );
};

export default DevelopmentWheel;