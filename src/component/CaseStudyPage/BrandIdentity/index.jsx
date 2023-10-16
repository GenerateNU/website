import React from 'react'
import { SvgIcon } from '@mui/material'
import { ImageContainer } from '../Team-Container'
import { ReactComponent as Rectangle } from '../Team-Container/Rectangle.svg'
import './style.css'
export default function BrandIdentity({ isDesktop, casestudy }) {
  return (
    <div style={{ paddingBottom: '10vw' }}>
      <div className='cs-bi-container'>
        <div className='cs-brandidentity-para-container'>
          <div className='cs-brandidentity-para-title'>
            {casestudy.brandIdentity.title.toUpperCase()}
          </div>
          <div
            className='cs-brandidentity-para-body'
            style={{
              marginRight: isDesktop ? '30vw' : '',
              fontSize: isDesktop ? '2vw' : '4vw'
            }}
          >
            {casestudy.brandIdentity.body}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            alignItems: 'center',
            marginRight: '10vw'
          }}
        >
          <div
            style={{
              width: '80vw',
              marginRight: 'auto',
              display: 'flex',
              marginLeft: '0px',
              paddingLeft: '0px'
            }}
          >
            <ImageContainer
              imageWithBGColor={casestudy.brandIdentity.image}
              isDesktop={isDesktop}
            />
          </div>
          <Palette colors={casestudy.palette} isDesktop={isDesktop} />
        </div>
      </div>
    </div>
  )
}

function Palette({ colors, isDesktop }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isDesktop ? 'column' : 'column',
        marginTop: isDesktop ? '' : '10vw'
      }}
    >
      <div
        className='palette-text-style'
        style={{
          marginLeft: isDesktop ? '' : '10px',
          fontSize: isDesktop ? '2vw' : '6vw'
        }}
      >
        Palette
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: isDesktop ? 'column' : 'row'
        }}
      >
        {colors.map((color) => (
          <div
            style={{
              display: 'flex',
              flexDirection: isDesktop ? 'row' : 'column',
              alignItems: 'center',
              marginLeft: isDesktop ? '' : '10px'
            }}
          >
            <SvgIcon
              component={Rectangle}
              inheritViewBox
              sx={{
                fontSize: isDesktop ? '8vw' : '18vw',
                color: color
              }}
            />
            <div
              className='color-text-style'
              style={{
                marginLeft: isDesktop ? '10px' : '',
                fontSize: isDesktop ? '2vw' : '4vw'
              }}
            >
              {color}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
