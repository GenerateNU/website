import React from "react";
import "./style.css";
import RectImg1 from "./website-5.jpg";
import RectImg2 from "./website-6.jpg";
import RectImg3 from "./website-7.jpg";
import { DialogContent } from "@material-ui/core";

const Events = () => {
  return (
    <>
      <div className="events-container position-relative py-4 px-5">
          <div className="events-top">celebrate &amp; represent</div>

        <div className="events-header text-no-fill text-uppercase position-absolute start-0 bottom-1 ps-4 pb-4">
        {/* <div className="eventsTitle"> */}
          events
        </div>

        <div className="events-picture-container d-flex flex-wrap justify-content-between">
            {/* <div className="for-padding"> */}
              <div class="row gx-5">
                <div class="col">
                  <img className="img-formatting" style={{ width: 250, height: 350 }} src={RectImg1} alt="" />
                </div>
          {/* </div> */}
            <div class="col">
              <img className="img-formatting" style={{ width: 250, height: 350 }} src={RectImg2} alt="" />
            </div>
            <div class="col">
              <img className="img-formatting" style={{ width: 250, height: 350 }} src={RectImg3} alt="" />
            </div>
            
          </div>
        </div>
      </div>
      <div class="col">
        <p className="text-uppercase retreat-title">retreat</p>
        <p className="retreat-text">
          Retreat is the ultimate team-bonding experience, and is everyone's favorite event of the year. We spend the night in a house up north, and get to know each other! You can expect walks in the woods, playing games, home-cooked meals, and stories to laugh about for years to come.
        </p>
        </div>
    </>
  );
};

export default Events;
