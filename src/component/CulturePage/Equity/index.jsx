import React from 'react'
import './style.css'

const desktopContent = (
  <div className='container' id='equity-container'>
    <div className='vertical-div'>
      <span className='outline-equity'>UITY</span>
      <span style={{ color: '#A559EC' }} className='vertical'>
        EQUITY
      </span>
      <span className='outline-equity'>EQUITY</span>
    </div>

    <div className='text-div-equity'>
      <h2 className='culture-outline'>2.0</h2>
      <div className='culture-text-box'>
        <p className='culture-text'>
          Generate holds equity as a core part of its mission. As a learning
          community, we take action to make the community and culture fair to
          everyone. Members are encouraged to share their vision for the
          community as well as empowered to make change through surveying and
          engagement opportunities. Our engineers are also guaranteed inventor’s
          credit for projects they work on.
        </p>
      </div>
    </div>
  </div>
)

const mobileContent = (
  <div className='equity-container'>
    <h2 className='culture-outline'> 2.0 </h2>
    <div className='culture-div'>
      <span className='equity-outline'>UITY</span>
      <span style={{ color: '#A559EC' }} className='equity-outline'>
        EQUITY
      </span>
      <span className='equity-outline'>EQUITY</span>
    </div>
    <p className='culture-text'>
      Generate holds equity as a core part of its mission. As a learning
      community, we take action to make the community and culture fair to
      everyone. Members are encouraged to share their vision for the community
      as well as empowered to make change through surveying and engagement
      opportunities. Our engineers are also guaranteed inventor’s credit for
      projects they work on.
    </p>
  </div>
)

export default function Equity(props) {
  return props.disp ? mobileContent : desktopContent
}
