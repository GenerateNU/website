import React from "react";
import Categories from "./Categories";
import Search from "./Search";

export default function ApplyPage() {
  return (
    <div className="ap_container">
      <div className="ap_img"></div>
      <div className="ap_text">
        WE VIBE HARD AND <br></br> MAKE THINGS
      </div>
      <div className="d-flex">
        <div className="ap_text2 col-6 me-5 pe-5">
          <div>
            Team Applications will be live from July 25 to August 5.<br></br>
          </div>

          <div>
            We’re always looking for passionate individuals who are ready to
            learn and grow. We have opportunities that run broad and deep. If
            you don’t see anything right now drop an email and we’ll let you
            know when posiitons open up again.
          </div>
        </div>
        <div className="col-4 h-100">
          <div className="space-above-search"></div>
          <Search className="" />
        </div>
      </div>
      <Categories />
    </div>
  );
}
