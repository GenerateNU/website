import React from "react";
import "./style.css";
import TimelineImg from "./Timeline.png";
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
        <div className="members">
          <div className="today">
            <h3>TODAY</h3>
          </div>
          <div className="membersInfo">
            <div className="membersInfo-Members">
              <h1>Members</h1>
              <p>135</p>
            </div>
            <div className="membersInfo-Clients">
              <h1>Clients</h1>
              <p>47</p>
            </div>
            <div className="membersInfo-Teams">
              <h1>Teams</h1>
              <p>22</p>
            </div>
            <div className="membersInfo-Roles">
              <h1>Roles</h1>
              <p>44</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
