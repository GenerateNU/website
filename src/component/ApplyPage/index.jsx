import React from "react";
import Categories from "./Categories";
import Search from "./Search";
import NavBar from "../NavBar";
import GenerateLogo from "../../assets/images/landingpage/affiliateorgintros/Generate Logo_Nav.png";

export default function ApplyPage() {
    return (
        <>
            <div className="ap_container">
                <div className="ap_img"></div>
                <div className="navbar-style"><NavBar/></div>
                <div className="ap_text">
                    <a href="/"></a>
                    WE VIBE HARD AND MAKE THINGS
                </div>
                <div className="d-flex">
                    <div className="ap_text2 col-6 me-5 pe-5">

                        <div>
                            We’re always looking for passionate individuals who are ready to
                            learn and grow. We have opportunities that run broad and deep. If
                            you don’t see anything right now drop an email and we’ll let you
                            know when posiitons open up again.
                        </div>
                    </div>
                    <div className="col-4 h-100">
                        <div className="space-above-search"></div>
                        <Search/>
                    </div>
                </div>
                <Categories/>
            </div>
            <div className="ap_mobile">
                <div className="ap_img"/>
                <div className="navbar-style"><NavBar/></div>
                <div>
                    <p className="ap_text_mobile">
                        WE VIBE HARD AND
                    </p>
                    <p className="ap_text_mobile">
                        MAKE THINGS
                    </p>
                </div>

                <div className="ap_text2_mobile">
                    <div>
                        We’re always looking for passionate individuals who are ready to
                        learn and grow. We have opportunities that run broad and deep. If
                        you don’t see anything right now drop an email and we’ll let you
                        know when positions open up again.
                    </div>
                </div>
                <div className="search-bar-width">
                    <Search/>
                </div>
                <Categories/>
            </div>
        </>
    );
}
