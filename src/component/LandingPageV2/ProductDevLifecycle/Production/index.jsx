import React from "react";
import DevelopmentWheel from "../ProductDevelopment/DevelopmentWheel.png"
import './style.css';

const Production = () => {
    return (
          <div className="background-black">
            <div className = "alignItemsRight">
            <div className = "DevelopmentWheel">
              <img src ={DevelopmentWheel} />
            </div>
            <div className="ideation">
              <div className = "column">
                <div className="ProductionText">Production</div>
                <div className= "paragraphText">During the production phase, the Experience and Functionality prototypes  are merged into a single design (the Engineering Product), which is then validated in an increasingly rigorous way to ensure that the product can be manufactured.  Once those steps have been completed, then the product is ready to be produced and sold, ending our product development process with satisfied clients. </div>
              </div>
            </div> 
           </div>
           </div>
            
    );
};
export default Production;