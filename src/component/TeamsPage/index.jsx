import React from "react";
import './style.css';
import teamsDataV2 from '../../data/teamDataV2';
//import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Column from "react-bootstrap/esm/Col";

export default class TeamsPage extends React.Component {
  render() {
    return (
    <div
    class="vh-100 horizontal-scroll bg-white container-fluid"
    tab-index="0">
        Teams WIP
        <Row className="flex-nowrap">
        {
                    teamsDataV2.map(team => {
                        return (
                        <div className="PH">
                            {team.team}
                        </div>
                        )
                    }).reverse()
                }
        </Row>
      </div>
    );
  }
};