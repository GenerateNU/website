import React from "react";
import "./style.css";
import ColorBlock from "../../../assets/images/culturepage/Color block.png";

export default function BelongHere() {
  return (
    // <div className="container">
    <div id="belong-here-container">
       <div className="color-block">
         <img className="graphic" src={ColorBlock} alt="" />
          </div>
      <div className="paragraphs">
        
        <div className="belong-here">
          <h2 className="headingTwo-text">Belong Here</h2>
          <div className="culture-text-box">
          <p className="culture-text">
            Here at Generate, we do everything we can to create a sense of belonging within each and every Generate member. We want Generate to be more than a group of peers: a group of friends and acquaintances that work together to make every member feel welcome, respected, and valued.
          </p>

          </div>
        </div>
        <div className="thrive-together">
         
          <h2 className="heading-text">Thrive Together</h2>
          <div className="culture-text-box">
          <p className="culture-text">
            With each team working to achieve their own goals, Generate also works to create a cohesive and integrated group culture; we all succeed together, and any struggles of one group can be helped by another. The Generate family learns and grows together, continuously adapting and improving. 
          </p>
          </div>
        </div>
      </div>
      </div>
  );
}
