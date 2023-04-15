import React from "react";
import './style.css';
import Management from "./Management/index"
import NavBar from "../../NavBar";

export default class ExpandedTeamsPage extends React.Component {
  render() {
    return (
      <div class="expanded-wrapper">
        <div className="teams-navbar">
            <NavBar />
        </div>
        <Management/>
      </div>
    );
  }
};