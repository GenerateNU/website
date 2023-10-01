import React from 'react'
import './style.css'

const desktopContent = (
  <div className='container'>
    <div className='vertical-div'>
      <span className='outline-inclusion'>SION</span>
      <span style={{ color: '#FFBF3C' }} className='outline-inclusion'>
        INCLUSION
      </span>
      <span className='outline-incluion'>INCLUSION</span>
    </div>

    <div className='text-div-inclusion'>
      <h2 className='culture-outline'>3.0</h2>
      <div className='culture-text-box'>
        <p className='culture-text'>
          Inclusion is a key part of what Generate stands for. We recognize that
          its a continuous process to improve our organization and are committed
          to making a positive impact. Through work with OPEN, OUEC, and other
          Northeastern offices, we strive to provide a physically, emotionally,
          and intellectually inclusive community. Our practices consistently
          change as we stove to improve the experience for each of our members
          and anyone who interacts with our community. Generate holds equity as
          a core part of its mission. As a learning community, we take action to
          make the community and culture fair to everyone. Members are
          encouraged to share their vision for the community as well as
          empowered to make change through surveying and engagement
          opportunities. Our engineers are also guaranteed inventor’s credit for
          projects they work on.
        </p>
      </div>
    </div>
  </div>
)

const mobileContent = (
  <div className='inclusion-container'>
    <h2 className='culture-outline'> 3.0 </h2>
    <div className='culture-div'>
      <span style={{ color: '#FFBF3C' }} className='inclusion-outline'>
        INCLUSION
      </span>
      <span className='inclusion-outline'>INCLUSION</span>
    </div>
    <p className='culture-text'>
      Inclusion is a key part of what Generate stands for. We recognize that its
      a continuous process to improve our organization and are committed to
      making a positive impact. Through work with OPEN, OUEC, and other
      Northeastern offices, we strive to provide a physically, emotionally, and
      intellectually inclusive community. Our practices consistently change as
      we stove to improve the experience for each of our members and anyone who
      interacts with our community. Generate holds equity as a core part of its
      mission. As a learning community, we take action to make the community and
      culture fair to everyone. Members are encouraged to share their vision for
      the community as well as empowered to make change through surveying and
      engagement opportunities. Our engineers are also guaranteed inventor’s
      credit for projects they work on.
    </p>
  </div>
)

export default function Inclusion(props) {
  return props.disp ? mobileContent : desktopContent
}
