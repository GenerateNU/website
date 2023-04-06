import React from "react";
import "./style.css";
import RectImg1 from "./website-5.jpg";
import RectImg2 from "./website-6.jpg";
import RectImg3 from "./website-7.jpg";
import { DialogContent } from "@material-ui/core";

const Events = () => {
    const imgWidth = 25; //the value by which to scale the viewport height to get the image width
    const imgHeight = 1.4*imgWidth;
  return (
    <>
    <div className="events-container position-relative vh-100 py-4 px-5">
      <div className="w-100 pe-5 d-flex">
        <div className="events-top">celebrate &amp; represent</div>
      </div>
      <div className="events-header text-no-fill text-uppercase start-0 pb-4">events</div>

      <div className="events-picture-container row gx-5 d-flex lex-wrap justify-content-between py-5">
          {/* <div className="for-padding"> */}
              <div class="col-4">
                <img className="img-formatting" style={{ width: `${imgWidth}vmin`, height: `${imgHeight}vmin`}} src={RectImg1} alt="" />
              </div>
        {/* </div> */}
          <div class="col-4">
            <img className="img-formatting" style={{ width: `${imgWidth}vmin`, height: `${imgHeight}vmin`}} src={RectImg2} alt="" />
          </div>
          <div class="col-4">
            <img className="img-formatting" style={{ width: `${imgWidth}vmin`, height: `${imgHeight}vmin`}} src={RectImg3} alt="" />
          </div>
                  </div>
      </div>
      
    <div class="retreat-div">
            <p className="text-uppercase retreat-title">retreat</p>
            <p className="retreat-text">
              Retreat is the ultimate team-bonding experience, and is everyones favorite event of the year. We spend the night in a house up north, and get to know each other! You can expect walks in the woods, playing games, home-cooked meals, and stories to laugh about for years to come.
            </p>
          </div>

    </>
  );
};

export default Events;
