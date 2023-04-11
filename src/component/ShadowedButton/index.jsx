import React from "react";
import "./style.css";
import { constants } from "../../assets/constants.js";

export default function ShadowedButton(props) {
  const ButtonStyle = {
    backgroundColor: props.fillColor,
    padding: `${props.yPad || "1rem"} ${props.xPad}`,
    fontSize: `${props.fontSize || "1.5vw"}`,
  };

  const handleOnClick = () => {
    const name = props.lnk;
    const key = name.replace(" ", "_");
    const POSITIONS_URL = "Position_" + key;
    window.location.assign(constants[POSITIONS_URL]);
  };

  return (
    <button
      className={`button-style fit-content me-5 text-nowrap ${props.className}`}
      style={ButtonStyle}
      onClick={props.onClick ? props.onClick : handleOnClick}
    >
      {props.text}
    </button>
  );
}
