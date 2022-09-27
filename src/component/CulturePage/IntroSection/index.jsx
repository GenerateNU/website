import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./style.css";
import IntroImg1 from "../../../assets/images/culturepage/intro_photo_1.png";
import IntroImg2 from "../../../assets/images/culturepage/intro_photo_2.png";
import IntroImg3 from "../../../assets/images/culturepage/intro_photo_3.png";

export default class CulturePage extends React.Component {
  render() {
    return (
      <Container fluid className="vh-100 horizontal-scroll">
        <Row className="flex-nowrap">
          {
            <div classname="parent">
              <div className="position-relative vw-100 vh-100 py-4 px-5">
                <div className="bg-light p-3 mb-5 d-flex fit-content">
                  <span>gen logo</span>
                  ahhhh it's a nav bar help
                </div>
                <div className="w-50 pe-5 d-flex">
                  <div className="culture-quote-positioning">
                    <div className="our-culture-quote">
                      We make wicked projects and plan wicked events.
                    </div>
                  </div>
                </div>
                <h1 className="our-mission-header text-no-fill text-uppercase position-absolute start-0 bottom-0 ps-5 pb-4">
                  Our Culture
                </h1>
              </div>
              <div className="intro-images">
                <img src={IntroImg1} alt="" />
                <img src={IntroImg2} alt="" />
                <img src={IntroImg3} alt="" />
              </div>
            </div>
          }
        </Row>
      </Container>
    );
  }
}
