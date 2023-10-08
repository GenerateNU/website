import React, { useState } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Image from 'react-bootstrap/esm/Image'
import whyGenerateData from '../../../data/whyGenerateData'
import './style.css'

export default function WhyGenerateCarousel() {
  const [currentSection, setCurrentSection] = useState(0)

  return (
    <>
      <div className='why-gen-dsktop'>
        <div className='vh-100 vw-100 py-4 d-flex justify-content-center'>
          <div className='why-gen-row-width h-100'>
            <div className='fit-content mb-5'>
              <h5 className='mb-0 why-gen-goodies w-auto h-auto text-end'>
                more goodies
              </h5>
              <h1 className='why-gen-why-generate text-uppercase fit-content'>
                Why Generate?
              </h1>
            </div>
            <Row className='h-100'>
              <Col xs={6} className='pe-3 h-100'>
                <Image
                  src={whyGenerateData[currentSection].image}
                  className='why-gen-fit-image'
                />
                <p className='why-gen-text'>
                  {whyGenerateData[currentSection].text}
                </p>
              </Col>
              <Col xs={6} className='ps-5'>
                {whyGenerateData.map((d, index) => (
                  <div
                    className='mb-5'
                    onMouseOver={() => setCurrentSection(index)}
                  >
                    <h3
                      className='m-0 p-0 fit-content why-gen-section'
                      style={{
                        color: currentSection === index ? d.color : 'white'
                      }}
                    >
                      <span
                        className={
                          currentSection !== index ? 'd-none' : 'd-inline me-4'
                        }
                      >
                        &gt;
                      </span>
                      <span
                        className={`section-text text-nowrap ${
                          currentSection !== index ? 'ms-5 ps-2' : ''
                        }`}
                      >
                        {d.section}
                      </span>
                    </h3>
                  </div>
                ))}
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className='why-gen-mob'>
        <div className='bg-black text-white'>
          <div className='why-generate-header-mob'>
            <h5 className='why-gen-goodies-mob'>more goodies</h5>
            <h1 className='why-gen-why-generate-mob text-uppercase fit-content'>
              Why Generate ?
            </h1>
          </div>
        </div>
        <div className='why-generate-body-mob'>
          <Image
            src={whyGenerateData[currentSection].image}
            className='why-generate-img-mob border'
          />
          <div className='why-gen-text-mob'>
            {whyGenerateData[currentSection].text}
          </div>
          <div className='why-gen-carousel-mob d-flex flex-row flex-wrap'>
            {whyGenerateData.map((d, index) => (
              <div
                className='why-gen-carousel-item-mob'
                onMouseOver={() => setCurrentSection(index)}
              >
                <h3
                  className='m-0 p-0 fit-content'
                  style={{
                    color: currentSection === index ? d.color : 'white'
                  }}
                >
                  <span
                    className={`${currentSection === index ? 'underline' : ''}`}
                  >
                    {d.section}
                  </span>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
