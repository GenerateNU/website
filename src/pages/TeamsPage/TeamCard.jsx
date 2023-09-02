import React from "react";
import "./style.css";
import useWebsite from "../../shared/useWebsite";
import { Rotate90DegreesCcw } from "@material-ui/icons";

const TeamCard = ({ color = "black", name = "Team", image = null }) => {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;
  const mobile = (!isBigScreen) || !isWebsite;
  
  return !mobile ? (
    <a href={"/teams-expanded#" + name.toLowerCase()} className="link-wrapper">
      <div className="card-container-flex" style={{ backgroundColor: color }}>
        <img className="card-img" src={image} alt="" />
        <div className="title-bkgnd">
          <div className="title-text" style={{ color: color }}>
            {name}
          </div>
        </div>
      </div>
    </a>
  ) : (
    <a href={"/teams-expanded#" + name.toLowerCase()} className="link-wrapper-mobile">
      <div
        className="d-flex flex-row-reverse align-items-center justify-content-around w-100"
        style={{ backgroundColor: color }}
      >
        
        <img className="card-img-mobile" src={image} alt="" />
        <div className="title-bkgnd-mobile" style={{transform: Rotate90DegreesCcw}}>
          <div className="title-text" style={{ color: color, transform: "rotate(90deg)" }}>
            {name}
          </div>
        </div>
      </div>
    </a>
  );
};

export default TeamCard;
