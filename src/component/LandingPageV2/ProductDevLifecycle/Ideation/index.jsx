import React from "react";
import DevelopmentWheel from "../ProductDevelopment/DevelopmentWheel.png"
import './style.css';

const Ideation = () => {
    return (
        <>
        <div className="background-black-wheel">
            <div className = "DevelopmentWheelTwo">
              <img className="rotateTwo" style={{width: '64vh'}} src ={DevelopmentWheel} />
            </div>
        </div>
        <div className="background-black-text">
            <div className = "alignItemsRight">
            <div className="ideation">
            <div className = "column">
                <div className="IdeationText">Ideation</div>
                <div className= "paragraphText">Ideation involves the synthesis, definition, and validation of novel 
                concepts as they relate to a new product. We start with problem identification to define the scope of 
                the problem and begin market research to begin thinking about a solution. The last step of ideation 
                is to plan out ideas until a final concept is decided, expanding upon the previous research and digging 
                deeper into its overall viability.</div>
            </div>
        </div>
       </div>
       </div>
          </ >
          
    );
};
export default Ideation;