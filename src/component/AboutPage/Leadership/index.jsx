import React from "react";
import Container from "react-bootstrap/Container";
import directorData from "../../../data/directorData";
import LeadershipCard from "./LeadershipComponenents/LeadershipCard/leadershipCard";
import './style.css';

export default function Leadership() {
  return (
    <>
      <div className="leadership-section dsktop bg-black">
        <div className="leadership-header">
          <div className="leadership-text">Leadership</div>
          <div className="meet-the-team-text">Meet the team</div>
        </div>
        <div className="cards-section">
          {directorData
            .map((dir) => {
              return <LeadershipCard director={dir} key={dir.title}/>;
            }).reverse()}
        </div>
      </div>
  
       
        

      {/* <Container
        fluid
        className="border ">
          <div className="leadership-header vh-25 ">
          <h3 className="leadership-heading">Leadership</h3>
          <h2 className="meet-the-team">Meet the team</h2>
          </div>
       
        <div className="vh-75 p-5 d-flex cards-display">
          {directorData
            .map((dir) => {
              return <LeadershipCard director={dir} key={dir.title} />;
            })
            .reverse()}
        </div>
       </Container> */}

      <Container
        fluid
        className="mob bg-black leadership-section "
      >
        <div className=" leadership-header no-top-padding">
          <div className="leadership-text">Leadership</div>
          <div className="meet-the-team-text">Meet the team</div>
        </div>
      <div className="vh-75 p-5 d-flex cards-display">
          {directorData
            .map((dir) => {
              return <LeadershipCard director={dir} key={dir.title} />;
            })}
        </div>
        </Container>

      
    </>
  );
}
