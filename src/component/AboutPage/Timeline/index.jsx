import React from "react";
import "./style.css";
import Timeline from "./TimelineFinal.png";

export default function timeline() {
  return (
    <>
      <div>
        <div className="position-relative vh-100 py-4 px-5 d-flex bg-white">
          <div className="timeline-bg-image">
            <img src={Timeline} alt="" height="200%" width="150%"></img>
          </div>
        </div>
      </div>
    </>
  );
}
