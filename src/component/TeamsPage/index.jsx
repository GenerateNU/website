import React from "react";
import './style.css';
import teamsDataV2 from '../../data/teamDataV2';
import TeamCard from './TeamCard'
//import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import NavBar from "../NavBar"
import Footer from "../VerticalFooter"
import NextPage from "../NextPage"
import DesktopMobileScrollAndBackgroundHandler from "../DesktopMobileHandler";

export default class TeamsPage extends React.Component {
  render() {
    const children = [
      <div
        class="vh-100 bg-white container-fluid"
        tab-index="0">
        <Row className="flex-nowrap">
          <div className="teams-navbar">
            <NavBar />
          </div>
          {
            teamsDataV2.map(team => {
              return <TeamCard {...{ color: team.color, name: team.name, image: team.largePic }} />
            })
          }
          <Footer />
          <NextPage pageName="People" url="/about" />
        </Row>
      </div>
    ]
    return (
        <DesktopMobileScrollAndBackgroundHandler
          children={children}
          desktopBGColor={"white"}
          mobileBGColor={"black"}
        />
    );
  }
};