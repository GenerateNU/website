import React from "react";
import cooltriangle from "../../AboutPage/GrowthMantra/Green.png";
import leftcarrot from "../../AboutPage/GrowthMantra/chevron.png";
import './style.css';

const GrowthMantra = () => {
    return (
        // <div className="position-relative vw-100 vh-100 py-4 px-5">
          <div className="background-white">
            <div className="alignItemsRight">
            <div className="mantra">
            <p className="Growth-text">Growth</p>
            <p className="IsOurText">Is Our</p>
            <p className="MantraText">Mantra</p>
            </div>
            <div className="interestedText">Interested</div>
            </div>
            
            {/* <div className="paragraphText">Our values arent just surface level but run deep throughout our organization. We always encourage our members to take on new challenges. Tools and resources are only an ask away, and members can test out their ideas to drive development.</div> */}
          <div className="alignItemsRight">
            {/* <div className= "paragraphTextTwo">Teams work side-by-side to ensure products and processes are beyond expectations. We are self-driven and help one another reach goals and become leaders. Not only do we build products, but we also build community, leadership, and opportunities.</div> */}
            <div className= "paragraphTextGrowthMantra">Our values arent just surface level but run deep throughout our organization. We always encourage our members to take on new challenges. Tools and resources are only an ask away, and members can test out their ideas to drive development.</div>
         
          
            {/* <div className= "paragraphTextTwo">Teams work side-by-side to ensure products and processes are beyond expectations. We are self-driven and help one another reach goals and become leaders. Not only do we build products, but we also build community, leadership, and opportunities.</div> */}
            <div className= "paragraphTextGrowthMantra">Teams work side-by-side to ensure products and processes are beyond expectations. We are self-driven and help one another reach goals and become leaders. Not only do we build products, but we also build community, leadership, and opportunities.</div>
            <div className="cooltriangle">
              <img src={cooltriangle} height="400vh" width="600vw"/> 
            </div>
            <div className= "blackRectangle">
              <div className= "applyNowBox">
                <a href= "/apply" className="applyNowText">apply now</a>
              </div>
            </div>
            <div className="leftcarrot">
              <img src={leftcarrot} height="50vh" width="50vw"/> 
            </div>
            <div className= "paragraphTextThree">Join a community that shares the same goal - turning ideas into reality</div>
            
         </div>
         
            
            
        </div>
    );
};
export default GrowthMantra;