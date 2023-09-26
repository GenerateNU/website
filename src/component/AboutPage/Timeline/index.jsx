import React from "react";
import "./style.css";
import Timeline from "./TimelineFinal.png";

export default function timeline() {
  return (
    <>
        <div className="position-relative vh-100 py-4 px-5 d-flex bg-white timeline-container">
          <div className="timeline-bg-image">
            <img src={Timeline} alt="" height="200%" width="150%"></img>
          </div>
          <div className="timeline-text">
            <h3 className="timeline-heading">{">"}</h3>
            <h3 className="semester-text">Spring{"\n"}2016</h3>
            <ul className="semester-list">
              <li>
                <span className="semester-bullet">
                  <p>
                    Generate is founded by students Bailey Kane and Mina
                    Iskarous, with the help of Ted Johnson, Assistant Program
                    Manager of the Sherman Center, and Shashi Murthy, Director
                    of the Sherman Center at the time.
                  </p>
                </span>
              </li>
              <li>
                <span className="semester-bullet">
                  <p>
                    We take on our first wave of clients, creating our initial 2
                    hardware teams.
                  </p>
                </span>
              </li>
            </ul>
            <h3 className="semester-text">Spring{"\n"}2018</h3>
            <ul className="semester-list">
              <li>
                <span className="semester-bullet">
                  <p>We take on our first software client.</p>
                </span>
              </li>
            </ul>
            <h3 className="semester-text">Spring{"\n"}2019</h3>
            <ul className="semester-list">
              <li>
                <span className="semester-bullet">
                  <p>We grow to over 50 members.</p>
                </span>
              </li>
              <li>
                <span className="semester-bullet">
                  <p>Software Build Studio introduces UX/UI designers.</p>
                </span>
              </li>
              <li>
                <span className="semester-bullet">
                  <p>
                    Our client Cruz Control files for a provisional patent,
                    allowing the project team who worked with them to have their
                    names on a patent.
                  </p>
                </span>
              </li>
            </ul>
            <h3 className="semester-text">Fall{"\n"}2019</h3>
            <ul className="semester-list">
              <li>
                <span className="semester-bullet">
                  <p>The Makerspace opens for access in Hayden Hall.</p>
                </span>
              </li>
              <li>
                <span className="semester-bullet">
                  <p>
                    Smartypill becomes our first client to have a Hardware and a
                    Software team working on their project.
                  </p>
                </span>
              </li>
            </ul>
            <h3 className="semester-text">Spring{"\n"}2021</h3>
            <ul className="semester-list">
              <li>
                <span className="semester-bullet">
                  <p>Funding is acquired to allow the Executive Director to be paid as a full time position.</p>
                </span>
              </li>
              <li>
                <span className="semester-bullet">
                  <p>
                    Designers are added to Hardware Build Studio teams and brand designers to Software teams.
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>
    </>
  );
}
