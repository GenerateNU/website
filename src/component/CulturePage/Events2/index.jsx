import React from 'react'
import './style.css'
import CelebrateRepresent from '../Events2/CelebrateRepresent.png'

const desktopContent = (
  <>
    <div class='col event-col'>
      <div class='shiftLeft'>
        <p className='text-uppercase moral-budget-title'>morale&nbsp;budget</p>
        <p className='t-4 r-3 l-5 moral-budget-text'>
          Our engagement team empowers members every semester by giving them a
          designated budget to spend together as teammates. What you choose to
          do with that budget is up to you, but you can bet itll be a good time!
          Teams go ax throwing, bowling, escape-room-ing, or anything else they
          can think of!
        </p>
      </div>
    </div>

    <div class='col ps-5 pe-5 inclined-img-container'>
      <img className='inclined-image' src={CelebrateRepresent} alt='' />
    </div>

    <div class='col event-col'>
      <div class='shiftleft3'>
        <p className='text-uppercase orientation-title'>orientation</p>
        <p className='orientation-text'>
          We kick off each semester by packing into the Sherman Center and
          getting to know each other. Youll hear introductions and updates from
          the management team, and learn a little bit about the team. After
          that, we break out for an evening of activities, arts + crafts, games,
          music, and food!
        </p>
      </div>
    </div>
  </>
)

const mobileContent = (
  <div className='events-2-container'>
    <div className='events-2-section-header-top'> represent </div>
    <div className='events-2-section-header'> orientation </div>
    <p className='events-2-text'>
      We kick off each semester by packing into the Sherman Center and getting
      to know each other. Youll hear introductions and updates from the
      management team, and learn a little bit about the team. After that, we
      break out for an evening of activities, arts + crafts, games, music, and
      food!
    </p>
    <div className='events-2-section-header'> all-hands </div>
    <p className='events-2-text'>
      Halfway through the semester, hardware and software project teams set up
      demonstrations in the Sherman Center to unveil the work they’ve
      accomplished so far. We explore in-progress apps, gather user-testing
      data, play with hardware projects, and hang out with people from across
      the org in a fun, science-fair-esque format.
    </p>
    <div className='events-2-section-header'>showcase</div>
    <p className='events-2-text'>
      Every semester ends with our culminating event: Showcase. We get all
      fancied-up and celebrate the semesters' accomplishments with our
      teammates, clients, friends, families, professors and peers. Completed
      projects are shown off in all their glory, delicious food is catered, and
      heartfelt goodbyes are shared before the long generate-less vacation.
    </p>
  </div>
)

export default function Events2(props) {
  return props.disp ? mobileContent : desktopContent
}
