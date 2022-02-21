import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function teamscarousel() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows showStatus={false} showArrows={false} showThumbs={false} showIndicators={false}>
                <div>
                <div className="tc_container">
        {/* team font */}
       
       <div className="tc_team">
           TEAMS
       </div>

        {/* image */}
        <div className="tc_image">
        <img src="../images/AboutPageImages/Teams_Management.jpg" width="867" height="600"></img>

        </div>


        {/* management links */}
        <div className="tc_links_container">
            <div className="tc_management">
            Management
            </div>
            
            <div className="tc_links">
            Outreach
            </div>

            <div className="tc_links">
            Operations
            </div>
            
            <div className="tc_links">
            Software
            </div>

            <div className="tc_links">
            Hardware
            </div>

            <div className="tc_links">
            Community
            </div>
        </div>
        {/* management team text box */}
        <div className="tc_box">
            <div className="tc_text">
            The Management Team ensures alignment across our organization. 
            The team drives our teams to excel through collaboration and innovative thinking 
            - ensuring Generate is functioning at its peak. Our management team is responsible 
            for directing Generate’s yearly focus.
            </div>
        </div>

        {/* button */}
        <div className="tc_button">
            <img src="../images/AboutPageImages/teamButton.png" width="212.1" height="52.42"></img>
           
        </div>
        </div>
                </div>
                <div>
                    <img src="" />
                </div>
                <div>
                    <img src="" />
                </div>
            </Carousel>
        </div>
    );
}