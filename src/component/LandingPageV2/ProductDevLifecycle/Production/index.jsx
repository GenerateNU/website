import React from "react";
import DevelopmentWheel from "../ProductDevelopment/DevelopmentWheel.png"
import './style.css';

const Production = () => {
    return (
          <>
            <div className="background-black-wheel">
              <div className = "DevelopmentWheel">
                <img  style={{width: '64vh'}} src ={DevelopmentWheel} />
              </div>
            </div>
            <div className="background-black-text">
              <div className = "alignItemsRight"></div>
              <div className="ideation">
                <div className = "column">
                  <div className="ProductionText">Delivery</div>
                  <div className= "paragraphText">During the delivery phase, the design and engineering prototypes are merged into a cohesive design. This final product is validated to meet our clients’ needs through testing, laying the foundation for a successful launch. All of our work is thoroughly documented to ensure that our clients have the necessary resources to continue their development, or move directly into production. </div>
                </div>
              </div> 
           </div>
           </>
            
    );
};
export default Production;