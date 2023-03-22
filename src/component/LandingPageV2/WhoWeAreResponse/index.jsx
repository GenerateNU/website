import React from "react";
import "./style.css";
import GenerateLogoWhite from '../../../assets/images/landingpage/weare/GenerateLogoWhite.png';


export default function WhoWeAreResponse() {
    return (
      <div className="whoWeAreResponseContainer">
         <div className="greenrectangle" >
          <div className="weareresponse "><span className="somesaytext">SOME SAY </span>
           we are Northeastern's best product development studio :)</div>
         </div>
         <div className="yellowrectangle">
            <img className="generateLogoWhiteStyle" src={GenerateLogoWhite} alt=""/>
            <img className="generateLogoWhiteStyle" src={GenerateLogoWhite} alt=""/>
            <img className="generateLogoWhiteStyle" src={GenerateLogoWhite} alt=""/>
            <div className="logo-mobile">
               <img className="generateLogoWhiteStyle" src={GenerateLogoWhite} alt=""/>
            </div>
            
         </div>
                
               
       </div>
     

    );
}