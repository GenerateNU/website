import React from "react";
import "./style.css";
import { Carousel, CarouselItem } from "react-bootstrap";
import TeamItem from "./teamItem";

const teamData = [
    {
        teamName: "Management",
        teamInfo: "The Management Team ensures alignment across our organization. The team drives our teams to excel through collaboration and innovative thinking - ensuring Generate is functioning at its peak. Our management team is responsible for directing Generate’s yearly focus.",
        circleImg: null,
    }
    {
        teamName: "Operations",
        teamInfo: "Operations optimizes our business functions: ensuring short and long term efficiency. We  works together to adopt principles of organization, communication, and process improvement across Generate to produce tangible benefit for all present and future members across our organization.",
        circleImg: null,
    }
    {
        teamName: "Software",
        teamInfo: "Our Software Build Studio develops industry-leading software for client’s and Generate’s internal projects. Our  teams work directly with clients to define a scope of work, guiding the creation and iteration of solution prototypes before handing off a refined product to our clients.",
        circleImg: null,
    }
    {
        teamName: "Hardware",
        teamInfo: "From mechanical systems to electrical development, we help entrepreneurs by overcoming technical hurdles in development. All while providing an educational experience for the engineers and designers of Generate. Our teams navigate the development cycle to iterate innovative solutions.",
        circleImg: null,
    }
    {
        teamName: "Community",
        teamInfo: "The Generate Community engages and builds morale within Generate members and alumni through events. The team enables current and future Generate leaders to grow and ensures that Generate continues to be a more diverse and equitable organization.",
        circleImg: null,
    }
    {
        teamName: "Outreach",
        teamInfo: "The Outreach Team is the face of Generate - promoting our members' clients through facilitating all media and branding content. The Outreach Team is responsible for recruiting both members and clients, guiding the direction of the organization.",
        circleImg: null,
    }
];

const TeamsCarousel = () => {
    return (
        <Row className="m-0 p-0 position-relative overflow-hidden vh-100 vw-100">
            <div className="h-100 vw-60 bg-success">

            </div>
            <Row className="m-0 p-5 h-100 vw-40 bg-warning align-items-center">
                <div className="m-5 p-5">
                    <div className="team-name-style">
                        Management
                    </div>
                    <div className="team-info-style pe-5 py-3">
                        The Management Team ensures alignment across our organization. The team drives our teams to excel through collaboration and innovative thinking - ensuring Generate is functioning at its peak. Our management team is responsible for directing Generate’s yearly focus.
                    </div>
                    <ShadowedButton text="join" fillColor="white" xPad="4rem" />
                </div>
            </Row>
        </Row>
    );
};

export default TeamsCarousel;