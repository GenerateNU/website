import React from "react";
import "./style.css";
import GenerateLogoWhite from '../../../assets/images/landingpage/weare/GenerateLogoWhite.png';


export default function WhoWeAreResponse() {
    return (
      <div className="whoWeAreResponseContainer">
         <div className="greenrectangle" >
          <div className="weareresponse ">IN OTHER WORDS we build amazing products for amazing clients</div>
         </div>
         <div className="yellowrectangle">
            <img className="generateLogoWhiteStyle" src={GenerateLogoWhite} alt=""/>
            <img src={GenerateLogoWhite} alt=""/>
            <img src={GenerateLogoWhite} alt=""/>
            
         </div>
                
               
       </div>
     

    );
}