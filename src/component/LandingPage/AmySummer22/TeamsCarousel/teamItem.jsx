import React from "react";
import "./style.css";
import { Row } from "react-bootstrap";
import ShadowedButton from "../../../ShadowedButton";

const TeamItem = ({
    teamName="",
    teamInfo="",
    circleImg=null,
}) => {
    return (
        <Row className="m-0 p-0 position-relative overflow-hidden vh-100 vw-100">
            <div className="h-100 vw-60 bg-success">
                {/* Circle thing goes here */}
            </div>
            <Row className="m-0 p-5 h-100 vw-40 bg-warning align-items-center">
                <div className="m-5 p-5">
                    <div className="team-name-style text-uppercase">
                        {teamName}
                    </div>
                    <div className="team-info-style pe-5 py-3">
                        {teamInfo}
                    </div>
                    <ShadowedButton text="join" fillColor="white" xPad="4rem" />
                </div>
            </Row>
        </Row>
    );
};

export default TeamItem;