import React from "react";
import "./style.css";
import TimelineImg from "./Timeline.png";

export default function timeline() {
  return (
    <>
      <div >
        <div className="position-relative vh-100 py-4 px-5 d-flex bg-white">
          <div className="timeline-bg-image">
            <div class="containerbackground">
              <p>Our Timeline</p>
            </div>
            <img src={TimelineImg} 
            // alt="" height="80vh" width="70%" 
            />
            <div className="Spring2016-1">
              <div>
                {/* <h1>&lt;</h1> */}
              </div>
              <div className="Spring2016-text">
                {/* <h1>Spring 2016</h1> */}
                <p>
                  Generate is founded by Bailey Kane and Mina Iskarous,
                  Ted Johnson, Assistant Program Manager of the
                  Sherman Center, and Shashi Murthy, Director of the Sherman
                  Center.
                </p>
              </div>
            </div>
            <div className="Spring2016-2">
              <div>
                {/* <h1>&lt;</h1> */}
              </div>
              <div className="Spring2016-text-2">
                <p>
                  We take on our first wave of clients, creating our initial 2
                  hardware teams.
                </p>
              </div>
            </div>

            <div className="Spring2018">
              <div>
                {/* <h1>&lt;</h1> */}
              </div>
              <div className="Spring2018-text">
              {/* <h1>Spring 2018</h1> */}
                <p>We take on our first software client, Malaria Free World</p>
              </div>
            </div>

            <div className="Fall2019-1">
              <div>
                {/* <h1>&lt;</h1> */}
              </div>
              <div className="Fall2019-text-1">
              {/* <h1>Fall 2019</h1> */}
                <p>The Makerspace opens for access in Hayden Hall.</p>
              </div>
            </div>

            <div className="Spring2019-1">
              <div>
                {/* <h1>&lt;</h1> */}
              </div>
              <div className="Spring2019-text-1">
              {/* <h1>Fall 2019</h1> */}
                <p>We grow to over  <br></br> members.</p>
              </div>
            </div>

            <div className="Spring2019-2">
              <div>
                {/* <h1>&lt;</h1> */}
              </div>
              <div className="Spring2019-text-2">
                <p>
                Software Build Studio introduces UX/UI  designers.
                </p>
              </div>
            </div>

            <div className="Spring2019-3">
              <div>
                {/* <h1>&lt;</h1> */}
              </div>
              <div className="Spring2019-text-3">
              {/* <h1>Fall 2019</h1> */}
                <p>Our client Cruz Control files for a provisional patent, allowing the project team who worked with them to have their names on a patent.</p>
              </div>
            </div>

            <div className="Fall2019-1">
              <div>
                {/* <h1>&lt;</h1> */}
              </div>
              <div className="Fall2019-text-1">
              {/* <h1>Fall 2019</h1> */}
                <p>The Makerspace opens for access in Hayden Hall.</p>
              </div>
            </div>

            <div className="Fall2019-2">
              <div>
                {/* <h1>&lt;</h1> */}
              </div>
              <div className="Fall2019-text-2">
                <p>
                  Smartypill becomes our first client to have a Hardware and a
                  Software team working on their project
                </p>
              </div>
            </div>

            <div className="Spring2021-1">
              <div>
                {/* <h1>&lt;</h1> */}
              </div>
              <div className="Spring2021-text">
                <p>
                {/* <h1>Spring 2021</h1> */}
                  Funding is acquired to allow the Executive Director to be paid
                  as a full time position.
                </p>
              </div>
            </div>
            <div className="Spring2021-2">
              <div>
                {/* <h1>&lt;</h1> */}
              </div>
              <div className="Spring2021-text-2">
                <p>
                  Designers are added to Hardware Build Studio teams and brand
                  designs to Software teams
                </p>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
      <div className="members">
            <div className="today">
            <h3>TODAY</h3>
            </div>
            <div className="membersInfo">
              <div className="membersInfo-Members">
                <h1>Members</h1>
                <p>135</p>
              </div>
              <div className="membersInfo-Clients">
                <h1>Clients</h1>
                <p>47</p>
              </div>
              <div className="membersInfo-Teams">
                <h1>Teams</h1>
                <p>22</p>
              </div>
              <div className="membersInfo-Roles">
                <h1>Roles</h1>
                <p>44</p>
              </div>
            </div>
          </div>
    </>
  );
}
