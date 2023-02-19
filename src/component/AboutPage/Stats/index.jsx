import React from "react";
import "./style.css";

export default function Stats() {
  return (
    <div className="position-relative w-75 vh-100 d-flex bg-white">
      <div className="todayContainer">
        <p className="today">TODAY</p>
      </div>
      <div className="statsContainer">
        <p className="statTtile">Members</p>
        <p className="stateNumber">135</p>
        <div className="clients">
          <p className="statTtile">Clients</p>
          <p className="stateNumber">47</p>
        </div>
        <div className="teams">
          <p className="statTtile">Teams</p>
          <p className="stateNumber">22</p>
        </div>
        <div className="roles">
          <p className="statTtile">Roles</p>
          <p className="stateNumber">44</p>
        </div>
      </div>
    </div>
  );
}
