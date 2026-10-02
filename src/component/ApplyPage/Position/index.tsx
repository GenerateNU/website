import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';

import NavBar from '@/component/NavBar';
import ShadowedButton from '@/component/ShadowedButton';

import './style.css';
import applicationsByTeams from '@/data/ApplyData/allApps';
import type { Position as PositionData } from '@/data/ApplyData/types';
import useWebsite from '@/shared/useWebsite';

type ApplicationGroup = keyof typeof applicationsByTeams;

type PositionViewProps = {
  position: PositionData;
  showText: string;
  onApply: () => void;
  onShare: () => void;
  routeIndex?: string;
};

const isApplicationGroup = (value: string | undefined): value is ApplicationGroup =>
  value !== undefined && Object.hasOwn(applicationsByTeams, value);

const parseList = (stringList: string) => {
  if (stringList) {
    return stringList.split('.');
  } else {
    return [];
  }
};

function DesktopPositionSummary({ position, showText, onApply, onShare }: PositionViewProps) {
  return (
    <Col xs={6} className="left-color h-100 p-0 pt-5 px-5">
      <Row className="m-0 h-75">
        <Col>
          <h1 className="position-title">{position.positionTitle}</h1>
          <h1 className="position-title position-type">{position.categoryType}</h1>
        </Col>
      </Row>
      <Row className="m-0 h-25 align-items-center justify-content-center">
        <Row className="m-0">
          {(position.active && (
            <ShadowedButton
              fillColor="#FFBF3C"
              text="apply now"
              xPad="4rem"
              className="me-5"
              lnk={position.positionTitle}
              onClick={onApply}
            />
          )) ||
            (!position.active && (
              <ShadowedButton
                fillColor="white"
                text="notify me"
                xPad="4rem"
                className="me-5"
                onClick={() => undefined}
              />
            ))}

          <ShadowedButton fillColor="white" text={showText} xPad="1.5rem" className="ms-5" onClick={onShare} />
        </Row>
      </Row>
    </Col>
  );
}

function DesktopPositionDetails({ position, routeIndex }: PositionViewProps) {
  return (
    <Col xs={6} className="h-100 p-0 py-5 px-5 overflow-auto position-info">
      <a className="blue-text" href="/apply">
        &lt; -- <u> positions</u>
      </a>

      <p className="position-summary my-5">{position.description}</p>

      {position.responsibilities && <h3 className="py-3 fw-500">What you’ll do</h3>}
      <ul className="pb-0 mb-0">
        {parseList(position.responsibilities).map((info, itemIndex) => (
          <li key={itemIndex} className="mb-4">
            {info}
          </li>
        ))}
      </ul>

      {position.requirements && <h3 className="pt-5 pb-3">Requirements</h3>}
      <ul>
        {parseList(position.requirements).map((info, itemIndex) => (
          <li key={itemIndex}>{info}</li>
        ))}
      </ul>

      <Row className="py-4">
        <Col className="date">
          <h5>Duration</h5>
          <h4>
            {position.startDate} to {position.endDate}
          </h4>
        </Col>
        <Col className="hours">
          <h5>Weekly commitment</h5>
          <h4>{`Up to ${position.workCommitment} hours`}</h4>
        </Col>
      </Row>

      <div className="pt-4"></div>
      <h4 key={routeIndex} className="pb-3">
        {position.remarks}
      </h4>
      <div className="pt-4"></div>

      <a className="blue-text" href="/about">
        <u>learn more</u> -- &gt;
      </a>
    </Col>
  );
}

function DesktopPosition(props: PositionViewProps) {
  return (
    <Container fluid className="position-relative p-0">
      <Row className="vh-100 m-0">
        <DesktopPositionSummary {...props} />

        <DesktopPositionDetails {...props} />
      </Row>
    </Container>
  );
}

function MobilePosition({ position, onApply, onShare }: PositionViewProps) {
  return (
    <div className="position-container">
      <div className="header-container">
        <div className="header-navbar">
          <NavBar />
        </div>
        <div className="position-title"> {position.positionTitle}</div>
        <div className="position-team"> {position.categoryType} </div>
        <div className="header-button-container">
          <button className="header-apply-button" onClick={onApply}>
            {'apply now'}
          </button>
          <button className="header-share-button" onClick={onShare}>
            {'share'}
          </button>
        </div>
      </div>
      <div className="info-container">
        <a className="blue-text" href="/apply">
          &lt; -- <u> positions</u>
        </a>
        <div className="info-section-text"> {position.description} </div>
        <div className="info-section-header"> What you'll do </div>
        <ul>
          {parseList(position.responsibilities).map((info, itemIndex) => (
            <li key={itemIndex} className="info-list-item">
              {info}
            </li>
          ))}
        </ul>
        <div className="info-section-header"> Requirements </div>
        <ul>
          {parseList(position.requirements).map((info, itemIndex) => (
            <li key={itemIndex} className="info-list-item">
              {info}
            </li>
          ))}
        </ul>
        <div className="bottom-container">
          <div className="time-container">
            <div className="time-section-header"> Duration </div>
            <div className="time-section-text">
              {position.startDate} to {position.endDate}
            </div>
          </div>
          <div className="time-container">
            <div className="time-section-header"> Weekly Commitment </div>
            <div className="time-section-text">{`Up to ${position.workCommitment} hours`}</div>
          </div>
        </div>
        <div className="info-section-text"> {position.remarks} </div>
        <a className="blue-text" href="/about">
          <u>learn more</u> -- &gt;
        </a>
      </div>
    </div>
  );
}

export default function Position() {
  const isWebsite = useWebsite();
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches;
  const mobile = !isBigScreen || !isWebsite;

  const { categoryType, index } = useParams();

  const [position] = useState(
    isApplicationGroup(categoryType) ? applicationsByTeams[categoryType][Number(index)] : undefined
  );

  const [showText, setShowText] = useState('Share');

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => setShowText('Copied!'),
      () => setShowText('Copy failed')
    );
  };

  const handleApply = () => {
    if (position) {
      window.location.assign(position.applicationLink);
    }
  };

  if (position) {
    return !mobile ? (
      <DesktopPosition
        position={position}
        showText={showText}
        onApply={handleApply}
        onShare={copyShareLink}
        routeIndex={index}
      />
    ) : (
      <MobilePosition position={position} showText={showText} onApply={handleApply} onShare={copyShareLink} />
    );
  } else {
    return null;
  }
}
