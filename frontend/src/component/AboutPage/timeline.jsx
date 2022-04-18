import React from 'react'
import './timeline.css'
import TimelineImg from '../AboutPage/Timeline.png'

export default function timeline() {
  return (
      <>
      <div id='container'>
        <div className='timeline-bg-image'>
            <div class="containerbackground">
                Our Timeline
            </div>
            <img src={TimelineImg} alt="" height='80vh' width='70%'/>
            <div className='Spring2016'>
                <div>
                    <h1>&lt;</h1>
                </div>
                <div className='Spring2016-text'>
                    <p>Generate is founded by students Bailey Kane and Mina 
                    Iskarous, with the help of Ted Johnson, Assistant 
                    Program Manager of the Sherman Center, and Shashi 
                    Murthy, Director of the Sherman Center at the time.</p>
                </div>
            </div>
        </div>
      </div>
      </>
    
  )
}

