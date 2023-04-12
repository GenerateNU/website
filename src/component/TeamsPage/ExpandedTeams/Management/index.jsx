import React from "react";
import "./style.css"
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row"

const Management = () => {
    return (
        <Col>
            <Row>
                <div className="paragraph-title">what we do</div>
                <div className="paragraph-text">
                    Our management team is the driving force behind Generate, empowering each
                    member to grow and build innovative products. They work directly with members and clients
                    to support their growth and the team's vision. They build our professional image and position
                    the organization strategically within the Northeastern ecosystem, bridging our internal operations with
                    the larger community.
                </div>
                <div>
                    <img></img>
                </div>
            </Row>
            <Row>
                <div className="paragraph-title">how we work</div>
                <div className="paragraph-text">
                   Generate is entirely student-led. Our management team offers a unique opportunity for students
                   to gain leadership experience in a fast-paced, innovative culture. The team is united through
                   the yearly vision set by the executive director and builds initiatives around those goals. 
                   Each member leaves their own mark on Generate, continuously improving for the future.
                </div>
                <div>
                    <img></img>
                </div>
            </Row>

        </Col>
    )
}