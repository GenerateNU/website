import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import Arrow from "../../assets/images/nextpage/arrow.svg";

export default function NextPage(props) {
    return (
      <div className="nextPage">
        <a href={props.url}>
          <button className="nextPageButton">
            <img src={Arrow} className={"nextPageArrow"}></img>
            <span className={"nextPageName"}>{props.pageName}</span>
            <img src={Arrow} className={"nextPageArrow"}></img>
          </button>
        </a>
      </div>
    );
}