import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger'
import ShermLogo from '../../../assets/images/landingpage/affiliateorgintros/Sherman_Center_Logo.png'
import MosaicLogo from '../../../assets/images/landingpage/affiliateorgintros/Mosaic_Logo.png'
import ShermLogo1 from '../../../assets/images/landingpage/affiliateorgintros/Sherman_Center_Logo.png'
import Tooltip from 'react-bootstrap/esm/Tooltip'
import './style.css'

export default function History() {
  const renderTooltip = (type, props) => (
    <Tooltip id='button-tooltip' {...props}>
      <p className='mb-0 p-2 text-dark tooltip-text'>
        {(type === 'sherman' && (
          <>
            <span className='fw-bold'>The Sherman Center</span> is a program
            that enables Northeastern student entrepreneurship by providing
            education, tools and resources. The program is designed to arm
            engineering students with proper entrepreneurial skills to pitch and
            commercialize their ideas.
          </>
        )) || (
          <>
            <span className='fw-bold'>Mosaic</span> is a group of
            entrepreneurially-spirited people who share a passion for building
            new products.They allow the community to share experiences and
            exchange ideas Mosaic programs distinguish Northeastern University
            students as leaders in entrepreneurship and innovation.
          </>
        )}
      </p>
    </Tooltip>
  )

  return (
    <>
      {/* DESKTOP */}
      <Row className='dsktop vh-100 vw-100 parent-orgs-and-history'>
        <Col className='bg-black text-white left-text-style h-100 p-5'>
          <Row className=' vh-40 text-right mt-5 pb-5'>
            <h3 className='text-uppercase parent-orgs-style'>Parent orgs</h3>
          </Row>

          <Row className='vh-30 justify-content-end'>
            <Col xs={12}>
              <OverlayTrigger
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => renderTooltip('sherman', props)}
              >
                <Row className='m-0 mb-4 p-0 w-auto h-auto align-items-center justify-content-end'>
                  <Col
                    xs={8}
                    className='w-auto d-flex align-items-center justify-content-end p-0'
                  >
                    <h5 className='w-auto text-wrap'>
                      <a href='https://sherman.center.northeastern.edu/'>
                        <u>Sherman Center</u>
                      </a>
                    </h5>
                  </Col>
                  <Col xs={3} className='h-auto p-0 pe-2'>
                    <Image src={ShermLogo} fluid className='logo float-right' />
                  </Col>
                </Row>
              </OverlayTrigger>
              <OverlayTrigger
                placement='right'
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => renderTooltip('mosaic', props)}
              >
                <Row className='m-0 p-0 mt-5 w-auto h-auto align-items-center justify-content-end'>
                  <Col
                    xs={3}
                    className='w-auto d-flex align-items-center justify-content-end p-0'
                  >
                    <h5>
                      <a href='https://entrepreneurship.northeastern.edu/mosaic/'>
                        <u>Mosaic</u>
                      </a>
                    </h5>
                  </Col>
                  <Col xs={3} className='h-auto p-0 pe-2'>
                    <Image src={MosaicLogo} fluid className='logo' />
                  </Col>
                </Row>
              </OverlayTrigger>
            </Col>
          </Row>
        </Col>
        <Col className='bg-white h-100 p-5 pt-5 our-history'>
          <h3 className='vh-40 mt-5 pb-5 mb-0 text-uppercase text-black our-history-header'>
            Our History
          </h3>
          <p className='pe-5 me-5 our-history-text-style'>
            There was a hole in Northeastern University’s entrepreneurial
            ecosystem, and a lack of opportunities for student ventures to
            elicit support from product builders. To fix that, Generate was
            created to bridge the gap for students, and our journey began.
          </p>
        </Col>
      </Row>
      {/* Mobile */}
      <div className='mob'>
        <div className='parent-orgs bg-black'>
          <h3 className='parent-orgs-text text-center text-white text-uppercase'>
            Parent orgs
          </h3>
          <div className='d-flex flex-row text-white justify-content-start'>
            <OverlayTrigger
              placement='bottom'
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => renderTooltip('sherman', props)}
            >
              <div className='d-flex flex-column text-center w-100 justify-content-center'>
                <Image
                  src={ShermLogo1}
                  fluid
                  className='sherm-logo mt-0 ms-auto me-auto'
                />
                <h5 className='parent-org-name-text'>
                  <a href='https://sherman.center.northeastern.edu/'>
                    <div>Sherm</div>
                    <div>Center</div>
                  </a>
                </h5>
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement='bottom'
              delay={{ show: 250, hide: 400 }}
              overlay={(props) => renderTooltip('mosaic', props)}
            >
              <div className='d-flex flex-column text-center w-100 justify-content-center'>
                <Image
                  src={MosaicLogo}
                  fluid
                  className='mosaic-logo ms-auto me-auto'
                />
                <h5 className='parent-org-name-text'>
                  <a href='https://entrepreneurship.northeastern.edu/mosaic/'>
                    <u className=''>Mosaic</u>
                  </a>
                </h5>
              </div>
            </OverlayTrigger>
          </div>
        </div>
        <div className='history bg-white'>
          <h3 className='text-uppercase text-black our-history-header'>
            Our History
          </h3>
          <p className='our-history-text-style'>
            There was a hole in Northeastern University's entrepreneurial
            ecosystem, and a lack of opportunities for student ventures to
            elicit support from product builders. To fix that, Generate was
            created to bridge the gap for students, and our journey began.
          </p>
        </div>
      </div>
    </>
  )
}
