import React from "react";
import wheelImg from "../ProductDevelopment/DevelopmentWheel.png"
import DevelopmentWheel from "../DevelopmentWheel"
import DevelopmentText from "../DevelopmentText"
import './style.css';

const Prototype = () => {
    /*return (
          <div className="background-black">
            <div className = "alignItemsRight">
            <div className = "DevelopmentWheelThree">
              <img class="DevelopmentWheelImage" src ={DevelopmentWheel} />
            </div>
            <div className="ideation">
              <div className = "column">
                <div className="PrototypeText">Prototype</div>
                <div className= "paragraphText">From the background research and concept generation in the ideation phase, the concept is ready for prototyping and initial implementation. The Prototyping phase has two main facets: design and engineering. The ‘design’ aspect covers the user experience and interaction with the product, while the ‘engineering’ aspect focuses on the specific engineering implementation of the concept. Both of these elements provide valuable insights which inform the final direction of the product. </div>
              </div>
            </div>
           </div>
           </div>
            
    );*/
    const paragraphText = "From the background research and concept generation in the ideation phase, \
                          the concept is ready for prototyping and initial implementation. \
                          The Prototyping phase has two main facets: design and engineering. \
                          The ‘design’ aspect covers the user experience and interaction with the product, \
                          while the ‘engineering’ aspect focuses on the specific engineering implementation of the concept. \
                          Both of these elements provide valuable insights which inform the final direction of the product."
    return (
      <>
        <DevelopmentWheel img={wheelImg} />
        <DevelopmentText titleText={"Prototype"} paragraphText = {paragraphText} titleColor = {"#FF6660"} />
      </>
    );
};
export default Prototype;