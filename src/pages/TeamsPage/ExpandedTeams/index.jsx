import React from "react";
import './style.css';
import Management from "./Management/index"
import NavBar from "../../../component/NavBar";

export default class ExpandedTeamsPage extends React.Component {
  render() {
    return (
      <div class="expanded-wrapper">
        <div className="intro-navbar">
            <NavBar />
        </div>
        <Management/>
      </div>
      // To add a section and link to it from the teams page, add an ID tag to topmost div of section, i.e: 'id="team_name"'
      // See Managment section for example
    );
  }
};