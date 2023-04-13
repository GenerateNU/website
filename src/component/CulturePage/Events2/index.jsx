import React from "react";
import "./style.css";
import CelebrateRepresent from "../Events2/CelebrateRepresent.png";

const Events2 = () => {
  return (
    <div className="position-relative vw-100 vh-100 py-4 px-5">
      <div className="events-picture-container d-flex flex-wrap justify-content-between">
        <div class="row gx-5 flex-nowrap">
          <div class="col">
            <div class ="shiftLeft">
              <div className = "MoraleBudget">
              <p className="text-uppercase moral-budget-title text-nowrap">
                morale budget
              </p>
              <p className="t-4 r-3 l-5 moral-budget-text">
                Our engagement team empowers members every semester by giving them a designated budget to spend together as teammates. What you choose to do with that budget is up to you, but you can bet itll be a good time! Teams go ax throwing, bowling, escape-room-ing, or anything else they can think of! 
              </p>
              </div>
            </div>
          </div>

          <div class="col ps-5 pe-5 d-flex vh-100 flex-column justify-content-center inclined-img-container">
            <div className="celebrate-rep-container">
              <img className="inclined-image" src={CelebrateRepresent} alt="" />
            </div>
          </div>

          <div class="col">
            <div class="shiftleft3">
            <p className="text-uppercase orientation-title">orientation</p>
            <p className="orientation-text">
              We kick off each semester by packing into the Sherman Center and getting to know each other. Youll hear introductions and updates from the management team, and learn a little bit about the team. After that, we break out for an evening of activities, arts + crafts, games, music, and food!
            </p>
            </div>
          </div>

          {/* <div class="col ps-5 pe-5">
            <p className="text-uppercase all-hands-title">all-hands</p>
            <p className="t-4 r-3 all-hands-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est sed
              nunc porttitor arcu etiam. Eget duis sapien, faucibus nunc nec
              elit tempus risus. Tincidunt sagittis nulla orci id. Augue risus
              adipiscing mi eleifend proin nisl ac gravida. Viverra cursus.
              Tincidunt sagittis nulla orci id.
            </p>
          </div> */}
          {/* <div class="col ps-5 pe-5">
            <p className="text-uppercase showcase-title">showcase</p>
            <p className="t-4 r-3 showcase-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est sed
              nunc porttitor arcu etiam. Eget duis sapien, faucibus nunc nec
              elit tempus risus. Tincidunt sagittis nulla orci id. Augue risus
              adipiscing mi eleifend proin nisl ac gravida. Viverra cursus.
              Tincidunt sagittis nulla orci id.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Events2;
