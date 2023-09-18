import React from "react";
import Categories from "./Categories";
import Search from "./Search";
import NavBar from "../NavBar";
import { useParams } from "react-router-dom";

const isBigScreen = !window.matchMedia("(max-device-width: 650px)").matches;

const quote =
  "We’re always looking for passionate individuals who are ready to learn and grow. We have opportunities that run broad and deep. If you don’t see anything right now drop an email and we’ll let you know when positions open up again.";

const vibeQuote = ["WE VIBE HARD AND", "MAKE THINGS"];
const desktopContent = (team) => {
  return (
    <>
      <div className="ap_container">
        <div className="ap_img" />
        <div className="navbar-style">
          <NavBar />
        </div>
        <div className="ap_text">{vibeQuote.join(" ")}</div>
        <div className="d-flex">
          <div className="ap_text2 col-6 me-5 pe-5">
            <div>{quote}</div>
          </div>
          <div className="col-4 h-100">
            <div className="space-above-search"></div>
            <Search />
          </div>
        </div>
        <Categories disp="desktop" selectedTeam={team}/>
      </div>
    </>
  )
};
const mobileContent = (team) => {
  return (
    <>
      <div className="ap_mobile">
        <div className="ap_img" />
        <div className="navbar-style">
          <NavBar />
        </div>
        <p className="ap_text_mobile">{vibeQuote[0]}</p>
        <p className="ap_text_mobile">{vibeQuote[1]}</p>

        <div className="ap_text2_mobile">
          <div>{quote}</div>
        </div>
        <div className="search-bar-width">
          <Search />
        </div>
        <Categories disp="mobile" selectedTeam={team}/>
      </div>
    </>
  )
};
export default function ApplyPage() {
  const { team } = useParams();
  return isBigScreen ? desktopContent(team) : mobileContent(team)
}
