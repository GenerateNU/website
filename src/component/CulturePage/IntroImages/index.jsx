import React from "react";
import "./style.css";
import IntroImg1 from "../../../assets/images/culturepage/intro_photo_1.png";
import IntroImg2 from "../../../assets/images/culturepage/intro_photo_2.png";
import IntroImg3 from "../../../assets/images/culturepage/intro_photo_3.png";

export default function IntroImages() {
  return (
    <div className="intro-images">
      <div className="for-padding">
        <img className="img-formatting" src={IntroImg1} alt="" />
      </div>
      <div className="for-padding">
        <img className="img-formatting" src={IntroImg2} alt="" />
      </div>
      <div className="for-padding">
        <img className="img-formatting" src={IntroImg3} alt="" />
      </div>
    </div>
  );
}
