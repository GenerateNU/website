import React from "react";
import wheelImg from "../ProductDevelopment/DevelopmentWheel.png"
import DevelopmentWheel from "../DevelopmentWheel"
import DevelopmentText from "../DevelopmentText";
import './style.css';

const Ideation = () => {
    /*return (
      <div className="background-black">
        <div className="alignItemsRight">
          <div className="DevelopmentWheelTwo">
            <img class="DevelopmentWheelImage" src={DevelopmentWheel} />
          </div>
          {/* <div className="DevelopmentWheelTwoMobile">
            <img style={{ width: "30vh" }} src={DevelopmentWheelMobile} />
          </div> */ /*}
          <div className="ideation">
            <div className="column">
              <div className="IdeationText">Ideation</div>
              <div className="paragraphText">
                Ideation involves the synthesis, definition, and validation of
                novel concepts as they relate to a new product. We start with
                problem identification to define the scope of the problem and
                begin market research to begin thinking about a solution. The
                last step of ideation is to plan out ideas until a final concept
                is decided, expanding upon the previous research and digging
                deeper into its overall viability.
              </div>
            </div>
          </div>
        </div>
      </div>
    );*/
    const paragraphText = "Ideation involves the synthesis, definition, and validation of \
    novel concepts as they relate to a new product. We start with \
    problem identification to define the scope of the problem and \
    begin market research to begin thinking about a solution. The \
    last step of ideation is to plan out ideas until a final concept \
    is decided, expanding upon the previous research and digging \
    deeper into its overall viability."

    return (
      <>
        <DevelopmentWheel img={wheelImg} />
        <DevelopmentText titleText={"Ideation"} paragraphText ={paragraphText} titleColor = {"#FFBF3C"} />
      </>
    );
};
export default Ideation;