import React from "react";
import "./style.css";
import Klip from "../../../assets/images/landingpage-v2/Klip.png";
import Limewire from "../../../assets/images/landingpage-v2/Limewire.png";
import MentorMatch from "../../../assets/images/landingpage-v2/Mentor Match.png";
import RootedLiving from "../../../assets/images/landingpage-v2/Rooted Living.png";
import Shortfall from "../../../assets/images/landingpage-v2/Shortfall.png";
import Shownxt from "../../../assets/images/landingpage-v2/Shownxt.png";
import Tiliti from "../../../assets/images/landingpage-v2/Tiliti.png";
import ArtistLaunch from "../../../assets/images/landingpage-v2/ArtistLaunch.png";
import Burncam from "../../../assets/images/landingpage-v2/Burncam.png";

export default function PreviousProjects() {
  const logos = [
    Shortfall,
    Shownxt,
    MentorMatch,
    Tiliti,
    Klip,
    ArtistLaunch,
    Burncam,
    RootedLiving,
    Limewire,
  ];
  const listLogos = logos.map((logo) => (
    <div className="logo">
      <img src={logo} alt="" />
    </div>
  ));
  return (
    <div className="prev-proj-wrapper">
      <div className="wrapper">{listLogos}</div>
    </div>
  );
}
