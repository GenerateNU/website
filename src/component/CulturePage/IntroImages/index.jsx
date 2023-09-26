import React from "react";
import "./style.css";
import IntroImg1 from "../../../component/CulturePage/IntroImages/website-2.jpg";
import IntroImg2 from "../../../component/CulturePage/IntroImages/website-3.jpg";
import IntroImg3 from "../../../component/CulturePage/IntroImages/website-4.jpg";

const desktopContent = () => {
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

const mobileContent = () => {
  return (
    <div className="intro-images-container-mobile">
      <text className="fun-text-mobile"> HAVE SOME FUN WITH US </text>
      <img className="img-formatting-mobile" src={IntroImg1} alt="IntroImage1" />
      <img className="img-formatting-mobile" src={IntroImg2} alt="IntroImage2" />
      <img className="img-formatting-mobile" src={IntroImg3} alt="IntroImage3" />
      <div className="line-mobile" />
    </div>
  );
}

export default function IntroSection(props) {
  return props.disp ? mobileContent() : desktopContent()
}
