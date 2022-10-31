import React from "react";
import DevelopmentWheel from "../ProductDevelopment/DevelopmentWheel.png"
import './style.css';

const Ideation = () => {
    return (
          <div className="background-black">
            <div className = "alignItemsRight">
            <div className = "DevelopmentWheelTwo">
              <img src ={DevelopmentWheel} />
            </div>
            <div className="ideation">
              <div className = "column">
                <div className="IdeationText">Ideation</div>
                <div className= "paragraphText">Ideation involves the synthesis, communication, and validation of novel concepts as they relate to a new product. We start with problem identification to define the scope of the problem and begin market research to begin thinking about a solution. The last steps of ideation is for our teams to plan out ideas until a final concept is decided,  expanding upon the previous research and digging deeper into the pros, cons, and implementation of a given technology. </div>
              </div>
            </div>
           </div>
           </div>
            
    );
};
export default Ideation;