import React from "react";
import "./style.css";
import ColorBlock from "../../../assets/images/culturepage/Color block.png";

export default function BelongHere() {
  return (
    // <div className="container">
    <div>
       <div className="color-block">
         <img className="graphic" src={ColorBlock} alt="" />
          </div>
      <div className="paragraphs">
        
        <div className="belong-here">
          <h2 className="heading-text">Belong Here</h2>
          <div className="culture-text-box">
          <p className="culture-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est sed
            nunc porttitor arcu etiam. Eget duis sapien, faucibus nunc nec elit
            tempus risus. Tincidunt sagittis nulla orci id. Augue risus
            adipiscing mi eleifend proin nisl ac gravida. Viverra cursus.
          </p>

          </div>
        </div>
        <div className="thrive-together">
         
          <h2 className="heading-text">Thrive Together</h2>
          <div className="culture-text-box">
          <p className="culture-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est sed
            nunc porttitor arcu etiam. Eget duis sapien, faucibus nunc nec elit
            tempus risus. Tincidunt sagittis nulla orci id. Augue risus
            adipiscing mi eleifend proin nisl ac gravida. Viverra cursus.
          </p>
          </div>
        </div>
      </div>
      </div>
  );
}
