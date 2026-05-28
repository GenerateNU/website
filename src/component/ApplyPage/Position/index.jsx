import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ShadowedButton from '../../ShadowedButton'
import './style.css'
import applicationsByTeams from '../../../data/ApplyData/allApps'
import useWebsite from '../../../shared/useWebsite'
import NavBar from '../../NavBar'

export default function Position() {

  const isWebsite = useWebsite()
  const isBigScreen = !window.matchMedia('(max-device-width: 650px)').matches
  const mobile = !isBigScreen || !isWebsite

  const { categoryType, index } = useParams()
  const [position, ] = useState(
    applicationsByTeams[categoryType][index]
  )
  const [showText, setShowText] = useState('Share')

  const parseList = (stringList) => {
    if (stringList) {
      return stringList.split('.')
    } else {
      return []
    }
  }

  const copyShareLink = () => {
    console.log(window.location.href)
    navigator.clipboard.writeText(window.location.href)
    setShowText('Copied!')
  }

  const handleApply = () => {
    window.location.assign(position.applicationLink)
  }

  if (position) {
    return !mobile ? (
      <Container fluid className='position-relative p-0'>
        <Row className='vh-100 m-0'>
          {/* Left */}
          <Col xs={6} className='left-color h-100 p-0 pt-5 px-5'>
            <Row className='m-0 h-75'>
              <Col>
                <h1 className='position-title'>{position.positionTitle}</h1>
                <h1 className='position-title position-type'>
                  {position.categoryType}
                </h1>
              </Col>
            </Row>
            <Row className='m-0 h-25 align-items-center justify-content-center'>
              <Row className='m-0'>
                {(position.active && (
                  <ShadowedButton
                    fillColor='#FFBF3C'
                    text='apply now'
                    xPad='4rem'
                    className='me-5'
                    lnk={position.positionTitle}
                    onClick={handleApply}
                  />
                )) ||
                  (!position.active && (
                    <ShadowedButton
                      fillColor='white'
                      text='notify me'
                      xPad='4rem'
                      className='me-5'
                      onClick={() => console.log('not implemented')}
                    />
                  ))}

                <ShadowedButton
                  fillColor='white'
                  text={showText}
                  xPad='1.5rem'
                  className='ms-5'
                  onClick={copyShareLink}
                />
              </Row>
            </Row>
          </Col>

          {/* Right */}
          <Col
            xs={6}
            className='h-100 p-0 py-5 px-5 overflow-auto position-info'
          >
            {/* Link back to list of positions */}
            <a className='blue-text' href='/apply'>
              &lt; -- <u> positions</u>
            </a>

            {/* Position summary */}
            <p className='position-summary my-5'>{position.description}</p>

            {/* Position responsibilities */}
            {position.responsibilities && (
              <h3 className='py-3 fw-500'>What you’ll do</h3>
            )}
            <ul className='pb-0 mb-0'>
              {parseList(position.responsibilities).map((info, index) => (
                <li key={index} className='mb-4'>
                  {info}
                </li>
              ))}
            </ul>

            {/* Position qualifications */}
            {position.requirements && (
              <h3 className='pt-5 pb-3'>Requirements</h3>
            )}
            <ul>
              {parseList(position.requirements).map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>

            {/* Position timeline */}
            <Row className='py-4'>
              <Col className='date'>
                <h5>Duration</h5>
                <h4>
                  {position.startDate} to {position.endDate}
                </h4>
              </Col>
              <Col className='hours'>
                <h5>Weekly commitment</h5>
                <h4>{`Up to ${position.workCommitment} hours`}</h4>
              </Col>
            </Row>

            <div className='pt-4'></div>
            <h4 key={index} className='pb-3'>
              {position.remarks}
            </h4>
            <div className='pt-4'></div>

            {/* Link to information about position type */}
            <a className='blue-text' href='/about'>
              <u>learn more</u> -- &gt;
            </a>
          </Col>
        </Row>
      </Container>
    ) : (
      <div className='position-container'>
        <div className='header-container'>
          <div className='header-navbar'>
            <NavBar />
          </div>
          <div className='position-title'> {position.positionTitle}</div>
          <div className='position-team'> {position.categoryType} </div>
          <div className='header-button-container'>
            <button className='header-apply-button' onClick={handleApply}>
              {'apply now'}
            </button>
            <button className='header-share-button' onClick={copyShareLink}>
              {'share'}
            </button>
          </div>
        </div>
        <div className='info-container'>
          <a className='blue-text' href='/apply'>
            &lt; -- <u> positions</u>
          </a>
          <div className='info-section-text'> {position.description} </div>
          <div className='info-section-header'> What you'll do </div>
          <ul>
            {parseList(position.responsibilities).map((info, index) => (
              <li key={index} className='info-list-item'>
                {info}
              </li>
            ))}
          </ul>
          <div className='info-section-header'> Requirements </div>
          <ul>
            {parseList(position.requirements).map((info, index) => (
              <li key={index} className='info-list-item'>
                {info}
              </li>
            ))}
          </ul>
          <div className='bottom-container'>
            <div className='time-container'>
              <div className='time-section-header'> Duration </div>
              <div className='time-section-text'>
                {position.startDate} to {position.endDate}
              </div>
            </div>
            <div className='time-container'>
              <div className='time-section-header'> Weekly Commitment </div>
              <div className='time-section-text'>
                {`Up to ${position.workCommitment} hours`}
              </div>
            </div>
          </div>
          <div className='info-section-text'> {position.remarks} </div>
          <a className='blue-text' href='/about'>
            <u>learn more</u> -- &gt;
          </a>
        </div>
      </div>
    )
  } else {
    return null
  }
}
