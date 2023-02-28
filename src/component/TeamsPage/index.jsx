import React from "react";
import './style.css';
import teamsDataV2 from '../../data/teamDataV2';
import TeamCard from './TeamCard'
//import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import NavBar from "../NavBar"
import Footer from "../VerticalFooter"
import NextPage from "../NextPage"


export default class TeamsPage extends React.Component {
  render() {
    return (
    <div
    class="vh-100 horizontal-scroll bg-white container-fluid"
    tab-index="0">
        <Row className="flex-nowrap">
          <div className="teams-navbar">
            <NavBar/>
          </div>
          {
                    teamsDataV2.map(team => {
                       return <TeamCard {...team}/> 
                    })
                  }
            <Footer />
            <NextPage pageName="People" url="/about"/>
        </Row>
      </div>
    );
  }
};