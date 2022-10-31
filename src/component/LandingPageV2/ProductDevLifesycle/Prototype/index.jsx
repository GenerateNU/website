import React from "react";
import DevelopmentWheel from "../ProductDevelopment/DevelopmentWheel.png"
import './style.css';

const Prototype = () => {
    return (
          <div className="background-black">
            <div className = "alignItemsRight">
            <div className = "DevelopmentWheelThree">
              <img src ={DevelopmentWheel} />
            </div>
            <div className="ideation">
              <div className = "column">
                <div className="PrototypeText">Prototype</div>
                <div className= "paragraphText">Research and concept generation during the Ideation phase is synthesized into a test product. The prototyping phase is unique in that it’s split into 2 tracks: Experience and Functionality. Each track of the prototyping phase is  done iteratively. An experienced prototype model will be designed based on how the final product should look, feel and be interacted with to undergo testing. The functionality track will focus on how the product should work and be tested under those conditions. </div>
              </div>
            </div>
           </div>
           </div>
            
    );
};
export default Prototype;