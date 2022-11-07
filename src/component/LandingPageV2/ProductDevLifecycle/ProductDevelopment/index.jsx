import React from "react";
import './style.css';
import DevelopmentWheel from "../ProductDevelopment/DevelopmentWheel.png"

const ProductDevelopment = () => {
    return (
          <div className="background-black productDevcontainer">
          <div className = "alignItemsRight">
            <div className = "column">
              <div className="ourProcessText">our process </div>
              <div className="ProductDevText">Product Development Cycle </div>
              <div className= "paragraphText">Generates product development cycle is a roadmap to guide any products lifetime. We base our process on common industry practice, using an iterative process that includes research, prototyping and production. Though each products journey is unique and often challenging, our reliable framework can bring your vision to life. </div>
            </div>
            {/* <div className = "DevelopmentWheel">
              <img src ={DevelopmentWheel} />
            </div> */}

{/* 
            <div className = "DevelopmentWheelTwo">
              <img src ={DevelopmentWheel} />
            </div>
            <div className="ideation">
              <div className = "column">
                <div className="IdeationText">Ideation</div>
                <div className= "paragraphText">Ideation involves the synthesis, communication, and validation of novel concepts as they relate to a new product. We start with problem identification to define the scope of the problem and begin market research to begin thinking about a solution. The last steps of ideation is for our teams to plan out ideas until a final concept is decided,  expanding upon the previous research and digging deeper into the pros, cons, and implementation of a given technology. </div>
              </div>
            </div>

            <div className = "DevelopmentWheelThree">
              <img src ={DevelopmentWheel} />
            </div>
            <div className="ideation">
              <div className = "column">
                <div className="PrototypeText">Prototype</div>
                <div className= "paragraphText">Research and concept generation during the Ideation phase is synthesized into a test product. The prototyping phase is unique in that it’s split into 2 tracks: Experience and Functionality. Each track of the prototyping phase is  done iteratively. An experienced prototype model will be designed based on how the final product should look, feel and be interacted with to undergo testing. The functionality track will focus on how the product should work and be tested under those conditions. </div>
              </div>
            </div>

            <div className = "DevelopmentWheel">
              <img src ={DevelopmentWheel} />
            </div>
            <div className="ideation">
              <div className = "column">
                <div className="ProductionText">Production</div>
                <div className= "paragraphText">During the production phase, the Experience and Functionality prototypes  are merged into a single design (the Engineering Product), which is then validated in an increasingly rigorous way to ensure that the product can be manufactured.  Once those steps have been completed, then the product is ready to be produced and sold, ending our product development process with satisfied clients. </div>
              </div>
            </div> */}

        </div>

            </div>  
    );
};
export default ProductDevelopment;