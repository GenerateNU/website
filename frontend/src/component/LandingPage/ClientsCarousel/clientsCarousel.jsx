import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import RootedLiving from '../../assets/images/Client_RootedLiving.jpg';
import Phoenix from '../../assets/images/Client_Phoenix.jpg';
import Clickitz from '../../assets/images/Client_Clickitz.jpg';
import HapticPack from '../../assets/images/Client_HapticPack.jpg';
import Solon from '../../assets/images/Client_Solon.jpg';
import ShowNXT from '../../assets/images/Client_ShowNXT.jpg';
import ShortFall from '../../assets/images/Client_ShortFall.jpg';
import './clientsCarousel.css';

// npm install react-responsive-carousel --save
export default function ClientsCarousel() {
    return (
        <Carousel infiniteLoop useKeyboardArrows showStatus={false} showArrows={false} showThumbs={false} showIndicators={false}>
            {/* FIRST SLIDE */}
            <div className="cl_container bg-primary">
                {/* team font */}
                <div className="tc_team">
                    CLIENTS
                </div>
                {/* image */}
                <div>
                    <img className="tc_image" src={RootedLiving}></img>
                </div>
                {/* client arrows */}
                <div>
                    <img className="cl_arrowup" src="../images/LandingPageImages/clientArrow.png"></img>
                </div>
                <div>
                    <img className="cl_arrowdown" src="../images/LandingPageImages/clientArrow.png"></img>
                </div>
                {/* client text box */}
                <div className="cl_box">
                    <div className="cl_rooted_text"> 
                        ROOTED <br></br>LIVING
                    </div>
                    <div className="cl_text">
                        Eco-friendly, plant-based snacks that allow you to shop, snack, and support your values.
                    </div>
                </div>
                {/* button */}
                <div>
                    <img className="cl_button" src="../images/LandingPageImages/clientButton.png"></img>
                </div>
            </div>                
            
            {/* SECOND SLIDE */}
            <div>
                <div className="tc_container2">
                {/* team font */}
    
                <div className="tc_team">
                    CLIENTS
                </div>
                {/* image */}
                <div>
                    <img className="tc_image" src={Phoenix}></img>
                </div>
                {/* client arrows */}
                <div>
                    <img className="cl_arrowup" src="../images/LandingPageImages/clientArrow.png"></img>
                </div>
                <div>
                    <img className="cl_arrowdown" src="../images/LandingPageImages/clientArrow.png"></img>
                </div>
                {/* client text box */}
                <div className="cl_box">
                    <div className="cl_rooted_text"> 
                        PHOENIX
                        </div>
                        <div className="cl_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim morbi et egestas purus urna eget.
                            </div>
                    </div>
                </div>
            </div>

            {/* THIRD SLIDE */}
            <div>
                <div className="tc_container2">
                    {/* team font */}
                    <div className="tc_team">
                        CLIENTS
                    </div>
                    {/* image */}
                    <div>
                        <img className="tc_image" src={Clickitz}></img>
                    </div>
                    {/* client arrows */}
                    <div>
                        <img className="cl_arrowup" src="../images/LandingPageImages/clientArrow.png"></img>
                    </div>
                    <div>
                        <img className="cl_arrowdown" src="../images/LandingPageImages/clientArrow.png"></img>
                    </div>
                    {/* client text box */}
                    <div className="cl_box">
                        <div className="cl_rooted_text"> 
                            CLICKITZ
                        </div>
                        <div className="cl_text">
                            Fostering children’s passion for making through modular playhouse toys.
                        </div>
                    </div>
                    {/* button */}
                    <div>
                        <img className="cl_button" src="../images/LandingPageImages/clientButton.png"></img>
                    </div>
                </div>
            </div>

            {/* FOURTH SLIDE */}
            <div>
                <div className="tc_container2">
                    {/* team font */}
                    <div className="tc_team">
                        CLIENTS
                    </div>
                    {/* image */}
                    <div>
                        <img className="tc_image" src={HapticPack}></img>
                    </div>
                    {/* client arrows */}
                    <div>
                        <img className="cl_arrowup" src="../images/LandingPageImages/clientArrow.png"></img>
                    </div>
                    <div>
                        <img className="cl_arrowdown" src="../images/LandingPageImages/clientArrow.png"></img>
                    </div>
                    {/* client text box */}
                    <div className="cl_box">
                        <div className="cl_rooted_text"> 
                            HAPTIC<br></br>PACK
                        </div>
                        <div className="cl_text">
                            Bringing VR gaming experiences closer to reality through haptic feedback.
                        </div>
                    </div>
                    {/* button */}
                    <div>
                        <img className="cl_button" src="../images/LandingPageImages/clientButton.png"></img>
                    </div>
                </div>
            </div>
            
            {/* FIFTH SLIDE */}
            <div>
                <div className="tc_container2">
                    {/* team font */}
                    <div className="tc_team">
                        CLIENTS
                    </div>
                    {/* image */}
                    <div>
                        <img className="tc_image" src={Solon}></img>
                    </div>
                    {/* client arrows */}
                    <div>
                        <img className="cl_arrowup" src="../images/LandingPageImages/clientArrow.png"></img>
                    </div>
                    <div>
                        <img className="cl_arrowdown" src="../images/LandingPageImages/clientArrow.png"></img>
                    </div>
                    {/* client text box */}
                    <div className="cl_box">
                        <div className="cl_rooted_text"> 
                            SOLON
                        </div>
                        <div className="cl_text">
                        Physical Cryptocurrency wallets for communities with unstable currencies.
                            </div>
                    </div>
                    {/* button */}
                    <div>
                        <img className="cl_button" src="../images/LandingPageImages/clientButton.png"></img>
                    </div>
                </div>
            </div>
            
            {/* SIXTH SLIDE */}
            <div>
                <div className="tc_container2">
                    {/* team font */}
                    <div className="tc_team">
                        CLIENTS
                    </div>
                    {/* image */}
                    <div>
                        <img className="tc_image" src={ShowNXT}></img>
                    </div>
                    {/* client arrows */}
                    <div>
                        <img className="cl_arrowup" src="../images/LandingPageImages/clientArrow.png"></img>
                    </div>
                    <div>
                        <img className="cl_arrowdown" src="../images/LandingPageImages/clientArrow.png"></img>
                    </div>
                    {/* client text box */}
                    <div className="cl_box">
                        <div className="cl_rooted_text"> 
                            SHOW <br></br>NXT
                        </div>
                        <div className="cl_text">
                            Collegiate sport recruiting social media app turning passion into opportunity.
                        </div>
                    </div>
                    {/* button */}
                    <div>
                        <img className="cl_button" src="../images/LandingPageImages/clientButton.png"></img>
                    </div>
                </div>
            </div>
                
            {/* SEVENTH SLIDE */}
            <div>
                <div className="tc_container2">
                    {/* team font */}
                    <div className="tc_team">
                        CLIENTS
                    </div>
                    {/* image */}
                    <div>
                        <img className="tc_image" src={ShortFall}></img>
                    </div>
                    {/* client arrows */}
                    <div>
                        <img className="cl_arrowup" src="../images/LandingPageImages/clientArrow.png"></img>
                    </div>
                    <div>
                        <img className="cl_arrowdown" src="../images/LandingPageImages/clientArrow.png"></img>
                    </div>
                    {/* client text box */}
                    <div className="cl_box">
                        <div className="cl_rooted_text"> 
                            SHORT <br></br>FALL
                        </div>
                        <div className="cl_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim morbi et egestas purus urna eget.
                        </div>
                    </div>
                </div>
            </div>
            
        </Carousel>
    );
}