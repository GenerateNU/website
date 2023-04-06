import React from "react";
// import NumberTickerAnimation from "./NumberTickerAnimation.jsx";
import "./style.css";

export default function Stats() {
  // const tickRate = 50;

  const stats = [
    { title: "Members", number: 135 },
    { title: "Clients", number: 47 },
    { title: "Teams", number: 22 },
    { title: "Roles", number: 44 },
  ];

  return (
    <div className="position-relative vh-100 vw-75 bg-white d-flex today-stats-container">
      <div className="today-container">
        <h1>TODAY</h1>
      </div>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-container" key={index}>
            <p className="stat-title">{stat.title}</p>
            <h1 className="stat-number">{stat.number}</h1>
            {/* <NumberTickerAnimation targetNumber ={stat.number} tickRate={tickRate}/> */}
          </div>
        ))}
      </div>
    </div>
  );
}
