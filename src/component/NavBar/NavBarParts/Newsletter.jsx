import React from "react";
import * as constants from "./Constants";

export const newsletterify = (top, left, width, height) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
        width: `${width}vw`,
        height: `${height}vh`,
        backgroundColor: constants.YELLOW,
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div className="newsletter-font"> Newsletter </div>{" "}
    </div>
  );
};

export const yellowrectify = (top, left, width, height, contents = <> </>) => {
  return (
    <div
      style={{
        position: "absolute",
        top: `${top}%`,
        left: `${left}%`,
        width: `${width}vw`,
        height: `${height}vh`,
        backgroundColor: constants.YELLOW,
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {contents}{" "}
    </div>
  );
};