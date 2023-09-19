import React from "react";

import { Col, Row } from "react-bootstrap";
import "./footerStyle.css";

import { SocialIcon, socialIcons } from "../../../../component/SocialIcon";

export default function SocialIcons({mobile}) {

  return !mobile ? (
    <div className="social-icons-website">
      {socialIcons.map((row, index) => (
            <Col key={index}>
              {row.map((icon, index) => (
                <>
                  <SocialIcon
                    key={index}
                    href={icon.href}
                    imgSrc={icon.imgSrc}
                  />
                </>
              ))}
            </Col>))}
    </div>
  ) : (
    <div className="social-icons-mobile">
       {socialIcons.map((row, index) => (
            <Row key={index}>
              {row.map((icon, index) => (
                <>
                  <SocialIcon
                    key={index}
                    href={icon.href}
                    imgSrc={icon.imgSrc}
                  />
                </>
              ))}
            </Row>))}
    </div>
  );
}
