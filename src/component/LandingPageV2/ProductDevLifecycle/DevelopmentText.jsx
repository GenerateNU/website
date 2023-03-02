import React from "react"
import "./style.css"

const DevelopmentText = ({titleText, paragraphText, titleColor}) => {
    return (
        <div className="background-black-text">
            <div className = "alignItemsRight">
            <div className = "column">
                <div className="titleText" style={{color: titleColor}}>{titleText}</div>
                <div className= "paragraphText">{paragraphText}</div>
            </div>
        </div>
       </div>
    );
};

export default DevelopmentText;