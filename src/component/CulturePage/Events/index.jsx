import React from "react";
import "./style.css";
import RectImg1 from "./Rectangle264.png";
import RectImg2 from "./Rectangle265.png";
import RectImg3 from "./Rectangle266.png";
import { DialogContent } from "@material-ui/core";

const Events = () => {
  return (
    <div className="position-relative vw-100 vh-100 py-4 px-5">
      <div className="w-75 pe-5 d-flex">
        <div className="events-top">celebrate &amp; represent</div>
      </div>

      <h1 className="events-header text-no-fill text-uppercase position-absolute start-0 bottom-1 ps-4 pb-4">
        events
      </h1>

      <div className="events-picture-container d-flex flex-wrap justify-content-between">
        <div class="row gx-5">
          <div class="col">
            <img src={RectImg1} alt="" />
          </div>
          <div class="col">
            <img src={RectImg2} alt="" />
          </div>
          <div class="col">
            <img src={RectImg3} alt="" />
          </div>
          <div class="col">
            <p className="text-uppercase retreat-title">retreat</p>
            <p className="retreat-text">
              Retreat is the ultimate team-bonding experience, and is everyones favorite event of the year. We spend the night in a house up north, and get to know each other! You can expect walks in the woods, playing games, home-cooked meals, and stories to laugh about for years to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
