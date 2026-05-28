import React from "react";
import "./style.css";
import DevelopmentWheel from "../ProductDevelopment/DevelopmentWheel.png";

const ProductDevelopment = () => {
  return (
    <div className="background-black productDevcontainer">
      <div className="alignItemsRight">
        <div className="column">
          <div className="ourProcessText">our process </div>
          <div className="ProductDevText">Product Development Cycle </div>
          <div className="paragraphText mainDevCycleParagraph">
            Generate's product development cycle is a roadmap to guide any
            product's lifetime. We base our process on common industry practice,
            using an iterative process that includes research, prototyping and
            production. Though each product's journey is unique and often
            challenging, our reliable framework can bring our clients' visions
            to life.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDevelopment;
