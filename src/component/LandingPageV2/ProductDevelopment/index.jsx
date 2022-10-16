import React from "react";
import './style.css';
import DevelopmentWheel from "../ProductDevelopment/DevelopmentWheel.png"

const ProductDevelopment = () => {
    return (
        // <div className="position-relative vw-100 vh-100 py-4 px-5">
          <div className="background-black">
          <div classname = "alignItemsRight">
            <div classname = "column">
              <div className="ourProcessText">our process </div>
              <div className="ProductDevText">Product Development Cycle </div>
              <div className= "paragraphText">Generates product development cycle is a roadmap to guide any products lifetime. We base our process on common industry practice, using an iterative process that includes research, prototyping and production. Though each products journey is unique and often challenging, our reliable framework can bring your vision to life. </div>
            </div>
            <div classname = "DevelopmentWheel">
              <img src ={DevelopmentWheel} />
            </div>
            </div>
        </div>
    );
};
export default ProductDevelopment;