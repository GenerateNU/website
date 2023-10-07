import React from "react";
import cooltriangle from "../../AboutPage/GrowthMantra/Green.png";
import leftcarrot from "../../AboutPage/GrowthMantra/chevron.png";
import mountains from "../../AboutPage/GrowthMantra/Mountains.svg";
import './style.css';


const GrowthMantra = () => {
  return (
    // <div className="position-relative vw-100 vh-100 py-4 px-5">
    <div className="background-fit-content">
      <div className="background-white growthMantraContainer">
        <div className="alignItemsRightMantra">
          <div className="mantraAlignment">
            <p className="Growth-text">Growth</p>
            <p className="IsOurText">Is Our</p>
            <p className="MantraText">Mantra</p>
          </div>
        {/* <div className="growthMantrainterestedText">Interested</div> */}
        </div>

        {/* <div className="paragraphText">Our values arent just surface level but run deep throughout our organization. We always encourage our members to take on new challenges. Tools and resources are only an ask away, and members can test out their ideas to drive development.</div> */}
        <div className="textAlignItemsRight">
          {/* <div className= "paragraphTextTwo">Teams work side-by-side to ensure products and processes are beyond expectations. We are self-driven and help one another reach goals and become leaders. Not only do we build products, but we also build community, leadership, and opportunities.</div> */}
          <div className="mantraParagraphText">
            Our values arent just surface level but run deep throughout our
            organization. We always encourage our members to take on new
            challenges. Tools and resources are only an ask away, and members can
            test out their ideas to drive development.
          </div>

          {/* <div className= "paragraphTextTwo">Teams work side-by-side to ensure products and processes are beyond expectations. We are self-driven and help one another reach goals and become leaders. Not only do we build products, but we also build community, leadership, and opportunities.</div> */}
          <div className="mantraParagraphText" style={{marginRight: "0px"}}>
            Teams work side-by-side to ensure products and processes are beyond
            expectations. We are self-driven and help one another reach goals and
            become leaders. Not only do we build products, but we also build
            community, leadership, and opportunities.
          </div>
          {/* <div className="cooltriangle">
                <img src={cooltriangle} height="400vh" width="600vw"/> 
              </div> */}

          {/* <div className="applyNowBoxGrowthMantra">
            <a href="/apply" className="applyNowText">
              apply now
            </a>
          </div>

          <div className="carrot">
            <img src={leftcarrot} />
          </div> */}

          {/* <div className="paragraphTextThree">
            Join a community that shares the same goal - turning ideas into
            reality
          </div> */}
          <img className="m-img" src={mountains} alt=""/>
        </div>

      </div>

      <div className="mtn-image">
        <img className="m-img" src={mountains} alt=""/>
      </div>
    </div>
  );
};
export default GrowthMantra;
