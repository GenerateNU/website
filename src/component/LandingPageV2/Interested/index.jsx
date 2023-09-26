import './responsive-style.css';
import React from 'react';
import leftcarrot from '../../LandingPageV2/Interested/chevron.png';

const Interested = (...props) => {
  return (
    <div className='bg-white interestedcontainer'>
      <div className='interestedText'>Interested</div>
      <div className='interestedflexbox'>
        <div className='interestedJoinNowBox'>
          <a href='/apply' className='joinCommunitytext'>
            join us
          </a>
        </div>
        <div className='questionMarkContainer'>
          <img style={{ width: '3vh' }} src={leftcarrot} />
          <div className='sentenceText'>
            Join a community that shares the same goal - turning ideas into
            reality
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interested;
