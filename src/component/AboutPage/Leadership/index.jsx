import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import directorData from "../../../data/directorData";
import LeadershipCard from "./leadershipCard";

export default function Leadership() {
  return (
    <Container fluid className="bg-black vh-100 vw-100 position-relative">
      <Row className="vh-25 p-5">
        <h3 className="leadership-heading">Leadership</h3>
        <h2 className="meet-the-team">Meet the team</h2>
      </Row>
      <div className="vh-75 p-5 d-flex cards-display">
        {directorData
          .map((dir) => {
            return <LeadershipCard director={dir} key={dir.title} />;
          })
          .reverse()}
      </div>
    </Container>
  );
}
