import React from "react";
import "./style.css";
import IntroImg1 from "../../../component/CulturePage/IntroImages/website-2.jpg";
import IntroImg2 from "../../../component/CulturePage/IntroImages/website-3.jpg";
import IntroImg3 from "../../../component/CulturePage/IntroImages/website-4.jpg";

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
