import React from "react";
import "./style.css";
import CelebrateRepresent from "./CelebrateRepresent.png";

const Events2 = () => {
  return (
    <div className="position-relative vw-100 vh-100 py-4 px-5">
      <div className="events-picture-container d-flex flex-wrap justify-content-between">
        <div class="row gx-5">
          <div class="col ps-5 pe-5">
            <p className="text-uppercase moral-budget-title">
              morale&nbsp;budget
            </p>
            <p className="t-4 r-3 moral-budget-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est sed
              nunc porttitor arcu etiam. Eget duis sapien, faucibus nunc nec
              elit tempus risus. Tincidunt sagittis nulla orci id. Augue risus
              adipiscing mi eleifend proin nisl ac gravida. Viverra cursus.
            </p>
          </div>

          <div class="col ps-5 pe-5 inclined-img-container">
            <img className="inclined-image" src={CelebrateRepresent} alt=""/>
          </div>

          <div class="col ps-5 pe-5">
            <p className="text-uppercase orientation-title">orientation</p>
            <p className="t-4 r-3 orientation-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est sed
              nunc porttitor arcu etiam. Eget duis sapien, faucibus nunc nec
              elit tempus risus. Tincidunt sagittis nulla orci id. Augue risus
              adipiscing mi eleifend proin nisl ac gravida. Viverra cursus.
              Tincidunt sagittis nulla orci id.
            </p>
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
