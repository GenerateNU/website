import React from "react";
import DevelopmentWheel from "../ProductDevelopment/PrototypeWheel.svg"
import './style.css';

const Prototype = () => {
    return (
      <>
          <div className="background-black">
            <div className = "alignItemsRight">
            <div className = "DevelopmentWheelTwo">
              <img className = "DevelopmentWheelImageTwo" /*style={{width: '80vh'}}*/ src ={DevelopmentWheel} />
            </div>
            <div className="ideation">
              <div className = "column">
                <div className="PrototypeText">Prototype</div>
                <div className= "paragraphText">From the background research and concept generation in the ideation phase, the concept is ready for prototyping and initial implementation. The Prototyping phase has two main facets: design and engineering. The ‘design’ aspect covers the user experience and interaction with the product, while the ‘engineering’ aspect focuses on the specific engineering implementation of the concept. Both of these elements provide valuable insights which inform the final direction of the product. </div>
              </div>
            </div>
           </div>
           </div>
      </>
            
    );
};
export default Prototype;