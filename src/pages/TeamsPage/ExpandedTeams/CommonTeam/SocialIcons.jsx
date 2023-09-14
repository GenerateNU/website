import React from "react";

import { Row, Col } from "react-bootstrap";
import "./footerStyle.css";
import InstaIcon from "../../../../assets/images/socialMediaIcons/Insta.svg";
import LinkedInIcon from "../../../../assets/images/socialMediaIcons/Linkedin.svg";
import FbIcon from "../../../../assets/images/socialMediaIcons/Facebook.svg";
import YoutubeIcon from "../../../../assets/images/socialMediaIcons/Youtube.svg";
import MosaicIcon from "../../../../assets/images/socialMediaIcons/Mosaic.svg";
import NortheasternIcon from "../../../../assets/images/socialMediaIcons/Northeaster.svg";
import Sherm from "../../../../assets/images/socialMediaIcons/Sherm.svg";

export default function SocialIcons({mobile}) {

  return !mobile ? (
    <div className="social-icons-website">
      <div style={{ paddingBottom: 0 }}>
        <Col className="icon">
          <a href="https://www.google.com/">
            {" "}
            <img src={InstaIcon} height="30vw" width="30vw" alt="" />{" "}
          </a>{" "}
        </Col>{" "}
      </div>{" "}
      <div style={{ paddingBottom: 0 }} className="icon-columns">
        <Col className="icon">
          <a href="https://www.youtube.com/channel/UC2Y_rgZiPKPH0lSU1FyQJFw/featured">
            {" "}
            <img src={YoutubeIcon} height="30vw" width="30vw" alt="" />{" "}
          </a>{" "}
        </Col>{" "}
        <Col className="icon">
          <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
            {" "}
            <img src={NortheasternIcon} height="30vw" width="30vw" alt="" />
          </a>{" "}
        </Col>{" "}
      </div>{" "}
      <div style={{ paddingBottom: 0 }} className="icon-columns">
        <Col className="icon">
          <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
            {" "}
            <img src={LinkedInIcon} height="30vw" width="30vw" alt="" />
          </a>{" "}
        </Col>{" "}
        <Col className="icon">
          <a href="https://www.facebook.com/GenerateNU/">
            {" "}
            <img src={MosaicIcon} height="30vw" width="30vw" alt="" />{" "}
          </a>{" "}
        </Col>{" "}
      </div>{" "}
      <div style={{ paddingBottom: 0 }} className="icon-columns">
        <Col className="icon">
          <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
            {" "}
            <img src={FbIcon} height="30vw" width="30vw" alt="" />
          </a>{" "}
        </Col>{" "}
        <Col className="icon">
          <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
            {" "}
            <img src={Sherm} height="30vw" width="30vw" alt="" />
          </a>{" "}
        </Col>{" "}
      </div>{" "}
    </div>
  ) : (
    <div className="social-icons-mobile">
      <div style={{ paddingBottom: 0 }}>
        <Col className="icon">
          <a href="https://www.google.com/">
            {" "}
            <img src={InstaIcon} height="35vw" width="35vw" alt="" />{" "}
          </a>{" "}
        </Col>{" "}
      </div>{" "}
      <div style={{ paddingBottom: 0 }} className="icon-rows">
        <Col className="icon">
          <a href="https://www.youtube.com/channel/UC2Y_rgZiPKPH0lSU1FyQJFw/featured">
            {" "}
            <img src={YoutubeIcon} height="35vw" width="35vw" alt="" />{" "}
          </a>{" "}
        </Col>{" "}
        <Col className="icon">
          <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
            {" "}
            <img src={NortheasternIcon} height="35vw" width="35vw" alt="" />
          </a>{" "}
        </Col>{" "}
      </div>{" "}
      <div style={{ paddingBottom: 0 }} className="icon-rows">
        <Col className="icon">
          <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
            {" "}
            <img src={LinkedInIcon} height="35vw" width="35vw" alt="" />
          </a>{" "}
        </Col>{" "}
        <Col className="icon">
          <a href="https://www.facebook.com/GenerateNU/">
            {" "}
            <img src={MosaicIcon} height="35vw" width="35vw" alt="" />{" "}
          </a>{" "}
        </Col>{" "}
      </div>{" "}
      <div style={{ paddingBottom: 0 }} className="icon-rows">
        <Col className="icon">
          <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
            {" "}
            <img src={FbIcon} height="35vw" width="35vw" alt="" />
          </a>{" "}
        </Col>{" "}
        <Col className="icon">
          <a href="https://www.linkedin.com/company/generate-product-development/mycompany/">
            {" "}
            <img src={Sherm} height="35vw" width="35vw" alt="" />
          </a>{" "}
        </Col>{" "}
      </div>{" "}
    </div>
  );
}
