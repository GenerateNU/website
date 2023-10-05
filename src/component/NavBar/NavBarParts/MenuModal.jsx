import React from 'react'
import { menuItemsLeft, menuItemsRight } from './MenuItems'
import { dotter } from './Dotter'
import Modal from 'react-bootstrap/Modal'
import * as constants from './Constants'
import { yellowrectify, newsletterify } from './Newsletter'
import Arrow from '../../../assets/images/projectspage/arrowbutton.svg'

const menuItemsMapper = (menuItems, top, left) => {
  return menuItems.map((item, index) => (
    <a
      href={item.href}
      className='header-font-style'
      style={{
        position: 'absolute',
        top: `${top(index)}%`,
        left: `${left}%`
      }}
    >
      {item.text}{' '}
    </a>
  ))
}

export const mobileModalContents = (
  <>
    <div
      className='h-line'
      style={{ top: `${constants.TOP_H_LINE}%`, width: '100%' }}
    />{' '}
    <div
      className='v-line'
      style={{ left: `${constants.MOBILE_LEFT_V_LINE}%`, height: '90%' }}
    />{' '}
    <div
      className='v-line'
      style={{ left: `${constants.MOBILE_RIGHT_V_LINE}%`, height: '90%' }}
    />{' '}
    <div
      className='h-line'
      style={{ top: `${constants.BOTTOM_H_LINE}%`, width: '100%' }}
    />{' '}
    <Modal.Header
      closeButton
      style={{
        fontSize: 'max(1.25vh,1.25vw)',
        position: 'absolute',
        top: `${constants.TOP_H_LINE / 2 - 1.75}%`,
        left: `${
          constants.MOBILE_RIGHT_V_LINE +
          (100 - constants.MOBILE_RIGHT_V_LINE) / 2 -
          1.75
        }%`,
        zIndex: 100
      }}
    />
    <Modal.Body className='overflow-hidden text-black'>
      <div
        className='menu-font-style'
        style={{
          position: 'absolute',
          top: `${constants.MENU_TEXT_TOP}%`,
          left: `${constants.MOBILE_MENU_TEXT_LEFT}%`
        }}
      >
        Menu{' '}
      </div>{' '}
      {menuItemsMapper(
        [...menuItemsLeft, ...menuItemsRight],
        (index) => constants.MENU_TEXT_TOP + 5 + 7.5 * (1 + index),
        constants.MOBILE_MENU_TEXT_LEFT
      )}{' '}
      <div style={{ display: 'flex' }}>
        {' '}
        {dotter(
          constants.MOBILE_N_DOTS,
          constants.BOTTOM_H_LINE - 5,
          constants.MOBILE_MENU_TEXT_LEFT + 5,
          constants.MOBILE_MENU_TEXT_LEFT - 2.5,
          82.5,
          4
        )}{' '}
      </div>{' '}
      {yellowrectify(
        constants.BOTTOM_H_LINE + 0.1,
        0,
        constants.MOBILE_LEFT_V_LINE,
        100 - constants.BOTTOM_H_LINE
      )}{' '}
      {/* TODO: Implement newsletter redirect */}{' '}
      {newsletterify(
        constants.BOTTOM_H_LINE + 0.1,
        constants.MOBILE_LEFT_V_LINE,
        constants.MOBILE_RIGHT_V_LINE - constants.MOBILE_LEFT_V_LINE,
        100 - constants.BOTTOM_H_LINE
      )}{' '}
      {yellowrectify(
        constants.BOTTOM_H_LINE + 0.1,
        constants.MOBILE_RIGHT_V_LINE,
        constants.MOBILE_RIGHT_V_LINE,
        100 - constants.BOTTOM_H_LINE
      )}{' '}
    </Modal.Body>{' '}
  </>
)

export const desktopModalContents = (
  <>
    <div
      className='v-line'
      style={{ left: `${constants.DESKTOP_LEFT_V_LINE}%`, height: '90%' }}
    />{' '}
    <div
      className='v-line'
      style={{
        top: `${constants.BOTTOM_H_LINE}%`,
        left: `${constants.DESKTOP_LEFT_V_LINE}%`,
        height: '90%'
      }}
    />{' '}
    <div
      className='v-line'
      style={{ left: `${constants.DESKTOP_RIGHT_V_LINE}%`, height: '90%' }}
    />{' '}
    <div
      className='v-line'
      style={{
        top: `${constants.BOTTOM_H_LINE}%`,
        left: `${constants.DESKTOP_RIGHT_V_LINE}%`,
        height: '90%'
      }}
    />{' '}
    <div
      className='h-line'
      style={{ top: `${constants.TOP_H_LINE}%`, width: '100%' }}
    />{' '}
    <div
      className='h-line'
      style={{
        top: `${constants.BOTTOM_H_LINE}%`,
        width: `${constants.DESKTOP_RIGHT_V_LINE}%`
      }}
    />
    <Modal.Header
      closeButton
      style={{
        fontSize: 'max(1.25vh,1.25vw)',
        position: 'absolute',
        top: `${constants.TOP_H_LINE / 2 - 1.25}%`,
        left: `${
          constants.DESKTOP_RIGHT_V_LINE +
          (100 - constants.DESKTOP_RIGHT_V_LINE) / 2 -
          1.25
        }%`,
        zIndex: 100
      }}
    />{' '}
    <Modal.Body className='overflow-hidden text-black'>
      <div
        className='menu-font-style'
        style={{
          position: 'absolute',
          top: `${constants.MENU_TEXT_TOP}%`,
          left: `${constants.DESKTOP_MENU_TEXT_LEFT}%`
        }}
      >
        Menu{' '}
      </div>{' '}
      {menuItemsMapper(
        menuItemsLeft,
        (index) => constants.MENU_TEXT_TOP + 25 + 12.5 * (1 + index),
        constants.DESKTOP_MENU_TEXT_LEFT
      )}{' '}
      {menuItemsMapper(
        menuItemsRight,
        (index) => constants.MENU_TEXT_TOP + 25 + 12.5 * (1 + index),
        constants.DESKTOP_MENU_TEXT_LEFT + 35
      )}{' '}
      <div
        style={{
          display: 'flex'
        }}
      >
        {dotter(
          constants.DESKTOP_N_DOTS,
          constants.BOTTOM_H_LINE + 2.5,
          constants.DESKTOP_MENU_TEXT_LEFT + 10,
          constants.DESKTOP_MENU_TEXT_LEFT - 5,
          40,
          3
        )}{' '}
        {dotter(
          constants.DESKTOP_N_DOTS,
          constants.BOTTOM_H_LINE + 2.5,
          constants.DESKTOP_MENU_TEXT_LEFT + 10,
          constants.DESKTOP_MENU_TEXT_LEFT + 53.75,
          40,
          3
        )}{' '}
      </div>{' '}
      {/* TODO: Implement newsletter redirect */}{' '}
      {newsletterify(
        constants.TOP_H_LINE,
        constants.DESKTOP_RIGHT_V_LINE,
        100 - constants.DESKTOP_RIGHT_V_LINE,
        constants.BOTTOM_H_LINE - constants.TOP_H_LINE + 0.2
      )}{' '}
      {/* TODO: Implement newsletter redirect */}{' '}
      {yellowrectify(
        constants.BOTTOM_H_LINE,
        constants.DESKTOP_RIGHT_V_LINE,
        100 - constants.DESKTOP_RIGHT_V_LINE,
        100 - constants.BOTTOM_H_LINE,
        <img src={Arrow} style={{ transform: 'rotate(90deg)' }} alt='Arrow' />
      )}{' '}
    </Modal.Body>{' '}
  </>
)
