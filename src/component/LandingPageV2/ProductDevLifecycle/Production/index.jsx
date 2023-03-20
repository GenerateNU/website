import React from "react";
import DevelopmentWheel from "../../../../assets/images/landingpage-v2/Production.svg"
import './style.css';

const Production = () => {
    return (
          <>
          <div className="background-black">
            <div className = "alignItemsRight">
            <div className = "DevelopmentWheelThree">
              <img className = "DevelopmentWheelImageThree" src ={DevelopmentWheel} />
            </div>
            <div className="ideation">
              <div className = "column">
                <div className="ProductionText">Delivery</div>
                <div className= "paragraphText" id="deliveryText">During the delivery phase, the design and engineering prototypes are merged into a cohesive design. This final product is validated to meet our clients’ needs through testing, laying the foundation for a successful launch. All of our work is thoroughly documented to ensure that our clients have the necessary resources to continue their development, or move directly into production. </div>
              </div>
            </div> 
           </div>
           </div>
          </>
            
    );
};
export default Production;