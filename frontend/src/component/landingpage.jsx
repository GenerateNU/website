import React, { Component } from 'react'

import Shape from '../component/TeamsShape.png'
import Community from '../component/CommunitySection.JPG'
import Blue from '../component/LearnMoreButton_Blue.png'
import Yellow from '../component/LearnMoreButton_Yellow.png'
import Student from '../component/StudentTriangle.png'
import Client from '../component/ClientTriangle.png'

export class landingpage extends Component {
  render() {

    return (
        <div >


        <div>
            {/* first section */}
            <div className="ldp_GenerateText">
            GENERATE
            </div>
            <div className="ldp_GenerateText2">
            NORTHEASTERN'S PREMIER PRODUCT DEVELOPMENT LAB
            </div>
            <div className="ldp_margin">
            <div class="ldp_row">
                <div class="ldp_column">
                <img style={{ width: "80%", height: "800px" }} alt="GenerateImage1" src={"https://www.colorhexa.com/ffbf3c.png"} />
                <img style={{ marginTop: "9%", width: "80%", height: "650px" }} alt="GenerateImage2" src={"https://i.redd.it/0tbg92b1ziu41.jpg"} />

                </div>
                <div class="ldp_column">
                <img style={{ width: "140%", height: "1050px" }} alt="GenerateImage3" src={"https://i.redd.it/0tbg92b1ziu41.jpg"} />
                <div className="ldp_Generate">

                    <div className="ldp_GenerateText4">
                    WHAT IS GENERATE?
                    </div>
                    <div className="ldp_GenerateText3">
                    With 186+ diverse engineers, entrepreneurs, designers and more, Generate offers a comprehensive Product Design service. We’ll get your vision from start to finish.
                    We support Northeastern University ventures. From hardware/software engineering to branding development, we satisfy all of their product development needs.
                    <div style={{ paddingLeft: "65%", paddingTop: "5%" }}>

                        <a href='http://localhost:3000/'><img alt="YellowButton" src={Yellow} /></a></div>

                    </div>

                </div>


                </div>
            </div>
            </div>

            {/* divider */}
            <div>
            <img style={{ width: "100%", height: "400px" }} alt="DividerImage1" src={"https://i.redd.it/0tbg92b1ziu41.jpg"} />
            </div>

            {/* second section */}
            <div>
            <div className="ldp_ourTeam">

                <div className="ldp_ourTeamText">OUR TEAMS</div>


                <div class="ldp_wrapper" style={{ margin: "5%" }}>
                <div>
                    <div className="ldp_container">
                    <img style={{ height: "338px" }} alt="TeamShape1" src={Shape} />
                    <div className="ldp_overlay"></div>
                    </div>
                    <div className="ldp_TeamName">
                    HARDWARE
                    </div>
                    <br />
                    <br />
                    <div className="ldp_TeamDescription">
                    <p>Advantaging interdisciplinary engineering teams to meet out client's hardware needs</p>
                    </div>
                </div>
                <div>
                    <div className="ldp_container">
                    <img style={{ height: "338px" }} alt="TeamShape2" src={Shape} />
                    <div className="ldp_overlay"></div>
                    </div>
                    <div className="ldp_TeamName">
                    SOFTWARE
                    </div>
                    <br />
                    <br />
                    <div className="ldp_TeamDescription">
                    <p>Developing industry-leading software for client’s and Generate’s internal projects</p>
                    </div>
                </div>
                <div> <div className="ldp_container">
                    <img style={{ height: "338px" }} alt="TeamShape3" src={Shape} />
                    <div className="ldp_overlay"></div>
                </div>
                    <div className="ldp_TeamName">
                    MANAGEMENT
                    </div>
                    <br />
                    <br />
                    <div className="ldp_TeamDescription">
                    <p>Leading Generate through collaboration and innovating thinking</p>
                    </div>
                </div>
                <div> <div className="ldp_container">
                    <img style={{ height: "338px" }} alt="TeamShape4" src={Shape} />
                    <div className="ldp_overlay"></div>
                </div>
                    <div className="ldp_TeamName">
                    OUTREACH
                    </div>
                    <br />
                    <br />
                    <div className="ldp_TeamDescription">
                    <p>Fostering synergy between Generate’s clients and members</p>
                    </div>
                </div>
                <div> <div className="ldp_container">
                    <img style={{ height: "338px" }} alt="TeamShape5" src={Shape} />
                    <div className="overlay"></div>
                </div>
                    <div className="ldp_TeamName">
                    OPERATIONS
                    </div>
                    <br />
                    <br />
                    <div className="ldp_TeamDescription">
                    <p>Optimizing Generate’s business functions</p>
                    </div>
                </div>
                <div> <div className="ldp_container">
                    <img style={{ height: "338px" }} alt="TeamShape6" src={Shape} />
                    <div className="ldp_overlay"></div>
                </div>
                    <div className="ldp_TeamName">
                    COMMUNITY
                    </div>
                    <br />
                    <br />
                    <div className="ldp_TeamDescription">
                    <p>Pursuing unity for Generate’s clients and members</p>
                    </div>
                </div>
                </div>
            </div>


            {/* divider */}
            <div>
                <img style={{ width: "100%", height: "400px" }} alt="DividerImage2" src={"https://i.redd.it/0tbg92b1ziu41.jpg"} />
            </div>


            {/* third section */}
            <div className="ldp_ourCommunity">

                <div className="ldp_ourCommunityText">OUR COMMUNITY</div>
                <img style={{ float: "right", width: "50%", height: "1006px", marginTop: "115px", marginRight: "150px" }} alt="CommunityImage1" src={Community} />
                <div style={{ position: "absolute", }} className="ldp_ourCommunityWhite">
                <div className="ldp_font" style={{ textAlign: "left", fontSize: "40px", padding: "3%", lineHeight: "59px" }}>
                    Enabling and growing an inclusive, supportive, and lighthearted community that cultivates entrepreneurs and
                    leaders in Generate.
                </div>
                </div>

                <div className="ldp_ourCommunityText2">
                Our community is a strong central pillar of Generate’s culture, with a whole team dedicated to planning engaging semesterly events and activities for members including:
                retreats, our ‘all-hands’ meeting, and our end of semester showcase. We are constantly looking to grow inclusivity within our organization, with long term projects
                including re-evaluating our hiring process, and building resources for current and future leaders.
                <div style={{ paddingTop: "10%" }}>
                    <a href='http://localhost:3000/'>
                    <img alt="BlueButton" src={Blue}></img></a>
                </div>
                </div>


            </div>


            {/* divider */}
            <div>
                <img style={{ width: "100%", height: "400px" }} alt="DividerImage3" src={"https://i.redd.it/0tbg92b1ziu41.jpg"} />
            </div>

            {/* fourth section */}
            <div>
                <div className="ldp_font" style={{ textAlign: "center", fontSize: "40px", lineHeight: "60px" }}>
                Join a collaborative family of diverse <br /> engineers, inquisitive designers, <br /> savvy entrepreneurs and more!
                </div>

                <div className="ldp_applyText"> I <br />AM<br /> A</div>


                <div className="ldp_student">
                <img alt="StudentImage" src={Student} />
                </div>

                <div className="ldp_client">
                <img alt="ClientImage" src={Client} />
                </div>




            </div>

            </div>


        </div>
        </div>

    );
  }
}

export default landingpage