import React from "react";

function positionDetails() {
  return (
    <>
      <div id="container_main">
        <div class="left_panel">
          <div class="leftPanel_container">
            <div class="dir">
              <p>EXECUTIVE</p>
              <p>DIRECTOR</p>
            </div>
            <div class="mgt">
              <p>MANAGEMENT</p>
            </div>
            <div class="buttons">
              <div class="button_apply">
                {/* <img src="" alt="">  */}
                <button>apply now</button>
              </div>
              <div class="button_share">
                {/* <img src="" alt="">  */}
                
                <button>share</button>
              </div>
            </div>
          </div>
        </div>
        <div class="right_panel">
          <div class="rightPanel_container">
            <a href="#">
              {" "}
              &lt; --  <u> positions</u>
            </a>
            <p>
              The Executive Director is responsible for creating and executing
              their vision of Generate. This role is responsible for leading
              Generate’s management team and the organization as a whole. The
              Executive Director facilitates day-to-day Generate operations
              while determining the overarching big-picture goals of the
              organization.
            </p>

            <h2>
              <strong>What you’ll do</strong>
            </h2>
            <ul>
              <li>
                Generate’s Executive Director is responsible for determining,
                appointing, and developing all Management team positions. This
                role is also responsible for representing Generate, building
                relationships with other student-led organizations and
                University professionals, and will be expected to speak on
                behalf of Generate at all internal and external events.
              </li>
              <li>
                The Fall 2022-Spring 2023 Executive Director will be expected to
                create both long-term and short-term organizational and personal
                goals and deliver on these promises. These goals should promote
                Generate’s mission and the vision created by this role at the
                start of their term.
              </li>
            </ul>

            <h2>
              <strong>Who you are</strong>
            </h2>
            <ul>
              <li>Understanding of their own personal leadership style.</li>
              <li>Ability to lead and inspire others.</li>
              <li>
                Capable of strategically identifying and solving problems.
              </li>
              <li>Clear and concise communication skills.</li>
              <li>Passionate about others’ growth.</li>
              <li>Preferred experience in Generate.</li>
            </ul>

            <div class="duration">
              <div class="date">
                <h4>Duration</h4>
                <h2>May 2022 - May 2023</h2>
              </div>
              <div class="hours">
                <h4>Weekly commitment</h4>
                <h2>Up to 20 hours</h2>
              </div>
            </div>

            <p>
              This position begins and ends with the Northeastern academic
              semester. The last day to apply is January 17th.
            </p>

            <a href="#">
              <u> learn more about the management team</u> -- &gt;{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default positionDetails;
