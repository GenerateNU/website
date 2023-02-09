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
  const logos1 = [Shortfall, Tiliti, Burncam];

  const logos2 = [Shownxt, Klip, RootedLiving];

  const logos3 = [MentorMatch, ArtistLaunch, Limewire];

  const l1 = logos1.map((logo) => (
    <div className="logo">
      <img src={logo} alt="" />
    </div>
  ));

  const l2 = logos2.map((logo) => (
    <div className="logo">
      <img src={logo} alt="" />
    </div>
  ));

  const l3 = logos3.map((logo) => (
    <div className="logo">
      <img src={logo} alt="" />
    </div>
  ));

  return (
    <>
      <div className="col-1">{l1}</div>
      <div className="col-2">{l2}</div>
      <div className="col-3">{l3}</div>
    </>
  );
}
